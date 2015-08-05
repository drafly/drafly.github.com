---
layout: post
title: "凸优化——真锥和分割超平面"
description: ""
category: "凸优化"
tags: [机器学习, 凸优化]
---
{% include JB/setup %}

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>

在引入分割超平面和支持超平面的概念之前，首先简要介绍一下集合中的泛化不等式和最值为题。

### 1. 真锥
首先我们定义一个概念——真锥（proper cone），一个凸锥$$K \subseteq \mathbb{R}^n$$是真锥,如果满足：K是凸集；K是闭合的；K是实心的（内部非空，如射线不是真锥）；K是点集（不包含直线，也就是说如果$$x$$和$$-x$$都属于该凸锥，那么$$x=0$$）。 在真锥上我们可以定义泛化不等式（generalized inequalities）中点大小的关系（partial ordering）：$$x \preceq_K y \longleftrightarrow y-x \in K$$。该式表示在集合K下，点x恒小于y，即点x的各个分量$$x_i \le y_i, i=1,\ldots,n$$。当$$K = \mathbb{R}_+$$，在高维空间上的泛化不等式与一维上数字间的大小比较的定义相同。泛化不等式具有以下性质：

1. 可加性：如果$$x \preceq_K y$$，同时，$$u \preceq_K v$$，则$$x＋u \preceq_K y＋v$$；

1. 传递性：如果$$x \preceq_K y$$，同时，$$y \preceq_K z$$，则$$x \preceq_K z$$；

1. 自反性：如果$$x \preceq_K y$$，同时，$$alpha > 0$$，则$$\alpha x \preceq_K \alpha y$$；

1. 反对称性：$$x \preceq_K x$$；

1. 极限保持性：如果$$x_i \preceq_K y_i,\ i =1,2,\ldots,$$，同时，$$x_i \rightarrow x,\ y_i \rightarrow y$$，则$$x \preceq_K y$$，当$$i \rightarrow \infty$$。

### 2. 最值和极值
由于高维空间与一维空间不同，我们无法将一维空间的线性顺序（linear ordering）延伸到高维空间用于比较点的大小。所以，高维空间中的最值和极值的定义相对低维空间就变的复杂一些。我们定义集合$$S$$的最小值（minimum element）为对于所有点$$y \in S$$，$$x \preceq_K y$$，如果集合存在最值，那么有且仅有一个点存在（unique）。我们定义集合$$S$$的极小值（minimal element）为对于点$$y \in S$$，仅当$$y=x$$时，才会满足$$y \preceq_K x$$。

对于集合而言，我们可以利用集合的定义说明集合最值的问题，集合$$S$$中的元素$$x$$为最小值，当且仅当$$S \subseteq x+K$$，这里$$x+K$$表示所有点的都大于等于x，即$$\preceq_K$$；极小值则为$$(x-K) \cap S = \{ x \}$$。例如，对于二维空间$$\mathbb{R}_+^2$$，如果点x为最小值点，则最小值意味着空间内所有的点都位于点x的右上方，极小值则表示没有其他的点位于点x的左下方。

如下图，点$$x_1$$为集合$$S$$的最小值，因为对于$$K=\mathbb{R}_+^n$$（浅色阴影部分）而言，$$S_1 \subseteq x_1+K$$，集合$$S_1$$内的其他点则不满足该条件；对于点$$x_2$$，其为集合$$S_2$$的极小值，因为满足$$(x_2-K) \cap S = \{ x_2 \}$$，其中浅色阴影部分代表$$x－K$$部分，很明显，极小值并不是唯一的，因为点$$x_2$$所在的直线上均为集合的极小值。

<img src="/img/R/hyperplane/minimum.jpg" width="400"/>

### 3. 分割超平面（分离超平面）
在上一讲中我们提到了仿射函数的概念，仿射函数可以简单理解为对于空间集合的线性变换，这里所讲的超平面分割理论（separating hyperplane theorem）是指：如果存在两个并查集合$$C和D$$（disjoint set，$$C \cap D = \emptyset$$），且这两个集合都为凸集，则必然存在一个超平面（之前讲过超平面既是凸集又是仿射集）使得对于集合$$C$$中所有点x满足$$a^Tx \le b,\ x \in C$$，集合$$D$$中所有点x满足$$a^Tx \ge b,\ x \in D$$，换言之，仿射函数$$a^Tx-b$$在集合C上非正，在集合D上非负。超平面$$\{ x \mid a^Tx=b \}$$称为集合C和D的分割超平面，如下图。

<img src="/img/R/hyperplane/hyperplane.jpg" width="400"/>

接下来证明超平面分割理论，假设集合C和D间的欧几里德距离（Euclidean distance）为$$dist(C,D)=inf\{ \parallel u-v \parallel_2 \ u \in C,\ v \in D \}$$其中，点$$c \in C$$和$$d \in D$$是两个集合中距离最近的点的组合。那么，我们将会证明分割超平面位于线段$$(d-c)$$的正中间（the separating hyperplane is orthogonal to, and bisects, the line segment between $$c$$ and $$d$$）。

