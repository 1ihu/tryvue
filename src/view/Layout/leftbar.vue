<template>
   <div class="leftbar">
       <!-- {{$route.path}} -->
  <el-menu :default-active="$route.path" router class="el-menu-vertical-demo"  text-color="#fff"
      active-text-color="#ffd04b"  background-color="#545c64" @open="handleOpen" @close="handleClose" :collapse="count">

   <el-menu-item index="/">
     <icon-svg  :iconClss="'shouye'"></icon-svg>
    <span slot="title">首页</span>
  </el-menu-item>
  <el-menu-item index="/tabs">
     <icon-svg  :iconClss="'wodedingdan'"></icon-svg>
    <span slot="title">Tab</span>
  </el-menu-item>



</el-menu>
   </div>
</template>

<script>
     export default {
    data() {
      return {
        isCollapse: false
      };
    },

     computed:{
        count(){
            return this.$store.state.offbtn;
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

.el-menu{
  border-right: none;
}
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 100%;
    height: 100%;
  }
.el-menu-item{
    max-width: 200px;
}

.leftbar{
    position: relative;
    width: auto;
}

</style>




