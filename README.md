# 组件开发

## 项目初始化
```
npm install
```

### 项目运行
```
npm run serve
```
### 组件文档运行
```
npm run docs:dev
```

### 项目打包UI包
```
npm run build
```
- 打包文件入口 src/aui/index.js

- 打包后的文件夹 dist

### 私有npm使用

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

# aui

> aui 组件


## 项目安装

安装

```
npm install aui
```


## 组件使用

```
import aui from 'aui'
import 'aui/dist/aui.css'
Vue.use(aui)
```

- 其他依赖按需引入

```vue
<template>
  <div class="hello">
    <Msg :name="'test'"></Msg>
    <AgTest :name="'test2222'"></AgTest>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>
```



## 组件开发

- svn下载项目 components文件夹下开发组件
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

## 组件打包
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

## 组件发布

- 更改package.json的版本号,登录：npm login

```
npm publish
```
发布完成
