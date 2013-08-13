HTML5 CSS3 前端 DEMO
============

* 浮动布局（float）
* 定位布局（position）
* 行内块布局（inline-block）
* 多栏布局（Columns）
* 伸缩布局（Flexbox）
* 网格布局（Grids）

box -> flexbox  
columns -> grids

### 设计目标

* 设计原因
    * CSS 是设计师工具，面向设计师而非程序员
    * 目前的 w3c 标准期望使用 css 静态描述的方式解决动态适应的目标，但目前还不太完善
        有许多地方依然得使用 js 辅助，那为什么不直接使用 css 与 js 混合的方式布局呢
        兼有二者的优点
* 设计方式，结果倒推
    * CSS 如此写类，达到什么效果
        * 兼有百分比与固定宽度布局模式，混合模式
    * JS 如此配置，达到什么效果
* 设计要求
    * html 使用新的语意化结构标签
    * CSS 使用 less 组织
        * 使用类配置
        * 只包含布局 mixins，不包含样组件
        * 基于一款现有栅格化布局CSS框架
        * @media 方式做响应式布局
        * 字体大小使用 rem
    * JS 使用 jquery plugin 方式组织
        * 使用参数 或者 json 配置
        * 考虑 js 包 wrap，使 html 结构语意更明晰
        * 在JS辅助下实现完全弹性伸缩
        * 使用 resize 监听，绑定事件层叠样式
* 版本控制使用 git, 提交至 gitoschina, github 做同步

* 无 CSS 结构良好，语意清晰
* 无 js 使用 CSS3 响应式
    * 脱离 js 是独立的 栅格化响应框架
    * 增加 js 是完全弹性百分比布局框架
* 先不考虑兼容问题
    * IE10+
    * firefox(new)
    * chrom(new)

* 使用框架开发（组织官网，组织博客，rss管理界面）

* 扩展
    * 文字竖排
    * 幻灯
    * 手风琴

### 包含模块

* reset
* mixins(base)
* grids(栅格)
* js 总控
    类名 增加指定前缀类名，js取dom对象，根据上下文自动对样式进行覆盖

### 参考资料

#### BLOG INFO（Team）
http://www.w3cplus.com/  
http://dev.oupeng.com/blog  
http://www.daqianduan.com/  
http://www.gbin1.com/  
http://www.36ria.com/  
http://newhtml.net/  
http://www.ilovexuexi.com/  
http://codepen.io/  

#### BLOG INFO（Personal）
http://www.css88.com/  
http://www.fantxi.com/  
http://www.cnblogs.com/lhb25/  
http://www.cnblogs.com/sanshi/  
http://www.zhangxinxu.com/wordpress/  
http://www.liveme.org/  
http://www.webstuffshare.com/  

#### Personal Show Page  
http://www.designembraced.com/  

#### JQUERY
http://www.css88.com/jqapi-1.9/  
http://www.bootcss.com/p/jquery.pin/  
http://www.tdog8.com/  

#### 测试站点
http://netrenderer.com/index.php  
http://mattkersley.com/responsive/

#### LESS 
http://www.lesscss.net/  

#### IE
http://msdn.microsoft.com/zh-cn/library/ie/bg124103(v=vs.85).aspx  
http://ued.ctrip.com/blog/wp-content/webkitcss/index.html  
http://mattkersley.com/responsive/  
http://netrenderer.com/  

#### BootStrap
http://www.bootcss.com/  
http://www.bootcss.com/p/buttons/   
http://www.bootcss.com/p/preboot/  

#### filefox
https://developer.mozilla.org/en-US/docs/Web/Guide/CSS  
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Reference/  Mozilla_Extensions?redirect=no  

#### CSS3
http://css3pie.com/    
http://www.html5rocks.com/zh/  
http://sev7n.net/demo/css3/css3-3d-carousel.html  
http://css.doyoe.com/  
http://www.w3.org/TR/2012/WD-css3-flexbox-20120322/  
http://www.w3.org/html/ig/zh/wiki/Css3-flexbox/zh-hans   
http://www.97zzw.com/book/css3book/  

#### WEB 设计
http://lifesinger.github.io/lab/2011/default-fonts/  
http://www.ituring.com.cn/minibook/303  
https://gist.github.com/jayj/4012969  
http://s2dongman.com/  

#### 框架
bootstrap
http://purecss.io/  
http://simplegrid.info/  
http://thisisdallas.github.io/Simple-Grid/  
http://imperavi.com/kube/  
http://zh.learnlayout.com/  
http://tympanus.net/Tutorials/BasicReadyToUseCSSStyles/  
http://navi.grantcr.com/  
http://www.talkingdata.net/  

#### Storage
https://www.nitrous.io  
http://www.qiniu.com/  
http://www.gridsystemgenerator.com/  

*. 如果你衣食无忧，你最乐意花大量时间持之以恒去做的事情是什么？
0. 用一个词/一句话说明干技术的原因。描述为何选择前端开发。
1. 列举自己最熟悉，最为顺手的开发工具组合。
2. 是否使用过版本管理工具（CVS/SVN/GIT）?
3. 是否调试过JS，使用什么方法/工具。
4. 自己看过觉得印象深刻，对自己影响深远技术书，至多三本，不仅限前端书籍，但前端书籍至少一本。
5. 列举三个获取技术信息的渠道（网站、博客均可）。
6. 是否有 Linux 使用经验？什么发行版？是否作为主力桌面使用过？使用过多长时间？
7. 叙述一个通过查询思考实践解决的印象最为深刻的浏览器兼容问题，并描述解决方法。
8. 是否有了解、熟悉的后端开发语言，请列举，至多三种；是否了解 ajax 及后端 webservices 技术，并简述。
9. 是否（听说/了解/使用/熟悉/精通）如下技术/框架/库，请分别描述：
    less/SASS、任意一种 CSS 框架、任意一种前端 mvc 框架、前端模板技术、nodejs
10. 是否使用过自动构建工具，如有使用过写出名称，并简述使用场景。
11. 是否有完全自己动手从 0 写起的 demo 或作品？是否有自有博客，简述主要涉及技术，并提供地址。
12. 你认为自己是更偏重 CSS 还是 JS？
13. 不使用浮动、定位设计制作一个纯色 DEMO，任意文字填充
14. 写一个 JS 方法，将任意输入格式化成千分位金额表示法
