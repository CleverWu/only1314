<template>
  <div class="subBoxS1">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item>
        <div class="img_bar">
          <img src="/static/images/img_bar1.jpg">
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="img_bar">
          <img src="/static/images/img_bar2.jpg">
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="img_bar">
          <img src="/static/images/bg_userCenter.jpg">
        </div>
      </el-carousel-item>
    </el-carousel>
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
  .img_bar{width: 100%}
  .img_bar img{
    width: 100%;
  }
  .subBoxS1{
    padding: 0px 20px;
    width: 100%;
    height: 400px;
    background-color: #ffffff;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel{
    margin-top: 50px;
  }
</style>
