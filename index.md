---
layout: page
title: 韩龙飞
tagline: 如果你未曾失败过，说明你的努力还远远不够——做最好的自己
---
{% include JB/setup %}

<script type="text/javascript" src="js/tsScroll.min.js"></script>

<script type="text/javascript">
    tsScroll("demoTop","demoTopGd","up",20);
    </script>

<script language ="javascript" type ="text/javascript">
    var  ScrollObj = function (scrollBodyId,scrollBoxId,showHeight,showWidth,lineHeight,stopTime,speed)  {
        this .obj  =  document.getElementById(scrollBodyId);
        this .box  =  document.getElementById(scrollBoxId);
        
        this .style  =   this .obj.style;
        this .defaultHeight  =   this .obj.offsetHeight;
        
        this .obj.innerHTML  +=   this .obj.innerHTML;
        this .obj.style.position  =   " relative " ;
        
        this .box.style.height  =  showHeight;
        this .box.style.width  =  showWidth;
        this .box.style.overflow  =   " hidden " ;
        
        this .scrollUp  =  doScrollUp;
        
        this .stopScroll  =   false ;
        
        this .curLineHeight  =   0 ;
        this .lineHeight  =  lineHeight;
        this .curStopTime  =   0 ;
        this .stopTime  =  stopTime;
        this .speed  =  speed;
        
        this .style.top  =  lineHeight;
        
        this .object  =  scrollBodyId  +   " Object " ;
        eval( this .object  +   " =this " );
        setInterval( this .object + " .scrollUp() " ,speed);
        this .obj.onmouseover = new  Function( this .object + " .stopScroll=true " );
        this .obj.onmouseout = new  Function( this .object + " .stopScroll=false " );
    }
function  doScrollUp() {
    if (  this .stopScroll  ==   true  )
    return ;
    this .curLineHeight  +=   1 ;
    if (  this .curLineHeight  >=   this .lineHeight ) {
        this .curStopTime  +=   1 ;
        if (  this .curStopTime  >=   this .stopTime ) {
            this .curLineHeight  =   0 ;
            this .curStopTime  =   0 ;
        }
    }
    else {
        this .style.top  =  parseInt( this .style.top)  -   1 ;
        if (  - parseInt( this .style.top)  >=   this .defaultHeight ) {
            this .style.top  =   0 ;
        }
    }
}
</script>

<div style="width:1200px; height:300px; margin: 00px 50px 00px 50px">
    <div style="float:left; width:50%"></div>
    
    <div style="height:15px"> </div>
    
    <div style="float:left; width:50%; height:270px; width:575px">
        <img src="/img/personal.JPG" width="200" height="270" align="left" hspace="20" />
        
        <span style="align: right; margin-left:2em; text-align:justify; font-family: KaiTi; font-weight: bold; line-height:1.5em; overflow:visible; font-size:13pt">
            这里是韩龙飞的个人主页。目前就读于北京理工大学，2010年入学，博士在读。喜欢折腾些新鲜玩意，但都不深入。热衷于统计学和机器学习方法，喜欢鼓捣R语言和网站开发，提倡分享和开源，努力坚持健身，热爱球类运动。篮球、羽毛球都会一点点，喜欢Huston Rockets，绝对的Gunners。目前，正努力成为一名优秀的博士生，狂热的机器学习极客，称职的老公。愿未来在CMU一切顺利！
        </span>
    </div>
    
    <div style="float:left; width:400px;">
        <span style="align: right; margin-left:2em; text-align:center; font-family: KaiTi; font-weight: bold; line-height:1.5em; font-size:16pt">
            博客列表
        </span>
        
        <div id="scrollBox" style="border:1px;">
            <div id="scrollBody">
                <ul class="posts" style="font-family: KaiTi; font-weight: bold; font-size: 14pt">
                    {% for post in site.posts %}
                    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
                    {% endfor %}
                </ul>
            </div>
        </div>
        <script language="javascript" type="text/javascript">
            var sample = new ScrollObj("scrollBody", "scrollBox", 25, 300, 19, 63, 50);
            </script>
    </div>
</div>