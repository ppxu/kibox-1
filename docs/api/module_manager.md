Module Manager 
==========

> 说明：它是简易版的Loader，不支持远端下载与匿名定义，使用者需手动将多个模块打包成一个文件。

### **一. 如何使用** 

``` javascript
// 定义模块 
KISSY.add('pkg/mod1', function(S, Dep) {
	return {
		name: 'mod1'
	};
	
}, {
	requires: [
		'dep1'
	]
});
```

``` javascript
// 使用模块
KISSY.use('pkg/mod1', function(S, Mod1) {
	alert(Mod1.name);
});
```

### **二. 不支持的API（相较于KISSY）**

| API                  | KISSY                | KISSY-MINI           |
| -------------------- |:--------------------:|:--------------------:|
| getScript            | √                  | ╳                   |
| importStyle          | √                  | ╳                   |



### **三. 与KISSY不一致的特性**

| 特性                | KISSY           | KISSY-MINI                 |
|:-------------------- |:--------------------:|:--------------------:|
| 支持package config  | √                      | ╳              |
| 支持异步下载         | √                      | ╳  |

