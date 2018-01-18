<template>
       <div class="head">
            <div  @click="$store.commit('changleft')" class="svgbox">
               <icon-svg :class="['clickbtn',$store.state.offbtn?'haveclickbtn':'hasclickbtn' ]" :iconClss="'sangeheng'"></icon-svg>
            </div>
            <div class="offclose">
             <el-dropdown size="small" :hide-on-click="false">
                <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item> <span @click="open2">退出登陆</span></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

            </div>  
       </div>
</template>

<script>
export default {
  methods: {
    open2() {
      this.$confirm("此操作安全退出, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$router.push({path:"/login"});
          sessionStorage.removeItem("username")
          this.$message({
            type: "success",
            message: "退出成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created(){
    
  }
};
</script>
<style scoped>
.svgbox {
  display: block;
  float: left;
  margin-left: -10px;
}
.clickbtn {
  transition: 0.5s;
}
.offclose {
  display: block;
  float: right;
}
.haveclickbtn {
  transform: rotate(0deg);
}
.hasclickbtn {
  transform: rotate(90deg);
}
</style>

