# my-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 整体框架结构：
|-- build                       // 构建相关 
|-- config                      // 配置相关
|-- node_modules                // 依赖
|-- src                         // 前台源代码
|   |-- assets                  // 静态资源
|   |-- components              // 组件
|   |-- router                  // 路由设置
|   |-- style                   // 样式
|   |-- util                    // 公共 JS 文件存放处
|   |-- view                    // 视图文件
|   |   |-- albert              // 相册管理相关
|   |   |-- center              // 个人中心
|   |   |-- login               // 登录
|   |   |-- overview            // 首页及各模块主要页面
|   |-- App.vue                 // 入口页面
│   ├── main.js                 // 入口 加载组件 初始化等
├── static                      // 第三方不打包资源
├── .babelrc                    // babel-loader 配置
├── eslintrc.js                 // eslint 配置项
├── .gitignore                  // git 忽略项
├── favicon.ico                 // favicon图标
├── index.html                  // html模板
└── package.json                // package.json 
