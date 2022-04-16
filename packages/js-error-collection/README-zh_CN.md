# js-error-collection

**中文** | [English](./README.md)



> 用于收集js运行过程中各种日志的收集，便于及时发现线上问题，提高编码质量


###Github Address

https://github.com/jzfai/pakage-develop-template


## Install

```bash
pnpm i js-error-collection -S
```


## Using

```javascript
####main.ts
import { jsErrorCollection } from 'js-error-collection'

jsErrorCollection({runtimeError:true, rejectError:true, consoleError:false}, (errLog) => {
console.log(errLog)
//send ajax req to save the error
})

runtimeError:是否收集运行期错误和资源加载错误，默认：true
rejectError: 是否收集reject错误，  默认：true
consoleError:是否收集console.error打印的错误， 默认：false
```



## 讨论和交流
[WeChat group](http://8.135.1.141/file/images/wx-groud.png)

## 版本

[MIT](https://github.com/jzfai/micro-frontend-template/blob/master/LICENSE) license.

Copyright (c) 2022-present  kuanghua



