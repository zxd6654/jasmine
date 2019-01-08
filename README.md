# A JavaScript Testing Framework

Jasmine is a Behavior Driven Development testing framework for JavaScript. It does not rely on browsers, DOM, or any JavaScript framework. Thus it's suited for websites, [Node.js](http://nodejs.org) projects, or anywhere that JavaScript can run.

## 文件目录

/lib 文件夹下包含了测试框架的源码等文件。<br>
/src 下包含了待测试的 JS 代码。<br>
/spec 下则包含了对应的测试代码。<br>

在 SpecRunner.html 中，务必要先引入所有 jasmine 的依赖文件：<br>
     jasmine.css<br>
     jasmine.js<br>
     jasmine-html.js<br>
     boot.js<br>
     
再引入待测试文件 ，最后则是我们的测试文件



```html
<link rel="shortcut icon" type="image/png" href="jasmine/lib/jasmine-{#.#.#}/jasmine_favicon.png">
<link rel="stylesheet" type="text/css" href="jasmine/lib/jasmine-{#.#.#}/jasmine.css">

<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/jasmine.js"></script>
<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/jasmine-html.js"></script>
<script type="text/javascript" src="jasmine/lib/jasmine-{#.#.#}/boot.js"></script>

  <!-- include source files here... -->
    <!--<script src="src/Hello.js"></script>-->
    <script src="js/HelloNode.js"></script>

    <!--&lt;!&ndash; include spec files here... &ndash;&gt;-->
    <script src="spec/test/Hello.matcher.js"></script>
    <script src="spec/test/HelloNode.spec.js"></script>
```

## 使用 Jasmine 测试 Node 项目  

*新建待测试文件

```javascript
function Hello() {};

Hello.prototype.foo = "foo";
Hello.prototype.bar = null    ;

Hello.prototype.helloWorld = function() {
    return "Hello World!";
}

Hello.prototype.helloSomeone = function(toGreet) {
    return this.sayHello() + " " + toGreet;
}

Hello.prototype.sayHello = function() {
    return "Hello";
}

module.exports = Hello;
```

* 安装 Jasmine Module  如果没有安装，那么就使用安装
```text
npm install -g jasmine

jasmine -v
```
   
* 初始化 (可以手动添加，也可以使用命令)

```text
jasmine init 
jasmine 会在当前目录下生成一个配置文件 spec/support/jasmine.json
```

```json
{
  "spec_dir": "spec",
  "spec_files": [
    "**/*[sS]pec.js"
  ],
  "helpers": [
    "helpers/**/*.js"
  ],
  "stopSpecOnExpectationFailure": false,
  "random": false
}
```
          spec_dir: 指定扫描测试文件的根目录  <br>
          spec_files: 匹配测试文件的表达式<br>
          helpers: Helper 文件会在所有的 spec 之前预先执行<br>
          stopSpecOnExpectationFailure: 当有错误出现时是否终止所有测试<br>
          random: 是否打乱测试顺序<br>
          
          


* 添加测试代码

```javascript
 var Hello = require("../js/HelloNode");
```
    这里带测试代码的路径请注意
    
* 运行测试 jasmine
     <br>此时的测试通过的用例都是绿色的小点，不利于调试

* 运行测试 安装jasmine-spec-reporter

```text
npm install jasmine --save-dev
npm install jasmine-spec-reporter --save-dev
```
    然后在项目根目录，添加 jasmine-runner.js
````javascript
var Jasmine = require('jasmine');
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var noop = function () {
};

var jrunner = new Jasmine();
jrunner.configureDefaultReporter({print: noop});
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayPending: true
    }
}));
jrunner.loadConfigFile();
jrunner.execute();
````

    运行命令node jasmine-runner.js
    
## 语法规则   
[官网](https://jasmine.github.io/index.html)
[基本语法](http://www.cnblogs.com/wushangjue/p/4541209.html) 
   
    


