# Qualitative Review: cpu0x00/Ghost

## Review Basis

- **Repository and commit:** `cpu0x00/Ghost` at `bf67313c72d1df48117daf4aeca604e83a570280`, matching the reference commit `bf67313c`.
- **Authority order:** checked-out source is authoritative; deterministic validation and comparison metrics establish measurable properties; the public DeepWiki reference is a comparator, not ground truth.
- **Local result:** 20 English pages, 67,842 visible characters, 37 Mermaid diagrams, zero non-Mermaid code blocks, and no invalid source paths.
- **Reference result:** 16 pages, 137,792 visible characters, 83 Mermaid diagrams, 34 non-Mermaid code blocks, and no invalid source paths.
- **Validation:** local output passed with zero errors and 67 soft warnings. There were no translation fallbacks or degraded jobs.
- **Timing caveat:** the recorded `53,712` seconds total and `51,550` seconds in the writer stage include an overnight interruption and later recovery. They must not be used as evidence about generation throughput, latency, or concurrency efficiency. The meaningful runtime facts are successful terminal publication, effective concurrency `3`, 16 accepted writer jobs, 17 writer attempts, and one worker retry.

The exact-title matcher found only one match, but that does not imply only one shared topic. Most reference subjects are represented under different local titles. The substantive review below therefore compares behavior and evidence rather than title strings.

## Findings

### DW-GH01: Safety-critical memory behavior is described as an invariant instead of the current implementation defect

- **Category:** Factual accuracy and safety boundaries
- **Confidence:** `confirmed`
- **Severity:** High
- **Recurrence:** This extends aggregate finding `DW-A07`, where declaration-level descriptions were accepted without tracing the executed path in four earlier repositories. Ghost adds a C++ instance with direct, deterministic source evidence, bringing the pattern to five repositories across five languages.
- **Affected pages:** `Randomized Payload Memory`, `Execution Architecture and Payload Lifecycle`, `Resource Decryption Pipeline`, and `Startup Orchestration`.
- **Local Wiki evidence:** `repo/.deepwiki/en/1.3-Randomized Payload Memory.md:3-7` says the allocation is page-aligned and the offset is selected within the region. Lines 21-22 only say that a valid offset "must" leave room and that the design assumes the invariant. `repo/.deepwiki/en/1-Execution Architecture and Payload Lifecycle.md` and `repo/.deepwiki/en/1.1-Startup Orchestration.md:9-10` describe normal ownership cleanup without identifying allocator/deallocator mismatches.
- **Reference evidence:** The reference `Memory Management` page also says `ALIGN_PAGE` page-aligns the allocation and presents random placement as safe. Its `Shellcode Decryption` page calls temporary-buffer cleanup a security measure. The reference therefore repeats rather than resolves these source-level problems.
- **Source evidence:** `repo/allocator.h:13-15` defines `ALIGN_PAGE(n)` as `((n + 0x1000) & ~(0x1000))`, which clears only the `0x1000` bit rather than all lower page-offset bits. `repo/allocator.h:51-53` chooses an inclusive offset from `0` through `uSize`, without subtracting the payload length; `repo/allocator.h:70-72` then copies the complete payload at that address, allowing an out-of-bounds write. `repo/AES.h:135-140` allocates plaintext with `malloc`, while `repo/Ghost.cpp:92-94` releases it with `delete[]`. `repo/unhook.h:52-53` similarly allocates `clean_buffer` with `malloc`, while `repo/unhook.h:137` uses `delete[]`. On a failed second decrypt, `repo/AES.h:144-174` also leaves an allocated plaintext buffer unfreed.
- **User impact:** A maintainer following the Wiki may preserve unsafe code under the impression that the source already enforces alignment, bounds, and ownership invariants. The possible consequences include heap corruption, an out-of-region payload copy, crashes, and misleading security analysis.
- **Likely stage:** Retrieval plus writer factual verification.
- **Proposed change:** Require writers to turn safety-language such as "must," "ensures," "aligned," and "cleanup" into explicit checks against the exact arithmetic, allocation site, copy length, and deallocation site. When the source violates the stated invariant, describe the defect directly rather than converting it into maintenance advice.
- **Acceptance test:** On this pinned commit, regenerated pages must state that the alignment mask is incorrect, that the inclusive offset is not bounded by `uSize - cbBuffer`, and that both plaintext and clean-ntdll buffers cross a `malloc`/`delete[]` boundary. A regression fixture with the same patterns must not be summarized as safe alignment or successful cleanup.

