# Qualitative Review: `lokesh/lightbox2`

## Review basis

- The reference and checked-out repository both resolve to commit `6bc87b6c`; there is no version drift.
- Source code is authoritative. The reference Wiki is used as a comparative baseline, not as ground truth.
- Reviewed all 23 generated English pages, all 13 reference pages, `src/js/lightbox.js`, `src/css/lightbox.css`, `Gruntfile.js`, package manifests, the example page, and the maintenance/release documents.
- The exact-title result (`1/13` matched) substantially understates semantic coverage because the local Wiki uses four overview chapters plus 19 narrow leaves.

## Thematic alignment

| Reference area | Local coverage | Assessment |
| --- | --- | --- |
| Overview, Architecture, Core JavaScript | `1`, `1.1`-`1.3`, `2`, `2.1`-`2.5` | Broadly covered. Initialization, delegated events, generated DOM, album construction, image sizing, navigation, and cleanup are all present. |
| CSS and Styling | `3`, `3.1`-`3.5` | Covered through runtime-oriented pages on layering, geometry, controls, captions, and focus rather than a stylesheet reference. |
| Usage, Basic Implementation, Configuration | `4`, `4.1`, `4.2` | Behavior is described accurately at a high level, but the pages omit runnable markup/configuration examples and the actual default values. |
| Distribution and Build Process | `1.4`, `4`, `4.3`, `4.4` | Task ordering and artifacts are covered, but the claim of a locked/reproducible toolchain is not supported by the Bower dependency state. |
| Development, Code Standards, Roadmap | `4.4`, `4.5` | Release and roadmap topics are covered. JSHint/JSCS are named, but their checked-in rules and contribution templates receive little useful treatment. |

## Findings

### LB-Q01: Every generated page lacks source citations

- **Confidence:** case-specific, with deterministic evidence
- **Severity:** high
- **Affected scope:** all 23 local pages; `comparison/report.json` reports zero local source files, and validation reports citation-count and citation-file warnings for all 19 writer pages.
- **Local evidence:** detailed claims such as the generated DOM and event map in `repo/.deepwiki/en/2.2-Generated Overlay DOM and Handlers.md:9-27`, image sizing in `repo/.deepwiki/en/2.4-Image Loading and Geometry.md:9-27`, configuration semantics in `repo/.deepwiki/en/4.2-Behavioral Configuration Surface.md:9-27`, and the Grunt pipeline in `repo/.deepwiki/en/4.4-Grunt Artifact Pipeline.md:9-27` have no inline source anchors. The four overview pages also contain no citations.
- **Reference evidence:** the reference cites 14 repository files across runtime, styling, usage, build, and maintenance pages. Some reference claims are still inaccurate, so citation presence is not sufficient, but it provides traceability that the local output entirely lacks.
- **Source evidence:** the uncited local claims depend directly on `repo/src/js/lightbox.js:75-210`, `repo/src/js/lightbox.js:212-568`, `repo/Gruntfile.js:1-83`, `repo/bower.json:1-29`, and `repo/DEPLOY.md:1-14`.
- **User impact:** readers cannot verify a claim, distinguish source behavior from interpretation, or navigate to the relevant implementation. The comparator's `0%` source recall is caused by missing evidence, not missing topical prose.
- **Likely stage:** writer evidence attachment and citation validator.
- **Proposed change:** require source anchors for factual paragraphs and diagrams, and reject an assembled Wiki whose entire page set yields zero valid citations even if per-page citation targets remain soft warnings.
- **Acceptance test:** every substantive page contains valid `path:Lx-Ly` anchors to the code or documentation that supports its claims; the comparator extracts non-empty local source files including `src/js/lightbox.js`, `src/css/lightbox.css`, `Gruntfile.js`, `README.md`, `bower.json`, and `DEPLOY.md`; and all cited ranges validate.

### LB-Q02: Repeated initialization is described as idempotent when only DOM insertion is guarded

- **Confidence:** case-specific, direct source contradiction
- **Severity:** medium
- **Affected scope:** initialization, delegated trigger binding, and generated DOM behavior.
- **Local evidence:** `repo/.deepwiki/en/2.2-Generated Overlay DOM and Handlers.md:9` says the ID check "makes setup idempotent" and prevents problems when the module is evaluated or initialized more than once. `repo/.deepwiki/en/1.1-Module Surface and Loading Modes.md:34` further implies that every import or global access necessarily addresses the same page-level instance.
- **Reference evidence:** the reference explains the normal one-instance initialization sequence but does not establish that explicit reinitialization or duplicate script evaluation is safe.
- **Source evidence:** `repo/src/js/lightbox.js:75-82` schedules both `enable()` and `build()` on every `init()` call. `enable()` unconditionally adds another delegated body listener at lines 86-91. `build()` returns at lines 96-99 when `#lightbox` exists, before populating the new instance's DOM caches at lines 116-137. The factory constructs a fresh object at line 570 each time the script is evaluated.
- **User impact:** a consumer who trusts the idempotence claim may call `init()` twice and receive duplicate trigger handlers, or load the script twice and expose a new singleton whose `build()` returned without initializing `$overlay`, `$lightbox`, and related fields.
- **Likely stage:** writer cross-method synthesis and factual validation.
- **Proposed change:** distinguish DOM-root deduplication from lifecycle idempotence and explicitly document that neither `enable()` nor duplicate module evaluation is guarded.
- **Acceptance test:** a regression page states that `build()` alone prevents a second DOM root, does not call repeated initialization safe, and is checked against a small jsdom/browser test showing the number of body handlers and initialized instance fields after two `init()` calls or two script evaluations.

