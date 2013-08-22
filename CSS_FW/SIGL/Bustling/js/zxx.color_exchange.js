// by zhangxinxu welcome to visit my personal website http://www.zhangxinxu.com/
// 2010-03-12 v1.0.0
//十六进制颜色值域RGB格式颜色值之间的相互转换
//-------------------------------------

//十六进制颜色值的正则表达式
var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

/*RGB颜色转换为16进制*/
String.prototype.colorHex = function () {
    var that = this;
    if (/^(rgb|RGB)/.test(that)) {
        var aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
        var strHex = "#";
        for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            if (hex === "0") {
                hex += hex;
            }
            strHex += hex;
        }
        if (strHex.length !== 7) {
            strHex = that;
        }
        return strHex;
    } else if (reg.test(that)) {
        var aNum = that.replace(/#/, "").split("");
        if (aNum.length === 6) {
            return that;
        } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
                numHex += (aNum[i] + aNum[i]);
            }
            return numHex;
        }
    } else {
        return that;
    }
};
//-------------------------------------------------

/*16进制颜色转为RGB格式*/
String.prototype.colorRgb = function () {
    var sColor = this.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        }
        return "RGB(" + sColorChange.join(",") + ")";
    } else {
        return sColor;
    }
};

// http://www.mikekohn.net/file_formats/yuv_rgb_converter.php
// RGB <-> YUV
function yuv2rgb() {
    var y, u, v, r, g, b;

    var yuv = document.getElementById('yuv');

    y = parseInt(document.forms[0].y.value);
    u = parseInt(document.forms[0].u.value);
    v = parseInt(document.forms[0].v.value);

    r = y + 1.4075 * (v - 128);
    g = y - 0.3455 * (u - 128) - (0.7169 * (v - 128));
    b = y + 1.7790 * (u - 128);

    r = Math.floor(r);
    g = Math.floor(g);
    b = Math.floor(b);

    if (r < 0) r = 0;
    else if (r > 255) r = 255;

    if (g < 0) g = 0;
    else if (g > 255) g = 255;

    if (b < 0) b = 0;
    else if (b > 255) b = 255;

    document.forms[0].red.value = r;
    document.forms[0].green.value = g;
    document.forms[0].blue.value = b;

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length < 2) r = "0" + r;
    if (g.length < 2) g = "0" + g;
    if (b.length < 2) b = "0" + b;

    yuv.style.background = "#" + r + g + b;
}

function rgb2yuv() {
    var y, u, v, r, g, b;

    var yuv = document.getElementById('yuv');

    r = parseInt(document.forms[0].red.value);
    g = parseInt(document.forms[0].green.value);
    b = parseInt(document.forms[0].blue.value);

    y = r * .299000 + g * .587000 + b * .114000
    u = r * -.168736 + g * -.331264 + b * .500000 + 128
    v = r * .500000 + g * -.418688 + b * -.081312 + 128

    document.forms[0].y.value = Math.floor(y);
    document.forms[0].u.value = Math.floor(u);
    document.forms[0].v.value = Math.floor(v);

    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length < 2) r = "0" + r;
    if (g.length < 2) g = "0" + g;
    if (b.length < 2) b = "0" + b;

    yuv.style.background = "#" + r + g + b;
}

function rgb2hsv() {
    var rr, gg, bb,
        r = arguments[0] / 255,
        g = arguments[1] / 255,
        b = arguments[2] / 255,
        h, s,
        v = Math.max(r, g, b),
        diff = v - Math.min(r, g, b),
        diffc = function (c) {
            return (v - c) / 6 / diff + 1 / 2;
        };

    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(r);
        gg = diffc(g);
        bb = diffc(b);

        if (r === v) {
            h = bb - gg;
        } else if (g === v) {
            h = (1 / 3) + rr - bb;
        } else if (b === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        v: Math.round(v * 100)
    };
}