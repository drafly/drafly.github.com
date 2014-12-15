---
layout: page
title: 韩龙飞
tagline: 如果你未曾失败过，说明你的努力还远远不够——做最好的自己
---
{% include JB/setup %}

<script type="text/javascript" src="js/jquery.pngFix.js"></script>
<script type="text/javascript">$(document).ready(function(){ $(document).pngFix(); });</script>
<script type="text/javascript" src="js/swfobject.js"></script>

<script type="text/javascript">
var flashvars = {};
flashvars.xml = "config.xml";
flashvars.font = "font.swf";
var attributes = {};
attributes.wmode = "transparent";
attributes.id = "slider";
swfobject.embedSWF("design3edge.swf", "content_slider", "575", "265", "9", "expressInstall.swf", flashvars, attributes);
</script>

<div style="width:1000px; height:600px; margin: 10px 50px">
<div style="float:left; width:575px">

<div id="content_slider"> <a href="http://www.adobe.com/go/getflashplayer"> <img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="" /> </a> </div>

<div style="height:15px"> </div>

<div style="height:270px; width:575px">
<img src="/img/personal.JPG" width="200" height="270" align="left"/>

<span style="align: right; margin-left:2em; text-align:center; font-family: KaiTi; font-weight: bold; line-height:1.5em; overflow:visible; font-size:16pt; text-shadow:#f3f3f3 1px 1px 0px, #b2b2b2 1px 2px 0">
这里是韩龙飞的个人主页。目前就读于北京理工大学，2010年入学，博士在读。喜欢折腾些新鲜玩意，但都不深入。热衷于统计学和机器学习方法，喜欢鼓捣R语言和网站开发，提倡分享和开源，努力坚持健身，热爱球类运动。篮球、羽毛球都会一点点，喜欢Huston Rockets，绝对的Arsenal支持者。目前，正努力成为一名优秀的博士生，狂热的机器学习极客，称职的老公。愿未来一切顺利！
</span>
</div>
</div>

<div style="float:left; width:225px">
<span style="align: right; margin-left:2em; text-align:center; font-family: KaiTi; font-weight: bold; line-height:1.5em; font-size:16pt">
博客列表
</span>
<ul class="posts" style="font-family: KaiTi; font-weight: bold; font-size: 14pt">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
</div>
</div>