### LB-Q03: The image lifecycle omits the broken-URL failure state

- **Confidence:** case-specific
- **Severity:** medium
- **Affected scope:** `2`, `2.4`, `2.5`, and the roadmap discussion in `4`/`4.5`.
- **Local evidence:** `repo/.deepwiki/en/2.4-Image Loading and Geometry.md:9-27` and `repo/.deepwiki/en/2.5-Transition Completion and Cleanup.md:9-27` describe only successful `Image.onload`, sizing, display, and neighbor preloading. The operational guidance merely asks consumers to keep URLs reachable. The maintenance overview mentions future "better failure behavior" but never explains the current failure boundary.
- **Reference evidence:** the reference also emphasizes the success path, while its roadmap page preserves the repository's explicit open questions about incorrect or slow image URLs. It therefore identifies the topic but does not make the current behavior authoritative.
- **Source evidence:** `repo/src/js/lightbox.js:283-290` disables keyboard navigation, shows the loader, hides visible content, and marks the frame animating before creating the loader. Lines 293-375 define only `preloader.onload`; there is no `onerror` or timeout before `preloader.src` is assigned at lines 377-379. `repo/ROADMAP.md:50-52` explicitly lists bad and slow image URLs as unresolved error-handling questions.
- **User impact:** on a failed target-image request, the success callback never reaches `sizeContainer()` or `showImage()`, so the loader remains and keyboard navigation remains disabled until the user closes through a pointer-accessible control. This is important operational behavior for remote galleries.
- **Likely stage:** retrieval and writer edge-case coverage.
- **Proposed change:** require lifecycle pages to inspect both success and failure callbacks and distinguish foreground image loading from best-effort adjacent preloading.
- **Acceptance test:** the image lifecycle includes an explicit failure branch stating the absence of `onerror`/timeout behavior, identifies the resulting loader and keyboard state, and does not claim retry, fallback, or wrap-aware neighbor preloading that the source does not implement.

### LB-Q04: The build is called reproducible despite an unpinned Bower input and stale package metadata

- **Confidence:** case-specific, direct source contradiction
- **Severity:** medium
- **Affected scope:** build, combined distribution bundle, and release guidance.
- **Local evidence:** `repo/.deepwiki/en/4.4-Grunt Artifact Pipeline.md:27` says build reproducibility depends on a "locked historical toolchain," and `repo/.deepwiki/en/4.5-Release Policy and Modernization Roadmap.md:3` says the release process prioritizes reproducible generated artifacts.
- **Reference evidence:** the reference Build Process correctly says `bower install` supplies jQuery before concatenation, but it does not analyze whether that input is pinned. Its generic troubleshooting guidance should not be read as a reproducibility guarantee.
- **Source evidence:** `repo/bower.json:26-28` declares `jquery` as the open range `>2`, and no Bower lock file is checked in. `repo/Gruntfile.js:4-8` concatenates the resolved `bower_components/jquery/dist/jquery.js` directly into the combined artifact. The checked-in bundle contains jQuery 3.7.1 at `repo/dist/js/lightbox-plus-jquery.js:1-9`. Separately, `repo/package.json:2-3` declares Lightbox2 2.11.5 while `repo/package-lock.json:1-10` still records 2.11.4.
- **User impact:** two clean builds at different times can embed different jQuery releases, and package metadata is already internally inconsistent. Calling the pipeline locked/reproducible hides a release risk precisely where maintainers need accurate build provenance.
- **Likely stage:** retrieval and writer factual synthesis.
- **Proposed change:** make build pages inspect lock coverage for every artifact input and report manifest/version drift rather than inferring reproducibility from the presence of `package-lock.json`.
- **Acceptance test:** the build page states that npm development dependencies are locked but Bower jQuery is not, identifies the package/package-lock version mismatch, and a clean-build audit records the exact jQuery version embedded in `lightbox-plus-jquery.js`.

### LB-Q05: Configuration and integration guidance contains no runnable examples

