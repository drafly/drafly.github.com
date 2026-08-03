---
title: "Disqus教程"
description: "介绍 Disqus 第三方社会化评论系统的来历、现状与使用步骤，以及在 Jekyll Bootstrap 中配置 Disqus 评论的方法。"
publishedAt: 2014-12-15
categories: ["博客搭建"]
tags: ["Disqus", "tutorial"]
draft: false
featured: false
language: "zh"
legacyUrl: "/2014/12/15/disqus/"
---

## 什么是Disqus
	Disqus是一家第三方社会化评论系统，主要为网站主提供评论托管服务。该系统为云评论系统，为用户提供根据多样化的评论互动特性。Disqus的主要目标是通过不同的功能将当前不同网站的相对孤立、隔绝的评论系统，连接成具有社会化特性的大网。通过Disqus评论系统所具备的评论回复通知、评论分享和热文分享等社会化功能，网站主可以有效的提高网站用户的活跃度和流量。

##Disqus现状

     Disqus由Danniel Ha于2007年5月5日创办，和Dropbox、Reddit等知名网站一样，是Y Combinator孵化的一家公司。包括CNN、NBC、Fox News、Engadget、Time等知名网站均使用了Disqus提供的社会化评论系统。WordPress、Blogger、Tumblr等第三方博客平台均提供了Disqus第三方评论插件，目前，第三方社会化评论系统在美国，基本是主流网站的标配。

##如何使用Disqus
使用的jekyll bootstrap已经将Disqus集成到模板中，当然如果你没有使用bootstrap模板的话，可以在网页中复制以下代码即可：

	<div id="disqus_thread"></div>
	当在bootstrap模板中已存在Disqus插件，那么你所做的只需以下几步：
   
   1. 在[Disqus](https://disqus.com/)中注册用户，并设置short_name名字，如：drafly<br>
1. 在_config.yml文件中将comment中disqus的参数short_name的改为drafly即可 <br>
1. 高级功能比如说河蟹非法字符，或者增加评论权限等均可在Disqus网站的setting中进行设置。
   
  具体细节可以参考[《为博客添加 DisQus 评论》](http://pizn.github.io/2011/11/15/use-disqus-for-your-post.html)。
