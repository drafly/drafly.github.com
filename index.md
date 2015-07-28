---
layout: page
title: 韩龙飞
tagline: 如果你未曾失败过，说明你的努力还远远不够——做最好的自己
---
{% include JB/setup %}

<style type="text/css">
    *{padding:0; margin:0;}
    #roll{ border:0px solid red;height:230px; margin:10px auto; width:600px; overflow:hidden;list-style:none;}
    #roll li{height:40px; padding-left:10px;line-height:30px; border-bottom:0px solid #ddd;}
    a{text-decoration:none;color:#0066CC;}
    a:hover{ color:#FF0000; text-decoration: underline;}
    </style>



<div style="width:1000px; height:600px; margin: 00px 50px 00px 50px">
    
    <div style="float:left; width:50%">
        <div > {% include slice.html %} </div>
        <div style="height:15px"> </div>
        
        <div style="float:left; ">
            <table border="3" cellpadding="10" cellspacing="10" style="float:left">
                <tr>
                    <td style="padding:10px">
                        <img src="/img/personal.JPG" width="200" height="260" align="left" hspace="20">
                    </td>
                    <td style="padding:10px">
                        <span style="text-align:justify; letter-spacing:0.5px; font-family: KaiTi; font-weight: bold; line-height:1.5em; overflow:visible; font-size:13pt;">
                        这里是韩龙飞的个人主页。我喜欢折腾些新鲜玩意，但都不深入。热衷于统计学和机器学习方法，喜欢鼓捣R语言和网站开发，提倡分享和开源，努力坚持健身，热爱球类运动。篮球、羽毛球都会一点点，绝对的Gunners。目前，正努力成为一名优秀的博士生，机器学习极客，称职的老公。愿未来在CMU一切顺利！
                        </span>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <div style="float:left; width:15%"></div>
    <div style="float:left; width:400px;">
        <span style="align: left; margin-left:2em; text-align:center; font-family: KaiTi; font-weight: bold; font-size:16pt; color: #0b2e6f;">
            博文云
        </span>
        
        <!-- 博文列表滚动播放-->
<!--        <ul class="posts" id="roll" style="float:left; font-family: KaiTi; font-weight: bold; font-size: 14pt">-->
<!--            {% for post in site.posts %}-->
<!--            <!--<span>{{ post.date | date_to_string }}</span> &raquo;-->
<!--            <li> <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>-->
<!--            {% endfor %}-->
<!--        </ul>-->
    <!-- 标签云和标签展示-->
        {% include category_cloud.html %}
        </div>
</div>

<!--<script type="text/javascript">-->
<!--    (function(A){-->
<!--     function _ROLL(obj){-->
<!--     this.ele = document.getElementById(obj);-->
<!--     this.interval = false;-->
<!--     this.currentNode = 0;-->
<!--     this.passNode = 0;-->
<!--     this.speed = 100;-->
<!--     this.childs = _childs(this.ele);-->
<!--     this.childHeight = parseInt(_style(this.childs[0])['height']);-->
<!--     addEvent(this.ele,'mouseover',function(){-->
<!--              window._loveYR.pause();-->
<!--              });-->
<!--     addEvent(this.ele,'mouseout',function(){-->
<!--              window._loveYR.start(_loveYR.speed);-->
<!--              });-->
<!--     }-->
<!--     function _style(obj){-->
<!--     return obj.currentStyle || document.defaultView.getComputedStyle(obj,null);-->
<!--     }-->
<!--     function _childs(obj){-->
<!--     var childs = [];-->
<!--     for(var i=0;i<obj.childNodes.length;i++){-->
<!--     var _this = obj.childNodes[i];-->
<!--     if(_this.nodeType===1){-->
<!--     childs.push(_this);-->
<!--     }-->
<!--     }-->
<!--     return childs;-->
<!--     }-->
<!--     function addEvent(elem,evt,func){-->
<!--     if(-[1,]){-->
<!--		   elem.addEventListener(evt,func,false);-->
<!--     }else{-->
<!--		   elem.attachEvent('on'+evt,func);-->
<!--     };-->
<!--     }-->
<!--     function innerest(elem){-->
<!--     var c = elem;-->
<!--     while(c.childNodes.item(0).nodeType==1){-->
<!--     c = c.childNodes.item(0);-->
<!--     }-->
<!--     return c;-->
<!--     }-->
<!--     _ROLL.prototype = {-->
<!--     start:function(s){-->
<!--     var _this = this;-->
<!--			  _this.speed = s || 100;-->
<!--     _this.interval = setInterval(function(){-->
<!--                                  _this.ele.scrollTop += 1;-->
<!--                                  _this.passNode++;-->
<!--                                  if(_this.passNode%_this.childHeight==0){-->
<!--                                  var o = _this.childs[_this.currentNode] || _this.childs[0];-->
<!--                                  _this.currentNode<(_this.childs.length-1)?_this.currentNode++:_this.currentNode=0;-->
<!--                                  _this.passNode = 0;-->
<!--                                  _this.ele.scrollTop = 0;-->
<!--                                  _this.ele.appendChild(o);-->
<!--                                  }-->
<!--                                  },_this.speed);-->
<!--     },-->
<!--     pause:function(){-->
<!--     var _this = this;-->
<!--     clearInterval(_this.interval);-->
<!--     }-->
<!--     }-->
<!--     A.marqueen = function(obj){A._loveYR = new _ROLL(obj); return A._loveYR;}-->
<!--     })(window);-->
<!--     marqueen('roll').start(100/*速度默认100*/);-->
<!--</script>-->