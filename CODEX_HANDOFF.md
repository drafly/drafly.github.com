# 个人学术博客 Astro 重构交接文档

更新时间：2026-08-03（第六阶段：首页内容与侧边栏优化已完成）
工作目录：`/Users/lcfc/project/drafly.github.com`
当前分支：`codex/modern-blog-redesign`

## 1. 项目目标

将旧 Jekyll 个人学术博客重构为**浅色学术 CV 风格**（参考 `hugo-theme-academic-cv`）的 Astro 静态网站，全站 UI 文案为中文，同时保留：

- 个人简介
- 研究工作
- 论文列表
- 团队介绍
- 历史学术博文
- GitHub Pages 与自定义域名部署能力

旧站 `MISC` 内容不迁移。

## 2. 当前开发状态

### 已完成

- 第一阶段：现代科技感首页视觉设计与实现。
- 第二阶段：建立 Astro 5 + TypeScript 骨架并迁移首页。
- 第三阶段页面迁移：
  - 3.1 About
  - 3.2 Research
  - 3.3 Publications
  - 3.4 Team
  - 3.5 全站验收与 GitHub Pages 部署配置
- 已建立 GitHub Pages Actions 工作流。
- 已配置 `public/CNAME` 和 `public/.nojekyll`。
- 已验证现有五个 Astro 页面可静态构建。
- 第四阶段第一部分（历史博文迁移基础架构）已完成：
  - `src/content.config.ts`：`writing` collection，schema 含 `title`、`description`、`publishedAt`、`updatedAt`（可选）、`categories`、`tags`、`draft`、`featured`、`language`（zh/en）、`legacyUrl`（可选）
  - `src/content/writing/draft-fixture-post.md`：draft 内部样例（仅 dev 可见，不进入生产）
  - `src/layouts/PostLayout.astro`：文章详情布局（kicker/标题/日期/分类、prose 排版、标签区）；`SiteLayout.astro` 增加可选 `lang` 属性
  - `src/pages/writing/index.astro`：归档页（按 `publishedAt` 倒序，空状态为正式“迁移中”占位）
  - `src/pages/writing/[...slug].astro`：静态详情路由（`getStaticPaths` + `render`）
  - 导航 Writing 改为 `/writing/`，激活状态支持子路由（`pathname.startsWith(href)`）
  - 首页 Writing 区域查询真实 collection，行链接到文章，底部“All writing”进入归档页
  - 新样式写入 `src/styles/global.css`；移除了 site-v2.css 中不再使用的 `post-row-v2--pending`
- 重要实现细节：
  - Astro 5.18 不会自动过滤 `draft`，必须显式过滤。所有查询使用：
    `getCollection("writing", ({ data }) => import.meta.env.DEV || !data.draft)`
  - 本环境无法读取截图，浏览器验收采用无头 Chrome + iframe 程序化检查（overflow / 菜单 / 激活状态 / 计算样式 / window error 捕获）
  - **`[data-reveal]` 滚动显现 bug（2026-07-31 已修复）**：`js/site-v2.js` 的 IntersectionObserver 原用 `threshold: 0.14`。超长容器（如 8000px+ 的文章正文）永远无法让 14% 高度进入视口 → `is-visible` 永不添加 → 内容保持 `opacity: 0`，页面看起来"全空"。已改为 `threshold: 0.01`（大元素只需 1% 可见即触发）。注意：headless Chrome 虚拟时间下 IO 回调送达极慢，`--dump-dom` 直接检查 `is-visible` 不可靠；验证方式为在顶层文档放 9000px 高模拟元素 + 站点相同 reveal 逻辑，8s 后读 class/opacity
  - **remark-math 6.x 的显示公式规则（重要，第三部分批量迁移必须遵守）**：`$$` 定界符必须各自独占一行（`$$\n...\n$$`）才会被解析为 display math；单行 `$$...$$` 会被解析为行内数学（不产生 `katex-display`），`$$` 后直接跟内容的跨行块（旧 MathJax 写法）会解析失败，把 `$$` 原文漏进 KaTeX 输入并产生 `katex-error`。迁移时统一规范化为 `$$\n...\n$$`（已用脚本对现有 2 篇完成归一化）。
