# 常用命令

## npm init 
> 在项目中初始化一个 package.json 文件，凡是使用 npm 来管理的项目都需要这么一个文件

```shell
npm init
```

跳过向导，快速生成 package.json 文件，简写是 -y
```shell
npm init --yes
```

## npm install
> 一次性安装 package.json 文件的 dependencies 中所有的依赖项

```shell
# 简写是 npm i
npm install
```

## npm install  [package name]
> 安装指定的包，可以简写为 npm i 包名，npm 5 以前只下载，不会保存依赖信息，如果需要保存，则需要加上 `--save` 选项， npm 5 以后就可以省略 --save 选项了

```shell
npm install  [package name]
```

一次性安装多个指定包
```shell
npm install  [package name]  [package name]  [package name] ...
```


安装指定版本的包
```shell
npm install 包名@版本号
```

## npm install --global  [package name]
> 全局安装的包，一般在命令行下使用

安装全局包，可以简写为 -g
```shell
npm install --global  [package name]
```

## npm list
> npm list命令以树型结构列出当前项目安装的所有模块，以及它们依赖的模块。

```shell
npm list
```

加上global参数，会列出全局安装的模块
```shell
npm list -global
```


## npm update [package name]
> 更新本地安装的模块，它会先到远程仓库查询最新版本，然后查询本地版本。如果本地版本不存在，或者远程版本较新，就会安装

```shell
npm update [package name]
```


升级全局安装的模块
```shell
npm update -global [package name]
```

## npm uninstall -global  [package name]
> 卸载某个全局包

```shell
npm uninstall [package name]
```


## npm uninstall 包名 
> 卸载指定的包

```shell
npm uninstall [package name]
```

## npm view [package name]
> 查看包信息，view 别名：v、info、show

```shell
npm view 包名
```

## npm help
> 查看使用帮助

```shell
npm help
```


 查看某个命令的使用帮助，例如忘记了 uninstall 命令的简写了，这个时候，可以输入 `npm uninstall --help` 来查看使用帮助

```shell
npm 命令 --help
```

# 切换 npm 镜像源


npm 存储包文件的服务器在国外，有时候会被墙，速度很慢，所以我们需要解决这个问题。

国内淘宝的开发团队把 npm 在国内做了一个备份，网址是：http://npm.taobao.org/。

最简单的方式就是我们在安装包的时候告诉 npm 你去哪个服务器下载。

例如使用淘宝的 npm 镜像源下载 jquery:

```shell
npm install jquery --registry=https://registry.npm.taobao.org
```

但是每次手动往后面加 `--registry=https://registry.npm.taobao.org` 很麻烦，
所以我们可以通过修改配置文件的方式来处理解决。

```shell
# 配置到淘宝服务器
npm config set registry https://registry.npm.taobao.org

# 查看 registry 是否配置正确
npm config get registry
```

只要经过了上面命令的配置，则你以后所有的 `npm install` 都会使用你配置的 `registry` 下载。



（了解cnpm）

// cnpm 是淘宝自己基于 npm 开发的一个命令。但是目前不够完善，在有些情况下 cnpm 会报一些莫名的错。

// cnpm 的出现是为了，完成 npm 的所有的功能做一个中国版的npm。

//不建议使用 cnpm ，如果要使用淘宝的镜像，手工配置镜像源即可，建议使用 npm 命令
```shell
npm config set registry https://registry.npm.taobao.org
```


# package.json

每个项目的根目录下面，一般都有一个`package.json`文件，定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。`npm install`命令根据这个配置文件，自动下载所需的模块，也就是配置项目所需的运行和开发环境。

package.json文件可以手工编写，也可以使用`npm init`命令自动生成。

```bash
npm init
```

这个命令采用互动方式，要求用户回答一些问题，然后在当前目录生成一个基本的package.json文件。所有问题之中，只有项目名称（name）和项目版本（version）是必填的，其他都是选填的。

这个文件可以通过 `npm init` 的方式来自动初始化出来。



下面是一个最简单的package.json文件，只定义两项元数据：项目名称和项目版本。

```json
{
  "name" : "xxx",
  "version" : "0.0.0",
}

```

`package.json`文件就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置。比如`name`就是项目名称，`version`是版本（遵守“大版本.次要版本.小版本”的格式）。

下面是一个更完整的package.json文件。

