import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://www.hanlongfei.com",
  output: "static",
  build: {
    format: "directory"
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "github-light"
    }
  },
  redirects: {
    "/about/": "/",
    "/research/": "/",
    "/2017/05/24/alltheway/": "/writing/alltheway/",
    "/2015/09/24/cmu-10725-convexset/": "/writing/cmu-10725-convexset/",
    "/2015/09/29/cmu-10725-gradient/": "/writing/cmu-10725-gradient/",
    "/2015/09/25/cmu-10725-optimization/": "/writing/cmu-10725-optimization/",
    "/2015/10/02/cmu-10725-subgradidient/": "/writing/cmu-10725-subgradidient/",
    "/2015/05/20/convexoptimization/": "/writing/convexoptimization/",
    "/2015/06/11/自动化报告/": "/writing/自动化报告/",
    "/2015/05/22/convexset/": "/writing/convexset/",
    "/2014/12/25/densityest/": "/writing/densityest/",
    "/2014/12/15/disqus/": "/writing/disqus/",
    "/2014/07/01/dreams/": "/writing/dreams/",
    "/2015/11/05/duality/": "/writing/duality/",
    "/2015/08/12/em/": "/writing/em/",
    "/2014/07/08/failure-is-not-an-option/": "/writing/failure-is-not-an-option/",
    "/2014/12/19/gaussian/": "/writing/gaussian/",
    "/2015/07/29/gradient/": "/writing/gradient/",
    "/2014/12/15/hello-world/": "/writing/hello-world/",
    "/2015/05/26/hyperplane/": "/writing/hyperplane/",
    "/2015/03/13/kernelest/": "/writing/kernelest/",
    "/2015/11/08/kkt/": "/writing/kkt/",
    "/2014/12/15/markdown/": "/writing/markdown/",
    "/2015/08/05/mle/": "/writing/mle/",
    "/2015/08/06/mlecode/": "/writing/mlecode/",
    "/2015/08/04/newton/": "/writing/newton/",
    "/2015/03/25/numericalmethod/": "/writing/numericalmethod/",
    "/2014/12/23/permutationtest/": "/writing/permutationtest/",
    "/2015/10/28/proximal/": "/writing/proximal/",
    "/2014/12/18/randomvar/": "/writing/randomvar/",
    "/2015/03/26/rcoding/": "/writing/rcoding/",
    "/2014/12/16/rdatatransf/": "/writing/rdatatransf/",
    "/2014/12/16/rdatatype/": "/writing/rdatatype/",
    "/2014/12/22/resampling/": "/writing/resampling/",
    "/2022/03/15/restart/": "/writing/restart/",
    "/2017/07/24/selfpaced/": "/writing/selfpaced/",
    "/2017/07/28/spld/": "/writing/spld/",
    "/2014/12/19/visulization/": "/writing/visulization/"
  }
});
