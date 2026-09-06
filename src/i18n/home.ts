export type Locale = "zh" | "en";

export const homeCopy = {
  zh: {
    metaTitle: "Longfei Han · 韩龙飞",
    metaDescription: "韩龙飞 · 医学人工智能研究者 | 北京工商大学 MAGIC 实验室",
    portraitAlt: "韩龙飞的肖像",
    role: "副教授",
    organization: "北京工商大学 · 计算机与人工智能学院",
    location: "北京 · 中国",
    contactTitle: "联系方式",
    emailLabel: "邮箱",
    addressLabel: "地址",
    academicLinksTitle: "学术链接",
    interestsTitle: "研究兴趣",
    interests: ["医学图像处理", "图像信号处理", "视觉语言模型", "医学人工智能"],
    biographyTitle: "个人简介",
    biography: `<p>长期从事人工智能与智能医疗交叉领域研究，聚焦内窥镜智能分析及医疗人工智能系统研发。</p>
<p>毕业于北京理工大学，获工学博士学位，博士期间赴美国卡内基梅隆大学联合培养。曾任腾讯科技有限公司高级算法工程师，后在中国科学技术大学从事博士后研究。</p>
<p>主持国家自然科学基金面上项目及青年项目，承担国家自然科学基金区域联合基金课题、安徽省重点研发计划等项目，在 IEEE TPAMI、IEEE TCSVT、CVPR、MICCAI 等重要期刊和会议发表高水平学术论文 30 余篇。</p>
<p>致力于人工智能技术与医学应用深度融合，近年来牵头开展多模态智能内镜与医疗人工智能辅助诊断系统研发，推动相关成果由核心算法向系统研制、医疗器械注册和多中心临床验证延伸，形成了较为完整的产学研融合实践。</p>
<blockquote class="bio-quote">如果你未曾失败过，说明你的努力还远远不够——做最好的自己。</blockquote>`,
    contactAction: "联系我",
    researchTitle: "研究方向与应用",
    directions: [
      {
        index: "01",
        title: "图像信号处理（ISP）",
        text: "面向成像系统与医学影像设备的信号处理与图像增强，研究从传感器原始数据到高质量图像的完整处理链路，提升弱光、噪声等复杂条件下的成像质量。"
      },
      {
        index: "02",
        title: "医学图像处理（Medical Image Analysis）",
        text: "聚焦内窥镜等医学影像的智能分析，研究分割、检测与诊断等核心算法，推动人工智能技术在临床诊疗场景中的落地应用。"
      },
      {
        index: "03",
        title: "视觉语言模型（Vision Language Models）",
        text: "研究视觉与语言的跨模态对齐与统一表征，探索多模态大模型在医学影像理解、影像报告生成等任务中的应用。"
      }
    ],
    recruitmentPrefix: "欢迎有自驱力的硕士研究生与高年级本科生加入。请将研究兴趣与简历发送至",
    newsTitle: "近期动态",
    news: [
      { date: "2026-06", text: "一篇论文被 MICCAI 2026 接收。" },
      { date: "2026-03", text: "一篇论文发表于 Biomedical Signal Processing and Control。" }
    ],
    publicationsTitle: "代表性论文",
    publicationImageAlt: "示意图",
    codeLabel: "代码",
    allPublications: "全部论文",
    writingTitle: "近期写作",
    readLabel: "阅读",
    allWriting: "全部博文",
    emptyKicker: "归档迁移中",
    emptyTitle: "历史博文正在陆续迁移。",
    emptyText: "旧站博文将分批迁入本站，第一批文章很快就会与大家见面。",
    postTitles: {} as Record<string, string>
  },
  en: {
    metaTitle: "Longfei Han · Medical AI Researcher",
    metaDescription: "Longfei Han is an associate professor working on medical artificial intelligence, computational imaging, and vision-language models at BTBU.",
    portraitAlt: "Portrait of Longfei Han",
    role: "Associate Professor",
    organization: "School of Computer and Artificial Intelligence · Beijing Technology and Business University",
    location: "Beijing · China",
    contactTitle: "Contact",
    emailLabel: "Email",
    addressLabel: "Location",
    academicLinksTitle: "Academic Profiles",
    interestsTitle: "Research Interests",
    interests: ["Medical Image Analysis", "Image Signal Processing", "Vision-Language Models", "Medical AI"],
    biographyTitle: "Biography",
    biography: `<p>My research lies at the intersection of artificial intelligence and intelligent healthcare, with a focus on intelligent endoscopic analysis and medical AI systems.</p>
<p>I received my Ph.D. in Engineering from Beijing Institute of Technology and was a visiting doctoral researcher at Carnegie Mellon University. Before joining academia, I worked as a senior algorithm engineer at Tencent and later conducted postdoctoral research at the University of Science and Technology of China.</p>
<p>I have served as principal investigator for both the General Program and the Young Scientists Fund of the National Natural Science Foundation of China. I have also contributed to a Regional Joint Fund project of the NSFC and the Anhui Provincial Key Research and Development Program. I have published more than 30 papers in leading journals and conferences, including IEEE TPAMI, IEEE TCSVT, CVPR, and MICCAI.</p>
<p>I am committed to bringing artificial intelligence closer to clinical practice. In recent years, I have led the development of multimodal intelligent endoscopy and AI-assisted diagnostic systems, advancing research from core algorithms to integrated systems, medical-device registration, and multicenter clinical validation.</p>
<blockquote class="bio-quote">If you have never failed, you have not pushed yourself far enough—keep becoming your best self.</blockquote>`,
    contactAction: "Get in touch",
    researchTitle: "Research & Applications",
    directions: [
      {
        index: "01",
        title: "Image Signal Processing (ISP)",
        text: "We study the complete imaging pipeline from raw sensor data to high-quality images, improving imaging performance under challenging conditions such as low light and noise for computational and medical imaging systems."
      },
      {
        index: "02",
        title: "Medical Image Analysis",
        text: "We develop segmentation, detection, and diagnostic methods for endoscopy and other medical imaging modalities, with an emphasis on reliable translation into real clinical workflows."
      },
      {
        index: "03",
        title: "Vision-Language Models",
        text: "We investigate cross-modal alignment and unified visual-language representations, exploring multimodal foundation models for medical image understanding and report generation."
      }
    ],
    recruitmentPrefix: "Motivated master's students and senior undergraduates are welcome to join us. Please send your research interests and CV to",
    newsTitle: "News",
    news: [
      { date: "2026-06", text: "One paper was accepted by MICCAI 2026." },
      { date: "2026-03", text: "One paper was published in Biomedical Signal Processing and Control." }
    ],
    publicationsTitle: "Selected Publications",
    publicationImageAlt: "method overview",
    codeLabel: "Code",
    allPublications: "View all publications",
    writingTitle: "Recent Writing",
    readLabel: "Read",
    allWriting: "View all posts",
    emptyKicker: "Archive in progress",
    emptyTitle: "Historical posts are being migrated.",
    emptyText: "Articles from the previous website will appear here as they are reviewed and migrated.",
    postTitles: {
      restart: "A Little at a Time",
      spld: "Self-Paced Learning with Diversity",
      selfpaced: "An Introduction to Self-Paced Learning",
      alltheway: "The Journey So Far"
    } as Record<string, string>
  }
} as const;

export const siteCopy = {
  zh: {
    nav: { publications: "论文", team: "团队", writing: "博文" },
    primaryNavLabel: "主导航",
    menuLabel: "打开导航菜单",
    toggleMenuText: "切换导航菜单",
    brandLabel: "韩龙飞 — 主页",
    languageLabel: "切换至英文",
    footerName: "韩龙飞 · MAGIC Lab",
    footerMotto: "时间不会辜负每一次认真"
  },
  en: {
    nav: { publications: "Publications", team: "Team", writing: "Writing" },
    primaryNavLabel: "Primary navigation",
    menuLabel: "Open navigation menu",
    toggleMenuText: "Toggle navigation menu",
    brandLabel: "Longfei Han — Home",
    languageLabel: "Switch to Chinese",
    footerName: "Longfei Han · MAGIC Lab",
    footerMotto: "Every sincere effort matters."
  }
} as const;
