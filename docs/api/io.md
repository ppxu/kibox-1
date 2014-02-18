IO
========

### **一. 如何使用**

``` javascript
// 直接使用
KISSY.IO.get('mini.js', function(data) {
    ...
});
```

``` javascript
// 通过模块名调用
KISSY.use('io', function(S, IO) {
	IO.get('mini.js', function(data) {
	});
});
```


### **二. 不支持的API（相较于KISSY）** 

| API                  | KISSY                | KISSY-MINI           |
| -------------------- |:--------------------:|:--------------------:|
| setupConfig          | √                  | ╳                   |
| upload               | √                  | ╳                   |
| serialize            | √                  | ╳                   |
| getResponseHeader    | √                  | ╳                   |
| Promise API          | √                  | ╳                   |

| Setting              | KISSY                | KISSY-MINI           |
| -------------------- |:--------------------:|:--------------------:|
| cfg.serializeArray   | √                  | ╳ (default as true) |
| cfg.mimeType         | √                  | ╳                   |
| cfg.password         | √                  | ╳                   |
| cfg.username         | √                  | ╳                   |
| cfg.scriptCharset    | √                  | ╳                   |
| cfg.xdr              | √                  | ╳                   |
| cfg.xhrFields        | √                  | ╳                   |
| cfg.form             | √                  | ╳                   |

> 备注：在未列出的API中，除了少数几个外，其余的用法均与KISSY保持一致。



### **三. 与KISSY不一致的特性**

| 特性                | KISSY           | KISSY-MINI                 |
|:-------------------- |:--------------------:|:--------------------:|
| 回调函数的第二个参数支持的状态  | 目前只支持  success/error/timeout/abort/parseerror | 更多的错误状态，可以通過getNativeXhr()得到原生的xhr对象来获取。  |
| jsonp对多个数据源的处理方式 | 成功回调收到一个包含所有数据源的数组 | 成功回调收到第一個数据源 |
| IO的別名 | S.Ajax/S.io/S.IO | S.IO |
| jsonpCallback的值类型 | 支持函数返回全局函數名 | 只支持字符串 |
| 对data参数值的处理 | url上的參數會与data参数值重新组合 | data附加在url上 |
| cache增加的時間戳KISSY和KISSY MINI是不一致的 | xx |  | |

