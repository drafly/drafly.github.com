import type { ImageMetadata } from "astro";

import jyn from "../assets/images/team/jyn.png";
import lwx from "../assets/images/team/lwx.png";
import ybw from "../assets/images/team/ybw.png";
import ymw from "../assets/images/team/ymw.png";
import lxz from "../assets/images/team/lxz.png";
import sws from "../assets/images/team/sws.png";
import wmz from "../assets/images/team/wmz.png";
import zy from "../assets/images/team/zy.png";
import lxh from "../assets/images/team/lxh.png";
import xjy from "../assets/images/team/xjy.png";
import csy from "../assets/images/team/csy.png";
import fzy from "../assets/images/team/fzy.png";
import mf from "../assets/images/team/mf.jpg";
import lf from "../assets/images/team/lf.jpg";

import acmmm from "../assets/images/publications/acmmm.jpg";
import sequenceSpecific from "../assets/images/publications/Sequence-Specific.png";
import figSpmor from "../assets/images/publications/fig_spmor.png";
import smmor from "../assets/images/publications/smmor.png";

export interface TeamMember {
  name: string;
  chineseName: string;
  program: string;
  /** 入学年份（学制 3 年）。 */
  enrolled: number;
  email?: string;
  image: ImageMetadata;
  category?: "student" | "visitor-intern";
}

/** 学制 3 年，返回毕业年份。 */
export function gradYear(m: TeamMember): number {
  return m.enrolled + 3;
}

/** 判断是否已毕业（每年 7 月起算下一学年，学制 3 年）。 */
export function isGraduated(m: TeamMember): boolean {
  const now = new Date();
  const gy = gradYear(m);
  return now.getFullYear() > gy || (now.getFullYear() === gy && now.getMonth() >= 6);
}

export const team: TeamMember[] = [
  { name: "Yanan Jia", chineseName: "贾亚楠", program: "BTBU M.E.", enrolled: 2021, email: "jiaynstudy@163.com", image: jyn },
  { name: "Wenxin Li", chineseName: "李文欣", program: "BTBU M.E.", enrolled: 2021, email: "liwenxin990706@163.com", image: lwx },
  { name: "Bowen Yan", chineseName: "燕博文", program: "BTBU M.E.", enrolled: 2021, email: "906673822@qq.com", image: ybw },
  { name: "Mengwei Yan", chineseName: "闫梦伟", program: "BTBU M.E.", enrolled: 2021, email: "yandreamw@163.com", image: ymw },
  { name: "Xinze Li", chineseName: "李欣泽", program: "BTBU M.E.", enrolled: 2022, email: "1499810932@qq.com", image: lxz },
  { name: "Wenshuai Song", chineseName: "宋文帅", program: "BTBU M.E.", enrolled: 2022, email: "2922133057@qq.com", image: sws },
  { name: "Mengzhen Wang", chineseName: "王梦真", program: "BTBU M.E.", enrolled: 2023, email: "wmzhappy123@163.com", image: wmz },
  { name: "Ying Zhai", chineseName: "翟颖", program: "BTBU M.E.", enrolled: 2023, email: "zhaiying0925@163.com", image: zy },
  { name: "Xinhui Liu", chineseName: "刘芯卉", program: "BTBU M.E.", enrolled: 2024, image: lxh },
  { name: "Ziyi Fu", chineseName: "付梓毅", program: "BTBU M.E.", enrolled: 2024, image: fzy },
  { name: "Jingyue Xu", chineseName: "徐菁悦", program: "BTBU M.E.", enrolled: 2025, image: xjy },
  { name: "Siyue Chen", chineseName: "陈思月", program: "BTBU M.E.", enrolled: 2025, image: csy },
  { name: "Fan Mo", chineseName: "莫凡", program: "BTBU M.E.", enrolled: 2026, image: mf },
  { name: "Feng Lin", chineseName: "林峰", program: "BTBU M.E.", enrolled: 2026, image: lf }
];

