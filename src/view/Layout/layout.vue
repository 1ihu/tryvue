<template>

<el-container>
  <!-- <el-aside   > </el-aside> -->
  <div class="ss">
    <leftbar></leftbar>
  </div>
  <el-container>
    <el-header> <tabbar></tabbar></el-header>
    <el-main> <mianview></mianview></el-main>
  </el-container>
</el-container>

</template>
<script>
import Leftbar from "./leftbar";
import Tabbar from "./tabbar";
import Mianview from "./mianview";
export default {
  components: {
    Leftbar,
    Tabbar,
    Mianview
  }
};
</script>

<style scoped>

.ss{
    overflow-y: scroll;
    height: 100%;
    width: auto;
    background-color: #575C63;
    border: none;
    margin: 0;
}
.el-container{
    height: 100%;
}

  ::-webkit-scrollbar{
      display: none;
  }
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: #333;
  text-align: center;
  height: 100%;

}


.el-main {
  background-color: #e9eef3;
  color: #333;
 
}
</style>


