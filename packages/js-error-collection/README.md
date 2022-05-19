# js-error-collection

**English** | [中文](https://github.com/jzfai/package-develop-template/blob/master/packages/js-error-collection/README-zh_CN.md)



> It is used to collect various logs during the running process of js, so as to find online problems in time and improve the coding quality



## Install

```bash
pnpm i js-error-collection -S
```

## Github Address

https://github.com/jzfai/package-develop-template

## Using

```javascript
####main.ts
import { jsErrorCollection } from 'js-error-collection'

jsErrorCollection({runtimeError:true, rejectError:true, consoleError:false}, (errLog) => {
console.log(errLog)
//send ajax req to save the error
})

```
### props instruction

```javascript
runtimeError:Whether to collect runtime errors and resource loading errors，defalut：true
rejectError: Whether to collect reject errors，  defalut：true
consoleError:Whether to collect errors printed by console.error， defalut：false
unhandledCodeArr: Do not capture status codes， defalut [403,401]
unhandledStringArr: Do not capture string， defalut ["cancel"] 
```

## discussion and exchange
[WeChat group](http://8.135.1.141/file/images/wx-groud.png)

[MIT](https://github.com/jzfai/micro-frontend-template/blob/master/LICENSE) license.

Copyright (c) 2022-present  kuanghua



