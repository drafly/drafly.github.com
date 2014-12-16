---
layout: post
title: "GitHub搭建个人网页"
description: 
category: "博客搭建"
tags: 
---
{% include JB/setup %}

## GitHub的使用

GitHub是一个神奇的网站！！

## 迁移初衷

用了性浪和CSDN，发现博客写着真费劲。。。就按照网上的教程自己在github上搭建了个个人主页，这里用到了github for windows、ruby、jekyll、bootstrap等，搭建过程还挺有意思~~

## 搭建教程
搭建个人主页过程中，遇到不少问题，究其原因在于本人懒省事想在windows 7上搭建，但由于各种字体以及兼容性问题，搭建过程还是费了一些周折的，以下就记录一些自己搭建过程中参考到的资料：

1. 工欲善其事必先利其器之软件安装：
- GitHub for Windows安装及使用参考[GitHub for Windows使用图文教程](http://blog.sina.com.cn/s/blog_53ab41fd0101b428.html)；
- Ruby和Jekyll安装及使用参考[win7下安装jekyll——在github上创建自己的博客](http://blog.csdn.net/hutaoer06051/article/details/8574010)；这里需要指出的是**Ruby安装路径中不要有中文字符和空格**；
- notepad++及高亮插件安装使用参考[notepad++安装markdown插件](http://blog.csdn.net/myweishanli/article/details/41311701)；
1. 大功告成之文章撰写与发布：如何撰写和发布文章请参考[Jekyll在github上构建免费的Web应用](http://blog.fens.me/jekyll-bootstarp-github/)；
1. 精益求精之Markdown及Disqus使用：Markdown使用简介请参考[深入浅出Markdown](http://drafly.github.io/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/2014/12/15/markdown/)，里面同时包含了关于如何使用**Latex公式**编辑和**Prettify代码高亮**的使用教程。Disqus搭建及设置请参考[Disqus教程](http://drafly.github.io/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/2014/12/15/disqus/)；
1. 深入浅出之Jekyll原理：关于Jekyll原理和布局请参考[图解Jekyll：从Hello World到功能完善的个人站点](https://www.google.com.hk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CBsQFjAA&url=http%3a%2f%2fjowai%2einfo%2fjekyll-graphic-from-hello-world-to-a-fully-functioning-personal-site&ei=S82PVO-CMIvk8gXooYLIBA&usg=AFQjCNGzy3AclPZ3CvLTPNj1fHA5QEgOcg&bvm=bv.82001339,d.dGY&cad=rjt)
1. 刨根问底之问题分析：对于经常出错的地方就是字符编码问题，比如不显示中文。一般情况下出现错误的原因是文件编码格式不对，**解决方案**是使用notepad++在_格式_一栏中将文件编码方式改为**“以UTF-8无BOM格式”**。具体可参见[Jekyll在Windows下面中文编码问题解决方案](http://www.cnblogs.com/aleda/articles/Jekyll-in-Windows-following-Chinese-encoding-problem-solutions.html)，但对于网上很多说修改Jekyll的convertible.rb文件的有效性持怀疑态度。。。

## 再见

希望各位搭建过程一切顺利~