import type { ImageMetadata } from "astro";
import avatarImg from "../../img/personal2.jpg";

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export const profile = {
  name: { en: "Longfei Han", zh: "韩龙飞" },
  role: "副教授",
  org: "北京工商大学 · 计算机与人工智能学院",
  email: "longfeihan@btbu.edu.cn",
  location: "北京",
  avatar: avatarImg as ImageMetadata,
  social: [
    { label: "GitHub", url: "https://github.com/drafly", icon: "github" },
    {
      label: "Google Scholar",
      url: "https://scholar.google.com/citations?user=n_YVyJkAAAAJ&hl=zh-CN",
      icon: "googlescholar"
    },
    { label: "DBLP", url: "https://dblp.org/pid/150/2367", icon: "dblp" },
    { label: "ORCID", url: "https://orcid.org/0000-0003-2135-6228", icon: "orcid" },
    { label: "Gitee", url: "https://gitee.com/longfeihan", icon: "gitee" }
  ],
  interests: ["医学图像处理", "图像信号处理", "视觉语言模型", "医学人工智能"],
  bio: `<p>长期从事人工智能与智能医疗交叉领域研究，聚焦内窥镜智能分析及医疗人工智能系统研发。</p>
<p>毕业于北京理工大学，获工学博士学位，博士期间赴美国卡内基梅隆大学联合培养。曾任腾讯科技有限公司高级算法工程师，后在中国科学技术大学从事博士后研究。</p>
<p>主持国家自然科学基金青年项目，承担国家自然科学基金区域联合基金课题、安徽省重点研发计划等项目，在 IEEE TPAMI、IEEE TCSVT、CVPR、MICCAI 等重要期刊和会议发表高水平学术论文 30 余篇。</p>
<p>致力于人工智能技术与医学应用深度融合，近年来牵头开展多模态智能内镜与医疗人工智能辅助诊断系统研发，推动相关成果由核心算法向系统研制、医疗器械注册和多中心临床验证延伸，形成了较为完整的产学研融合实践。</p>
<blockquote class="bio-quote">如果你未曾失败过，说明你的努力还远远不够——做最好的自己。</blockquote>`
};

export const news = [
  { date: "2026-06", text: "一篇论文被 MICCAI 2026 接收。" },
  { date: "2026-03", text: "一篇论文发表于 Biomedical Signal Processing and Control。" }
];

