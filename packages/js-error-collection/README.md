# micro-frontend-template

**English** | [中文](./README-zh_CN.md)

> A minimal micro-frontend-template with Element-Plus UI & axios & permission control & lint & hook

A new  generation micro-frontend-template  construct  using  vue3(setup-script)+vite2+element-plus ，It's fast!

Use eslint+prettier+gitHooks format and verification code to improve code standardization and development efficiency

Vite need Node.js >= 12.0.0。


## Build Setup

```bash
# clone the project
git clone https://github.com/jzfai/micro-frontend-template.git

# enter the project directory
cd micro-frontend-template

# pnpm address https://pnpm.io/zh/motivation
# install dependency(Recommend use pnpm)
# you can  use "npm -g i pnpm" to install pnpm 
pnpm i

# develop
pnpm run hostall:dev
```

using the browser to open  http://localhost:5012/vue3-micro-frontend/

## Build

```bash
# build for production environment
pnpm run  hostall:preview
```

## Others

```bash
# preview the release environment effect
pnpm run hostall:preview-offline

# code format check
pnpm run lint

```

## Discussion and Communication
[WeChat group](http://8.135.1.141/file/images/wx-groud.png)

## License

[MIT](https://github.com/jzfai/micro-frontend-template/blob/master/LICENSE) license.

Copyright (c) 2022-present  kuanghua

