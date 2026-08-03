# Longfei Han · Academic Website

韩龙飞的个人学术网站，使用 Astro 5、TypeScript 与静态 Content Collections 构建，内容包括个人简介、研究方向、代表论文、团队成员和历史研究笔记。

线上域名：<https://www.longfeihan.cn>

## 本地开发

要求 Node.js 24 和 npm。

```bash
npm ci
npm run dev
```

默认开发地址为 <http://localhost:4321/>。

生产检查与本地预览：

```bash
npm run build
npm run preview
```

`npm run build` 会先运行 Astro 类型与内容检查，再将静态网站输出到 `dist/`。当前生产构建共生成 51 个页面。

## 目录结构

```text
src/
  components/       Astro 页面组件
  content/writing/  已迁移的历史博文
  data/             个人、团队与论文结构化数据
  layouts/          页面和文章布局
  pages/            首页、论文、团队与博文路由
  styles/           全局与页面样式
public/
  img/              公开图片和 Banner 资源
  papers-figures/   论文封面及结果图
  CNAME             GitHub Pages 自定义域名
.github/workflows/
  deploy.yml        Astro → GitHub Pages 自动部署
```

仓库根目录中的 Jekyll 文件和旧静态页面仅作为迁移来源保留，不参与 Astro 生产构建。网站入口与发布产物均以 `src/`、`public/` 和 `astro.config.mjs` 为准。

## GitHub Pages 部署

仓库已经配置 `.github/workflows/deploy.yml`：

- 推送到 `master` 后自动构建并发布；
- 也可以在 GitHub 的 **Actions → Deploy Astro site to GitHub Pages → Run workflow** 手动发布；
- 构建使用官方 `withastro/action`，发布使用 `actions/deploy-pages`；
- `package-lock.json` 已提交，CI 使用锁定依赖进行可复现安装。

首次启用：

1. 打开仓库 **Settings → Pages**。
2. 在 **Build and deployment → Source** 选择 **GitHub Actions**。
3. 将发布分支合并到 `master`，或从 Actions 页面手动运行工作流。
4. 等待 `Deploy Astro site to GitHub Pages` 工作流完成。

工作流成功后，可在 Actions 运行记录和 **Settings → Pages** 中看到部署 URL。

## 自定义域名

本项目的正式域名统一为 `www.longfeihan.cn`：

- `astro.config.mjs`：`site: "https://www.longfeihan.cn"`
- `public/CNAME`：`www.longfeihan.cn`

GitHub 设置：

1. 打开 **Settings → Pages → Custom domain**。
2. 输入 `www.longfeihan.cn` 并保存。
3. DNS 服务商中添加：
   - `www` 的 `CNAME` 记录指向 `drafly.github.io`；
   - 如需裸域名 `longfeihan.cn` 自动跳转到 `www`，再按 GitHub Pages 提示配置裸域名的 `A`/`AAAA` 或 `ALIAS`/`ANAME` 记录。
4. DNS 生效、GitHub 签发证书后勾选 **Enforce HTTPS**。
5. 建议在 GitHub 个人设置的 **Pages → Add a domain** 中验证域名并保留 TXT 记录，降低域名被接管的风险。

如果以后更换域名，需要同时修改 `astro.config.mjs`、`public/CNAME` 和 GitHub Pages 的 Custom domain 设置。

## 内容维护

- 个人简介与动态：`src/data/profile.ts`
- 论文与团队：`src/data/site.ts`
- 博文：`src/content/writing/`
- 页面 Banner 图片：`public/img/hero/`

新增或修改内容后，提交前至少运行一次：

```bash
npm run build
```
