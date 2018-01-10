<template>
  <div>
      <el-tabs type="border-card">
        <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
            <first></first>
        </el-tab-pane>
        <el-tab-pane label="消息中心"> <second></second> </el-tab-pane>
        <el-tab-pane label="角色管理"> <third></third> </el-tab-pane>
</el-tabs>
  </div>
</template>

<script>
import { First, Second, Third } from "./index";
export default{
    components:{
        First,
        Second,
        Third
    }
}
</script>
