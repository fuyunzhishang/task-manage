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
|-- service                     // 服务端业务代码
|   |-- api                     // 存放接口文件
|   |-- db                      // 数据库相关
|       |-- db.js               // 数据库配置
|       |-- sqlMap.js           // sql映射语句，操作数据库
|   |-- app.js                  // 服务端入口
|-- src                         // 前台源代码
|   |-- assets                  // 静态资源
|   |-- components              // 组件
|   |-- router                  // 路由设置
|   |-- style                   // 样式
|   |-- views                   // 视图文件
|   |-- App.vue                 // 入口页面
│   ├── main.js                 // 入口 加载组件 初始化等
├── static                      // 第三方不打包资源
├── .babelrc                    // babel-loader 配置
├── eslintrc.js                 // eslint 配置项
├── .gitignore                  // git 忽略项
├── favicon.ico                 // favicon图标
├── index.html                  // html模板
└── package.json                // package.json 
