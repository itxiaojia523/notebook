(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{451:function(e,s,p){"use strict";p.r(s);var t=p(2),v=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("nuxt.js //做ssr")]),e._v(" "),s("p",[e._v("npx create-nuxt-app cms-web")]),e._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cchenm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220209113218588.png",alt:"image-20220209113218588"}})]),e._v(" "),s("p",[e._v("TDK: title meta中的description和keyWords")]),e._v(" "),s("p",[e._v("基本配置")]),e._v(" "),s("p",[e._v("package.json中配置 端口")]),e._v(" "),s("p",[e._v('"devDependencies": {},')]),e._v(" "),s("p",[e._v('"config":{')]),e._v(" "),s("p",[e._v('"nuxt":{')]),e._v(" "),s("p",[e._v('"host":"127.0.0.1",')]),e._v(" "),s("p",[e._v('"port":"8000"')]),e._v(" "),s("p",[e._v("}")]),e._v(" "),s("p",[e._v("}")]),e._v(" "),s("p",[e._v("安装less")]),e._v(" "),s("p",[e._v("npm i less less-loader@7.0.0 --save -dev")]),e._v(" "),s("p",[e._v("在static文件中创建 base.less 写全局样式")]),e._v(" "),s("p",[e._v("在nuxt.config.js中配置")]),e._v(" "),s("p",[e._v("// Global CSS: https://go.nuxtjs.dev/config-css")]),e._v(" "),s("p",[e._v("css: [")]),e._v(" "),s("p",[e._v("'element-ui/lib/theme-chalk/index.css',")]),e._v(" "),s("p",[e._v("'~/static/base.less' //作为全局引入")]),e._v(" "),s("p",[e._v("],")]),e._v(" "),s("p",[e._v("清除默认样式")]),e._v(" "),s("p",[e._v("https://unpkg.com/reset-css@5.0.1/reset.css")]),e._v(" "),s("p",[e._v("不能直接引用Internet的链接")]),e._v(" "),s("p",[e._v("在static中新建reset.css")]),e._v(" "),s("p",[e._v("在nuxt.config中引入")]),e._v(" "),s("p",[e._v("link: [")]),e._v(" "),s("p",[e._v("{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },")]),e._v(" "),s("p",[e._v("{ rel: 'stylesheet', type: 'text/css', href: '/reset.css'} //引入")]),e._v(" "),s("p",[e._v("]")]),e._v(" "),s("p",[e._v("pages中使用组件不需要引入，直接用，默认配置好了")]),e._v(" "),s("p",[e._v("和component")]),e._v(" "),s("p",[e._v("嵌套路由时")]),e._v(" "),s("p",[e._v("​\t与当前组件起一个同名文件夹，子路由丢进去，next会自动配置路由")]),e._v(" "),s("p",[s("img",{attrs:{src:"C:%5CUsers%5Cchenm%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20220209133417550.png",alt:"image-20220209133417550"}})]),e._v(" "),s("p",[e._v("跨域")]),e._v(" "),s("p",[e._v("npm i @nuxtjs/proxy")]),e._v(" "),s("p",[e._v("在nuxt config 配置")]),e._v(" "),s("p",[e._v("module.exports = {\n...,\nmodules: [\n'@nuxtjs/axios',\n'@nuxtjs/proxy'\n],\naxios: {\nproxy: true,\nprefix: '/',\ncredentials: true\n},\nproxy: {\n'/api/': {\ntarget: 'http://127.0.0.1:9000/web', // 目标服务器ip\npathRewrite: {\n'^/api/': '/',\nchangeOrigin: true\n}\n}\n}\n}")])])}),[],!1,null,null,null);s.default=v.exports}}]);