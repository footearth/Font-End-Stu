# CSS中的颜色

## 颜色的基础知识

* [什么是颜色](http://zh.wikipedia.org/zh-cn/%E9%A2%9C%E8%89%B2)
* 颜色的几种编码方式
    * [RGB(RGBA) —— 光感三原色](http://zh.wikipedia.org/zh-cn/%E4%B8%89%E5%8E%9F%E8%89%B2%E5%85%89%E6%A8%A1%E5%BC%8F)
    * 色相、饱和度和明度系统
        * [HSL](http://zh.wikipedia.org/wiki/HSL)
        * [HSV(HSB)](http://zh.wikipedia.org/wiki/HSL%E5%92%8CHSV%E8%89%B2%E5%BD%A9%E7%A9%BA%E9%97%B4)
        * [HSL 与 HSV 的比较](http://zh.wikipedia.org/zh-cn/HSL%E5%92%8CHSV%E8%89%B2%E5%BD%A9%E7%A9%BA%E9%97%B4#HSL_.E4.B8.8E_HSV_.E7.9A.84.E6.AF.94.E8.BE.83)
    * [CMY(CMYK) —— 印刷四分色](http://zh.wikipedia.org/zh-cn/%E5%8D%B0%E5%88%B7%E5%9B%9B%E5%88%86%E8%89%B2%E6%A8%A1%E5%BC%8F)
    * 其他
        * [YUV](http://zh.wikipedia.org/wiki/YUV)

## 几种编码方式相互转换

* [git-Color](https://github.com/eligrey/color.js)
* [TinyColor](http://bgrins.github.io/TinyColor/)
* [Color2Color](https://github.com/indyarmy/color2color/)

### RGB <--> HEX

* [javascript 十六进制与RGB颜色值的相互转换](http://www.zhangxinxu.com/wordpress/2010/03/javascript-十六进制与rgb颜色值的相互转换/)

* RGB 转 HEX：十进制转十六进制

    Number($number).toString(16)

* HEX 转 RGB: 十六进制转十进制

    parseint("0x" + $hexNumber)

### RGB <--> HSL/V(B)

### RGB <--> CMY

* [rgb2cmyk](http://www.javascripter.net/faq/rgb2cmyk.htm)
* 三原光 与 四分色 互转并不种完全一致，WEB中使用场景很少

### RGB <--> YUV

* [YUV <--> RGB Javascript Converter](http://www.mikekohn.net/file_formats/yuv_rgb_converter.php)
* YUV 的发明是由于彩色电视与黑白电视的过渡时期，与WEB关联也不大

### 在线工具

* [Farbtastic Color Picker](http://acko.net/blog/farbtastic-jquery-color-picker-plug-in/)
* [Work With Color](http://www.workwithcolor.com/color-converter-01.htm)
* [Colorizer](http://colorizer.org/)

## 色彩分区和命名

* [W3C](http://www.w3.org/TR/css3-color/#svg-color)
* [W3Schools Color Test](http://www.w3schools.com/tags/ref_color_tryit.asp)

### 通过 色相 判断颜色

* 独立 Color 对象

## 配色资源

* [导航](http://hao.uisdc.com/)
* [常用互联网配色](http://veryless.org/veryless/test/ui/color/color.html)
* [Color Scheme Designer](http://colorschemedesigner.com/)
* [Adobe Kuler](https://kuler.adobe.com/create/color-wheel/)
* [Color Blender](http://colorblender.com/)
