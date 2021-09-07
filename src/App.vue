<!--
 * @Descripttion: liugm
 * @version: 1.0
 * @Author: liugm
 * @Date: 2021-09-03 09:59:39
 * @LastEditors: liugm
 * @LastEditTime: 2021-09-07 16:55:14
-->
<template>
  <div id="app">
      <!-- <el-header class="header">A-UI</el-header> -->
      <el-container class="container">
        <el-aside width="200px">
          <Menu></Menu>
        </el-aside>
        <el-main id="main">
          <router-view></router-view>
        </el-main>
      </el-container>
  </div>
</template>

<script>

import Menu from './views/Menu'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: #fff;
  background: #2b85e4; 
}
.container{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
/deep/ .el-main{
      display: block;
    flex: 1;
    flex-basis: auto;
    overflow: auto;
    box-sizing: border-box;
}
body pre {
    padding: 16px;
    overflow: auto;
    line-height: 1.45;
    background-color: #f7f7f7;
    border: 0;
    border-radius: 3px;
    font-family: Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace;
}
::-webkit-scrollbar {
width:4px; /*对垂直流动条有效*/
height: 4px; /*对水平流动条有效*/
}

/*定义滚动条的轨道颜色、内阴影及圆角*/
::-webkit-scrollbar-track{
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: rgba(0,0,0,.2);
border-radius: 3px;
}


/*定义滑块颜色、内阴影及圆角*/
::-webkit-scrollbar-thumb{
border-radius: 7px;
-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
background-color: rgba(0,0,0,.1);
}

</style>
