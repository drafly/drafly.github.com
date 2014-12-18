---
layout: post
title: "R语言——随机变量生成"
description: ""
category: "Statistical Computing with R"
tags: [R]
---
{% include JB/setup %}

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>

说到随机变量生成，首先要谈的是什么是随机变量？

随机变量是指：给定样本空间**(S,F)**，如果存在样本空间上的实值函数$$X: S \rightarrow  R\subset F$$，则**X**称为随机变量。从定义可以发现，随机变量实质上是函数，并不是变量。相对随机变量而言，变量则是使用字母表示已知或者未知数字的概念，亦或在计算机学科中泛指命名空间。

Wiki百科上给出了随机变量的很浅显的例子，如果事件空间为随机掷两个骰子，则整个事件空间由6*6=36个元素组成，那么随机变量可以是多种形式，比如：随机变量X（获得的两个骰子的点数和）或者随机变量Y（获得的两个骰子的点数差）。当然，根据随机变量的取值有限或者无限可将随机变量分为离散随机变量和连续随机变量。
在涉及到R中随机变量产生的问题之前，首先普及几个概率论的基本概念：概率质量函数、概率密度函数和累积分布函数。

概率质量函数为probability mass function，简写为pmf，是随机变量在各特定取值上的概率。**概率质量函数的所有取值必为非负，且总和为1**。概率质量函数和概率密度函数不同之处在于：**概率质量函数是对离散随机变量定义的，本身代表该值的概率；概率密度函数是对连续随机变量定义的，本身不是概率，只有对连续随机变量的概率密度函数在某区间内进行积分后才是概率**。常见的概率质量函数有二项分布、伯努利分布和泊松分布等。

概率密度函数为Probability Density Function，以小写pdf标记。概率密度函数是针对连续型随机变量而言的，它是描述随机变量在某个确定的取值点附近的可能性的函数。**其值并不是指随机变量取某个值的概率**。随机变量的取值落在某个区域之内的概率则为概率密度函数在这个区域上的积分，即随机变量X的取值只取决于累积分布函数。最常见的概率密度函数为正态分布的概率密度函数：

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\exp{\frac{-(x-\mu)^2}{2\sigma^2}}$$
