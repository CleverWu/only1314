<template>
  <div class="subBox b-E4B578">
    <el-row :gutter="100">
      <el-col :span="6" v-for="(o, index) in 8" :key="o">
        <el-card :body-style="{ padding: '0px' }">
          <img src="/static/images/subBox01.jpg" class="image">
          <div style="padding: 14px;">
            <span>美丽图景</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">查看</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default{
      data(){
          return{
            currentDate: new Date()
          }
      }
  }
</script>
<style scoped>
  .subBox{
    padding: 0px 20px;
    width: 100%;
    /*height: 540px;*/
  }
  .b-E4B578{background-color: #E4B578}
  .el-row {
    margin-bottom: 20px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }
  .el-card{
    margin:20px 0px;
  }
</style>
