# Bustling

## 整站导航

### Bustling

* 架构规范
    * H5 标签结构
    * CSS / JS / JSON 架构
* CSS工具（变量定义）
    * 颜色
    * 字体
    * 排版
    * 链接
* 栅格系统
    * 结构
    * CSS
    * TIPS
* 预置组件
    * 导航
        * 一级导航
        * 二级导航
        * 三级导航
        * 页面导航
    * 输入框
    * 勾选框
* 排版示例
    * 带四级菜单排版
    * 单页面 Markdown 排版
* 增效工具

### 前端工具

### 前端导航

### 前端观察

## 设计目标

### 设计起因

* CSS 是设计师工具，面向设计师而非程序员
* 使用 Less，兼有 PerBoot/BootStrap 特征
* 加大 js 调整样式比例

### 设计方式，结果倒推

* 配置分离
* CSS 如此写类，达到什么效果
    * 兼有百分比与固定宽度布局模式，混合模式
* JS 如此配置，达到什么效果

### 设计要求

* 使用 H5 的语意化结构标签
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

## 命名原因

https://github.com/kissyteam/kissy
http://docs.kissyui.com/
http://cloudajs.org/
https://github.com/brandnewera/sumeru
