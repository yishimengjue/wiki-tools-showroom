/* Reviewed topic matches, not automatic similarity or whole-Wiki correctness judgments. */
window.WIKI_DIAGRAM_TOPICS = [
  {
    id: 'resource-handoff', title: '资源和源码生成', kind: '调用时序图对调用时序图',
    question: '构建脚本怎样把生成的材料交给资源文件和源文件？',
    comparison: '两图都画了脚本写入资源与源码。Local 继续画到编译和运行时使用，时间跨度更长；Devin 展开脚本与加密库之间的调用和返回，到写入两个文件为止。这是范围与细节粒度的差别，不是准确性排名。',
    tools: {
      'local-skill': {
        page: 'page-18', heading: 'Embedded bytes meet embedded key material',
        fragments: ['participant X as Executable', 'B->>C: Replace AesKey and AesIv declarations', 'X->>D: Retrieve resource by ID and type'],
        note: '看顶部参与者：有构建脚本、源码、资源、成品和运行时。读的是材料跨阶段交接，并非每条箭头都是一次函数调用。'
      },
      devinwiki: {
        page: 'page-4', heading: 'Step 3: Encrypt Shellcode',
        fragments: ['participant PyCrypto as "PyCrypto Library"', 'PyCrypto-->>BuildPy: Return encrypted data', 'BuildPy->>SourceCode: Update with key/IV values'],
        note: '看脚本与 PyCrypto 两列之间的往返箭头：它具体展示请求和返回；这张图不负责说明后续编译和运行。'
      }
    }
  },
  {
    id: 'build-order', title: '构建顺序', kind: '流程图对流程图',
    question: '从准备输入到生成成品，步骤是串行还是并行？',
    comparison: 'Local 用五步直线概括；Devin 展开了输入、编译工具和中间文件，还画出了并行分支。细节更多不等于更准确：这两张图的构建顺序都有已确认问题。',
    auditCase: 'ghost-build-order',
    tools: {
      'local-skill': {
        page: 'page-19', heading: 'Build Flow',
        fragments: ['A[Prepare sources and payload] --> B[Assemble native stubs]', 'D --> E[Link Ghost.exe]'],
        note: '看第一、二个方框：先准备，再汇编；之后按一条线继续。此处先后顺序写反，已有源码核查。'
      },
      devinwiki: {
        page: 'page-3', heading: 'Build System Overview',
        fragments: ['UpdateSourceCode --> ParallelProcess["Process in parallel"]', 'LinkFiles -->|"MinGW"| GhostExe'],
        note: '看 Process in parallel（并行处理）：它把三种编译画成并行分支；已有核查确认实际不是这个顺序。'
      }
    }
  },
  {
    id: 'build-inputs', title: '编译文件怎样汇总', kind: '关系图对关系图',
    question: '哪些中间文件最后汇入同一个成品？',
    comparison: '共同部分是四个目标文件汇入最终成品。Local 主要画“源文件 → 目标文件 → 汇总”；Devin 还画构建函数，并用 first / second 等标出阶段。两张图范围不同，不能按方框数量判优劣。这里只比较表达方式。',
    tools: {
      'local-skill': {
        page: 'page-16', heading: 'Native Compilation Pipeline',
        fragments: ['RO --> L[MinGW linker]', 'SO --> L', 'CO --> L', 'XO --> L'],
        note: '从四条文件连线看最终汇总关系；图中没有用步骤编号说明四条线的执行先后。'
      },
      devinwiki: {
        page: 'page-5', heading: 'Linking Process',
        fragments: ['buildpy -->|"first step"| buildasm', 'resourceo -->|"linked in"| link', 'ghosto -->|"linked in"| link'],
        note: '既列文件，也列负责处理的函数。first step 等词说明阶段，linked in 的箭头说明文件去向，不能把所有箭头都当作调用。'
      }
    }
  }
];
