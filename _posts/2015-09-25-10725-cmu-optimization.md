---
layout: post
title: "CMU10725-优化问题"
description: ""
category: "凸优化"
tags: [凸优化, CMU10725]
---
{% include JB/setup %}

### 1. 凸优化问题
优化问题的定义为：

\begin{aligned}
min_{x \in D} f(x) \\\
subject \; to \quad g_i(x) \leq 0, \quad i=1, \ldots, m \\\
h_j(x)=0, \quad j=1, \ldots, r
\end{aligned}

其中，$$D=dom(f) \cap \bigcap_{i=1}^m dom(g_i) \cap \bigcap_{j=1}^pdom(h_j)$$。

而凸优化问题相对优化问题的定义而言，要求函数$$f$$和$$g_i(x)$$是凸函数，$$h_j(x)=a_j^Tx+b_j$$是仿射函数。

对于仿射集合凸集的差别在[凸优化－凸集](http://www.hanlongfei.com/凸优化/2015/05/22/convexset/)一文也做了分析，二者的差别就在于凸集是线段而仿射集是直线（一维情况下）。

对于凸优化问题，凸函数有一个特别的性质，即局部最优解是全剧最优解，即如果$$x \in D$$，同时$$x$$满足所有约束，那么对于局部$$y,\parallel x-y \parallel_2 \leq \rho$$，当$$f(x) \leq f(y)$$时，对于所有可行解$$y, f(x) \leq f(y)$$。这就意味着在优化求解过程中可以省略很多麻烦～

<img src="/img/R/cmu10725/localminima.jpg" width="300"/>

未完待续。。。