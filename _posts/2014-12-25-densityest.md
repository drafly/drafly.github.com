---
layout: post
title: "概率密度估计"
description: ""
category: "Statistical Computing with R"
tags: [R]
---
{% include JB/setup %}
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>

### 1. 参数估计与非参数估计
在研究随机变量的过程中，随机变量的概率密度函数的作用是描述随机变量的特性，因此，如何通过抽样样本估计总体的概率密度函数成为关键。解决这个问题的方法大致分为两类：参数估计和非参数估计。

参数估计(Parametric Estimation)