### DW-GH02: Eighteen of twenty pages contain no source citations

- **Category:** Evidence completeness
- **Confidence:** `confirmed`
- **Severity:** High
- **Recurrence:** This strengthens aggregate finding `DW-A05`. Figma Flutter MCP and Lightbox2 published entirely uncited Wikis; Ghost is not completely uncited, but 18 of 20 pages are uncited, demonstrating the same validator and writer failure at page granularity in a third language family.
- **Affected pages:** All local pages except `Source and Resource Materialization` and `Linking and Payload Adaptation`.
- **Local Wiki evidence:** A deterministic scan finds zero source citations in 18 pages and 18 citations in each of the two cited pages. The validation report records citation-count and source-file-coverage warnings for all 14 short leaf pages (`repo/.deepwiki/.wiki/ops/validation-report.json:14-80`). The comparison reports only seven locally cited source files and 40.0% recall against the reference source set.
- **Reference evidence:** The reference cites ten source files, including `AES.h`, `allocator.h`, `defs.h`, `etw.h`, `functions.h`, and `hash.h`, all missing from the local citation set. Reference citations are not automatically correct, but they expose implementation locations that the corresponding local pages discuss without an audit trail.
- **Source evidence:** The uncited pages make detailed claims that depend directly on these files: AES allocation and cleanup in `repo/AES.h:39-174`, offset arithmetic in `repo/allocator.h:34-72`, ETW patch ordering in `repo/etw.h:21-72`, global function initialization in `repo/functions.h:5-65`, and hashing in `repo/hash.h:6-32`.
- **User impact:** Readers cannot verify most implementation claims, and the benchmark's zero-invalid-citation result is misleading because it mostly reflects absence of citations rather than consistently correct evidence.
- **Likely stage:** Writer evidence attachment and citation validator.
- **Proposed change:** Require at least one valid source citation on every substantive page and require multiple files where a page makes cross-file claims. Make an uncited leaf a submission error rather than a soft warning, while retaining range validation.
- **Acceptance test:** Regeneration must give all 20 pages at least one valid citation, every leaf at least two source files when it describes cross-file behavior, and positive citation coverage for `AES.h`, `allocator.h`, `defs.h`, `etw.h`, `functions.h`, `hash.h`, `resolvers.h`, `unhook.h`, and both assembly files.

### DW-GH03: Fine-grained leaves collapse into duplicated generic templates

