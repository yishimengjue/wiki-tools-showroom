// Full Mermaid blocks extracted from original Wiki artifacts; never repaired or redrawn.
window.WIKI_AUDIT_DIAGRAMS = {
  "ghost-build-order": {
    "local-skill": {
      "source": "flowchart TD\n A[Prepare sources and payload] --> B[Assemble native stubs]\n B --> C[Compile resources]\n C --> D[Compile C++ source]\n D --> E[Link Ghost.exe]\n",
      "sha256": "49166696bbc7404340b3c3fb077c72727e779f1d325ec9e1a8d8a385cab63135",
      "origin": "Ghost / 4.3-Cross-Compilation Stages.md / L12-L15",
      "wikiUrl": "local-skill.html#page-19"
    },
    "devinwiki": {
      "source": "flowchart TD\n    Start([Start]) --> ParseArgs[\"Parse command-line arguments\"]\n    ParseArgs -->|\"--shellcode argument\"| ReadShellcode[\"Read shellcode file\"]\n    ReadShellcode --> EncryptShellcode[\"Encrypt shellcode with AES\"]\n    EncryptShellcode --> WriteIconFile[\"Write encrypted data to icon.ico\"]\n    WriteIconFile --> UpdateSourceCode[\"Update Ghost.cpp with AES key/IV\"]\n    \n    UpdateSourceCode --> ParallelProcess[\"Process in parallel\"]\n    \n    ParallelProcess --> BuildAssembly[\"Build assembly files\"]\n    BuildAssembly -->|\"nasm\"| SyscallsObj[\"syscalls.o\"]\n    BuildAssembly -->|\"nasm\"| RetAddrSpoofObj[\"retaddrspoof.o\"]\n    \n    ParallelProcess --> BuildResource[\"Build resource file\"]\n    BuildResource -->|\"windres\"| ResourceObj[\"Resource.o\"]\n    \n    ParallelProcess --> BuildCpp[\"Build C++ source\"]\n    BuildCpp -->|\"MinGW\"| GhostObj[\"Ghost.o\"]\n    \n    SyscallsObj --> LinkFiles[\"Link all objects\"]\n    RetAddrSpoofObj --> LinkFiles\n    ResourceObj --> LinkFiles\n    GhostObj --> LinkFiles\n    \n    LinkFiles -->|\"MinGW\"| GhostExe[\"Ghost.exe\"]\n    GhostExe --> End([End])\n",
      "sha256": "441951c4d47911f867cd9f19d054f8f5da42d5b405b9dc11c92b8b3fa218543c",
      "origin": "Ghost / wiki.json pages[2] Build System / content L31-L35",
      "wikiUrl": "devinwiki.html#page-3"
    },
    "openwiki": {
      "source": "flowchart TD\n    A[\"build_assembly()\"] --> B[\"prepare_src_shellcode()\"]\n    B --> C[\"build_resource()\"]\n    C --> D[\"build_cpp_src()\"]\n    D --> E[\"link()\"]\n",
      "sha256": "396983d6a9f2ca5af2d28545c0edee7923636948f370eb27f0efd13770403b12",
      "origin": "Ghost / workflows/build-and-deploy.md / L61-L64",
      "wikiUrl": "openwiki.html#page-14"
    },
    "codewiki": {
      "source": "flowchart TD\n    Start[Run build.py with shellcode path]\n    Assemble[Assemble retaddrspoof.asm and syscalls.asm]\n    Read[Read shellcode bytes]\n    Keys[Generate 32 byte key and 16 byte IV]\n    Encrypt[AES CBC encrypt with PKCS padding]\n    Icon[Write ciphertext as icon.ico]\n    Rewrite[Replace AesKey and AesIv arrays in Ghost.cpp]\n    Windres[Compile Resource.rc]\n    Compile[Cross compile Ghost.cpp]\n    Link[Link all objects]\n    Output[build Ghost.exe]\n\n    Start --> Assemble\n    Assemble --> Read\n    Read --> Keys\n    Keys --> Encrypt\n    Encrypt --> Icon\n    Keys --> Rewrite\n    Icon --> Windres\n    Rewrite --> Compile\n    Windres --> Link\n    Compile --> Link\n    Assemble --> Link\n    Link --> Output\n",
      "sha256": "39edfb112cac226c7db0491775983efb34ad0ce71b443835c2e0daca3acece22",
      "origin": "Ghost / overview.md, Build-Time Pipeline / L139-L141",
      "wikiUrl": "codewiki.html#page-1"
    }
  },
  "ghost-helper-order": {
    "local-skill": {
      "source": "flowchart TD\n    A[Create suspended audiodg] --> B[Read clean ntdll image]\n    B --> C[Locate local and remote text sections]\n    C --> D[Make local text writable]\n    D --> E[Copy clean section]\n    E --> F[Restore protection]\n    F --> G[Terminate helper]\n",
      "sha256": "3d506d8c6a8af5f0483d65b1288df8c7510b66c821e2a08c207bdb554b0eb949",
      "origin": "Ghost / 3-Telemetry Suppression and Sleep Evasion.md / L14-L16",
      "wikiUrl": "local-skill.html#page-11"
    },
    "devinwiki": {
      "source": "flowchart LR\n    A[\"FlushNTDLL()\"] --> B[\"Locate clean copy of NTDLL\"]\n    B --> C[\"Replace hooked functions with original versions\"]\n    C --> D[\"Return to caller with cleaned NTDLL\"]\n",
      "sha256": "0153e622c8f4b66a116dbdf11cd2ea1749a24e24de68509cd01032543989a989",
      "origin": "Ghost / wiki.json pages[15] Security Analysis / content L210-L212",
      "wikiUrl": "devinwiki.html#page-16"
    },
    "deepwiki-open": {
      "source": "sequenceDiagram\n    participant M as Main Module\n    participant U as unhook.h\n    participant P as ntprocessapi.h\n    participant S as Syscalls (types.h)\n    participant R as retaddrspoof.h\n\n    M->>U: FlushNTDLL()\n    U->>U: GetImageSizeFromBase()\n    U->>P: NtCreateUserSuspendedProcess()\n    P->>R: RetSpoofCall(SysNtCreateUserProcess)\n    R->>S: Execute syscall\n    S-->>R: NTSTATUS\n    R-->>P: hProcess, hThread\n    P-->>U: Status\n    U->>U: ReadBufferFromProcess()\n    U->>R: RetSpoofCall(SysNtReadVirtualMemory)\n    R->>S: Read NTDLL from remote\n    S-->>R: Clean NTDLL buffer\n    R-->>U: Buffer\n    U->>R: RetSpoofCall(SysNtTerminateProcess)\n    U->>U: Parse PE headers\n    U->>R: RetSpoofCall(SysNtProtectVirtualMemory)\n    R->>S: Change to PAGE_EXECUTE_WRITECOPY\n    U->>R: RetSpoofCall(memcpy)\n    R->>S: Copy clean .text section\n    U->>R: RetSpoofCall(SysNtProtectVirtualMemory)\n    R->>S: Restore protection\n    S-->>R: Status\n    R-->>U: Success\n",
      "sha256": "b01ffd825e11d581efa90e0d9f949785fbb6fc3ec09a5d289489e006fca31a68",
      "origin": "Ghost / wiki.md, NTDLL Unhooking via Suspended Processes / L2961-L2965",
      "wikiUrl": "deepwiki-open.html#page-8"
    }
  },
  "sqlx-bind-order": {
    "deepwiki-open": {
      "source": "graph TD\n    A[Batch Insert Request] --> B{Argument Type}\n    B -->|Struct Slice| C[Compile Named Query]\n    B -->|Map Slice| C\n    C --> D[Process Each Element]\n    D --> E[Extract Field Values]\n    E --> F[Build Arg List]\n    F --> G[Fix Bound Query for Multiple Rows]\n    G --> H[Execute Insert]\n",
      "sha256": "2d270f7681f5abe744269c035e00f7ccfb4a706b85dd769ca085519b9a43e631",
      "origin": "sqlx / wiki.md, Bind Variable Handling / L2905-L2908",
      "wikiUrl": null
    },
    "openwiki": {
      "source": "flowchart TD\n    A[\"DriverName\"] --> B[\"BindType\"]\n    B --> C[\"compileNamedQuery : bindType, query\"]\n    C --> D[\"rebound query + names\"]\n    D --> E[\"bindNamedMapper: arg kind\"]\n    E -->|\"map[string]iface\"| F[\"bindMap / bindMapArgs\"]\n    E -->|\"slice/array\"| G[\"bindArray (fixBound replicates VALUES)\"]\n    E -->|\"struct\"| H[\"bindStruct / bindAnyArgs -> bindArgs\"]\n    F --> I[\"bound query + args\"]\n    G --> I\n    H --> I\n    I --> J[\"Exec / Query / QueryRow on prepared or ad-hoc Stmt\"]\n",
      "sha256": "63a80f5db568976e0709325a18bff8afe70674562299330cb5f19b5092f000e6",
      "origin": "sqlx / concepts/named-queries.md / L158-L161",
      "wikiUrl": null
    }
  }
};
