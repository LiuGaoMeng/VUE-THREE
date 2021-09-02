<template>
  <div class="Develop">
      <h2>组件开发</h2>
      <h3>项目初始化</h3>
      <pre><code>npm install</code></pre>
      <h3>项目运行</h3>
      <pre><code>npm run serve</code></pre>
      <h3>组件文档运行</h3>
      <pre><code>npm run docs:dev</code></pre>
      <h3>组件开发</h3>
      <pre><code>-src
        -assets
        -aui/index.js --- 组件打包文件入口-开发新组件需引入
        -components --- 组件开发
        -router --- 配置菜单路由，开发完成组件需要写介绍文档如AgTest组件
        -views --- 介绍组件的页面写在这对应路由</code></pre>
      <pre><code>-dist --- 打包后的文件夹,每次打包皆需此步骤
        -aui.umd.min.js
        -aui.css</code></pre>
      <pre><code>
        -package.json --- 版本号需要更改</code></pre>
      <h3>项目打包UI包</h3>
      <pre><code>npm run build</code></pre>
      <p>- 打包文件入口 src/aui/index.js</p>
      <p>- 打包后的文件夹 dist</p>
      <h3>私有npm使用</h3>
      <p>- 安装nrm</p>
      <pre><code>npm install -g nrm 
nrm add augurit http://192.168.31.125:4873 # 添加私有的npm镜像地址
nrm use augurit</code></pre>
      <p>- 设置npm代理</p>
      <pre><code>npm config set proxy http://192.168.31.125:4873</code></pre>
      <p>- 登录私有npm</p>
      <pre><code>npm login
Username: admin
Password: admin
Email: admin@qq.com</code></pre>
      <p>- 发布私有npm包 ---需要改package.json的版本号</p>
      <pre><code>npm publish</code></pre>
      <p>- 下载私有npm包 ---需要切换到私有镜像地址并登录</p>
      <pre><code>npm install aui(包名)</code></pre>
      <p>- 访问私有npm ---地址http://192.168.31.125:4873</p>
  </div>
</template>

<script> 

export default {
  name: 'Develop'
}
</script>