<img src="/img/R/hyperplane/proof.jpg" width="400"/>

因为点$$c$$和$$d$$是距离最近的点，$$dist(c,d)=\parallel c-d \parallel_2 > 0$$，我们定义$$a=d-c$$，$$b=\frac{\parallel d \parallel_2^2 - \parallel c \parallel_2^2}{2}$$，所以仿射函数可以变换成：

\begin{align}
f(x) & = a^Tx-b \\\
& =(d-c)^Tx-\frac{\parallel d \parallel_2^2 - \parallel c \parallel_2^2}{2} \\\
& = (d-c)^Tx-\frac{(d-c)^T(d+c)}{2} \\\
& = (d-c)^T(x-(1/2)(d+c))
\end{align}

从上式可以看出，如果超平面分割理论成立的话，仿射函数在C上非正，在D上非负。如果平面分割理论不成立的话，必然会在集合D上存在一点$$u \in D$$使得$$f(u)=(d-c)^T(u-(1/2)(d+c)) < 0$$。则$$f(u)$$可写为：

\begin{aligned}
f(u) & = (d-c)^T(u-(1/2)(d+c)) \\\
& = (d-c)^T(u-d+(1/2)(d-c)) \\\
& = (d-c)^T(u-d)+(1/2)(d-c)^T(d-c) \\\
& = (d-c)^T(u-d)+(1/2) \parallel (d-c) \parallel_2^2 \\\
& < 0
\end{aligned}

很明显，$$(d-c)^T(u-d) < 0$$。同时，我们可以构造出微分函数$$\frac{d}{dt} \parallel d+t(u-d)-c \parallel_2^2$$，当t＝0时，

$$\frac{d}{dt} \parallel d+t(u-d)-c \parallel_2^2 \bracevert_{t=0}=(d-c)^T(u-d) < 0$$。

该式意味着函数$$d(x)$$在$$x＝0$$处一阶导数为负数，函数在$$x＝0$$处呈递减趋势。所以，当$$0 \le t \le 1$$时（在0点右侧），$$d(t) < d(0)$$。即，$$d(t)=\parallel d+t(u-d)-c \parallel_2^2 < d(0)=\parallel d-c \parallel_2^2$$。该式表明，必然存在一点$$d+t(u-d)$$使得该点到点c的距离小于点d到点c的距离，这与最开始的点c和点d是最近的亮点的假设相违背，所以证明出超平面分割理论的正确性，即两个不相交凸集间必然存在一个分割平面能将两个集合分开。

那么，超平面分割定理的逆定理是否正确呢？是否可以证明两个凸集如果存在超平面能将集合分开，那么这两个集合必然是不相交的集合呢？答案是否定的，因为如果集合$$C=D=\{ 0 \} \subseteq \mathbb{R}$$，则存在超平面$$x=0$$将两个集合分开。但是，如果集合$$C$$和$$D$$之间至少有一个是开集的话，那么该定理成立，因为，如果存在该超平面且$$C$$为开集，则超平面对应的仿射函数必然在集合$$C$$上为负，在D上为非负。

平面分割定理的逆定理（converse separating hyperplane theorems）：对于任意两个凸集$$C$$和$$D$$，其中至少一个集合为开集，则当且仅当集合$$C$$和$$D$$间存在一个分割超平面时，集合$$C$$和$$D$$是不相交（disjoint）的。

### 4. 支持超平面
支持超平面（supporting hyperplane）是指，对于凸集$$C$$而言，$$x_0$$为集合$$C$$边界上的一点（$$x_0 \in \mathbf{bd}\ C\ =\ \mathbf{cl}\ C \setminus \mathbf{int}\ C$$），如果$$a^T x \le a^T x_0,\ a \neq 0$$，那么超平面$$\{ x \mid a^T x = a^T x_0 \}$$被称为集合$$C$$在点$$x_0$$处的超平面。支持超平面也可以理解为分割点$$x_0$$和$$C$$的超平面，支持超平面的几何意义表示集合$$C$$上点$$x_0$$的切线。支持超平面的实例如下图所示。

<img src="/img/R/hyperplane/supporting.jpg" width="400"/>

基于超平面分割理论我们可以得出支持超平面理论（supporting hyperplane theorem）：对于任意非空凸集$$C$$和任意集合$$C$$上的一点$$x_0 \in \mathbf{bd}\ C$$，必然在点$$x_0$$上存在一个支持超平面。同理，我们可以获得支持超平面理论的逆定理，如果集合是闭合的且含有非空内点，当在集合边界的每一点上都存在支持超平面时，该集合为凸集。

### 5. 总结
在获得多维空间上极值的定义，以及分割超平面和支持超平面定理，我们可以更加明确什么是支持向量，什么是分类边界，以及为什么支持向量机算法会完成分类的任务，当然，谈到支持向量机，其中还用到了对偶的思想，关于对偶锥（dual cone）比较抽象，我个人理解的不是很好，所以暂时先不写这部分的内容，感兴趣的童鞋自行阅读《convex optimization》一书的2.6节内容。