- **Category:** Information architecture and writer specificity
- **Confidence:** `confirmed`
- **Severity:** Medium
- **Recurrence:** This is another instance of aggregate finding `DW-A04`, already observed across Flask-RESTful, EmailHarvester, Figma Flutter MCP, and Lightbox2. Ghost extends the pattern to C++.
- **Affected pages:** Especially `Fiber Scheduling Lifecycle`, `Hashed Module and Export Resolution`, `Resolved Native Interface`, `Return-Spoofed Call Bridge`, `Indirect Syscall Dispatch`, `Suspended-Process ntdll Restoration`, `Inline Sleep Redirection`, `Shellcode Encryption Inputs`, and `Cross-Compilation Stages`.
- **Local Wiki evidence:** `repo/.deepwiki/en/2.1-Hashed Module and Export Resolution.md:3-30` and `repo/.deepwiki/en/2.2-Resolved Native Interface.md:3-30` share the same scope/components/control-flow/design/change template with only the topic name and path list changed. The same pattern appears in `2.3`, `2.4`, `3.1`, `3.3`, `4.1`, and `4.3`. The validator records ten duplicate-paragraph warnings, and 12 of the 16 writer pages remain below the 750-word depth target.
- **Reference evidence:** The reference `Dynamic API Resolution` and `Helper Components` pages are verbose and sometimes overstate security value, but they at least enumerate `WEIRDHASHA`, PEB traversal, export-array lookup, the function-pointer table, validation macros, and concrete signatures. The local dedicated leaves omit those details despite having narrower titles.
- **Source evidence:** `repo/hash.h:6-32` contains the actual two-stage hash computation. `repo/resolvers.h:17-95` implements unbounded PEB traversal and export parsing, while `repo/resolvers.h:103-149` contains the syscall-neighbor algorithm. `repo/functions.h:5-65` lists the exact resolved pointers and eagerly initializes syscall metadata. `repo/retaddrspoof.h:25-97` and `repo/retaddrspoof.asm:13-74` define gadget selection and the real stack/register transformation. These are distinct mechanisms that the generic leaf prose does not explain.
- **User impact:** The page count suggests comprehensive documentation, but several leaves provide no more actionable understanding than their titles. Readers must inspect source to learn the algorithms, assumptions, exports, or failure modes.
- **Likely stage:** Outline/classifier plus writer generation.
- **Proposed change:** Merge leaves that cannot support distinct evidence and require every retained leaf to name concrete functions, data structures, and control decisions from its priority paths. Reject paragraphs that remain identical after substituting the chapter title.
- **Acceptance test:** Each of the four chapter-2 leaves must contain a distinct source-backed algorithm explanation. Pairwise normalized paragraph overlap between unrelated leaves must stay below the validator threshold, and no diagram may contain a placeholder node of the form "Perform <page title>."

### DW-GH04: Task-oriented pages provide no executable examples

- **Category:** Writer usability
- **Confidence:** `confirmed`
- **Severity:** Medium
- **Recurrence:** This extends aggregate finding `DW-A02`. Ghost becomes the fifth finalized repository with zero non-Mermaid code blocks, spanning Python, TypeScript, JavaScript, Go, and C++.
- **Affected pages:** `Shellcode Encryption Inputs`, `Cross-Compilation Stages`, `Linking and Payload Adaptation`, `Resolved Native Interface`, and the assembly/syscall pages.
- **Local Wiki evidence:** The deterministic comparison counts zero non-Mermaid code blocks in all 20 local pages. Even the build and adaptation pages present commands, object lists, and signatures only as prose or inline code.
- **Reference evidence:** The reference contains 34 non-Mermaid code blocks, including the two accepted `build.py` command forms, NASM and `windres` invocations, the final link command, key/IV declarations, hash signatures, and selected function bodies. Some reference interpretations are unsafe or overstated, but the examples materially improve task usability.
- **Source evidence:** The canonical build invocation is documented at `repo/README.md:47-53`; exact compiler/link commands are at `repo/build.py:97-139` and `repo/build.py:167-192`; the relevant C++ and assembly interfaces are visible at `repo/retaddrspoof.h:13-21`, `repo/retaddrspoof.asm:13-74`, and `repo/syscalls.asm:18-48`.
- **User impact:** A reader can understand the architecture but cannot directly reproduce the build, compare generated commands, or inspect the ABI bridge without leaving the Wiki.
- **Likely stage:** Writer content contract.
- **Proposed change:** Require source-backed fenced examples on task-oriented build, invocation, configuration, and low-level ABI pages. Do not impose snippets on every conceptual page.
- **Acceptance test:** The fixed Ghost regression must include a fenced build invocation, the exact four-object link command, and at least one short source-faithful assembly/C++ interface excerpt, each tied to valid source ranges.

### DW-GH05: The published hierarchy has no internal navigation