- 第四阶段第二部分（迁移 4 篇代表性文章）已完成：
  - 新建 `src/content/writing/restart.md`、`alltheway.md`、`selfpaced.md`、`cmu-10725-subgradidient.md`（slug 见下节表格）
  - 每篇清理 `{% include JB/setup %}`；诗作以 blockquote + 显式 `<br>` 换行（原 trailing-space 硬换行不可靠）；`${}^1$` 上标引用；`\begin{equation}`/`\begin{split}` → `$...$` + `\begin{aligned}`；`\\\` → `\\`；删除旧站 `<style>` hack
  - 数学归一化：22 个显示公式块（subgradient）+ 2 个（selfpaced）全部规范为 `$$\n...\n$$`
  - 旧图复制到 `public/img/R/cmu10725/{norm,absolute,subgradient,stochastic}.jpg`、`public/img/ml/spl/{spl,curriculum,selfpaced}.jpg`
  - `astro.config.mjs` 增加 4 条旧 URL → `/writing/<slug>/` 静态重定向
- 第五阶段（全站视觉重设计：学术 CV 风 + 全中文，2026-08-03 已完成）：
  - 设计反转：深色 cyber 风 → 白底浅色学术风。`:root` 设计代币改为 `--v2-bg: #ffffff`、`--v2-text: #1a1a2e`、`--v2-accent: #2563eb`（学术蓝）等；导航改为白色毛玻璃
  - 中文字体：Noto Sans SC 正文 + Noto Serif SC 标题（Lora / Open Sans 英文后备）
  - 首页重写为两栏布局 `.home-layout`（左侧 `.profile-sidebar` 340px 固定 + 右侧 `.content-main` 滚动区）；≤760px 侧边栏堆叠到顶部
  - 首页区块：个人简介 / 研究方向 / 最新动态 / 精选论文 / 最新博文
  - 内页（about / research / publications / team / writing）InnerHero 与文案全部中文化；论文标题/作者保持英文
  - Shiki 主题经 `astro.config.mjs` 的 `css-variables` 跟随 `:root` 自动适配浅色
- 第六阶段（首页内容与侧边栏优化，2026-08-03 已完成）：
  - 个人简介：用户提供原文 4 段（`src/data/profile.ts` 的 `bio` 字段，`set:html` 渲染），`.bio-copy p` 加 `text-align: justify` 两端对齐；句尾"更多信息详见个人主页：http://longfeihan.cn"已按用户要求删除
  - 研究方向 3 项卡片：01 图像信号处理（ISP）/ 02 医学图像处理（Medical Image Analysis）/ 03 视觉语言模型（Vision Language Models）
  - 最新动态 2 条：2026-06 MICCAI 2026 接收；2026-03 发表于 Biomedical Signal Processing and Control
  - 侧边栏职称去"硕士生导师"（现为"副教授"）；单位改为"北京工商大学 · 计算机与人工智能学院"
  - "学术链接" 5 项：GitHub / Google Scholar / DBLP / ORCID / Gitee，均带官方图标。图标用 simple-icons 官方 path 内联在 `src/pages/index.astro` 的 `socialIcons: Record<string, string>` 中（svg 16px、`fill: currentColor`，随链接 hover 变色）；`SocialLink` 接口增加 `icon` 字段
  - 移除"语言"栏：`profile.ts` 删除 `languages` 字段，`index.astro` 删除渲染块，`site-v2.css` 删除 `.profile-sidebar__langs` 样式（无其他页面引用，已 grep 确认）
  - 研究兴趣 4 项与研究方向一致：医学图像处理 / 图像信号处理 / 视觉语言模型 / 医学人工智能
  - 教训：Gitee 曾误用后台地址 `edu.gitee.com/longfeihan/dashboard`（访客需登录），已改为公开主页 `https://gitee.com/longfeihan`；社交 URL 一律用公开可访问地址

