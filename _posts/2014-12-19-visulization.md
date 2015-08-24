---
layout: post
title: "R语言——数据可视化"
description: ""
category: "Statistical Computing with R"
tags: [R]
analytics: true
---
{% include JB/setup %}
### 1. 数据可视化
数据可视化相关方法属于**统计图形学**范畴，广义上属于探索性数据分析，其有别于验证性数据分析，即假设检验。有学者（Tukey）认为探索性数据分析是在进行验证性数据分析之前需要做的一项重要分析工作，目的是通过对数据的直观分析，使得便于寻找适当的统计分析方法来解决问题。在R中，有很多关于2D或者3D数据可视化的包，如lattice、MASS、rggobi等。

### 2. 散点图矩阵
当想要判断两变量之间是否存在某种关联或总结坐标点的分布模式时，我们常采用散点图来表示。绘制散点图的主要目的是分析因变量随自变量而变化的大致趋势，据此可以选择合适的函数对数据点进行拟合。但是当想要同时考察多个变量间的相关关系时，一一绘制它们间的简单散点图，则显得十分麻烦。因此，对于多变量数据，可利用**散点图矩阵**来同时绘制各自变量间的散点图，这样可以快速发现多个变量间的主要相关性。散点图矩阵是散点图的高维扩展，它从一定程度上克服了在平面上展示高维数据的困难，在展示多维数据的两两关系时有着不可替代的作用。在R中可通过*graphics包*中的`pairs()`函数或者*lattice包*中的`splom()`函数生成散点图矩阵，然后绘制每对变量的散点图。这里主要讲解`pairs()`函数的使用方法和相关说明，具体代码示例如下：

<pre class="prettyprint">
#加载iris数据
data(iris)
#读取iris数据中维尔吉妮卡花的各特征
x <- scale(iris[which(iris$Species=="virginica"), 1:4])
#获得x各变量的取值区间
r <- range(x)
#对角线显示的对应特征的密度图
panel.d <- function (x, ...) {
  usr <- par("usr")
  on.exit(par(usr))
  par(usr = c(usr[1:2], 0, 0.5))
  lines(density(x, bw="SJ")) 
}
#绘制维尔吉妮卡花的各特征的散点图矩阵
pairs(x, diag.panel = panel.d, #设置对角线绘制KDE图
      xlim=r, ylim=r, #坐标轴范围
      col = "light blue", #设置绘制点的颜色
      pch = 21, #设置点的形状
      cex = 1.5, #对绘制点放大1.5倍
      bg = "red", #更改绘制点内部颜色，只对pch在21~25有效
      labels=c("S.Length","S.Width","P.Length","P.Width" ),#对角线特征名
      label.pos = 0.9, #对角线特征名称位置
      lower.panel =NULL, #不显示下三角的散点图矩阵
      cex.labels = 1.2, #用于表示对默认的绘图文本和符号放大多少倍
      font.labels = 3, #代表字体，值为一个整数。
      main = "iris数据维尔吉妮卡花散点图矩阵", #设置绘图标题
      line.main = 2 #设置标题与散点图矩阵的间隔
      )
</pre>

其中：

- `par("usr")`函数返回一个形式为c(x1, x2, y1, y2)的向量，表示当前绘图区域的**坐标值范围**：c(xleft, xright, ybottom, ytop)；

- `on.exit()`函数调用的作用是**保存函数主体的值**使得函数跳出后，其主体值仍然可以被调用或者执行。它允许函数改变一些系统参数和保证在函数结束时它们设有恰当的值：如这里需要全局更改的diag.panel的参数：“坐标轴刻度”；

- `density()`函数：这里要采用**核密度估计KDE**来拟合观察点的直方图，即采用平滑的峰值函数对真实的概率分布曲线进行模拟。在R语言中，KDE的绘制是通过`density()`函数来实现的。对于核函数，`density()`默认采用高斯曲线bw参数制定绘制KDE的带宽，默认的是*nrd0*，这里可更改为SJ模式。具体KDE相关知识就不在这里介绍了，大家可以通过help命令或者google查询相关资料；

另外，从直方图的绘制可以看出，y轴最大值远远1，所以在绘制KDE之前将y轴最大值设置为0.5。通过以上操作和基本绘图设置，对于iris数据中维尔吉妮卡花的各特征的散点图矩阵绘制结果如下所示：

![Iris维尔吉妮卡花](/img/R/visualization/Irisscatpairs.jpeg)

**我们从结果中大致可以看出S.Length v.s. P.Length 和S.Width v.s. P. Width分别呈正相关关系**。当然，我们也可以通过*lattice包*中的`splom()`函数实现维尔吉妮卡花的各特征的散点图矩阵的绘制功能。具体代码及结果如下所示：

<pre class="prettyprint">
library(lattice)
#采用lattice包中的splom函数实现维尔吉妮卡花散点图矩阵的绘制
splom(x,
      main = "Iris数据维尔吉妮卡花散点图矩阵", #设置绘图标题
      line.main = 2 #设置标题与散点图矩阵的间隔
      )
</pre>

![Iris维尔吉妮卡花splom](/img/R/visualization/Irisscatsplom.jpeg)

对于更深层次的散点图矩阵的绘制，比如根据某分类变量分别绘制散点图矩阵最好通过`splom()`函数实现。例如：对iris数据根据Species的三种花的分组实现各种花散点图矩阵的绘制，具体示例如下：

<pre class="prettyprint">
library(lattice)
super.sym <- trellis.par.get("superpose.symbol")
splom(iris[,1:4], 
      groups = Species,
      col=super.sym$col[1:3],
      main = "Iris数据散点图矩阵", 
      line.main = 2,
      pch=c(1,2,3), 
      cex=c(0.8, 0.8, 0.8),
      text = list(c("Setosa", "Versicolor", "Virginica")))
</pre>

其中，`trellis.par.get()`函数用于获取lattice函数默认的图形参数，在这里用于**设置各点的颜色**。上述代码结果如下图所示：

![Iris散点图矩阵](/img/R/visualization/Irisscatmatrix.jpeg)

### 3. 三维散点图
对于多维度的散点图，R中一般可以采用*lattice包*中的`cloud()`函数实现，具体实现代码及结果如下所示：

<pre class="prettyprint">
library(lattice)
#绘制三维散点图：采用lattice包中的cloud()函数
attach(iris)
print(cloud(Petal.Length~ Sepal.Length*Sepal.Width, data = iris, groups = Species))
</pre>

![Iris三维散点图](/img/R/visualization/Iris3dim.jpeg)

### 4. 参考资料
[1]. 不同版本的散点图矩阵，http://cos.name/2009/03/scatterplot-matrix-visualization/#more-728

[2]. lattice包，http://blog.csdn.net/lilanfeng1991/article/details/34859799

[3]. R中设置图形参数--函数par()详解，http://blog.sina.com.cn/s/blog_6caea8bf0100yk4h.html
