---
title: '组件开发'
---
## 项目初始化
```
npm install
```

### 项目运行
> 测试组件，展示组建文档
```
npm run serve
```
### 组件文档运行
> 用vuepress更好展示组件文档
```
npm run docs:dev
```
## 目录结构
```
.
├─ dist 打包后的文件夹
│   ├─ aui.umd.min.js
│   └─ aui.css
│ 
├─ docs 组件文档相关  -更好展示组件文档
│   ├─ .vuepress  
│   │    ├─ config.js 组件文档配置文件 
│   │    └─ components 可在README.md文件里能使用里面的组件
│   ├─ static  
│   └─ views 组件文档界面
│ 
├─ src 文档相关
│   ├─ aui 打包的入口 -新组件需要在此添加
│   ├─ components 开发的组件
│   ├─ router
│   └─ views 项目界面  -组件测试，展示组件文档
│
└─ package.json  -发布时需要更改版本号 
```

## 私有npm使用

- 安装nrm
```
npm install -g nrm 
nrm add augurit http://192.168.31.125:4873 # 添加私有的npm镜像地址
nrm use augurit 
```
- 设置npm代理
```
npm config set proxy http://192.168.31.125:4873
```
- 登录私有npm
```
npm login
Username: admin
Password: admin
Email: admin@qq.com
```
- 发布私有npm包 ---需要改package.json的版本号
```
npm publish
```
- 下载私有npm包 ---需要切换到私有镜像地址并登录
```
npm install aui(包名)
```
- 更新私有npm包 ---需要切换到私有镜像地址并登录
```
npm update aui(包名)
```
- 访问私有npm ---地址http://192.168.31.125:4873

## 组件开发

- components文件夹下开发组件
```vue
<template>
    <div>
        <el-button type="primary">主要按钮</el-button>
        <span class="account">{{name}}</span>
    </div>
</template>
<script>
    export default {
        name:'AgTest',
        data () {
            return {}
        },
        props:{
            name:{
                type:String,
                default:()=>{
                  return 'npmtest'
                }
            }
        },
        methods: {
 
        }
    }
</script>
```

## 组件打包发布
- 需要打包的文件 aui文件夹下index.js

```js
import Msg from "./../components/ag-msg"
import AgTest from "./../components/ag-test"

const components = {
    Msg,
    AgTest
};
const install =(Vue) => {
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
}
export default install
```
- 打包
```
npm run build
```

- 打包后文件夹dist

### 组件发布

- 更改package.json的版本号,登录：npm login

```
npm publish
```
发布完成