## 3. 最近一次验证结果

2026-07-31 第一部分完成后执行：

```sh
npm run build
```

结果：

- Astro check：0 errors、0 warnings、0 hints
- 成功生成 6 个页面：`/`、`/about/`、`/research/`、`/publications/`、`/team/`、`/writing/`
- draft fixture 在生产构建中正确排除（preview 访问返回 404），dev 模式可见

浏览器验收（无头 Chrome，1280px 与 390×844，dev 与 preview 双环境）：

- 首页、`/writing/`、fixture 详情页均无横向溢出
- 导航激活状态正确（`/writing/` 与子页面高亮 Writing，首页无激活项）
- 移动菜单开/关正常；无控制台错误
- 计算样式抽查符合设计系统（Lora 标题、cyan 强调、代码块/标签芯片）
- 期间发现并修复：shiki 代码块在移动端 4px 溢出（负边距导致），改为 `box-sizing: border-box; max-width: 100%`
- 生产空状态（归档页 + 首页）渲染正式，非故障样式

截图保存在 `/tmp/drafly-part1-*.png`（本环境无法读取图片，未人工目检）。

2026-07-31 第二部分完成后执行：

```sh
npm run build
```

结果：

- Astro check：0 errors、0 warnings、0 hints
- 成功生成 10 个页面：5 个基础页 + `/writing/` + 4 篇文章页 + 4 条旧 URL 重定向页
- 归档页与首页显示 4 篇文章（restart / selfpaced / alltheway / subgradient，按日期倒序）
- 4 条旧 URL（`/2015/10/02/cmu-10725-subgradidient/` 等）均返回 200 且含 meta-refresh 重定向
- 生产构建不含 draft fixture（404）
- KaTeX 渲染：subgradient 122 个公式元素 / 22 个 display；selfpaced 42 个 / 2 个 display；无 `katex-error`
- 全部图片（`/img/...` 绝对路径）加载成功，无 broken images

浏览器验收（无头 Chrome，1280px 与 390×844，preview 环境）：

- 6 个页面（4 文章 + 归档 + 首页）均无页面级横向溢出（scrollWidth == clientWidth）
- 修复前 subgradient 曾因单行 `$$...$$` 解析为行内数学产生 728px 溢出与 2 处 katex-error；归一化为 `$$\n...\n$$` 后消除
- 宽公式通过 `.post-prose .katex-display { overflow-x: auto }` 在容器内横向滚动，不破坏页面布局
- 导航激活状态（Writing 高亮）、移动菜单开/关、无控制台错误

2026-08-03 第五/六阶段完成后执行：

```sh
npm run build
```

结果：

- Astro check：0 errors、0 warnings、0 hints
- 成功生成 51 个页面（5 基础页 + 归档 + 5 文章页 + 旧 URL 重定向等）
- 产物核对（grep dist/index.html）：「硕士生导师」0 处；「计算机与人工智能学院」1 处；GitHub/Google Scholar/DBLP/ORCID/Gitee 及对应 URL 各 1 处；`profile-sidebar__langs` 0 处；「学术链接」1 处；「更多信息详见个人主页」0 处；`text-align:justify` 已注入构建 CSS
- 无头 Chrome `--dump-dom` 渲染核对：侧边栏 5 个 `<svg>` 图标正常输出、语言栏消失（本环境无法读取截图，`--dump-dom` 是可靠验证手段）

第三阶段此前还完成过以下浏览器验收：

- 桌面宽度 1280px：核心页面、导航状态、Research tabs、Writing 锚点正常
- 移动端 390 × 844：五个页面无横向溢出，菜单打开与 Escape 关闭正常
- 本地静态链接检查：64 个本地引用，0 个缺失
- 浏览器控制台无相关错误

## 4. 下一阶段：历史博文迁移

用户要求继续采用“小阶段开发、完成一阶段后停止并测试”的方式。