```json
{
  "name": "Hello World",
  "version": "0.0.1",
  "author": "张三",
  "description": "第一个node.js程序",
  "keywords":["node.js","javascript"],
  "repository": {
    "type": "git",
    "url": "https://path/to/url"
  },
  "license":"MIT",
  "engines": {"node": "0.10.x"},
  "bugs":{"url":"http://path/to/bug","email":"bug@example.com"},
  "contributors":[{"name":"李四","email":"lisi@example.com"}],
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "latest",
    "mongoose": "~3.8.3",
    "handlebars-runtime": "~1.0.12",
    "express3-handlebars": "~0.5.0",
    "MD5": "~1.2.0"
  },
  "devDependencies": {
    "bower": "~1.2.8",
    "grunt": "~0.4.1",
    "grunt-contrib-concat": "~0.3.0",
    "grunt-contrib-jshint": "~0.7.2",
    "grunt-contrib-uglify": "~0.2.7",
    "grunt-contrib-clean": "~0.5.0",
    "browserify": "2.36.1",
    "grunt-browserify": "~1.3.0",
  }
}

```

下面详细解释package.json文件的各个字段。

### dependencies

`dependencies`字段指定了项目运行所依赖的模块，`devDependencies`指定项目开发所需要的模块。

它们都指向一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。

```json
{
  "devDependencies": {
    "browserify": "~13.0.0",
    "karma-browserify": "~5.0.1"
  }
}

```

对应的版本可以加上各种限定，主要有以下几种：

- **指定版本**：比如`1.2.2`，遵循“大版本.次要版本.小版本”的格式规定，安装时只安装指定版本。
- **波浪号（tilde）+指定版本**：比如`~1.2.2`，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号。
- **插入号（caret）+指定版本**：比如ˆ1.2.2，表示安装1.x.x的最新版本（不低于1.2.2），但是不安装2.x.x，也就是说安装时不改变大版本号。需要注意的是，如果大版本号为0，则插入号的行为与波浪号相同，这是因为此时处于开发阶段，即使是次要版本号变动，也可能带来程序的不兼容。
- **latest**：安装最新版本。

### main

`main`字段指定了加载的入口文件，`require('moduleName')`就会加载这个文件。这个字段的默认值是模块根目录下面的`index.js`。

### scripts

`scripts`指定了运行脚本命令的npm命令行缩写，比如start指定了运行`npm run start`时，所要执行的命令。

下面的设置指定了`npm run preinstall`、`npm run postinstall`、`npm run start`、`npm run test`时，所要执行的命令。

```json
"scripts": {
    "preinstall": "echo here it comes!",
    "postinstall": "echo there it goes!",
    "start": "node index.js",
    "test": "tap test/*.js"
}

```

> 扩展阅读：[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

## package-lock.json

npm 5 以前是不会有 `package-lock.json` 这个文件的。（被开发者诟病，吐槽的问题）。

以前会自作多情的自动给你升级。

npm 5 以后才加入了这个文件。

当你安装包的时候，npm 都会生成或者更新 `package-lock.json` 这个文件。

- npm 5 以后的版本安装包不需要加 `--save` 参数，它会自动保存依赖信息
- 当你安装包的时候，会自动创建或者是更新 `package-lock.json` 这个文件
- `package-lock.json` 这个文件会保存 `node_modules` 中所有包的信息（版本、下载地址）
  - 这样的话重新 `npm install` 的时候速度就可以提升
- 从文件来看，有一个 `lock` 称之为锁
  - 这个 `lock` 是用来锁定版本的
  - 如果项目依赖了 `1.1.1` 版本
  - 如果你重新 isntall 其实会下载最新版本，而不是 1.1.1
  - 我们的目的就是希望可以锁住 1.1.1 这个版本
  - 所以这个 `package-lock.json` 这个文件的另一个作用就是锁定版本号，防止自动升级新版



### 相关链接

- <http://www.ruanyifeng.com/blog/2019/02/npx.html>

## 扩展阅读

- [npm 模块管理器](http://javascript.ruanyifeng.com/nodejs/npm.html)

- [npm 模块安装机制](http://www.ruanyifeng.com/blog/2016/01/npm-install.html)

- [nrm](https://github.com/Pana/nrm)
- http://www.ruanyifeng.com/blog/2019/02/npx.html
- https://github.com/zkat/npx
- https://www.jianshu.com/p/cee806439865