export interface Publication {
  slug: string;
  title: string;
  /** 完整作者列表（* 表示通讯作者）。 */
  authors: string;
  venue: string;
  year: number;
  /** 封面图（Astro 导入的图片资源）。 */
  image?: ImageMetadata;
  /** 封面图（公开静态路径，优先于 image）。 */
  imageSrc?: string;
  abstract?: string;
  /** 论文的一句话描述（英文，显示在封面图下方）。 */
  description?: string;
  /** 作者单位（对应作者/团队单位，缺省不显示）。 */
  affiliation?: string;
  /** 封面图宽高比（列表缩略图容器自适应，避免留白）。 */
  coverRatio?: number;
  /** 主要结果图宽高比（封面较宽时在缩略图中拼贴）。 */
  resultsRatio?: number;
  /** 主要结果文字描述。 */
  results?: string;
  /** 主要结果图（本地路径，优先于 results）。 */
  resultsImage?: string;
  /** 主要结果图说明。 */
  resultsCaption?: string;
  bibtex?: string;
  code?: string;
  paperUrl?: string;
  arxivUrl?: string;
  officialUrl?: string;
  doi?: string;
}

/** 取论文封面图地址（imageSrc 优先）。 */
export const pubCover = (pub: Publication): string | undefined => pub.imageSrc ?? pub.image?.src;

