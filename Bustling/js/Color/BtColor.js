"use strict"

// 目前只支持 RGB/HEX/HSL/V(B)

var Color = (function () {
    // define global
    var tpStr = "string",
        tpUndef = "undefined",
        rgb = "RGB",
        hex = "HEX",
        hsl = "HSL",
        hsv = "HSV",
        math = Math,
        number = Number;

    // 内部存量
    var r, g, b, a;

    var Color = function () {

    };

    // 判断输入是否符合颜色的几种表示方式中的任意一种
    var init = function (args) {

    };

    // 是颜色，将所有输入转为 RGBA 存储

    // 转换方法
    Color.RGBtoHEX = function (r, g, b, a) {
    };

    Color.HEXtoRGB = function (str) {
    };

    Color.RGBtoHSL = function (r, g, b, a) {
    };

    Color.HSLtoRGB = function (str) {
    };

    Color.RGBtoHSV = function (r, g, b, a) {
    };

    Color.HSVtoRGB = function (str) {
    };

    // 默认输出 HEX
    Color.toString = function () {
        var retCode = "";
        return retCode;
    };

    // 提供各表示方式的输出

    // 输出颜色名称
})();