Node
========

### **一. 如何使用**

``` javascript
// 直接使用
KISSY.all('.selector').addClass('className').on('click', function() {
    ...	
});
```

``` javascript
// 通过模块名调用
KISSY.use('node', function(S, Node) {
	Node.all('.selector').addClass('className').on('click', function() {
        ...	
	});
});
```

### **二. 不支持的API（相较于KISSY）**

| API                  | KISSY                | KISSY-MINI           |
|:-------------------- |:--------------------:|:--------------------:|
| test                 | √                    | ╳                    |
| replaceClass         | √                    | ╳                    |
| style                | √                    | ╳                    |
| innerWidth           | √                    | ╳                    |
| innerHeight          | √                    | ╳                    |
| outerWidth           | √                    | ╳                    |
| outerHeight          | √                    | ╳                    |
| addStyleSheet        | √                    | ╳                    |
| docHeight            | √                    | ╳                    |
| docWidth             | √                    | ╳                    |
| viewportHeight       | √                    | ╳                    |
| viewportWidth        | √                    | ╳                    |
| scrollIntoView       | √                    | ╳                    |
| unselectable         | √                    | ╳                    |
| nodeName             | √                    | ╳                    |
| outerHTML            | √                    | ╳                    |
| data                 | √                    | ╳                    |
| removeData           | √                    | ╳                    |
| hasData              | √                    | ╳                    |

> 备注：在未列出的API中，除了少数几个外，其余的用法均与KISSY保持一致。



### **三. 与KISSY不一致的特性**

| 特性                | KISSY           | KISSY-MINI                 |
|:-------------------- |:--------------------:|:--------------------:|
| parent方法  | √                   | √（但不支持第2个参数）          |
| clone方法   | √                   | √（但只会复制元素）         |

