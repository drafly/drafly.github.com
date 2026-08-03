---
title: "博文迁移测试草稿（内部样例）"
description: "用于验证文章详情布局与 Content Collections schema 的内部草稿，draft 标记使其不会进入生产归档。"
publishedAt: 2026-07-31
updatedAt: 2026-07-31
categories: ["站点迁移"]
tags: ["fixture", "迁移", "测试"]
draft: true
featured: false
language: "zh"
---

这是一篇用于验证文章详情布局的**内部草稿**（`draft: true`）：

- 在生产构建中会被 Content Collections 自动排除，不会出现在归档中；
- 在本地开发服务器中可见，用于检查详情页排版与 schema 校验。

## 标题层级

### 三级标题

正文段落用于验证中文排版、行高与间距。行内代码 `const x = 1` 应正常渲染。

## 代码块

```ts
export function hello(name: string): string {
  return `Hello, ${name}`;
}
```

## 引用

> 引用块用于验证 blockquote 样式。

## 列表

1. 有序列表第一项
2. 有序列表第二项

- 无序列表条目
- 另一个条目
