---
layout: post
title: "R语言——数据操作"
description: ""
category: "Statistical Computing with R"
tags: [R]
analytics: true
---
{% include JB/setup %}
<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>

### 数据操作
上面一部分介绍了R中一些变量类型的操作，一般来讲，当R运行时，所有变量，数据，函数及结果都以对象(objects)的形式存在计算机的活动内存中，我们可以通过用一些运算符(如算术，逻辑，比较等)和一些函数(其本身也是对象)来对这些对象进行操作。但是如果该对象已经存在，那么它以前的值将会自动被新值冲掉。对于数据操作而言，常用指令有：

#### 1. 描述统计函数
`str()`/`summary()`/`typeof()`等：`summary()`函数是一个用于描述统计的函数，它可以从大量数据中压缩提取基本信息，或者用来给出各种模型的拟合函数结果的基本信息。`str()`函数也是一个用于描述变量信息的函数，其可以返回对象的结构或内容，也可用于查看R中常用的内置函数的参数信息。个人认为`str()`函数还是最为好用的。

<pre class="prettyprint">
#R中常用的描述统计函数
summary(Lst)
#对矩阵各列信息的基本统计描述
summary(matrix(1:15, nrow=5, ncol=3, dim=list(c(1,2,3,4,5), c("x","y","z"))))
#变量基本信息描述
str(Lst) #names(Lst); typeof(Lst); class(Lst); mode(Lst)
#常用函数基本信息描述
str(lm)
</pre>

在R中输出结果如下图所示：

![描述统计函数](/img/R/datatype/summary.jpg)

#### 2. 加载与释放
`attach()`函数可以使列表或者数据框的分量可以通过它们的名字直接调用，该函数通过将数据框或者列表添加到R的搜索路径中，并当R在遇到一个变量名检查搜索路径中的数据框或者列表时，以定位到这个变量。该函数可以用于解除用\$ 符号访问对象不方便的问题。这种调用是暂时性的，没有必要每次都显式的引用列表名字。而`detach()`函数可以将数据框从搜索路径中移除。`with()`函数则是对函数内的变量执行上述过程，用于解决当名称相同的对象不止一个时产生的冲突问题。`attach()`函数通常是将数据框绑定在搜索路径的位置2（position 2）上。如果位置1没有相同名称的变量，那么该数据框的变量名称对应的变量将直接被访问；相反，如果存在，则任何操作仅是针对搜索路径位置1工作空间中的变量。这时要对数据框中的变量进行操作，最好还是通过\$符号或者`with()`函数。

<pre class="prettyprint">
 #attach函数
str(iris)
Species
iris$Species
#加载变量名称用于搜索变量名，代替$符号
attach(iris)
Species
detach(iris)
Species
#with函数
data=data.frame(c1=c(1,2,3,4),c2=c(5,6,7,8))
attach(data)
##当定义一个新的变量c1时，会产生冲突
c1 = 1
##data$c1的值不会被改变,对原数据框的数据未产生影响
data$c1
c1
##使用with()函数解决冲突问题
summary(c1)
with(data, summary(c1))
</pre>

在R中输出结果如下图所示：

![attach函数](/img/R/datatype/attach.jpg)

![with函数](/img/R/datatype/with.jpg)

#### 3. 嵌套函数
`by()`以及`apply()`函数的变体均属于嵌套函数，可用于根据分类变量分组统计目标变量的信息。

<pre class="prettyprint">
#by函数和tapply等嵌套函数
attach(iris)
#根据Species变量分组统计Sepal.Length变量的均值
by(Sepal.Length, Species, mean)
tapply(Sepal.Length,Species, mean)
detach(iris)
</pre>

在R中输出结果如下图所示：

![by函数](/img/R/datatype/by.jpg)

#### 4. 对象查询
`ls()`函数是列出当然目录变量，其结果是一个字符串向量。如果没有定义的赋值变量，则会返回一个空向量。`rm()`函数可以删除用户中已定义的变量，但该函数删除的变量无法撤销，也可以传入多个变量来进行删除。

<pre class="prettyprint">
#ls函数和rm函数
ls()
ls.str()
rm(c1) #删除变量c1
ls()
</pre>

在R中输出结果如下图所示：

![ls函数](/img/R/datatype/ls.jpg)