- **Category:** Assembly and navigation
- **Confidence:** `confirmed`
- **Severity:** Medium
- **Recurrence:** This extends aggregate finding `DW-A03` to five finalized repositories and adds C++ to the affected languages.
- **Affected pages:** All 20 local pages.
- **Local Wiki evidence:** A deterministic scan finds no non-empty Markdown links, no resolved chapter links, and no remaining `deepwiki://chapter/...` targets. Several pages say a subject is "covered elsewhere" or belongs to another chapter without linking to it.
- **Reference evidence:** The reference repeatedly provides conceptual links such as `Build System`, `Shellcode Decryption`, `Function Hooking`, and `Fiber-Based Execution`. Its extracted `#id` form is not necessarily a portable final URL, but it demonstrates useful navigation relationships.
- **Source evidence:** Source does not determine documentation links, but call relationships provide a reliable basis: `repo/Ghost.cpp:66-140` connects restoration, ETW, resource decryption, allocation, hook installation, fibers, and native waiting; `repo/build.py:196-201` connects every build stage.
- **User impact:** The local four-chapter, sixteen-leaf organization requires readers to navigate by filenames or the sidebar rather than following the execution and build flows described in prose.
- **Likely stage:** Writer link planning and assembly.
- **Proposed change:** Require every overview to link to its direct children and every leaf to link to its parent plus directly adjacent workflow pages. Resolve chapter IDs during assembly and validate both target existence and minimum useful connectivity.
- **Acceptance test:** Every overview links to all four children; every leaf links to its parent and at least one related predecessor or successor; no empty internal href or unresolved chapter URI remains.

### DW-GH06: Valid source labels are rendered as empty, non-navigable links

- **Category:** Citation protocol
- **Confidence:** `confirmed`
- **Severity:** Medium
- **Recurrence:** This extends aggregate finding `DW-A06` from Flask-RESTful, EmailHarvester, and tcping to Ghost, now covering Python, Go, and C++.
- **Affected pages:** `Source and Resource Materialization` and `Linking and Payload Adaptation`; all 36 local source citations.
- **Local Wiki evidence:** Citations use forms such as `[build.py#L14-31]()` and `[Ghost.cpp#L74-81]()` with an empty href. The ranges validate, but a reader cannot open them as links.
- **Reference evidence:** The reference also frequently emits empty-target citations such as `[allocator.h:34-73]()`. It therefore supports the need for shared protocol repair rather than serving as a rendering model.
- **Source evidence:** Spot checks confirm that the local labels themselves are accurate, including `repo/build.py:181-192`, `repo/Ghost.cpp:74-81`, `repo/hook.h:17-84`, and `repo/rsrc.h:12-46`.
- **User impact:** The strongest local pages have auditable evidence in principle, but navigation to that evidence is needlessly manual. Downstream comparison also has to special-case a Markdown link with no destination.
- **Likely stage:** Citation rendering, normalization, and final validation.
- **Proposed change:** Render citations as populated repository-relative links or as canonical plain `path:Lx-Ly` text. Reject source citations matching `]()` before publication.
- **Acceptance test:** No generated page contains `]()` for a source citation, all link destinations resolve to the pinned source file and line anchor, and the existing zero-invalid-path result is preserved.

### DW-GH07: Two Mermaid diagrams contradict source ordering, while several others are semantically empty

- **Category:** Mermaid semantic accuracy
- **Confidence:** `confirmed`
- **Severity:** Medium
- **Recurrence:** This extends aggregate finding `DW-A08`. Definite Mermaid defects were already observed in Flask-RESTful and Figma Flutter MCP, with a semantic scope error in Lightbox2; Ghost adds two direct source-order contradictions.
- **Affected pages:** `Telemetry Suppression and Sleep Evasion`, `Cross-Compilation Stages`, and the generic leaf pages listed in `DW-GH03`.
- **Local Wiki evidence:** `repo/.deepwiki/en/3-Telemetry Suppression and Sleep Evasion.md:9-17` places helper-process termination after local `.text` replacement. `repo/.deepwiki/en/4.3-Cross-Compilation Stages.md:9-16` places payload preparation before assembly. Multiple generic diagrams reduce a subsystem to `Resolve prerequisites -> Prepare arguments -> Execute <title> -> Check result`, without representing the algorithm named by the page.
- **Reference evidence:** The reference has much greater diagram density, but its first `Build System` flow also incorrectly depicts preparation followed by parallel compilation. A later reference diagram gives the correct serial order. This inconsistency confirms that diagram count is not a correctness metric.
- **Source evidence:** `repo/unhook.h:38-71` reads the remote image and terminates the helper before `FlushNTDLL` locates and overwrites the local `.text` section at `repo/unhook.h:77-128`. The actual build sequence is `build_assembly`, `prepare_src_shellcode`, `build_resource`, `build_cpp_src`, and `link` at `repo/build.py:196-201`.
- **User impact:** Readers receive an incorrect lifecycle for two operations where ordering determines artifact freshness and process state. Generic diagrams consume attention without explaining data movement, failure paths, or ABI mechanics.
- **Likely stage:** Mermaid generation plus writer factual verification.
- **Proposed change:** Derive ordered diagram edges from cited call sites, then compare every sequence edge with source order. Add a semantic-quality check that rejects diagrams whose central node merely repeats the page title without concrete functions or data.
- **Acceptance test:** The unhook diagram must terminate the helper immediately after the remote read and before local replacement; the build diagram must begin with assembly before payload preparation; chapter-2 leaf diagrams must name actual functions and outputs; all diagrams must still pass Mermaid syntax validation.

