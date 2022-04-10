# package-develop-template

**中文** | [English](./README.md)



> 提供npm package 包开发模版，使用pnpm workspace管理工作空间


## Build Setup

```bash
# clone the project
git clone https://github.com/jzfai/package-develop-template.git

# enter the project directory
cd package-develop-template

# pnpm address https://pnpm.io/zh/motivation
# install dependency(Recommend use pnpm)
# you can  use "npm -g i pnpm" to install pnpm 
pnpm i

# develop
pnpm run play:dev
```
## Directory

```tree
├
├── doc                       开发package的文档说明用的vitePress
├
├── play                      对package包，做实时效果展示
├
├── packages                  需要开发的包，放在这里
├   ├── js-error-collection   js错误收集的包，已部署上线

```



## Discussion and Communication
[WeChat group](http://8.135.1.141/file/images/wx-groud.png)

## License

[MIT](https://github.com/jzfai/micro-frontend-template/blob/master/LICENSE) license.

Copyright (c) 2022-present  kuanghua
