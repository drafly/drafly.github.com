---
layout: post
title: "GitHub搭建个人网页"
description: 
category: "博客搭建"
tags: 
---
{% include JB/setup %}
<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>

### GitHub的使用

GitHub是一个神奇的网站！！

### 迁移初衷

用了性浪和CSDN，发现博客写着真费劲。。。就按照网上的教程自己在github上搭建了个个人主页，这里用到了github for windows、ruby、jekyll、bootstrap等，搭建过程还挺有意思~~

### 搭建教程
搭建个人主页过程中，遇到不少问题，究其原因在于本人懒省事想在windows 7上搭建，但由于各种字体以及兼容性问题，搭建过程还是费了一些周折的，以下就记录一些自己搭建过程中参考到的资料：

#### 1. 工欲善其事必先利其器之软件安装
1. GitHub for Windows安装及使用参考[GitHub for Windows使用图文教程](http://blog.sina.com.cn/s/blog_53ab41fd0101b428.html)；GitHub新建项目参考[利用Github免费搭建个人网站详解](http://blog.sciencenet.cn/blog-922140-827762.html)前两部分，最后获得新建的名字为username.github.com的空工程,并通过GitHub客户端将工程克隆到本地；
2. Ruby和Jekyll安装及使用参考[win7下安装jekyll——在github上创建自己的博客](http://blog.csdn.net/hutaoer06051/article/details/8574010)执行到*第五步*；
- **Ruby安装路径中不要有中文字符和空格**；
- 如果`gem install jekyll`显示无法连接时，是由于国内网络原因，导致 rubygems.org 存放在 Amazon S3 上面的资源文件间歇性连接失败。这时用[淘宝源](https://ruby.taobao.org/)镜像代替官网版本即可。具体操作请见[RubyGems 镜像](https://ruby.taobao.org/)；
3. notepad++及高亮插件安装使用参考[notepad++安装markdown插件](http://blog.csdn.net/myweishanli/article/details/41311701)；

#### 2. 大功告成之文章撰写与发布
1. 在克隆项目到本地文件夹执行以下代码，将jekyll bootstrap模板克隆到自己GitHub主页：
`$ git clone https://github.com/plusjade/jekyll-bootstrap.git username.github.com`
2. 进入自己GitHub主页文件夹，在本地开启Jekyll服务，在浏览器输入localhost:4000即可查看自己的网页；
`$ cd username.github.com
	$ jekyll serve`

3. 新建博文:
使用rake在_post文件夹新建Hello World.md文件，在notepad++中使用html和Markdown撰写文章，保存后上传到GitHub中。
- 注意文件格式必须是**以UTF-8无BOM格式**

<pre class="prettyprint">
	$ rake post name="Hello World"
</pre>

![bootstrap模板](/img/tutorial/muban.jpg)

#### 3. 精益求精之Markdown及Disqus使用
1. Markdown使用简介请参考[深入浅出Markdown](http://drafly.github.io/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/2014/12/15/markdown/)
- 里面同时包含了关于如何使用**Latex公式**编辑和**Prettify代码高亮**的使用教程；
2. Disqus搭建及设置请参考[Disqus教程](http://drafly.github.io/%E5%8D%9A%E5%AE%A2%E6%90%AD%E5%BB%BA/2014/12/15/disqus/)；

#### 4. 深入浅出之Jekyll原理
关于Jekyll原理和布局请参考[图解Jekyll：从Hello World到功能完善的个人站点](https://www.google.com.hk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0CBsQFjAA&url=http%3a%2f%2fjowai%2einfo%2fjekyll-graphic-from-hello-world-to-a-fully-functioning-personal-site&ei=S82PVO-CMIvk8gXooYLIBA&usg=AFQjCNGzy3AclPZ3CvLTPNj1fHA5QEgOcg&bvm=bv.82001339,d.dGY&cad=rjt)

#### 5. 刨根问底之问题分析
1. 字符编码问题，比如不显示中文。一般情况下出现错误的原因是文件编码格式不对，**解决方案**是使用notepad++在_格式_一栏中将文件编码方式改为**“以UTF-8无BOM格式”**。具体可参见[Jekyll在Windows下面中文编码问题解决方案](http://www.cnblogs.com/aleda/articles/Jekyll-in-Windows-following-Chinese-encoding-problem-solutions.html)，但对于网上很多说修改Jekyll的convertible.rb文件的有效性持怀疑态度
2. gem安装问题：网络原因，更换成Ruby淘宝源

### 再见

希望各位搭建过程一切顺利~