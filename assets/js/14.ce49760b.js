(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{419:function(n,t,e){"use strict";e.r(t);var a=e(2),s=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"踩坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#踩坑"}},[n._v("#")]),n._v(" 踩坑")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("祖先元素有transform的话，子元素fixed不会正确生效\n")])])]),t("h2",{attrs:{id:"dpi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dpi"}},[n._v("#")]),n._v(" dpi")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("dpi:dot per inch 物理层面\n每英寸有几个像素点\n\n苹果公司解决方案\n160dpi的情况下1dp = 1px\n所以一张2*2 px的图\n在320dpi的情况下，占用了16px,但是显示大小相同\n")])])]),t("h2",{attrs:{id:"flex布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[n._v("#")]),n._v(" flex布局")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("\t容器：父元素\n\t项目：子元素\n\t\n\t为父元素（容器）设置flex后，子元素（项目）的float clear vertical-align都失效\n容器常见属性\n\tdisplay：flex //flexible box的缩写 任何容器都可以指定（不区分块级和行内）\n\tflex-direction:设置主轴方向 默认x轴为主轴，主轴方向→\n\t\t\trow(默认x，→) \n\t\t\t//reverse控制主轴方向\n\t\t\trow-reverse \n\t\t\tcolumn（y，↓） column-reverse\n\t\t\t元素跟着主轴排列\n\tjustify-content：设置主轴方向的富裕空间\n\t\t\t默认flex-start从头部开始,center,space-around,space-between(两端贴边)\t\n\tflex-wrap：是否换行\n\t\t默认不换行，如果超出，里面内容缩小 实现响应式\n\t\n\talign-items：侧轴上子元素的排列方式（单行）\n\t\t默认stretch; flex-start;center！\n\t\tstretch会把盒子拉的跟父元素一样高（用得少）\n\t\n\talign-content：侧轴上子元素的排列方式（多行）\n\t\tflex-start,center,space-around,space-between\n\tflex-flow：direction wrap 语法糖复合direction和wrap\n\tflex-flow: row wrap;\n\n子项常见属性\n\tflex 子项占的分数 flex1/(flex1+flex2...) （不要设置宽度\t）\n\talign-self 控制子项在侧轴的排列方式 \n\t\t默认auto 值为父元素的align-items 如果没有父元素 默认stretch\n\torder 默认0 值随意，根据order的值升序排列 \n\t如果没有设置flex-basis 默认拿width 或 height\n\t\nflex-shrink：收缩因子，默认1   注意单行才有收缩\n\nflex c2\n\nflex版本\n\t1. display: box\n\t2. 旧版flex\n\t3. flex\n\t\n容器：父元素\ndisplay: flex;\n//控制主轴以及主轴方向\nflex-direction:水平row/垂直column -reverse（反向）\njustify-content: 控制主轴的富裕空间\nalign-items：控制侧轴的富裕空间\n项目：子元素\n")])])]),t("h2",{attrs:{id:"居中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#居中"}},[n._v("#")]),n._v(" 居中")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('\t1. 已知宽度水平居中\n\twidth: 100px\n\tmargin: 0 auto\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>Title</title>\n  <style>\n      .wrapper,.wrapperfix{\n          position: relative;\n          width: 100px;\n          height: 100px;\n          background-color: pink;\n          margin-bottom: 10px;\n      }\n      /*对于脱离文档流盒子，固定宽高*/\n      /*方案一： div绝对定位水平垂直居中【margin:auto实现绝对定位元素的居中】，*/\n      /*兼容性：,IE7及之前版本不支持*/\n      .inner1 {\n          position:absolute;\n          left:0;\n          top: 0;\n          bottom: 0;\n          right: 0;\n          width: 50px;\n          height: 50px;\n          background: green;\n          margin: auto;\n      }\n      /*方案二：*/\n      /*div绝对定位水平垂直居中【margin 负间距】     这或许是当前最流行的使用方法。*/\n      .inner2{\n          position: absolute;\n          left:50%; /* 定位父级的50% */\n          top:50%;\n          width:50px;\n          height: 50px;\n          background:blue;\n          /*margin-left:-25px;*/\n          /*margin-top:-25px;*/\n          /*方案三：*/\n          /*div绝对定位水平垂直居中【Transforms 变形】*/\n          transform: translate(-50%,-50%); /*自己的50% */\n      }\n/*      方案四：*/\n/*      css不定宽高水平垂直居中*/\n/*      .box{*/\n/*          height:600px;*/\n/*          display:flex;*/\n/*          justify-content:center;*/\n/*          align-items:center;*/\n/*          !* aa只要三句话就可以实现不定宽高水平垂直居中。 *!*/\n/*      }*/\n/*      .box>div{*/\n/*          background: green;*/\n/*          width: 200px;*/\n/*          height: 200px;*/\n/*      }*/\n/*      方案五：*/\n/*      将父盒子设置为table-cell元素，可以使用text-align:center和vertical-align:middle实现水平、垂直居中。比较完美的解决方案是利用三层结构模拟父子结构*/\n/*      <p class="outerBox tableCell">*/\n/*                                   </p><p class="ok">*/\n/*                                                    </p><p class="innerBox">tableCell</p>*/\n/*                                                                                       <p></p>*/\n/*                                                                                            <p></p>*/\n\n\n\n\n/*         !**/\n/*         table-cell实现居中*/\n/*         将父盒子设置为table-cell元素，设置*/\n/*         text-align:center,vertical-align: middle;*/\n/*         子盒子设置为inline-block元素*/\n/*         *!*/\n/*      .tableCell{*/\n/*         display: table;*/\n/*      }*/\n/*      .tableCell .ok{*/\n/*          display: table-cell;*/\n/*          text-align: center;*/\n/*          vertical-align: middle;*/\n/*      }*/\n/*      .tableCell .innerBox{*/\n/*          display: inline-block;*/\n/*      }*/\n/*      方案六：*/\n/*      对子盒子实现绝对定位，利用calc计算位置*/\n/*<p class="outerBox calc">*/\n/*                              </p><p class="innerBox">calc</p>*/\n/*                                                            <p></p>*/\n/*                                                                     !*绝对定位，clac计算位置*!*/\n/*                                                                 .calc{*/\n/*                                                                     position: relative;*/\n/*                                                                 }*/\n/*      .calc .innerBox{*/\n/*          position: absolute;*/\n/*          left:-webkit-calc((500px - 200px)/2);*/\n/*          top:-webkit-calc((120px - 50px)/2);*/\n/*          left:-moz-calc((500px - 200px)/2);*/\n/*          top:-moz-calc((120px - 50px)/2);*/\n/*          left:calc((500px - 200px)/2);*/\n/*          top:calc((120px - 50px)/2);*/\n/*      }*/\n  </style>\n</head>\n<body>\n  <div class="wrapper">\n    <div class="inner1"></div>\n  </div>\n  <div class="wrapper">\n    <div class="inner2"></div>\n  </div>\n  <div class="wrapper">\n    <div class="inner3"></div>\n  </div>\n</body>\n</html>\n\n')])])]),t("h2",{attrs:{id:"css基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css基础"}},[n._v("#")]),n._v(" css基础")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("样式表分类\n1.行内样式表 直接在标签里添加\n2.内部样式表 style\n3.外部样式表 link\n\nfont-family 字体系列\nfont-style 主要针对斜体\nfont: font-style font-weight font-size/line-height font-family\n\n文本属性\ntext-decoration:underline 下划线 line-through 删除线\n一般用于取消a的默认下划线\ntext-indent 首行缩进1em = 一个font-size，继承\nline-height = height 实现居中；比盒子小，文字偏上\n\n")])])]),t("h2",{attrs:{id:"三种传统布局方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三种传统布局方式"}},[n._v("#")]),n._v(" 三种传统布局方式")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("1.普通流（标准流）：上下排列\n  标签按照默认方式排列 如：块级元素独占一行；行内元素按照顺序 从左到右 遇到父元素边缘自动换行\n2.浮动：：水平排列（浮动常和标准流配合排列）\n最主要特点\n1.脱离标准流\n2.不再保留原先的位置\n任何元素都可以浮动，添加后类似行内块元素\n如果行内元素浮动了，不需要转为块或行内块就可以直接给高度和宽度\n浮动后，大小由内容决定\n\n为了约束浮动元素位置\n1.采用标准流的父元素排列上下位置\n2.内部子元素浮动排列\n\n3.定位 ：自由移动或固定\n1.相对：主要作用当爹 子绝父相  不脱离文档流，还占坑\n2.绝对：默认视窗大小的初始..              脱离文档流\n3.固定：没啥用，一般有绝对模拟固定  与绝对的区别：随着视窗移动  \n定位到版心右侧：position left:50% margin-left:版心一半px\n\n定位的盒子才有 z-index：正负0，越大盒子越靠上\n一个盒子分两层（背景和文本），float半个盒子 定位提高一个盒子\n\n给行内元素设置高度：转换，浮动，定位\n块级元素设置定位:宽高默认内容大小\n脱离标准流：不会触发外边距合并\n浮动的元素不会压住下面标准流的文字，压住的是文字的盒子（文字环绕的效果）\n浮动产生的目的：文字环绕图片\n\ndisplay :用于一个元素如何显示 block（块级之外，还有显示的意思） inline none(隐藏，位置也没了)\nvisibility ：用于指定是否可见 visible hidden(继续占有原来位置)\noverflow : visible hidden scroll没超出也会出滚动条 auto 在需要的时候出现滚动条\n\n")])])]),t("h2",{attrs:{id:"清除浮动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除浮动"}},[n._v("#")]),n._v(" 清除浮动")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('why：因为父盒子在很多情况下不方便给高度，子盒子浮动了又不占有位置，最后父盒子高度为0，塌陷，影响到之后的标准流盒子\nclear 本质闭合浮动，将影响限制在父盒子范围内\n方法：\n1.额外标签法：隔墙法，在浮动元素末尾添加空块级标签，例如div style=clear:both div；缺点添加无意义标签，结构化差\n2.父级添加overflow：hidden auto scroll  外边距合并和清楚浮动，缺点无法显示溢出部分\n\n3.父级添加after伪类：额外标签法升级版 最优！！！！！！！！！！！！！！！！！！！！！！！！\n.clearfix:after{\n\tcontent:""\n\tdisplay:block/table table的话好像不用height0了\n\theight:0\n\tclear:both\n\tvisibility:hidden\n}\n.clearfix{\n\tzoom:1\n}\n\n4.父级添加双伪元素:同3，但是前后门都关上 最优！！！！！！！！！！！！！！！！！！！！！！！！！！\n.clearfix:before,.clearfix:after{\n\tcontent:""\n\tdisplay：table\n}\n.clearfix:after{\n\tclear:both\n}\n.clearfix{\n\tzoom:1\n}\n\n')])])]),t("h2",{attrs:{id:"图片"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[n._v("#")]),n._v(" 图片")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("图片格式\n1.jpg 高清，产品类\n2.gif 颜色少但可以保存透明背景和动画效果，图片小动画效果\n3.png 结合了gif和jpg，能保存透明背景，想要切成背景透明的图片！\n4.psd是ps的专用格式，存放了图层通道遮罩等多种设计稿\n\n精灵图/雪碧图spirites：为有效减少服务器接受和发送请求的次数，提高页面加载速度\n:主要针对背景图片\n多产品图片等 经常更换的图片不用、\n通过 background-position移动\n注意一般left top 图片往左上走是-的\n")])])]),t("h2",{attrs:{id:"css3新特性-ie9或移动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css3新特性-ie9或移动"}},[n._v("#")]),n._v(" css3新特性 IE9或移动")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('https://juejin.cn/post/6844903486618861575\ncss3新特性 IE9或移动\n新增选择器\n1.属性 注意：类和属性选择器权重都是10  div[class=""] 权重是11！\ninput[value]{} 表input中有value的  \n重点：[value=""]  ^= 以...开头  $=以...结尾 *= 含有...\n\n\n2.结构伪类\nE:first-child 长子+E  \n\nnth-child(n) n可以是数字，关键字，公式，用于实现隔行变色等 even odd 奇偶\n公式从0开始计算，但是0或超出的部分，会被忽视\nli:ntn-child(n){} 只能写n，写n会选择所有 从0开始，忽视溢出 2n+1 2n n+5 -n+5 前五 n+5 5个开始往后\n\nE:first-of-type 第一个E\n\ndiv:nth-child（1） 会先找第一个孩子 再核对div\ndiv:nth-of-type（1） 先找div再找位置，，不管div位置，肯定是第一个div\n \n\n3.伪元素 权重同标签 1 ；在盒子上面加遮罩层 \n用于在需要往盒子里新添元素时使用，通过CSS模拟创建新的标签元素\n必须有content 属性\t\n::before 在元素内部的前面插入内容，\n::after\n以前的:是CSS2的过时语法，用来支持IE8\n使用场景：\n1.字体图标\nP::before{\n\tposition:absolute\n\tright xx\n\ttop   xx\n\tcontent:“反斜杠e91e 字体编码” 就不需要font-family了\n\tfont-size xx\n}\n2.遮罩层\n.tudou::before{\n\tcontent:"";\n\tdisplay: none\n\tposition absolute\n\ttop 0\n\tleft 0 \n\twidth 100%\n\theight 100%\n\tbackground : rgba(0,0,0,.4) url() no-repeat center\n}\n.tudou:hover::before{\n\tdisplay none\n} \n3.清楚浮动\n.clearfix:before,.clearfix:after{\n\tcontent: \'\';\n\tdisplay: table 使得两个伪类在同行\n}\n.clearfix:after{\n\tclear:both;\n}\n\nCSS3盒子模型\nbox-sizing:content-box/border-box   建立的盒子可见内容是内容区/可见内容含边框  \nfilter:blur(5px) 数值越大越模糊\n\ncal()函数\nwidth:cal(100% -80px);\n\ntransition 过度 常与hover一起用\ntransition: 过度的属性 时间 运动曲线 何时开始,过度属性2 时间 ... 多个属性可以利用,分开，或者all\n\n')])])]),t("h2",{attrs:{id:"css"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[n._v("#")]),n._v(" css")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("选择器\n\t简单选择器\tdiv  .class  #id \n\t复合选择器\t交集选择器div.class\n1.后代 &nbsp 2.子 > 3.并集 , 4.伪类 :hover :first-child\n伪类\n1.链接伪类:给a使用 link(未访问) visited hover active(按下去还未弹起)  书序lvha注意！ \n2.表单伪类 input:focus 选取获得焦点的表单元素\n3.结构伪类\n\n元素的显示模式\n如：div占一行；一行能放多个span\n分类：块元素和行内元素（内联） 特殊：行内块\n块元素：div  \n1.独占一行\n2.可以设宽高，内外边距 \n3.宽度默认100% \n4.里面可放行内或块\n注意：\n1.文字类元素p，主要是放文字，不能放块元素 特别是div\n2.同理h1-h6\n\n行内元素：span\n1.一行可以显示多个\n2.设置宽高无效\n3.默认自身内容宽度\n4.只能容纳文本或其他行内\n注意：\n1.链接里不能再放链接\n2.特殊情况a可以放块级，但display:block 最安全\n\n行内块：img input td\n1.能放一行（行内），但之间会有空隙\n2.默认宽度内容宽（行内）\n3.宽高，内外边距，行高可控（块）\n\nbackground\n1.image 2.repreat 3.position 4.attachment(滚动/固定) 5.color(默认transparent)\nimage 背景图片的位置在背景颜色上方\nlogo或装饰性的小图片或超大的北京图片，优点是便于控制位置（精灵图）\nposition:x,y   (top/center/bottom...px,只写一个表x,另一个默认center)\nbackground:颜色 地址 平铺 滚动 位置\n\n背景颜色半透明 rbga(255,255,255,.3)\n\nCSS三大特性\n1.层叠性：覆盖\n2.继承性：子承父\n可继承：text- font- line- color,...line-height \n注意行高\n父:font-size:14px/1.5\n子：font: 12px  不写单位时候表父的size的1.5倍, 优点：子元素可以根据自身文字大小自动调整行高\n3.优先性\n权重\n继承或* 0,0,0,0\n元素    0,0,0,1\n类或伪类0,0,1,0\nID \t0,1,0,0\n行内\t1,0,0,0\n!important \n注意：\n1.没有进位，权重叠加 ID > 100+个类\n2.判断从左到右\n\nborder:1px solid red 没有顺序要求\n1.width 2.style(solid dotted dashed) 3.color\nborder-top\n\nborder-collapse:collapse 解决表格边框合并问题\n\nborder和padding会影响盒子大小，添加了border 如果不喜欢盒子大小变化，需修改width 和height\n\npadding:上 右 下 左 顺时针； 上 左右 下； 上下 左右\npadding:5px 4个边都有\n应用：导航条等，文字字数不一样多，可以不设置宽度，设置padding来实现居中\n\nwidth:100% 与auto的区别\n\nmargin实现块级盒子水平居中\n1.width\n2.margin:0 auto\n使行内元素或行内块水平居中\ntext-align：center\n\n垂直外边距合并\n1.相邻块元素；A上B下  A有100的下m B有200的上m 觉得应该是300的m 实际却只会有200的m，取大\n解决方法：1.尽量使用padding 2.只给一个盒子加margin\n2.嵌套块元素\nA父B子 A有50的mt 想要让B离A原点 200mt ；结果却是A和B依然重叠，且AB的mt都是200 取大\n1.为父定义上边框\n2.设置padding 原理同1 隔开两者，两者都会使得盒子变大\n3.overflow:hidden\n4.子浮动\n\n\n1.对于行内元素 尽量只设置左右的内外边距，上下无效\n\n去掉li的项目符号 原点\nlist-style none\n\n如果是正方形 border-radius:50% 宽度和高度和 的一半\n原理是在四角画半径为r的圆\n圆角矩形设为高度的一半\n四个值：左上 顺时针\n分开表：border-top-left-radius\n\n盒子阴影：不会影响盒子大小，不占空间\nbox-shadow: h v blur spread color inset/ouset(默认，别写，写了会失效)\nh-shadow 水平 允许负\nv-shadow 垂直 允许负\n\n文本阴影\ntext-shadow：h v blur color \n\n\n用户界面样式\n1.cursor 光标 default默认 pointer move十字架 test not-allowed\n2.去除表单INPUT默认边框 outline:0/none\n3.防止拖拽testarea文本域 resize:none\n\n实现行内块和文字垂直居中：vertical-align: baseline基线（小学文字书写栏四条线中的第三条） top middle bottom（第四条）\n图片底层空白缝隙：因为默认与文字基线对齐，所有会有缝隙 1.添加vertical-align（推荐） 2.转为块级\n\n单行文本省略号\n1.white-space:no-wrap 默认normal自动换行\n2.overflow:hidden\n3.text-overflow:ellipsis 超出部分...代替\n多行文本省略号：这种写法有较大兼容性问题 适合移动端或webkit浏览器\n1.overflow:hidden\n2.text-flow:ellopsis\n3.display:-webkit-box\n4.-webkit-line-clamp:2 限制文本的行数\n5.-webkit-box-orient:vertical 子元素的牌匾方式\n\n布局技巧\n1.margin负值，两个带边框盒子浮动，合并一起 浏览器的渲染过程，1.第一个盒子代码拉一边 2.再渲染第二个；不会出现说都添加了-1 平移\nfloat left margin -1px; 左边盒子的有边框 被右边盒子做边框压住了 1.添加相对定位 2.如果都有相对定位，再设置z-index\n\n2.文字围绕浮动元素\n\n3.行内块实现页码跳转\n\n用Unicode编码代替字体，可以有效避免浏览器解释CSS代码时出现乱码的问题\n黑体 9ED1 4F53\n宋体 5B8B 4F53\n微软雅黑 5FAE 8F6F 96C5 9ED1\n\n\ntransform 转换，即变形，可以实现放大缩小，旋转，位移\n属性：\n1.translate(x,y)  translateX()=translate(x,0) 运用：鼠标经过图片，向上移动-5px\n重点：\n1.最大优点，不会影响到其他元素的位置\n2.百分比相对自身元素：用于水平垂直居中 translate(50%,50%)\n3.对行内无效\n\n2.rotate(Xdeg) 正顺时针，负逆时针\n\n3.transform-origin:x y 设置中心点 默认50% 50%（自身）\n4.transform: scale(x,y) // 1,1 表原先一倍大小（不变）\n用scale的优势：不会影响其他盒子，而且可以设置缩放中心点 \n\n2D转化综合写法：\n\t\ttransform:translate() rotate() scale()\n\t注意：顺序影响效果；位移最前面\n\n动画animation\n\tdiv {\n      width: 200px;\n      height: 200px;\n      background-color: pink;\n      /*调用动画*/\n      animation: move;\n      /*动画时长*/\n      animation-duration: 10s;\n    }\n    /*定义动画*/\n    @keyframes move {\n      /*每个百分比代表一个节点 0 * 10s = 0*/\n      0% {\n\n    }\n      /*25% * 10s = 4s*/\n      25% {\n        transform: translate(1000px,0);\n\n    }\n      50% {\n        transform: translate(1000px,400px);\n      }\n      75%{\n        transform: translate(0,400px);\n      }\n      100%{\n        transform: translate(0,0);\n      }\n    }\n\n常见属性\n\tanimation-timing-function //运动曲线 liner 匀速\n\tanimation-iteration-count //重复次数 默认1，还有infinite\n\tanimation-direction //逆向播放 alternate  会再← ！\n\tanimation-fill-mode //规定动画结束后状态，默认回到起始backwards  保持结束状态forwards ！\n\tanimation-play-state // 暂停或运行\n\n动画简写\n\tanimation: name duration 运动曲线 delay 次数 反向 状态\n注意：简写不包含暂停，一般配合事件\n\tanimation-play-state //运行或停止 \n\n运动曲线：steps 步长 表时间函数中间隔数量，分几步完成动画\n\t打字机效果\n\tdiv {\n      overflow: hidden;\n      font-size: 20px;\n      white-space: nowrap;\n      width: 0;\n      height: 30px;\n      background-color: pink;\n      animation: w 4s steps(10) forwards;\n    }\n    @keyframes w {\n      0% {\n\n      }\n      100%{\n        width: 200px;\n      }\n    }\n\n3D转化\n\t特点：近大远小；物体后面不可见\n\tY轴 向下为+ ！\n\tZ轴 垂直屏幕，往外为+\n\n\ttranslate3d(x,y,z) //位移\n\ttransform:translateZ(100px) //一般都是用px精确单位，不同xy，得借助透视才看得到效果，物体离屏幕的距离，越大，成像越大\n\t用于旋转木马，给父一个固定的视距，设置子的Z\n\trotate3d(x,y,z)//旋转\n\tperspective //透视 也成为视距，即眼睛到屏幕距离，越小，成像越大\n\t注意：透视写在父级上\n\ttransform-style //呈现\n\n浏览器的私有前缀\n\t-moz- //火狐\n\tms\t//ie\n\twebkit //谷歌 评估\n\to //Opera\n提倡写法\n\t-moz-border-radius: 10px\n\t-webkit-border-radius: 10px\n\t-o-border-radius: 10px\n\tborder-radius: 10px\n\n背景线性渐变(注意浏览器私有前缀)\n\tbackground-image: linear-gradient(180deg,#fa5956,#fb8650);\n\tbackground: -webkit-linear-gradient(起始方向,颜色1,颜色2，...);\n\n")])])]),t("h2",{attrs:{id:"浏览器默认样式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器默认样式"}},[n._v("#")]),n._v(" 浏览器默认样式")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("通常情况下，浏览器会为元素设置默认样式\n一般要去除默认样式\n")])])]),t("h2",{attrs:{id:"选择器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[n._v("#")]),n._v(" 选择器")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('https://juejin.cn/post/6844904137742614542\nCSS选择器分类\n1.id选择器 (#id)\n2.类选择器 (.classname)\n\n3.元素选择器 又称标签选择器\n\n4.通配符选择器 (*)\n\n来自 <https://juejin.cn/post/6844904137742614542> \n\n5.属性选择器\n    [title]{\n      \n    }\n[attribute=value] 用于选取带有指定属性和值的元素\n\n  <a href="" title="value"></a>\n\n    a[title= value]{\n      \n    }\n[attribute~=value] 用于选取属性值中包含指定词汇的元素\n\n[attribute|=value] 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词\n\n[attribute^=value] 匹配属性值以指定值开头的每个元素\n\n[attribute$=value] 匹配属性值以指定值结尾的每个元素\n\n[attribute*=value] 匹配属性值中包含指定值的每个元素\n\n6.群组选择器 (A，B)\n\n7.后代选择器，又称包含选择器 (A B)\n8.子选择器 (A>B)\n\n9.相邻兄弟选择器 (A+B) 表示选中A的下一个相邻元素\n\n10.相邻兄弟选择器衍生(A~B)\n表示选中A后的N个相邻元素\n\n11.伪类选择器\n用来选择处于特定状态下的元素\n• :first-child：匹配元素下的第一个元素\n• :last-child：匹配元素下的最后一个元素\n• :nth-child()：匹配元素下的第n个元素，(2n+1)代表基数，(2n)代表偶数\n\n• :first-of-type：匹配元素下的每一个标签类型的第一个\n• :last-of-type：匹配元素下的每一个标签类型的最后一个\n• :nth-of-type(n)：匹配元素下的每一个标签类型的第n个\n\n\n• :link：未访问链接\n• :visited：已访问链接\n• :hover：鼠标放置上的链接\n• :active：被激活时的状态\n使用顺序： :link>:visited>:hover>:active love hate (lvha)\n\n• :focus： 选中被激活的表单元素\n\n• :checked：选中被勾选的表单元素\n• :disabled：选中被禁用的表单元素\n• :root：选中根节点\n• :target：定位当前活动页面内定位点的目标元素\n• :not(xx)：选中不为xx的元素\n\n12.伪元素选择器\n\n可用于定位文档中包含的文本，与伪类进行区分，伪元素使用双冒号(::)定义\n\n• ::before、::after：使用content属性生成额外的内容并插入在标记当中\n• ::first-line：匹配文本首行\n• ::first-letter：匹配文本首字母\n• ::selection：匹配突出显示的文字\n\n权重计算规则\n\t• 第一等：代表内联样式，如: style=””，权值为1000。\n\t• 第二等：代表ID选择器，如：#content，权值为0100。\n\t• 第三等：代表类，伪类和属性选择器，如.content，权值为0010。\n\t• 第四等：代表类型选择器和伪元素选择器，如div p，权值为0001。\n\t• 通配符、子选择器、相邻选择器等的。如*、>、+,权值为0000。\n继承的样式没有权值。\n')])])]),t("h2",{attrs:{id:"rem和em"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rem和em"}},[n._v("#")]),n._v(" rem和em")]),n._v(" "),t("h2",{attrs:{id:"文档流和盒子模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文档流和盒子模型"}},[n._v("#")]),n._v(" 文档流和盒子模型")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("文档流 normal flow\n\t-网页是一个多层结构\n\t-用户只能看到最上层\n\t-最底层称为文档流，是网页的基础\n\t-元素默认在文档流中排列\n\t\nvisibility: hidden 隐藏但依然占位置\n元素类型display：table  / none隐藏元素 不占位置\n\t在文档流\n\t\t-块元素\n\t\t\t独占一行，垂直排列\n\t\t\t默认宽度父元素全部宽度，默认高度被内容撑满\n\t\t-行内元素\n\t\t\t自身大小，从左到右水平排列\n\t\t-行内块元素：可设置宽高 又不会独占一行 \n\t\t\t-2个行内块元素会有缝隙，相当于有空格\n\t\t\t<a …display:inline-block>\n\t\t\t<a …display:inline-block>\n\t不在文档流\n\n盒子模型\n块元素：\n\t内容区(content): width height\n\t内边距(padding)\n\t边框(border):边框宽度，边框颜色，边框样式  1px solid red\n\t外边距(margin)\n\t\n\t一个元素在父元素内，水平布局必须满足以下等式\n\tmargin-left + border-left + padding-left + width + pading-right + border-right +margin-right = 父元素宽度\n\t\t如果以上值没有auto，默认按margin-right来调整\n\t三个能设置auto ： width margin-left margin-right\n\twidth 默认auto 才会显得是100%\n\t\n已知width 水平居中 margin: 0 auto\n\n垂直方向布局\n\t如果子元素超过父元素高度，默认溢出 overflow: hidden / scroll 出现两条滚动条 /auto根据需求生成滚动条\n\n行内元素的盒子模型\n\t不支持width height,设置padding,border,margin不会影响页面布局\n\n//设置盒子尺寸计算方式（width和height作用）\nbox-sizing: content-box(默认)\n\t\t：border-box //此时 width = content + border\n\n\n")])])]),t("p",[t("img",{attrs:{src:"/docs/handbook/assets/imgs/boxModule.png",alt:"Alt text",title:"optional title"}})]),n._v(" "),t("h2",{attrs:{id:"垂直外边距重叠"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垂直外边距重叠"}},[n._v("#")]),n._v(" 垂直外边距重叠")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("相邻的垂直方向外边距会发送重叠，水平不会\n兄弟元素：不需要处理\n\tbox1{ margin-bottom: 100px} box2{ margin-top: 100px}\n\t结果只有100px，同正负，取绝对值大， 如果一正一负，取和\n\n父子元素：\n\touter{} inner{margin-top: 100px} 会带着父元素一起下移\n\t这时候，子元素的上外边距 和 父元素的上外边距重叠\n\t子元素的外边距会传递给父元素，主要考虑上外边距\n\t解决:\n\t\t注意如果有border隔离，不会合并\n")])])]),t("p",[t("img",{attrs:{src:"/docs/handbook/assets/imgs/css1.png",alt:"Alt text",title:"optional title"}})]),n._v(" "),t("h2",{attrs:{id:"轮廓阴影和圆角"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#轮廓阴影和圆角"}},[n._v("#")]),n._v(" 轮廓阴影和圆角")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("设置元素轮廓\n\toutline\n\t类似border，但不会影响布局，只会影响显示\n\n设置阴影\n\tbox-shadow: black\n\t此时不会有效果，因为正处于盒子的正下方\n\tbox-shadow: 10px 10px  10px rgba(0,0,0,.3)\n\t\t\tx偏移量 y偏移量 阴影模糊半径：越大越模糊\n\t\t\t\n圆角\n\tborder-top-left-radius: 50px 100px\n\t\t\t\tx方向半径 y方向半径\n\t\t\t\t\n\tborder-radius：顺时针 左上 开始\nborder-radus: 50% 圆形\n")])])]),t("h2",{attrs:{id:"浮动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浮动"}},[n._v("#")]),n._v(" 浮动")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("高度塌陷问题：\n\t父元素height默认被子元素撑开\n\t子元素脱离文档流，父元素没人撑开，导致height丢失\n\t下面元素会自动上移，布局错乱\n\nBFC:block formatting context 块级模式化环境\n\t是css隐藏属性，可以为一个元素开启BFC,开起后，该元素会变成一个独立的布局区域\n\t\n\t开启BFC后元素特点：\n\t\t1.不会被浮动元素覆盖\n\t\t2.垂直外边距不会重叠\n\t\t3.可以包裹住浮动子元素\n\t如何开启\n\t\t1.float：left\n\t\t2.display:inline-block\n\t\t3.overflow: 非visible hidden \n4.\n")])])]),t("h2",{attrs:{id:"css默认值-继承-百分比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css默认值-继承-百分比"}},[n._v("#")]),n._v(" CSS默认值，继承，百分比")]),n._v(" "),t("h2",{attrs:{id:"移动端布局"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动端布局"}},[n._v("#")]),n._v(" 移动端布局")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("单独制作移动端页面\n\t流式布局（移动web开发常见）\n\t\t给%宽；通常搭配max-width 和min-width\n\tflex 弹性布局（推荐）\n\tless+rem+媒体查询\n\t混合布局\n\n响应式页面兼容移动端\n\t媒体查询\n\tbootstrap\n\n\n圣杯布局\t\n\tdiv\t\n\tdiv flex:1 //表将剩余空间当做1份 全部给2号盒子\n\tdiv\n\nrem布局特点\n\t1.文字也随着屏幕变化\n\t2.流式和flex主要是针对宽度布局，rem高度也可以变化\n\nrem是root em是一个相对单位，基准是html元素的字体大小\n\tem是父元素字体大小\nex.根元素（html）设置字体12px,非元元素设置width=2em;换成24px\n\t！通过修改html的文字大小，总体控制其他元素文字大小\n\n媒体查询Media Query:针对不同屏幕尺寸，设置不同样式\n\t语法：\n\t@media 类型 and/not/only (媒体特性) {\n\t    css code\n\t}\n@media screen and (max-width: 800px) { //表当浏览器尺寸小于等于800px时，生效\n    body {\n        background-color: pink;\n    }\n}\n@media screen and (max-width: 499px) { //注意顺序从小到大或从大到小，小于等于499肯定也小于等于800\n    body {\n        background-color: yellow;\n    }\n}\n\n引入资源：针对不同的媒体查询引入不同的css文件，直接在link里进行媒体查询\n\nLESS：CSS的扩展语言，也成为CSS预处理器，常见的预处理器有Sass,Less,Stylus\n\tCSS缺点：CSS是非程序性语言，没有变量，函数，作用域等概念\n\t代码复用率低，不方便维护，没有计算能力\nLess变量\n\t@变量名:值； //申明变量并赋值\n\nLess编译\n\nLess嵌套\n\t1.子元素样式直接写在父元素内\n\t2.如果遇到伪类，交集，伪元素时，添加&符号，如果直接写在内部，会编译为：a :hover 会有空格，当后代选择器看待了\n\t&:hover 编译为 a:hover\n\nLess运算\n\t除法时，最好加括号 （50 / 40rem）\n\t注意：\t运算符左右空格\n\t\t单位只有一个的话，就以此为准\n\t\t如果有两个不一样的单位，以第一个为准\n实际开发适配方案\n\t第一步：根据设计稿与设备宽度的比例，动态计算并设置html根标签的font-size大小\n\t第二步：设计稿元素的宽高和相对位置等取值，换算为rem\n技术方案1（主流）：less + 媒体查询 +rem\n技术方案2（推荐）：flexible.js + rem //有js更简单，现在不建议用flexible了，而是用vw vh方案\n\t\t原理是设备划分10份，只需要确定好html文字大小，其余JS处理\n\n慕课插件！！\n")])])]),t("h2",{attrs:{id:"平面转化transform属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#平面转化transform属性"}},[n._v("#")]),n._v(" 平面转化transform属性")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("实现：元素位移，旋转，缩放的2D效果\ntransform一般搭配transtion使用\n值：方位名词 right left center top bottom\ntranslate(水平距离，垂直距离)  %取自身 用于居中\nrotate(360deg)\norigin 改变旋转点，默认中心点 跟transition写一起\n")])])]),t("h2",{attrs:{id:"background-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background-size"}},[n._v("#")]),n._v(" background-size")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("cover\n缩放背景图片以完全覆盖背景区，可能背景图片部分看不见。和 contain 值相反，cover 值尽可能大的缩放背景图像并保持图像的宽高比例（图像不会被压扁）。该背景图以它的全部宽或者高覆盖所在容器。当容器和背景图大小不同时，背景图的 左/右 或者 上/下 部分会被裁剪。\ncontain\n缩放背景图片以完全装入背景区，可能背景区部分空白。contain 尽可能的缩放背景并保持图像的宽高比例（图像不会被压缩）。该背景图会填充所在的容器。当背景图和容器的大小的不同时，容器的空白区域（上/下或者左/右）会显示由 background-color 设置的背景颜色。\n")])])]),t("h2",{attrs:{id:"网页效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网页效果"}},[n._v("#")]),n._v(" 网页效果")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("元素便宜了offset,动态获取元素的位置和大小\n\t1.元素距离父元素的距离（父需有定位）\n\telement.offsetTop/Left\n\t2.获取元素自身宽高（返回值不带单位）\n\telement.offsetWidth/Height，包括padding border 内容\n\t3.获取父元素（定位）\n\telement.offsetParent //带定位的老子\n\telement.parentNode //亲爸爸\n\noffset和style的区别：获取用offset 更改用style\nstyle\n\t1.只能获取到行内样式表的值（带单位）\n\t2.width 不包含 padding和border\n\t3.可赋值\n\n案例：获取鼠标在盒子里的坐标\n\t1.鼠标在页面的坐标 e.pageX\n\t2.盒子距离页面的距离\n\t3.1-2:鼠标在盒子里的坐标\n\n鼠标移动事件\n\tmousemove\n\n\tvar box = document.querySelector('.box')\n\tbox.addEventListener('mousemove',function(e){\n\t\tvar x = e.pageX - this.offsetLeft\n\t\tvar y = e.pageY - this.offsetTop\n\t\tthis.innerHTML = 'x的坐标是'+ x +'y的坐标是'+ y\n\t})\n\n案例：拖动模拟框\n\t1.点击登录后，弹出登录框，同时显示大的灰色背景\n\t2.登录框可以拖动\n\n\tvar login = document.querySelector('.login')\n    var mask = document.querySelector('.login_bg')\n    var link = document.querySelector('#link')\n    var closeBtn = document.querySelector('#closeBtn')\n    link.addEventListener('click',function (){\n      mask.style.display = 'block'\n      login.style.display = 'block'\n    })\n    closeBtn.addEventListener('click',function (){\n      mask.style.display = 'none'\n      login.style.display = 'none'\n    })\n    //鼠标拖拽：按下，移动，弹起\n    //盒子位置：鼠标坐标-鼠标盒子内坐标\n    var title = document.querySelector('#title')\n    title.addEventListener('mousedown',function (e){\n      //获取鼠标在盒子内坐标\n      var x = e.pageX - login.offsetLeft\n      var y = e.pageY - login.offsetTop\n      document.addEventListener('mousemove',move)\n      function move(e){\n        login.style.left = e.pageX - x + \"px\"\n        login.style.top = e.pageY - y + \"px\"\n      }\n      //鼠标弹起，移除移动事件\n      document.addEventListener('mouseup',function (){\n        document.removeEventListener('mousemove',move)\n      })\n    })\n\n案例：模仿京东放大镜\n\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);