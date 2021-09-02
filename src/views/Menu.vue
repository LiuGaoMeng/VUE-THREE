<template>
  <ul class="menu">
    <li class="menu-item" v-for="(item,index) in menuArr" :key="index" :class="{'active':item.meta==activeItem}" @click="changeItem(item.meta)">
        <router-link :to="item.path">{{item.meta}}</router-link>
    </li>
  </ul>
</template>

<script> 

export default {
  name: 'Menu',
  data() {
      return {
          menuArr: [],
          activeItem:'开发'
      }
  },
  mounted() {
      this.menuArr = this.$router.options.routes
  },
  methods: {
      changeItem(text){
          this.activeItem = text
      }
  },
}
</script>
<style scoped>
.menu{
    height: 100%;
    padding: 0;
    margin: 0;
}
.menu-item{
    list-style: none;    
    position: relative;
}
.menu-item a {
    font-size: 16px;
    color: #333;
    line-height: 40px;
    height: 40px;
    margin: 0;
    padding: 0;
    text-decoration: none;
    display: block;
    position: relative;
    text-align: center;
}
.menu-item a:hover{
    color: #2b85e4;
}
.menu-item.active a{
    color: #2b85e4;
    background: #f0faff;
}
.menu-item.active:after{
    content: "";
    display: block;
    width: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    background: #2d8cf0;
}
</style>