### DW-GH08: Strong failure-boundary analysis in four pages should be preserved

- **Category:** Comparative strength and regression risk
- **Confidence:** `case-specific`
- **Severity:** Low
- **Recurrence:** This quality is particularly visible in Ghost. It should not yet be generalized into a cross-repository success claim.
- **Affected pages:** `ETW Function Suppression`, `Native Delay and Stack Concealment`, `Source and Resource Materialization`, and `Linking and Payload Adaptation`.
- **Local Wiki evidence:** The ETW page identifies early returns that can skip protection restoration and notes the missing instruction-cache flush (`repo/.deepwiki/en/3.2-ETW Function Suppression.md:43-59`). The delay page identifies unchecked native statuses, an unclosed event handle, and single-threaded assumptions (`repo/.deepwiki/en/3.4-Native Delay and Stack Concealment.md:55-59`). The two build pages explain source mutation, stale-object generation mismatch, fragile regex replacement, and payload-specific hook signatures.
- **Reference evidence:** The reference generally presents these mechanisms as successful security features. Its `Security Analysis` rates effectiveness and states that ETW patching prevents telemetry, while its decryption page calls buffer cleanup a security measure. It does not expose the same concrete failure boundaries.
- **Source evidence:** The ETW early-return ordering is visible at `repo/etw.h:39-67`; the event handle is created and never closed at `repo/hook.h:73-84`; source mutation is explicit at `repo/build.py:143-162`; and payload-specific hooking is documented by both `repo/README.md:39-43` and `repo/Ghost.cpp:97-140`.
- **User impact:** These sections help maintainers distinguish intended evasion behavior from actual error handling and integration assumptions. They are more useful and less promotional than the corresponding reference discussion.
- **Likely stage:** Writer retrieval and source-grounded synthesis.
- **Proposed change:** Preserve this failure-boundary prompt behavior while adding mandatory citations and extending the same rigor to allocator, AES, resolver, unhooking, and assembly pages.
- **Acceptance test:** After writer or outline changes, the four concrete caveats above must remain, gain valid citations, and not be replaced by generic "check errors and cleanup" language.

## Overall Assessment

The local Wiki has a sound four-part architecture and two notably strong build pages. It also improves on the reference by using the accurate term "indirect syscall" and by avoiding unsupported effectiveness ratings such as "Very High" or claims that a technique categorically prevents detection. The best local pages trace artifact coupling and runtime failure boundaries with appropriate caution.

Quality is highly uneven, however. Eighteen pages have no citations, several narrow pages are generated from repeated templates, no page offers a non-Mermaid code example, and the hierarchy has no internal links. More importantly, the memory pages convert real implementation defects into hypothetical maintenance cautions. The successful validator result therefore establishes structural validity, not sufficient source-grounded correctness.

The highest-priority fixes are: enforce page-level evidence, require arithmetic and ownership verification for safety claims, eliminate templated leaves, validate diagram edge order against cited call sites, and add source-faithful examples plus internal navigation. Runtime duration should be excluded from optimization analysis for this repository because the run spans an overnight interruption.
