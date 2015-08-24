---
layout: post
title: "R语言——数据类型"
description: ""
category: "Statistical Computing with R"
tags: [R]
analytics: true
---
{% include JB/setup %}
<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>

### 数据类型

R语言是一种基于对象的编程语言，对象中存储我们需要的数据，每个对象又可能会包含多个属性。所有的对象都有两个内在属性：类型和长度。类型是对象元素的基本种类，共有四种：数值型，字符型，复数型、逻辑型和因子型。在此基础上还有几种更为常用的数据类型包括Arrays（数组），matrices（矩阵），Data Frames（数据框）和Lists（列表）。其中，数据框和列表两种类型可以允许同一个对象中包含多种类型。接下来主要介绍多维数组和list的运用。

#### 1. 多维数组
多维数组很易于理解，可以通过array()函数来定义，并通过元素的编号或者位置进行访问。下面是生成4*2*2的多维数组的生成与访问方式示例：

<pre class="prettyprint">
#生成4*2*2的多维数组，其中每个数组大小为4*2.
MultiArray <- array(1:16, c(4,2,2))
print(MultiArray)
#在访问多维数组的时候，有以下两种方式：
#方式1：按照顺序访问
print(MultiArray[1]) #访问第一个元素
print(MultiArray[9]) #访问第九个元素
#方式2：MultiArray[x,y,z]中z代表第几个数组，x和y分别代表第z个数组中的第x行第y列
print(MultiArray[3,1,2]) #访问第十个元素，即第二个数组第三行第一列位置的元素值
</pre>

在R中输出结果如下图所示：

![Rmultiarray](/img/R/datatype/multiArray.jpg)

#### 2. List列表
对于list变量，可能我们在初次使用的过程中可能会出现一些使用上的错误。列表是一个以对象的有序集合构成的对象。列表中包含的对象又称为它的**分量（components）**，分量可以是不同的模式或者类型。在访问列表变量的过程中，一般存在两种方式：利用编号访问分量（_双中括号_）；利用*分量名字*访问。如果列表变量（Lst）含有三个分量， 这些分量可以用 `Lst[[i]]`（其中i=1,2,3）独立访问。而`Lst[[i]][1]` 就是第i个分量的第一个元素。如果列表变量（Lst）的三个分量分别对应三个名字：x，y和z，那么`Lst$x` v.s. `Lst[[1]]`以及`Lst$x[2]` v.s. `Lst[[1]][2]`返回结果都是一样的。

<pre class="prettyprint">
#创建list变量，变量包含三个分量。
Lst <- list(name="drafly", age=26, date=c(2014,11,11))
print(Lst)
#访问Lst变量的第一个分量
Lst[[1]]
#列表变量的长度：函数length(Lst)返回结果是分量的数目(最高层次的列表变量的长度)
length(Lst)
#列表变量的两种访问方式
Lst[[1]]
Lst$name
Lst[[3]][2]
Lst$date[2]
</pre>

在R中输出结果如下图所示：

![list变量](/img/R/datatype/list.jpg)

这里还需要注意为列表变量分量命名和列表变量转换类型的问题：可以采用`names()`函数赋予列表分量名称，使用`unlist`将列表转换为字符串型的行向量。

<pre class="prettyprint">
#创建list变量，变量包含三个分量。
Lst <- list("drafly", 26, c(2014,11,11))
print(Lst)
#赋给列表变量Lst各个分量名称
names(Lst) <- c("name", "age", "date") #等价于
#同样，也可以为列表变量的分量的元素命名
names(Lst[[3]]) <- list("year", "month", "day")
#列表变量类型转换:将列表变量转换为行向量
tmp <- unlist(Lst)
typeof(tmp) #str(tmp)
tmp_compn <- unlist(Lst[[3]])
str(tmp_compn)
tmp_compn["month"] #tmp_compn[2]
</pre>

在R中输出结果如下图所示：

![list转换](/img/R/datatype/list_transf.jpg)