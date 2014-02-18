Loader
==========

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

> 备注：在未列出的API中，除了少数几个外，其余的用法均与KISSY保持一致。



### **三. 与KISSY不一致的特性**

| 特性                | KISSY           | KISSY-MINI                 |
|:-------------------- |:--------------------:|:--------------------:|
| package config支持group  | √                      | ╳              |
| package config支持suffix | √                      | ╳              |

