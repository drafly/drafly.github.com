---
layout: page
title: 韩龙飞
tagline: 如果你未曾失败过，说明你的努力还远远不够——做最好的自己
---
{% include JB/setup %}

Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

编码问题请阅读 [Jekyll在Windows下面中文编码问题](http://www.cnblogs.com/aleda/articles/Jekyll-in-Windows-following-Chinese-encoding-problem-solutions.html)
<br>
发表博文请阅读 [Jekyll在github上构建免费的Web应用](http://blog.fens.me/jekyll-bootstarp-github/)

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Update Author Attributes

In `_config.yml` remember to specify your own data:
    
    title : Drafly's Blog
    
    author :
      name : Longfei Han(韩龙飞)
      email : hanlongfei@hotmail.com
      github : drafly
      twitter : drafly

The theme should reference these variables whenever needed.
    
## Sample Posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## To-Do

This theme is still unfinished. If you'd like to be added as a contributor, [please fork](http://github.com/plusjade/jekyll-bootstrap)!
We need to clean up the themes, make theme usage guides with theme-specific markup examples.


