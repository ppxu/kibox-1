### **一. 核心模块**

KISSY MINI 包含以下核心模塊：

* [Node](./api/node)
* [IO](./api/io)
* [Event](./api/event)
* [Loader](./api/loader) ( Module Manger + Downloader )
* [Module Manager API](./api/module_manager) ( No Downloader )


### **二. 如何引用**

KISSY MINI 提供了完整版与精简版，以满足不同的使用场景：

* mini-full.js -- 完整版（gzip后约13k），支持动态加载模块；
* mini.js -- 精简版（gzip后8k），不支持动态加载模块（少了Loader）.

``` html
// mini-full.js
<script src="http://g.tbcdn.cn/kissy/m/0.1.0/mini-full.js"></script>

// mini.js
<script src="http://g.tbcdn.cn/kissy/m/0.1.0/mini.js"></script>
```

### **三. 如何配置包**

``` javascript
KISSY.config({
    packages: [{
        name    : 'pkg1',
        path    : './module',
        charset : 'utf-8'
    }]
});
```


### **四. 如何定义与使用模块**

``` javascript
// 定义
KISSY.add('pkg1/index', function(S, Node) {
	function Mod() {}
	return Mod;
}, {requires: [
	'node'
]});


// 使用
KISSY.use('pkg1/index', function(Mod) {
    var data = new Mod();
});

```

### **五. Demo**

* [掌中宝示例](http://groups.demo.taobao.net/tb/o2o/demo/weishop/fujin/brand.php)