export const publications: Publication[] = [
  {
    slug: "retinex-rawmamba",
    title: "Retinex-RAWMamba: Bridging Demosaicing and Denoising for Low-Light RAW Image Enhancement",
    authors: "Xianmin Chen, Longfei Han*, Peiliang Huang, Xiaoxu Feng, Dingwen Zhang, Junwei Han",
    venue: "IEEE TCSVT",
    year: 2026,
    imageSrc: "/papers-figures/retinex-rawmamba-cover.jpg",
    coverRatio: 1.183,
    resultsRatio: 1.654,
    description:
      "We propose Retinex-RAWMamba, a Mamba-based network for low-light RAW-to-sRGB enhancement that bridges demosaicing and denoising: a Retinex Decomposition Module decouples illumination from reflectance for more effective denoising and automatic nonlinear exposure correction, achieving state-of-the-art performance on SID and MCR.",
    affiliation: "北京工商大学 · 计算机学院",
    abstract:
      "Low-light image enhancement, particularly in cross-domain tasks such as mapping from the raw domain to the sRGB domain, remains a significant challenge. Many deep learning-based methods have been developed to address this issue and have shown promising results in recent years. However, single-stage methods, which attempt to unify the complex mapping across both domains, lead to limited denoising performance. In contrast, existing two-stage approaches typically overlook the characteristic of demosaicing within the Image Signal Processing (ISP) pipeline, leading to color distortions under varying lighting conditions, especially in low-light scenarios. To address these issues, we propose a novel Mamba-based method customized for low light RAW images, called RAWMamba, to effectively handle raw images with different CFAs. Furthermore, we introduce a Retinex Decomposition Module (RDM) grounded in Retinex prior, which decouples illumination from reflectance to facilitate more effective denoising and automatic non-linear exposure correction, reducing the effect of manual linear illumination enhancement. By bridging demosaicing and denoising, better enhancement for low light RAW images is achieved. Experimental evaluations conducted on public datasets SID and MCR demonstrate that our proposed RAWMamba achieves state-of-the-art performance on cross-domain mapping.",
    resultsImage: "/papers-figures/retinex-rawmamba-results.jpg",
    resultsCaption: "SID 数据集上与多种 SOTA 方法的可视化对比（红、绿框区域为放大细节）。",
    paperUrl: "https://doi.org/10.1109/TCSVT.2025.3589476",
    code: "https://github.com/Cynicarlos/RetinexRawMamba",
    doi: "10.1109/TCSVT.2025.3589476",
    bibtex: `@article{chen2026rawmamba,
  author  = {Chen, Xianmin and Han, Longfei and Huang, Peiliang and Feng, Xiaoxu and Zhang, Dingwen and Han, Junwei},
  title   = {Retinex-RAWMamba: Bridging Demosaicing and Denoising for Low-Light {RAW} Image Enhancement},
  journal = {IEEE Transactions on Circuits and Systems for Video Technology},
  volume  = {36},
  number  = {1},
  pages   = {406--420},
  year    = {2026},
  doi     = {10.1109/TCSVT.2025.3589476}
}`
  },
  {
    slug: "fulnet",
    title: "Frequency-augmented and uncertainty-aware learning for polyp segmentation",
    authors: "Ying Zhai, Huiqian Li, Longfei Han*, Haisheng Li",
    venue: "Biomedical Signal Processing and Control",
    year: 2026,
    imageSrc: "/papers-figures/fulnet-cover.jpg",
    coverRatio: 2.011,
    resultsRatio: 2.491,
    description:
      "We propose FULNet for polyp segmentation, combining Frequency-Augmented Learning (FAL) to enrich data-style diversity while preserving lesion morphology and Uncertainty-Aware Learning (UAL) to improve segmentation on complex and ambiguous regions, validated on five datasets with SegNeXt and PraNet baselines.",
    affiliation: "北京工商大学 · 计算机学院",
    abstract:
      "Polyp segmentation plays a crucial role in the early diagnosis of colorectal cancer, yet it still faces two major challenges in practical applications. First, the scarcity of annotated data limits the model's ability to learn the diverse characteristics of polyps, while existing data augmentation methods often distort key lesion structures during sample expansion. Second, current algorithms remain insufficient in handling complex and ambiguous regions. To address these issues, we propose the Frequency-Augmented and Uncertainty-Aware Learning Network (FULNet), which incorporates Frequency-Augmented Learning (FAL) to enhance data-style diversity while preserving lesion morphology, and Uncertainty-Aware Learning (UAL) to improve segmentation performance in challenging regions. We validated our proposed method on five datasets using SegNeXt and PraNet as baselines to demonstrate the generalization ability. On two unseen datasets, SegNeXt achieved 2.5% and 4.4% Dice improvement on CVC-ColonDB and ETIS, while PraNet improved by 3.2% and 6.2% respectively.",
    resultsImage: "/papers-figures/fulnet-results.jpg",
    resultsCaption: "在五个数据集上与多种分割方法的可视化对比。",
    paperUrl: "https://doi.org/10.1016/j.bspc.2026.110346",
    code: "https://github.com/zhaiying0925/FULNet",
    doi: "10.1016/j.bspc.2026.110346",
    bibtex: `@article{zhai2026fulnet,
  author  = {Zhai, Ying and Li, Huiqian and Han, Longfei and Li, Haisheng},
  title   = {Frequency-augmented and uncertainty-aware learning for polyp segmentation},
  journal = {Biomedical Signal Processing and Control},
  year    = {2026},
  doi     = {10.1016/j.bspc.2026.110346}
}`
  },
  {
    slug: "decouplenet",
    title: "DecoupleNet: Domain-specific task decoupling network for low-light image enhancement",
    authors: "Peiliang Huang, Xianmin Chen, Xiaoxu Feng, Qiangqiang Wang, Dingwen Zhang, Longfei Han*, Junwei Han",
    venue: "Pattern Recognition",
    year: 2025,
    imageSrc: "/papers-figures/decouplenet-cover.jpg",
    coverRatio: 2.503,
    resultsRatio: 1.765,
    description:
      "We propose DecoupleNet, which decouples low-light RAW-to-sRGB enhancement into RAW-domain denoising and sRGB-domain color correction subtasks, with spatial frequency blocks in both domains capturing fine details and textures, surpassing state-of-the-art methods on SID, MCR, and Fuji datasets.",
    affiliation: "北京工商大学 · 计算机学院",
    abstract:
      "Mapping noisy, low-light RAW images to well-exposed sRGB images is both a promising and challenging task. Traditional Image Signal Processing (ISP) pipelines exhibit suboptimal performance in extreme low-light environments. Existing deep learning-based approaches, including both single-stage and multi-stage methods, have shown great potential in enhancing RAW low-light images. Single-stage models usually struggle with domain ambiguity. Conversely, multi-stage models tend to neglect domain-specific challenges due to their reliance on similar modules across various domains, which may lead to suboptimal performance. To address these limitations, we propose a domain-specific task decoupling network (DecoupleNet) designed to deeply decouple the entangled task into two subtasks across the two domains. Specifically, we introduce a channel-normalized denoising block for effective noise suppression in the RAW domain, as well as a color correction transformer block for precise color correction in the sRGB domain. Furthermore, we design a spatial frequency block in both domains to capture fine details and textures, highlighting the often underutilized role of frequency information. Extensive experiments demonstrate that our approach achieves competitive performance, surpassing state-of-the-art methods on specific metrics across the SID and MCR datasets. Specifically, 0.12 PSNR improvement on Sony dataset, 3.03% PSNR improvement on MCR dataset and a 0.094 reduction in LPIPS on the Fuji dataset.",
    resultsImage: "/papers-figures/decouplenet-results.jpg",
    resultsCaption: "Sony 数据集上的定性对比（与 SID、EEMEFN、MCR 等方法）。",
    paperUrl: "https://doi.org/10.1016/j.patcog.2025.112203",
    code: "https://github.com/drafly/decouplenet",
    doi: "10.1016/j.patcog.2025.112203",
    bibtex: `@article{huang2025decouplenet,
  author  = {Huang, Peiliang and Chen, Xianmin and Feng, Xiaoxu and Wang, Qiangqiang and Zhang, Dingwen and Han, Longfei and Han, Junwei},
  title   = {DecoupleNet: Domain-specific task decoupling network for low-light image enhancement},
  journal = {Pattern Recognition},
  year    = {2025},
  doi     = {10.1016/j.patcog.2025.112203}
}`
  },
  {
    slug: "aca-gcn",
    title: "Adaptive composing augmentations on multi-modal graph convolutional network for disease prediction",
    authors: "Longfei Han, Mengzhen Wang, Xiangsen Zhang, Wenxin Li, Haisheng Li*, Xiankai Huang",
    venue: "Computers and Electrical Engineering",
    year: 2025,
    imageSrc: "/papers-figures/aca-gcn-cover.jpg",
    coverRatio: 1.92,
    resultsRatio: 2.341,
    description:
      "We propose an adaptive composing augmentation framework for multimodal GCN disease prediction that applies graph contrastive learning with learnable node confidence and selective edge perturbation, achieving 87.95% ACC and 90.05% AUC on ABIDE, significantly outperforming baseline and existing methods.",
    affiliation: "北京工商大学 · 计算机学院",
    abstract:
      "Graph Convolutional Networks (GCNs) have demonstrated significant success in population-based disease prediction. With the rise of multimodal technologies, multimodal GCNs integrate information from diverse data types, enhancing prediction accuracy, particularly in the fusion of imaging and non-imaging data. However, constructing a reliable population graph from limited multimodal data may result in poor generalization performance. To address this issue, we introduce graph contrastive learning as a multimodal data augmentation strategy, which reinforces the graph structure's robustness to disturbances. We propose an Adaptive Composing Augmentation framework that first employs a learnable similarity network to iteratively compute node confidence. Subsequently, the framework selectively perturbs edges of lesser importance within the graph through methods such as edge removal and edge weight permutation. Extensive experiments on three challenging medical datasets demonstrate that our method achieves state-of-the-art performance, including an accuracy (ACC) of 87.95% and area under the curve (AUC) of 90.05% on the ABIDE dataset. These results significantly outperform the baseline models, with improvements of 7.12% and 5.07%, and surpass existing methods by 6.2% and 4.83%, respectively. This confirms that contrastive learning with structured augmentations effectively enhances the generalization ability of multimodal GCNs.",
    resultsImage: "/papers-figures/aca-gcn-results.jpg",
    resultsCaption: "ABIDE 数据集上 ACA-GCN 与基线 EV-GCN 的五个指标对比。",
    paperUrl: "https://doi.org/10.1016/j.compeleceng.2025.110277",
    code: "https://github.com/drafly/ACA-GCN",
    doi: "10.1016/j.compeleceng.2025.110277",
    bibtex: `@article{han2025acagcn,
  author  = {Han, Longfei and Wang, Mengzhen and Zhang, Xiangsen and Li, Wenxin and Li, Haisheng and Huang, Xiankai},
  title   = {Adaptive composing augmentations on multi-modal graph convolutional network for disease prediction},
  journal = {Computers and Electrical Engineering},
  year    = {2025},
  doi     = {10.1016/j.compeleceng.2025.110277}
}`
  },
  {
    slug: "low-light-diffusion-denoising",
    title: "Low-light image denoising with learnable diffusion prior",
    authors: "Longfei Han, Mengzhen Wang",
    venue: "Signal, Image and Video Processing",
    year: 2025,
    imageSrc: "/papers-figures/low-light-diffusion-denoising-cover.jpg",
    coverRatio: 2.581,
    resultsRatio: 2.194,
    description:
      "We propose a multi-task framework that jointly learns noise prediction and removal end-to-end, integrating a noise prediction network with an exposure diffusion model to provide a learnable denoising prior, achieving excellent results on the SID and ELD datasets.",
    affiliation: "北京工商大学 · 计算机学院",
    abstract:
      "In most low-light RAW image enhancement methods, light intensity is amplified first, followed by denoising using deep networks or algorithms. However, noise in low-light environments has high-frequency characteristics and uneven distribution, leading to detail loss during denoising. By predicting noise, we can better distinguish between noise and details. In this paper, we propose a multi-task learning framework that jointly learns noise prediction and removal in an end-to-end manner, benefiting from the mutual enhancement between the tasks. Our framework integrates a noise prediction network into the exposure diffusion model. Compared to other denoising models, the diffusion model addresses content inconsistency in low-light images by incorporating stepwise diffusion and interaction between noise and details. Specifically, the low-light RAW image is passed through the noise prediction network to generate a residual map, which is then input into an interaction module to produce a denoising prior. This prior is fed into the exposure diffusion model for guided denoising, resulting in an image close to the ideal RAW image. Unlike traditional models that focus on noise diversity, our approach emphasizes discriminability in the diffusion process, making it more suitable for tasks requiring both diversity and precision. We achieved excellent results on the SID and ELD datasets.",
    resultsImage: "/papers-figures/low-light-diffusion-denoising-results.jpg",
    resultsCaption: "使用相同 ISP 处理流水线得到的与多种方法的可视化对比结果。",
    paperUrl: "https://doi.org/10.1007/s11760-025-04444-6",
    code: "https://github.com/fengzhang427/LRD",
    doi: "10.1007/s11760-025-04444-6",
    bibtex: `@article{han2025lrd,
  author  = {Han, Longfei and Wang, Mengzhen},
  title   = {Low-light image denoising with learnable diffusion prior},
  journal = {Signal, Image and Video Processing},
  volume  = {19},
  number  = {929},
  year    = {2025},
  doi     = {10.1007/s11760-025-04444-6}
}`
  },
  {
    slug: "mhkd",
    title: "MHKD: Multi-Step Hybrid Knowledge Distillation for Low-Resolution Whole Slide Images Glomerulus Detection",
    authors: "Xiangsen Zhang, Longfei Han*, Chenchu Xu, Zhaohui Zheng, Jin Ding, Xianghui Fu, Dingwen Zhang, Junwei Han",
    venue: "IEEE JBHI",
    year: 2025,
    imageSrc: "/papers-figures/mhkd-cover.jpg",
    coverRatio: 1.344,
    resultsRatio: 2.332,
    description:
      "We pioneer glomerulus detection on low-resolution kidney pathology images, proposing a multi-step hybrid knowledge distillation method that successively transfers global features and semantic information from high-resolution models through offline and online distillation, achieving AP0.5:0.95 improvements of 23.1% (LN) and 15.9% (HUBMAP).",
    affiliation: "北京工商大学 · 计算机学院",
    abstract:
      "Glomerulus detection is a critical component of renal histopathology assessment, essential for diagnosing glomerulonephritis. To mitigate the increasing workload on pathologists, AI-assisted diagnostic methods based on high-resolution digital pathology whole slide images have been developed. However, these current AI-assisted approaches are limited to high-resolution whole slide images, necessitating expensive digital scanner equipment, high image storage costs, and significant computational complexity. To address this limitation, this paper pioneers a method for facilitating glomerulus detection in low-resolution human kidney pathology images. Specifically, we propose a novel multi-step hybrid knowledge distillation method. Our method distills both the global features and the semantic information through a hybrid knowledge distillation strategy that integrates offline and online knowledge distillation, where the information from high-resolution pathological images is successively transferred to student model from the global features in the shallow network layers to the semantic information of the back-end through a multi-step training strategy. Experimental results on two datasets show that the proposed method achieves effective detection outcomes for low-resolution kidney pathology images. Compared to other state-of-the-art detection techniques, our method achieves an AP 0.5:0.95 improvement of 23.1% on the private LN dataset and 15.9% on the public HUBMAP dataset.",
    resultsImage: "/papers-figures/mhkd-results.jpg",
    resultsCaption: "不同方法的检测结果可视化（红框为假阳性，黄框为假阴性）。",
    paperUrl: "https://doi.org/10.1109/JBHI.2024.3513716",
    doi: "10.1109/JBHI.2024.3513716",
    bibtex: `@article{zhang2025mhkd,
  author  = {Zhang, Xiangsen and Han, Longfei and Xu, Chenchu and Zheng, Zhaohui and Ding, Jin and Fu, Xianghui and Zhang, Dingwen and Han, Junwei},
  title   = {MHKD: Multi-Step Hybrid Knowledge Distillation for Low-Resolution Whole Slide Images Glomerulus Detection},
  journal = {IEEE Journal of Biomedical and Health Informatics},
  volume  = {29},
  number  = {2},
  pages   = {767--774},
  year    = {2025},
  doi     = {10.1109/JBHI.2024.3513716}
}`
  },
  {
    slug: "dense-nuclei-detection",
    title: "Position-based anchor optimization for point supervised dense nuclei detection",
    authors: "Jieru Yao, Longfei Han, Guangyu Guo, Zhaohui Zheng*, Runmin Cong, Xiankai Huang, Jin Ding, Kaihui Yang, Dingwen Zhang, Junwei Han",
    venue: "Neural Networks",
    year: 2024,
    imageSrc: "/papers-figures/dense-nuclei-detection-cover.jpg",
    coverRatio: 1.673,
    resultsRatio: 1.089,
    description:
      "We propose a point-supervised dense nuclei detection framework that combines morphology-based pseudo labels with position-based anchor optimization, including anchor-quality estimation and adaptive anchor selection, achieving 95.1% of fully-supervised performance in dense nuclei scenarios on MO and Lizard.",
    affiliation: "北京工商大学 · 计算机学院",
    abstract:
      "Nuclei detection is one of the most fundamental and challenging problems in histopathological image analysis, which can localize nuclei to provide effective computer-aided cancer diagnosis, treatment decision, and prognosis. The fully-supervised nuclei detector requires a large number of nuclei annotations on high-resolution digital images, which is time-consuming and needs human annotators with professional knowledge. In recent years, weakly-supervised learning has attracted significant attention in reducing the labeling burden. However, detecting dense nuclei of complex crowded distribution and diverse appearances remains a challenge. To solve this problem, we propose a novel point-supervised dense nuclei detection framework that introduces position-based anchor optimization to complete morphology-based pseudo-label supervision. Specifically, we first generate cellular-level pseudo labels (CPL) for the detection head via a morphology-based mechanism, which can help to build a baseline point-supervised detection network. Then, considering the crowded distribution of the dense nuclei, we propose a mechanism called Position-based Anchor-quality Estimation (PAE), which utilizes the positional deviation between an anchor and its corresponding point label to suppress low-quality detections far from each nucleus. Finally, to better handle the diverse appearances of nuclei, an Adaptive Anchor Selector (AAS) operation is proposed to automatically select positive and negative anchors according to morphological and positional statistical characteristics of nuclei. We conduct comprehensive experiments on two widely used benchmarks, MO and Lizard, using ResNet50 and PVTv2 as backbones. The results demonstrate that the proposed approach has superior capacity compared with other state-of-the-art methods. In particularly, in dense nuclei scenarios, our method can achieve 95.1% performance of the fully-supervised approach.",
    resultsImage: "/papers-figures/dense-nuclei-detection-results.jpg",
    resultsCaption: "MO 与 Lizard 测试集上的检测结果对比。",
    paperUrl: "https://doi.org/10.1016/j.neunet.2023.12.006",
    code: "https://github.com/NucleiDet/DenseNucleiDet",
    doi: "10.1016/j.neunet.2023.12.006",
    bibtex: `@article{yao2024pba,
  author  = {Yao, Jieru and Han, Longfei and Guo, Guangyu and Zheng, Zhaohui and Cong, Runmin and Huang, Xiankai and Ding, Jin and Yang, Kaihui and Zhang, Dingwen and Han, Junwei},
  title   = {Position-based anchor optimization for point supervised dense nuclei detection},
  journal = {Neural Networks},
  volume  = {171},
  pages   = {159--170},
  year    = {2024},
  doi     = {10.1016/j.neunet.2023.12.006}
}`
  },
  {
    slug: "image-text-matching",
    title: "Giving Text More Imagination Space for Image-text Matching",
    authors: "Xinfeng Dong, Longfei Han†, Dingwen Zhang, Li Liu, Junwei Han, Huaxiang Zhang",
    venue: "ACM MM",
    year: 2023,
    image: acmmm,
    coverRatio: 1.986,
    resultsRatio: 1.894,
    description:
      "We tackle image-text matching under weak alignment from the perspective of information difference, proposing an imagination network built on pre-trained models that enriches text semantics via reinforcement learning, with an action refinement strategy constraining the freedom and divergence of imagination.",
    affiliation: "北京工商大学 · 计算机学院",
    abstract:
      "Image-text matching is a hot topic in multi-modal analysis. The existing image-text matching algorithms focus on bridging the heterogeneity gap and mapping the feature into a common space under strong alignment assumption. However, these methods have unsatisfactory performance under the weak alignment scenario, which assumes that the text contains more abstract information, and the number of entities in the text is always fewer than objects in image. This is the first time, from our knowledge, to solve the image-text matching problem from the perspective of information difference with weak alignment. In order to both narrow the cross-modal heterogeneity gap and balance the information discrepancy, we proposed an imagination network to enrich the text modality based on pre-trained framework, which is helpful for image-text matching. The imagination network utilizes reinforcement learning to enhance the semantic information for text modality, and an action refinement strategy is designed to constrain the freedom and divergence of imagination. The experiment results show the superiority and generality of the proposed framework based on two pre-trained models, CLIP and BLIP on two most frequently-used datasets MSCOCO and Flickr30K.",
    resultsImage: "/papers-figures/image-text-matching-results.jpg",
    resultsCaption: "CLIP 与 Imagination-CLIP 的图文检索结果对比。",
    paperUrl: "https://doi.org/10.1145/3581783.3612103",
    doi: "10.1145/3581783.3612103",
    bibtex: `@inproceedings{dong2023imagination,
  author    = {Dong, Xinfeng and Han, Longfei and Zhang, Dingwen and Liu, Li and Han, Junwei and Zhang, Huaxiang},
  title     = {Giving Text More Imagination Space for Image-text Matching},
  booktitle = {Proceedings of the 31st ACM International Conference on Multimedia (MM)},
  year      = {2023},
  doi       = {10.1145/3581783.3612103}
}`
  },
  {
    slug: "isp-pipeline-optimization",
    title: "Learning to Exploit the Sequence-Specific Prior Knowledge for Image Processing Pipelines Optimization",
    authors: "Haina Qin, Longfei Han, Weihua Xiong, Juan Wang, Wentao Ma, Bing Li, Weiming Hu",
    venue: "CVPR",
    year: 2023,
    image: sequenceSpecific,
    coverRatio: 1.826,
    resultsRatio: 1.887,
    description:
      "We propose a sequential ISP hyperparameter prediction framework that exploits the sequential relationships among hardware ISP pipeline modules and the similarity among parameters to predict hyperparameters module by module, validated on object detection, image segmentation, and image quality tasks.",
    affiliation: "北京工商大学 · 计算机学院",
    abstract:
      "The hardware image signal processing (ISP) pipeline is the intermediate layer between the imaging sensor and the downstream application, processing the sensor signal into an RGB image. The ISP is less programmable and consists of a series of processing modules. Each processing module handles a subtask and contains a set of tunable hyperparameters. A large number of hyperparameters form a complex mapping with the ISP output. The industry typically relies on manual and time-consuming hyperparameter tuning by image experts, biased towards human perception. Recently, several automatic ISP hyperparameter optimization methods using downstream evaluation metrics come into sight. However, existing methods for ISP tuning treat the high-dimensional parameter space as a global space for optimization and prediction all at once without inducing the structure knowledge of ISP. To this end, we propose a sequential ISP hyperparameter prediction framework that utilizes the sequential relationship within ISP modules and the similarity among parameters to guide the model sequence process. We validate the proposed method on object detection, image segmentation, and image quality tasks.",
    resultsImage: "/papers-figures/isp-pipeline-optimization-results.jpg",
    resultsCaption: "COCO 上的目标检测（左）与图像分割（右）任务（上：默认 ISP，下：提出的方法）。",
    paperUrl: "https://ieeexplore.ieee.org/document/10204270",
    officialUrl: "https://openaccess.thecvf.com/content/CVPR2023/html/Qin_Learning_To_Exploit_the_Sequence-Specific_Prior_Knowledge_for_Image_Processing_CVPR_2023_paper.html",
    bibtex: `@inproceedings{qin2023sequence,
  author    = {Qin, Haina and Han, Longfei and Xiong, Weihua and Wang, Juan and Ma, Wentao and Li, Bing and Hu, Weiming},
  title     = {Learning to Exploit the Sequence-Specific Prior Knowledge for Image Processing Pipelines Optimization},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year      = {2023}
}`
  },
  {
    slug: "self-paced-mixture-regression",
    title: "Self-paced Mixture of Regression",
    authors: "Longfei Han, Dingwen Zhang, Dong Huang, Xiaojun Chang, Junwei Han",
    venue: "IJCAI",
    year: 2017,
    image: figSpmor,
    coverRatio: 1.094,
    resultsRatio: 1.445,
    description:
      "We introduce self-paced learning into mixture of regressions, proposing a novel self-paced regularizer based on Exclusive LASSO that alleviates intra-component outliers and inter-component data imbalance, achieving superior performance on age estimation and glucose estimation.",
    abstract:
      "Mixture of regressions (MoR) is the well-established and effective approach to model discontinuous and heterogeneous data in regression problems. Existing MoR approaches assume smooth joint distribution for its good analytic properties. However, such assumption makes existing MoR very sensitive to intra-component outliers (the noisy training data residing in certain components) and the inter-component imbalance (the different amounts of training data in different components). In this paper, we make the earliest effort on Self-paced Learning (SPL) in MoR, i.e., Self-paced mixture of regressions (SPMoR) model. We propose a novel self-paced regularizer based on the Exclusive LASSO, which improves inter-component balance of training data. As a robust learning regime, SPL pursues confidence sample reasoning. To demonstrate the effectiveness of SPMoR, we conducted experiments on both the synthetic examples and real-world applications to age estimation and glucose estimation.",
    resultsImage: "/papers-figures/spmor-results.jpg",
    resultsCaption: "SPMoR 在合成数据上的混合回归结果（Mote-1 / Mote-2 分量）。",
    paperUrl: "https://doi.org/10.24963/ijcai.2017/252",
    officialUrl: "https://www.ijcai.org/proceedings/2017/252",
    doi: "10.24963/ijcai.2017/252",
    bibtex: `@inproceedings{han2017spmor,
  author    = {Han, Longfei and Zhang, Dingwen and Huang, Dong and Chang, Xiaojun and Han, Junwei},
  title     = {Self-paced Mixture of Regression},
  booktitle = {Proceedings of the 26th International Joint Conference on Artificial Intelligence (IJCAI)},
  year      = {2017},
  doi       = {10.24963/ijcai.2017/252}
}`
  },
  {
    slug: "soft-margin-mixture-regression",
    title: "Soft-margin Mixture of Regression",
    authors: "Dong Huang*, Longfei Han*, Fernando De la Torre",
    venue: "CVPR",
    year: 2017,
    image: smmor,
    coverRatio: 0.93,
    description:
      "We propose Soft-Margin Mixture of Regressions (SMMR), which directly learns homogeneous partitions of the input space while handling discontinuities between partitions, outperforming state-of-the-art methods on age estimation, crowd counting, and viewpoint estimation.",
    abstract:
      "Nonlinear regression is a common statistical tool to solve many computer vision problems (e.g., age estimation, pose estimation). Existing approaches to nonlinear regression fall into two main categories: (1) The universal approach provides an implicit or explicit homogeneous feature mapping (e.g., kernel ridge regression, Gaussian process regression, neural networks). These approaches may fail when data is heterogeneous or discontinuous. (2) Divide-and-conquer approaches partition a heterogeneous input feature space and learn multiple local regressors. However, existing divide-and-conquer approaches fail to deal with discontinuities between partitions (e.g., Gaussian mixture of regressions) and they cannot guarantee that the partitioned input space will be homogeneously modeled by local regressors (e.g., ordinal regression). To address these issues, this paper proposes Soft-Margin Mixture of Regressions (SMMR), a method that directly learns homogeneous partitions of the input space and is able to deal with discontinuities. SMMR outperforms the state-of-the-art methods on three popular computer vision tasks: age estimation, crowd counting and viewpoint estimation from images.",
    resultsImage: "/papers-figures/smmor-results.jpg",
    resultsCaption: "年龄估计上的回归可视化对比（SMMR 与 GPR、GMR）。",
    paperUrl: "https://ieeexplore.ieee.org/document/8099915",
    officialUrl: "https://openaccess.thecvf.com/content_cvpr_2017/html/Huang_Soft-Margin_Mixture_of_CVPR_2017_paper.html",
    bibtex: `@inproceedings{huang2017smmr,
  author    = {Huang, Dong and Han, Longfei and De la Torre, Fernando},
  title     = {Soft-margin Mixture of Regression},
  booktitle = {Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},
  year      = {2017}
}`
  }
];
