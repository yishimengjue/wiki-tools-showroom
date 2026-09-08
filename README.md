# 五工具 Wiki 对比展厅

这是一个面向产品与工程团队的静态展厅，用同一套评测口径展示 Local Skill、deepwiki-open、OpenWiki、CodeWiki 和 DevinWiki 在多个 GitHub 仓库上的生成效果。

## 在线阅读

[打开五工具 Wiki 对比展厅](https://yishimengjue.github.io/wiki-tools-showroom/)

## 内容说明

- 首页展示五工具风格差异、七仓能力材料覆盖表及 Local Skill 评测结论；点击能力表单元格可查看原文与源码依据，不将案例数量当成工具总排名。
- Ghost 仓库用于完整成品对照，五份 Wiki 均保留原始内容。
- `compare.html` 可任选两个工具左右阅读；页面整体可下拉，概览展示风格、图表类型和对应原文位置。
- 成品对读中的“同一主题，左右看原图”提供 Local Skill / DevinWiki 三组人工配对的原图，支持放大、原始定义和双侧全文定位；其他工具未配对时明确标注，不推断没有图。风格说明附原文摘录与定位链接，相同章节结构可直接放到两侧核对。
- `issues-compare.html` 按七个抽象问题类别组织案例，展示五工具判断、两工具原文，以及当前页面内的源码证据。
- 问题页展示九个内容案例与一类历史生成故障。补充核查记录保留旧链接，但不作为错误分类或数量展示。
- “有此问题”“说明正确”“部分说明”“未说明此点”“尚未核查”“本轮无成品”分别展示，内容缺口不等于事实错误。
- `issue-summary.html` 保留旧检查项及旧链接，采用当前判定，不再用旧计数比较工具。
- `evidence/` 保存定性核查报告，便于追溯结论。

所有页面和图表资源都保存在仓库内，不依赖外部 CDN。

## 本地验证

在仓库目录运行 `node scripts/build-audit-data.mjs`，校验并合并 `assets/audit-core.json`、`assets/audit-behavior.json` 和源码片段缓存。修改证据后需要重新执行。

运行 `node scripts/check-showroom.mjs` 检查数据包、页面入口、旧锚点和脚本语法。

运行 `node scripts/build-training-summary.mjs <七仓审查 JSON 路径>` 更新公开能力表数据；脚本保留判定依据和复核记录，去除本机路径，不改动历史审查输入。

已有本地服务、Playwright 和浏览器时，可运行 `node scripts/check-reading-ui.mjs` 检查五工具原文跳转、双栏滚动、能力表及桌面/手机布局；用 `PLAYWRIGHT_MODULE` 与 `BROWSER_EXECUTABLE` 指定已安装的运行环境。

运行 `node scripts/check-diagram-ui.mjs` 检查三组图表定义与原文逐字一致、图表放大与定位、风格摘录与同结构章节对照。配对规则位于 `assets/diagram-topics.js`，通过章节标题及原始图片定义片段共同确认；未匹配时不会猜测或补画。

运行 `python3 -m http.server 8765 --bind 127.0.0.1`，通过 `http://127.0.0.1:8765/` 阅读。推荐使用本地服务或 GitHub Pages；本轮已验证 HTTP 阅读，浏览器安全策略未允许直接验证 file 协议。页面不需要调用模型、登录或连接原评测环境。GitHub 源码等外部链接仍需要联网。

原始 Wiki 位于 `raw/`，阅读标注与对比逻辑位于展示层。源码证据来自公开仓库的对应快照，不把评审补充的引用计为工具已有引用。问题页的中文摘录仅为直译，不修正原文中的错误。

## 公开展示边界

- 本项目只用于比较文档生成工具和源码核查能力，不提供安全工具的部署或攻击指导。
- 展示页会保留各工具原始成品中的错误、空引用和失效链接，并在展示层明确标注。
- 上游仓库、工具名称和生成内容的相关权利归各自权利人；本仓库不对上游代码授予额外许可。
