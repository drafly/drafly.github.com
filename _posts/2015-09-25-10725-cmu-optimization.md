---
layout: post
title: "CMU10725－优化问题"
description: ""
category: "凸优化"
tags: [凸优化, CMU10725]
---
{% include JB/setup %}

### 1. 凸优化问题
优化问题的定义为：

$$
min_{x \in D} f(x) \\\
subject \; to \quad g_i(x) \leq 0, \quad i=1, \ldots, m \\\
h_j(x)=0, \, j=1, \ldots, r
$$

其中，$$D=dom(f) \cap \bigcap_{i=1}^m dom(g_i) \cap \bigcap_{j=1}^pdom(h_j)$$。

* *f*被称为目标函数（objective or criterion function）；

* *g*被称为约束函数（inequality constraint function）；

* 满足$$g_i(x) \leq 0$$且$$h_j(x)=0$$的点称为可行解（feasible point）；

* 所有可行解中函数$$f(x)$$最小的点称为最优值（optimal value），记为$$f^{\ast}$$；

* 使得函数$$f(x)$$取得$$f^{\ast}$$的点$$x$$称为最优解（optimal point、solution或minimizer），当然，不是所有凸函数都存在最优解，即解为空，例如直线就不存在；

* 如果点$$x$$满足$$f(x) \leq f^{\ast} + \epsilon$$，则称点$$x$$为$$\epsilon-suboptimal$$解。

凸优化问题相对优化问题的定义而言，要求函数$$f$$和$$g_i(x)$$是凸函数，$$h_j(x)=a_j^Tx+b_j$$是仿射函数($$Ax+b=0$$)。

对于仿射集和凸集的差别在[凸优化－凸集](http://www.hanlongfei.com/凸优化/2015/05/22/convexset/)一文也做了分析，二者的差别就在于凸集是线段而仿射集是直线（一维情况下）。

很明显，求解凸函数的极小值（convex minimization）和凹函数的极大值（concave maximization）都是凸优化问题（convex optimization problem）。

对于凸优化问题，凸函数有一个特别的性质，即局部最优解是全剧最优解，即如果$$x \in D$$，同时$$x$$满足所有约束，那么对于局部$$y,\parallel x-y \parallel_2 \leq \rho$$，当$$f(x) \leq f(y)$$时，对于所有可行解$$y, f(x) \leq f(y)$$。这就意味着在优化求解过程中可以省略很多麻烦～

<div align="center">
<img src="/img/R/cmu10725/localminima.jpg" width="300"/>
</div>

未完待续。。。