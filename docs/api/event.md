Event
========

### **一. 如何使用**

``` javascript
// 直接使用
var $ = KISSY.Node.all;
$('body').on('click', function(ev){
	console.log(ev)
});
```

``` javascript
// 自定义事件
var a = {}, S = KISSY;
S.mix(a, S.Event.Target);
a.on('my_event', function(ev){
	console.log(ev)
});
a.fire('my_event', {"data1": 1, "data2": 2});
```


### **二. 不支持的API（相较于KISSY）**

| API                      | KISSY                | KISSY-MINI           |
| --------------------     |:--------------------:|:--------------------:|
| Event.on             | √                  | ╳                   |
| Event.Object             | √                  | ╳                   |
| Event.Target.publish     | √                  | ╳                   |
| Event.Target.addTarget   | √                  | ╳                   |
| Event.Target.removeTarget| √                  | ╳                   |
| mouseenter               | √                  | ╳                   |
| mouseleave               | √                  | ╳                   |
| mousewheel               | √                  | ╳                   |
| gestures                 | √                  | ╳                   |

> 备注：在未列出的API中，除了少数几个外，其余的用法均与KISSY保持一致。


### **三. 与KISSY用法不一致的特性** 

| 特性                      | KISSY                | KISSY-MINI           |
|--------------------     |:--------------------:|:--------------------:|
| 自定义事件支持冒泡             | √                  | ╳                   |
| 支持触控事件             | √                  | ╳                   |
| event参数            | 封装后的对象                 | 原生事件对象                  |

