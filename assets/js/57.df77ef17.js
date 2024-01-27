(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{462:function(e,s,t){"use strict";t.r(s);var n=t(2),a=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("1. node环境\n2. React环境\n第一步：全局安装 npm i -g create-react-app \n第二步：切换到想要创建项目的目录，使用命令\ncreate-react-app 项目名/hello-react --template typescript  //TS\n")])])]),s("p",[e._v("create-react-app 项目名/hello-react")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("第三步：进入项目文件夹 cd hello-react\n第四部：启动项目: npm start\n3. typescript环境\n4. git \n5. reset.css 在github上搜 小的就行\n在index.html引入 注意不要./\n/public/css/reset.css\n")])])]),s("p",[e._v("注意引入顺序\n1.三方库\n2.自己的组件\n3.样式")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("1. npm i -g serve 安装服务器库\n项目打包 npm run build\n上线测试 serve build\n")])])]),s("h1",{attrs:{id:"电脑软件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#电脑软件"}},[e._v("#")]),e._v(" 电脑软件")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("postman #测试接口")])]),e._v(" "),s("li",[s("p",[e._v("snipaste 截屏和取色")])])]),e._v(" "),s("h1",{attrs:{id:"第三方库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三方库"}},[e._v("#")]),e._v(" 第三方库")]),e._v(" "),s("p",[e._v("npm install nanoid\nnpm install prop-types\nnpm install axios")]),e._v(" "),s("p",[e._v("知道库名，没有中文版本的就去github找")]),e._v(" "),s("p",[e._v("中文版到印记中文网里，ctrl f 搜索 ant d")]),e._v(" "),s("p",[e._v("1.uuid库（大）:生成一个唯一id"),s("br"),e._v("\n建议"),s("strong",[e._v("nanoid")]),e._v(" 小一些\nNpm I nanoid")]),e._v(" "),s("p",[e._v("rcc 快速生成类式组件")]),e._v(" "),s("p",[e._v("rfc 快速生成函数式组件")]),e._v(" "),s("h1",{attrs:{id:"react项目初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react项目初始化"}},[e._v("#")]),e._v(" React项目初始化")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("创建react ts项目\nnpx create-react-app cms_manage --template typescript")])]),e._v(" "),s("li",[s("p",[e._v("创建git仓库 并提交")])]),e._v(" "),s("li",[s("p",[e._v("src 全删")])]),e._v(" "),s("li",[s("p",[e._v("ps上传蓝湖 没做")])]),e._v(" "),s("li",[s("p",[e._v("下载依赖\nmaterialUI //响应式 pc 移动均可\nnpm i @material-ui/core      //组件库v4 最新v5\nnpm i @material-ui/icons")])])]),e._v(" "),s("p",[e._v("fastclick移动端\n--手机端本质没有click\n方案1：不使用click\n方案2：使用框架解决\n方案3：fastclick")]),e._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[s("p",[e._v("reset.css\n1.搜索\n2.直接\nnpm i reset-css\n在入口文件\nimport 'reset-css' //组件前")])]),e._v(" "),s("li",[s("p",[e._v("解包暴露webpack  不可逆 一般不要执行")])])]),e._v(" "),s("p",[e._v("1.先提交本地仓库\n如果需要回滚\ngit log --pretty=oneline\ngit reset --hard 版本号\n2.npm run eject")]),e._v(" "),s("h2",{attrs:{id:"配置rem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置rem"}},[e._v("#")]),e._v(" 配置rem")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i lib-flexible postcss-px2rem //将px自动转为rem\nnpm install postcss-pxtorem -D  //不安装报错\n\n打开 config/webpack.config.js ：配置loader\n// 引入 postcss-px2rem \nconst px2rem = require('postcss-px2rem')\n\n搜索 postcss-loader ，添加： //参考配置loader\n\n在 入口文件 index.js 里引入 lib-flexible：\n\nimport 'lib-flexible'\n\n##测试现在1125px即满屏\n成了，但报错\n\n##兼容ipad\n在public>index.html的head标签中添加：\n\n<script>\n        /(iPhone|iPad|iPhone OS|Phone|iPod|iOS)/i.test(navigator.userAgent)&&(head=document.getElementsByTagName('head'),viewport=document.createElement('meta'),viewport.name='viewport',viewport.content='target-densitydpi=device-dpi, width=480px, user-scalable=no',head.length>0&&head[head.length-1].appendChild(viewport));\n<\/script>\n")])])]),s("h2",{attrs:{id:"修改meta标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改meta标签"}},[e._v("#")]),e._v(" 修改meta标签")]),e._v(" "),s("meta",{attrs:{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width"}}),e._v(" "),s("h2",{attrs:{id:"安装配置less"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装配置less"}},[e._v("#")]),e._v(" 安装配置less")]),e._v(" "),s("p",[e._v("lessloader有版本要求注意 下不了5下了6\n$ yarn add less less-loader@6.0.0")]),e._v(" "),s("h1",{attrs:{id:"或者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#或者"}},[e._v("#")]),e._v(" 或者")]),e._v(" "),s("p",[e._v("$ npm install less less-loader@6.0.0")]),e._v(" "),s("h2",{attrs:{id:"配置less"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置less"}},[e._v("#")]),e._v(" 配置less")]),e._v(" "),s("p",[e._v("在webpack.config.js中 搜索\nsassRegex\nconst sassRegex = /.(scss|sass)$/;\nconst sassModuleRegex = /.module.(scss|sass)$/;\nconst lessModuleRegex = /.less$/;\n再搜索sass-loader位置，\n在第二个下面同级添加\n{\ntest: lessModuleRegex,\nuse: getStyleLoaders(\n{\n//暂不配置\n},\n'less-loader'\n),\n},")]),e._v(" "),s("p",[e._v('ts 配置\n    "jsx": "preserve", //使得div是div 而不是react.createDocument("div")\n    "baseUrl": "./src"  //以后引入都是从src开始\n    "target": "ESNext"')]),e._v(" "),s("p",[e._v("##设置字体\n在 App.less 中添加：")]),e._v(" "),s("p",[e._v('@import url("http://at.alicdn.com/t/font_2390471_h1demfeh4rc.css"); //不知道是什么可以不+')]),e._v(" "),s("p",[e._v("#root {\nfont-size: 38px;\nfont-family: NotoSansHans;\ncolor: #333333;\n}\n这里注意，由于html和body标签已被强行设定了font-size，因此我们设定#root的font-size即可")]),e._v(" "),s("p",[e._v("项目基础样式base.less - index.jsx")]),e._v(" "),s("p",[e._v("fastclick")]),e._v(" "),s("p",[e._v("在 public/index.html 的 head 标签中插入：")]),e._v(" "),s("title",[e._v("IT猿题库")]),e._v(" "),s("script",{attrs:{src:"https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js"}}),e._v(" "),s("script",[e._v("\n  if ('addEventListener' in document) {\n    document.addEventListener('DOMContentLoaded', function() {\n      FastClick.attach(document.body);\n    }, false);\n  }\n  if(!window.Promise) {\n    document.writeln('<script src=\"https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js\"'+'>'+'<'+'/'+'script>');\n  }\n")]),e._v(" "),s("p",[e._v("这里建议把 https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js 和 https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js 保存到本地")]),e._v(" "),s("p",[e._v("配置loader")]),e._v(" "),s("p",[e._v("搜索 postcss-loader ，添加：\nconst loaders = [\n...,\n{\n// Options for PostCSS as we reference these options twice\n// Adds vendor prefixing based on your specified browser support in\n// package.json\nloader: require.resolve('postcss-loader'),\noptions: {\npostcssOptions: {\n// Necessary for external CSS imports to work\n// https://github.com/facebook/create-react-app/issues/2677\nident: 'postcss',\nconfig: false,\nplugins: !useTailwind\n? [\n'postcss-flexbugs-fixes',\n[\n'postcss-preset-env',\n{\nautoprefixer: {\nflexbox: 'no-2009',\n},\nstage: 3,\n},\n]],\n/* -------添加下面这一段------- "),s("em",[e._v("/\n[\n'postcss-pxtorem',\n{\nrootValue: 112.5,\nselectorBlackList: [],\npropList: ['")]),e._v("'],\nexclude: /node_modules/i\n}\n]，\n/* -------添加上面这一段------- "),s("em",[e._v("/\n// Adds PostCSS Normalize as the reset css with default options,\n// so that it honors browserslist config in package.json\n// which in turn let's users customize the target behavior as per their needs.\n'postcss-normalize',\n]\n: [\n'tailwindcss',\n'postcss-flexbugs-fixes',\n[\n'postcss-preset-env',\n{\nautoprefixer: {\nflexbox: 'no-2009',\n},\nstage: 3,\n},\n],\n/")]),e._v(" -------添加下面这一段------- "),s("em",[e._v("/\n[\n'postcss-pxtorem',\n{\nrootValue: 112.5,\nselectorBlackList: [],\npropList: ['")]),e._v("'],\nexclude: /node_modules/i\n}\n]\n/* -------添加上面这一段------- */\n],\n},\nsourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,\n},\n...\n]\n这里的 rootValue: 112.5 的意思就是1rem = 112.5px 这个是根据1125px设计稿来的。")]),e._v(" "),s("p",[e._v("npm和npx区别？")]),e._v(" "),s("p",[e._v("-s -D -g区别")]),e._v(" "),s("p",[e._v("FC：表函数式组件，\nReactElement：表节点")]),e._v(" "),s("p",[e._v("import React, { FC, ReactElement } from 'react'\nconst ProductAddUpdate:FC = ():ReactElement=> {\n    return (\n        ")]),s("div",[e._v("\n            ProductAddUpdate\n        ")]),e._v("\n    )\n}\nexport default ProductAddUpdate"),s("p")])}),[],!1,null,null,null);s.default=a.exports}}]);