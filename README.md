
#### 开发环境
>* nodejs v0.12.2
>* webpack 
>* sass

#### 运行项目
>* npm install
>* npm start
>* 浏览器访问 localhost:9090

#### 发布编译
>* npm run build  该命令打包生产环境脚本
>* npm run dist   该命令发布站点。默认目录为：dist/www

#### 关于cordova打包
>* 以android为例，需要先安装android sdk。然后安装 cordova：npm install cordova -g
>* 命令行 cd 至项目目录
>* cordova create dist （注：之所以创建dist项目，是与上面 npm run dist 生成的目录匹配）
>* cordova platform add android
>* 修改 dist/www 下的 index.html 的资源引用
>* cordova run android
>* 打包后的应用，可以通过chrome进行调整。chrome访问： chrome:\\inspect

#### 技术点
>* reactjs
>* react-router
>* react-redux
>* webpack
>* es6
>* babel

### 联系
> sleepsleepsleep@foxmail.com
