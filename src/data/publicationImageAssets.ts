import type { ImageMetadata } from "astro";

import retinexCover from "../../public/papers-figures/retinex-rawmamba-cover.jpg";
import retinexResults from "../../public/papers-figures/retinex-rawmamba-results.jpg";
import fulnetCover from "../../public/papers-figures/fulnet-cover.jpg";
import fulnetResults from "../../public/papers-figures/fulnet-results.jpg";
import decouplenetCover from "../../public/papers-figures/decouplenet-cover.jpg";
import decouplenetResults from "../../public/papers-figures/decouplenet-results.jpg";
import acaGcnCover from "../../public/papers-figures/aca-gcn-cover.jpg";
import acaGcnResults from "../../public/papers-figures/aca-gcn-results.jpg";
import diffusionCover from "../../public/papers-figures/low-light-diffusion-denoising-cover.jpg";
import diffusionResults from "../../public/papers-figures/low-light-diffusion-denoising-results.jpg";
import mhkdCover from "../../public/papers-figures/mhkd-cover.jpg";
import mhkdResults from "../../public/papers-figures/mhkd-results.jpg";
import nucleiCover from "../../public/papers-figures/dense-nuclei-detection-cover.jpg";
import nucleiResults from "../../public/papers-figures/dense-nuclei-detection-results.jpg";
import imageTextResults from "../../public/papers-figures/image-text-matching-results.jpg";
import ispResults from "../../public/papers-figures/isp-pipeline-optimization-results.jpg";
import spmorResults from "../../public/papers-figures/spmor-results.jpg";
import smmorResults from "../../public/papers-figures/smmor-results.jpg";

import acmmm from "../assets/images/publications/acmmm.jpg";
import sequenceSpecific from "../assets/images/publications/Sequence-Specific.png";
import figSpmor from "../assets/images/publications/fig_spmor.png";
import smmor from "../assets/images/publications/smmor.png";

export const publicationImageAssets: Record<string, ImageMetadata> = {
  "/papers-figures/retinex-rawmamba-cover.jpg": retinexCover,
  "/papers-figures/retinex-rawmamba-results.jpg": retinexResults,
  "/papers-figures/fulnet-cover.jpg": fulnetCover,
  "/papers-figures/fulnet-results.jpg": fulnetResults,
  "/papers-figures/decouplenet-cover.jpg": decouplenetCover,
  "/papers-figures/decouplenet-results.jpg": decouplenetResults,
  "/papers-figures/aca-gcn-cover.jpg": acaGcnCover,
  "/papers-figures/aca-gcn-results.jpg": acaGcnResults,
  "/papers-figures/low-light-diffusion-denoising-cover.jpg": diffusionCover,
  "/papers-figures/low-light-diffusion-denoising-results.jpg": diffusionResults,
  "/papers-figures/mhkd-cover.jpg": mhkdCover,
  "/papers-figures/mhkd-results.jpg": mhkdResults,
  "/papers-figures/dense-nuclei-detection-cover.jpg": nucleiCover,
  "/papers-figures/dense-nuclei-detection-results.jpg": nucleiResults,
  "/papers-figures/image-text-matching-results.jpg": imageTextResults,
  "/papers-figures/isp-pipeline-optimization-results.jpg": ispResults,
  "/papers-figures/spmor-results.jpg": spmorResults,
  "/papers-figures/smmor-results.jpg": smmorResults,
  [acmmm.src]: acmmm,
  [sequenceSpecific.src]: sequenceSpecific,
  [figSpmor.src]: figSpmor,
  [smmor.src]: smmor
};
