---
layout: post
title: "cmu10725-次梯度下降"
description: ""
category: "凸优化"
tags: [凸优化, CMU10725]
---
{% include JB/setup %}

### 1. 次梯度
在优化问题中，我们可以对目标函数为凸函数的优化问题采用梯度下降法求解，但是在实际情况中，目标函数并不一定光滑、或者处处可微，这时就需要用到次梯度下降算法。

次梯度（*Subgradient*）与梯度的概念类似，凸函数的*First-order characterization*是指如果函数*f*可微，那么当且仅当$$dom(f)$$为凸集，且对于$$\forall x,y \in dom(f)$$，使得$$f(y) \geq f(x)+\nabla f(x)^T(y−x)$$，则函数$$f$$为凸函数。这里所说的**次梯度**是指在函数$$f$$上的点$$x$$满足以下条件的$$g \in \mathbb{R}^n$$：

$$f(y) \geq f(x) + g^T(y-x)$$

其中，函数$$f$$不一定要是凸函数，非凸函数也可以。该定义说明，用次梯度对原函数做出的一阶展开估计总是比真实值要小。

很明显，凸函数的次梯度一定存在，如果函数$$f$$在点$$x$$处可微，那么$$g=\nabla f(x)$$，为函数在该点的梯度，且唯一；如果不可微，则次梯度不一定唯一。但是对于非凸函数，次梯度则不一定存在，也不一定唯一。例如，凸函数$$\parallel x \parallel_p$$范数为凸函数，但不满足处处可微的条件，因此，函数的次梯度不一定唯一，如下图：

<div align="center">
<img src="/img/R/cmu10725/norm.jpg" width="400"/>
</div>

左一图为$$\parallel x \parallel_2$$，函数在$$x \neq 0$$时，次梯度唯一，且$$g=x / \parallel x \parallel_2$$；当$$x = 0$$时，次梯度为$$\{ z: \parallel z \parallel_2 \leq 1 \}$$中的任意一个元素；

左二图为$$\parallel x \parallel_1$$，函数在$$x \neq 0$$时，次梯度唯一，且$$g=sign(x)$$；当$$x = 0$$时，次梯度为$$[-1,1]$$中的任意一个元素；

同样，绝对值函数$$f(x)=\mid x\mid$$和最大值函数$$f(x)=max\{ f_1(x), f_2(x) \}$$在不可微点处次梯度也不一定唯一，如下图：

<div align="center">
<img src="/img/R/cmu10725/absolute.jpg" width="400"/>
</div>

对于左二函数而言，其在满足$$f_1(x)=f_2(x)$$的点处，次梯度为任意一条直线在向量$$\nabla f_1(x)$$和$$\nabla f_2(x)$$之间。

同理，我们还可以给出次微分（*subdifferential*）的定义，即：

$$\partial f(x) = \{ g \in \mathbb{R}^n: g \, is \, a \, subgradient \, of \, f \, at \, x \}$$

* 次微分是闭合且为凸集；

* 如果函数$$f$$在点$$x$$处可微，那么次微分等于梯度；

* 凸函数的次微分不为空，但非凸函数则不一定。

如果我们还记得*Normal cone*是指给定任意集合$$C$$和点$$x \in C，\mathbb{N}_C(x)={g:g^Tx \geq g^Ty}$$，那么我们可以看出，对于集合$$C$$的边界上点的*Normal cone*就是函数$$I_C(x)$$在该点的次微分。其中，

\begin{equation}
I_C(x)=I\{ x \in C \}=
\begin{cases}
0 \quad & if \, x \in C\\\
\infty \quad & if \, x \notin C
\end{cases}
\end{equation}

`证明：`

因为，对于函数的次梯度会满足$$I_C(y) geq I_C(x) + g^T(y-x)$$，因此，

* 对于$$y \notin C$$，$$I_C(y)=\infty$$，不满足*Normal cone*的定义；

* 对于$$y \in C$$，$$0 \geq g^T(y-x)$$，满足*Normal cone*的定义；

既证。

### 2. 次梯度的性质
* Scalingf：$$\partial (af)=a\cdot \partial f$$；

* Addition：$$\partial (f_1+f_2)=\partial f_1 + \partial f_2$$；

* Affine composition：如果$$g(x)=f(Ax+b)$$，那么$$\partial g(x)=A^T \partial f(Ax+b)$$；

* Finite pointwise maximum：如果$$f(x)=\max \limits_{i=1,\ldots,m} f_i(x)$$，那么$$\partial f(x)=conv(\bigcup \limits_{i:f_i(x)=f(x)} \partial f_i(x))$$，意味着函数$$f(x)$$的次微分等于所有能取得最大值的函数$$f_i(x)$$在点$$x$$处的微分，具体实例可参考之前提到的最大值函数部分。

### 3. 为什么要计算次梯度？
对于光滑的凸函数而言，我们可以直接采用梯度下降算法求解函数的极值，但是当函数不处处光滑，处处可微的时候，梯度下降就不适合应用了。因此，我们需要计算函数的次梯度。对于次梯度而言，其没有要求函数是否光滑，是否是凸函数，限定条件很少，所以适用范围更广。

次梯度具有以下优化条件（*subgradient optimality condition*）：对于任意函数$$f$$（无论是凸还是非凸），函数在点$$x$$处取得最值等价于：

$$f(x^{\ast})=\min \limits_{x} f(x) \, \Leftrightarrow \, 0 \in \partial f(x^{\ast})$$

即，当且仅当0属于函数$$f$$在点$$x^{\ast}$$处次梯度集合的元素时，$$x^{\ast}$$为最优解。

`证明：`

证明很简单，当次梯度$$g=0$$时，对于所有$$y \in dom(f)$$，存在$$f(y) \geq f(x^{\ast}) + 0^T (y-x^{\ast})=f(x^{\ast})$$，所以，$$x^{\ast}$$为最优解，即证。