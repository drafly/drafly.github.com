import type { ImageMetadata } from "astro";
import avatarImg from "../assets/images/profile/personal2.jpg";

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export const profile = {
  name: { en: "Longfei Han", zh: "韩龙飞" },
  email: "longfeihan@btbu.edu.cn",
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
  ]
};