- **Confidence:** probable; the same prose-only guidance pattern now appears in three discovery repositories, all English
- **Severity:** medium
- **Affected scope:** all 23 local pages; deterministic report records zero non-Mermaid code blocks and zero tables.
- **Local evidence:** `repo/.deepwiki/en/4.1-Declarative Consumer Markup.md:9-21` describes standalone and grouped links but does not show the markup. `repo/.deepwiki/en/4.2-Behavioral Configuration Surface.md:9-27` names every option category but omits the actual defaults and a `lightbox.option({...})` call. `repo/.deepwiki/en/4.4-Grunt Artifact Pipeline.md:9-27` describes commands and task order without a copyable setup/build sequence.
- **Reference evidence:** Basic Implementation, Configuration Options, Advanced Usage Patterns, and Build Process contain HTML, JavaScript, CSS, and shell examples. However, the reference Configuration Options page also invents `$('.example-link').data('lightbox')` as an instance lookup, so examples must be source-validated rather than copied.
- **Source evidence:** valid markup is available at `repo/examples/index.html:10-24`; the public global call is supported by the browser export and option method at `repo/src/js/lightbox.js:25-28,67-69`; defaults are enumerated at lines 43-65; setup commands are documented at `repo/README.md:23-31`.
- **User impact:** the Wiki explains the architecture but does not let a consumer implement a gallery, set safe caption handling, tune navigation, or reproduce the build without leaving the generated documentation.
- **Likely stage:** writer content contract and example generation.
- **Proposed change:** require concise, source-backed snippets on task-oriented integration, configuration, and build pages, with static checks that reject APIs absent from the repository.
- **Acceptance test:** regeneration includes a standalone image, a grouped gallery, a direct `lightbox.option` example with accurate defaults, and the repository's install/serve/build commands; every identifier and option is verified against source, and no fabricated instance-retrieval API appears.

### LB-Q06: The 23-page hierarchy has no internal navigation

- **Confidence:** probable; reproduced across the first three successful discovery repositories, all English
- **Severity:** medium
- **Affected scope:** all 23 local pages; automated scan finds no Markdown links or `deepwiki://chapter/...` targets.
- **Local evidence:** `repo/.deepwiki/en/1-Project Overview.md:37` says following topics unpack the architecture, but none are linked. The runtime overview and leaves repeatedly split related phases across `2`, `2.1`-`2.5`, while presentation behavior is split across `3`, `3.1`-`3.5`, without parent-child or related-topic links.
- **Reference evidence:** reference pages link Architecture to Usage Guide, overview pages to implementation/styling pages, and configuration/advanced usage pages to one another. The exact reference anchor syntax is not required, but the navigation intent is useful.
- **Source evidence:** not applicable; this is an assembled-Wiki navigation defect.
- **User impact:** readers must infer filenames or return to an external tree to move from a lifecycle overview to album selection, image loading, navigation, configuration, or build details. The cost is amplified by the local Wiki's fine-grained split.
- **Likely stage:** writer link planning and assemble/link validation.
- **Proposed change:** provide the frozen outline and stable chapter IDs to writers, then validate explicit cross-topic references and parent-child navigation during assembly.
- **Acceptance test:** every overview links to all child pages, every leaf links to its parent and directly related lifecycle pages, all targets resolve, and an automated scan finds at least one useful internal link per page.

### LB-Q07: The outline fragments one compact runtime into repetitive template pages

- **Confidence:** probable; over-fragmentation and repeated overview/leaf content recur across the first three successful discovery repositories, all English
- **Severity:** medium
- **Affected scope:** 18 of 19 writer leaves use the identical `Responsibilities / Mechanics / Interactions / Operational Considerations` skeleton and contain only 198-267 words.
- **Local evidence:** `1.2-Trigger Discovery and Overlay Construction.md` and `2.2-Generated Overlay DOM and Handlers.md` repeat DOM creation and handler setup; `1.3-Gallery Execution Pipeline.md`, the chapter `2` overview, and leaves `2.3`-`2.5` repeat the same album/load/resize/reveal/cleanup chain. The local output has 23 pages but only 50,662 visible characters, versus 13 reference pages and 131,374 characters. Validation emits 18 under-depth and 18 missing-diagram warnings for the templated leaves.
- **Reference evidence:** the reference's 13 broader pages are sometimes overlong and are not a required structure, but they keep basic usage, options, advanced patterns, and build tasks as coherent reader workflows rather than separate 200-word implementation fragments.
- **Source evidence:** the core runtime is a single 571-line file, with closely coupled method groups at `repo/src/js/lightbox.js:75-210`, `212-380`, and `400-568`. The build is one 83-line `Gruntfile.js`. These boundaries support several focused pages, but not repeated summaries that add no distinct evidence or task.
- **User impact:** readers encounter the same lifecycle multiple times while still missing defaults, examples, image-failure semantics, and code-standard details. More pages produce more navigation cost without broader or deeper coverage.
- **Likely stage:** outline/classifier and writer page differentiation.
- **Proposed change:** merge overlapping leaves or give each one a distinct user question, evidence set, and non-repeated artifact such as a code excerpt, table, or focused diagram.
- **Acceptance test:** a regenerated outline preserves runtime, presentation, configuration, build, and roadmap coverage with fewer overlapping pages; no large group shares an identical generic heading template; and similarity checks show materially less repeated prose between overviews and leaves.