### 第一部分：先建立内容基础架构 —— 已完成

2026-07-31 完成，验证通过（见第 3 节）。

### 第二部分：迁移代表性文章 —— 已完成

基础架构已通过，4 篇代表性旧文迁移完成并验证（见第 2 节、第 3 节），用于验证：

- 普通中文 Markdown
- 数学公式（remark-math + rehype-katex + KaTeX CSS）
- 代码块
- 图片与旧资源路径
- raw HTML
- 旧 Jekyll URL 兼容（Astro `redirects` 静态重定向）

不要一次迁移全部 37 篇；每批迁移完成后测试并停下来。

### 第二部分完成后的验证要求

- `npm run build`：0 errors、0 warnings、0 hints。
- 确认 4 篇文章页面生成（`/writing/<slug>/index.html`）。
- 确认 4 条旧 URL 重定向页生成且可访问。
- 数学公式渲染无 KaTeX 报错（rehype-katex 默认 throwOnError，构建期即可捕获）。
- 图片引用 `/img/...` 在移动端不溢出。
- 浏览器验证桌面和 390 × 844 移动端：文章页、归档页、首页 Writing 区域、移动菜单、无横向溢出、无控制台错误。

### 第三部分（后续）：批量迁移其余文章

- 剩余 33 篇按批次迁移，逐批测试。
- `tencent448751524232596047.txt` 排除；`2015-06-11-自动化报告.html`（2.7MB Pandoc HTML）单独处理。
- 17 篇缩进代码块需规范化为 fenced code block。
- 图片迁移按引用路径复制到 `public/img/`。
- **所有显示公式一律规范为 `$$\n...\n$$`（定界符独占一行）**，见第 2 节 remark-math 规则；其余转换规则与第二部分相同（`${}^1$` 上标、`\begin{aligned}` 替换、`\\\` → `\\`、删 style hack、保留 raw HTML 与 `/img/` 路径）。

## 5. 旧 Jekyll 博文审计结果

`_posts/` 共 37 个文件：

- 33 个 `.md`
- 2 个 `.markdown`
- 1 个 `.html`
- 1 个 `.txt`
- 35 个带 YAML frontmatter

特殊文件：

- `2015-06-11-自动化报告.html`：约 2.7 MB 的 Pandoc 独立 HTML，需要单独处理。
- `tencent448751524232596047.txt`：只有数字 token，应排除。

兼容性统计：

- 33 篇包含 `{% include JB/setup %}`
- 2 处包含 `{{ site.baseurl }}`
- 27 篇涉及数学公式或 MathJax
- 21 篇包含内联脚本
- 19 篇包含 raw HTML
- 只有 1 篇使用 fenced code block
- 17 篇使用缩进代码块
- 31 篇引用图片，共约 101 个图片引用
- 已确认真正缺失的图片为 `/img/slide_3.jpg`
- 另有 2 个“缺失”引用只是包含 `{{ site.baseurl }}`，目标图片实际存在，迁移时重写路径即可

迁移难度评估：中高，但可完整迁移。

建议兼容方案：

- 数学公式使用 `remark-math` + KaTeX，移除文章内旧 MathJax 脚本。
- 清理 `{% include JB/setup %}`。
- 将旧缩进代码块规范化，并尽量补充语言标识。
- 保留 `/img/...` 静态资源路径。
- 对 raw HTML 与内联脚本逐篇人工审核，不直接全局替换。
- 排除 `msic.html` 和 Tencent 数字 txt。

## 6. URL 与部署兼容要求

旧 Jekyll 使用：

```yaml
permalink: pretty
```

旧文章 URL 类似：

```text
/2017/07/24/selfpaced/
```

GitHub Pages 没有服务器端 301 重定向能力，因此最安全的方案是：

- 将旧日期 URL 继续作为 canonical 文章地址；或
- 同时生成旧日期路径兼容页和 `/writing/slug/` 新路径。

迁移时必须避免旧搜索链接全部变成 404。动态静态路由可通过 Astro `getStaticPaths()` 实现。

部署文件：

- `.github/workflows/deploy.yml`
- `public/.nojekyll`
- `public/CNAME`

注意：

- `public/CNAME` 当前为 `www.hanlongfei.com`。
- 旧仓库根目录 `CNAME` 为 `longfeihan.cn`。
- Astro 构建采用 `public/CNAME`，但最终正式域名需要用户确认。
- GitHub 仓库 Settings → Pages 需要选择 GitHub Actions 作为发布源。

## 7. 关键实现文件

- `astro.config.mjs`
- `package.json`
- `src/content.config.ts`
- `src/content/writing/`（文章内容集合）
- `src/layouts/SiteLayout.astro`
- `src/layouts/PostLayout.astro`
- `src/components/SiteNav.astro`
- `src/components/InnerHero.astro`
- `src/data/site.ts`
- `src/data/profile.ts`（第六阶段新增：个人信息 / news / 社交 / 兴趣集中管理）
- `src/pages/index.astro`
- `src/pages/writing/index.astro`
- `src/pages/writing/[...slug].astro`
- `src/pages/about/index.astro`
- `src/pages/research/index.astro`
- `src/pages/publications/index.astro`
- `src/pages/team/index.astro`
- `src/styles/global.css`
- `css/site-v2.css`
- `js/site-v2.js`

注意：`SiteLayout.astro` 当前通过：

```astro
<script src="../../js/site-v2.js"></script>
```

Astro 会成功处理并内联该脚本。此前改成绝对 `/js/site-v2.js` 会导致构建失败，除非先正确迁移该静态资源，因此不要直接修改。

## 8. Git 状态与安全要求

当前工作树包含此前所有重构改动，尚未 stage、commit 或 push。不要把这些文件当作垃圾或回滚：

```text
 M .gitignore
 M _includes/head.html
 M _includes/nav.html
 M _layouts/default.html
 M index.html
 M package.json