### LB-Q08: One Mermaid diagram overgeneralizes Enter and Space as global close actions

- **Confidence:** case-specific, direct source contradiction
- **Severity:** low
- **Affected scope:** dismissal semantics in `3-Presentation, Navigation, and Accessibility.md`.
- **Local evidence:** the state diagram at `repo/.deepwiki/en/3-Presentation, Navigation, and Accessibility.md:27-36` labels a general transition `Visible --> Hidden: overlay, close, Enter, Space, or Escape`, which reads as if Enter or Space anywhere in the active viewer closes it.
- **Reference evidence:** the reference keyboard-navigation table lists Escape and arrow keys as viewer-wide actions and does not claim general Enter/Space dismissal.
- **Source evidence:** `repo/src/js/lightbox.js:202-209` handles Enter and Space only on `.lb-loader` and `.lb-close`. Viewer-wide keyboard handling at lines 523-555 responds only to Escape, Left Arrow, and Right Arrow.
- **User impact:** the diagram misstates keyboard interaction and can lead accessibility testing or consumer documentation to expect a shortcut that exists only when the close/cancel targets receive the key event.
- **Likely stage:** Mermaid generation and semantic validation.
- **Proposed change:** bind diagram edge labels to the event target and handler scope established by source evidence.
- **Acceptance test:** the dismissal diagram labels Enter/Space as close-or-cancel control activation, labels Escape as the scoped root-level close key, and a semantic review finds no input event represented at a broader scope than its bound handler.

## Comparator limitations

The title matcher should not be used as content recall. Only `Overview` matched, but source-grounded reading shows local coverage for nearly every reference topic family. The local hierarchy uses implementation-phase titles such as `Album Assembly and Selection` and `Responsive Frame Calculation`, while the reference uses broader titles such as `Core JavaScript Implementation` and `Advanced Usage Patterns`. A hierarchy-aware matcher should support one-to-many mappings and must not label these topics absent solely from title similarity.

The source comparison also needs contextual interpretation. `0/14` overlap does not show that the local prose ignored all 14 files; it shows that the local Wiki emitted no citations from which the comparator could extract a source set. Coverage and evidence attachment must be reported separately.

The reference is not a factual oracle. Its Configuration Options page suggests retrieving a Lightbox instance through `$('.example-link').data('lightbox')`, which the source never installs, and other reference diagrams use renamed/private-style methods not present in this revision. Local claims were accepted or rejected against checked-out source first.

## Strengths retained

- The normal runtime path is generally accurate: delegated trigger discovery, same-tag grouping, current-index selection, viewport sizing, SVG expansion, container animation, details, neighbor preloading, scoped keyboard handlers, and scroll-lock cleanup align with `src/js/lightbox.js`.
- Event details are unusually good for such short pages. The local Wiki captures body delegation, backdrop-versus-content click behavior, Enter/Space on close/cancel controls, Escape propagation suppression, touch-arrow visibility, and the temporary right-click pointer-event workaround.
- Caption security is source-faithful. The Wiki correctly distinguishes default HTML insertion from `sanitizeTitle` text insertion and recommends the safer setting for untrusted data.
- The Grunt task graph and artifact set are mostly accurate: source copying, jQuery concatenation, plugin and combined minification, source maps, CSS minification, static-only `grunt test`, and the server/watch default all match the checked-in configuration.
- The ten Mermaid diagrams passed validation and are mostly semantically consistent with source. The primary diagram defect is the event-scope overstatement in LB-Q08; the broader weakness is that diagrams are concentrated in five pages while 18 short leaves contain none.

## Overall assessment

The local Wiki achieves broad topical coverage and is more disciplined than the reference on several runtime details, especially caption sanitization and event scoping. Its usefulness is nevertheless constrained by a complete absence of citations, runnable examples, tables, and internal links. Two source-grounded claims require correction: repeated initialization is not fully idempotent, and the combined build is not reproducibly locked because Bower's jQuery input is open-ended. The highest-priority Skill improvements are evidence attachment and hard validation against all-zero citation output, followed by source-validated examples, outline consolidation, and explicit edge-case retrieval for initialization and image failure paths.