?? .CODEX_HANDOFF.md.swp   ← vim 交换文件（若 vim 会话已关闭可删除）
?? .github/
?? CODEX_HANDOFF.md
?? astro.config.mjs
?? css/site-v2.css
?? js/site-v2.js
?? package-lock.json
?? public/
?? src/
?? tsconfig.json
```

注：`src/data/profile.ts` 为第六阶段新增的数据驱动文件（个人信息/news 集中管理）。

开发约束：

- 保持当前分支 `codex/modern-blog-redesign`。
- 不要执行 `git reset --hard`、`git checkout --` 等破坏性操作。
- 不要撤销用户或旧站文件中的已有改动。
- 未经用户要求，不要 stage、commit、push 或合并分支。
- 使用 `apply_patch` 修改文件。
- 每个小阶段完成后构建、浏览器测试、汇报并停止。

## 9. 给下一位 Codex 的开工提示

建议下一条任务直接使用：

> 阅读 `CODEX_HANDOFF.md`。当前进度：第六阶段（首页内容与侧边栏优化）已于 2026-08-03 完成并验证（51 页 0 错误）。
> 下一步候选：
> ① 历史博文迁移第三部分——按批次批量迁移剩余文章，遵守第二部分转换规则（`$$\n...\n$$` 显示公式归一化、`${}^1$` 上标、`\begin{aligned}` 替换、删 style hack、保留 raw HTML），迁移 2-3 篇后构建验收；
> ② 首页精选论文 / 最新博文区块内容调整（用户可能继续提内容优化需求）。
> 约束：保持分支 `codex/modern-blog-redesign`；维持浅色学术 CV 设计代币与全中文 UI（论文标题/作者保持英文）；个人资料统一改 `src/data/profile.ts`（勿硬编码到页面）；社交图标继续用 simple-icons 路径方案；每次改动后 `npm run build` + grep 产物 + 无头 Chrome `--dump-dom` 验收；完成后停止并汇报，不要提交或推送。

