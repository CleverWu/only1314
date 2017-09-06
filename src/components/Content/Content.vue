<template>

  <div class="content">
      <div class="box clearfix">
        <div class="slideLeft">
          <div class="list-item">
            <h3><img src="/static/images/photo.png">我的第一个博客</h3>
            <div class="list-item-content">
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博
            </div>

          </div>
          <div class="list-item">
            <h3><img src="/static/images/photo.png">我的第一个博客</h3>
            <div class="list-item-content">
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博
            </div>

          </div>
          <div class="list-item">
            <h3><img src="/static/images/photo.png">我的第一个博客</h3>
            <div class="list-item-content">
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博
            </div>

          </div>
          <div class="list-item">
            <h3><img src="/static/images/photo.png">我的第一个博客</h3>
            <div class="list-item-content">
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博客；你开始了吗？dssfdsssssssssssssssssssssssssssssss
              我的第一个博
            </div>

          </div>
        </div>
        <div class="slideRight">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="本站主旨" name="1">
              <div>本站在于打造为反应各个公司信誉的平台</div>
              <div>用户可以根据情况发布自己在求职过程中遭遇的不公平待遇</div>
              <div>举报不诚信公司，为后面的求职者，也包括自己提供一个好的求职环境</div>
            </el-collapse-item>
            <el-collapse-item title="目标" name="2">
              目前主要针对成都市公司的举报
            </el-collapse-item>
            <el-collapse-item title="联系" name="3">
              暂无
            </el-collapse-item>
            <el-collapse-item title="最新" name="4">
              暂无
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    <sub-box></sub-box>
    <sub-box-s1></sub-box-s1>
  </div>
</template>
<script>
  import SubBox from '../SubBox/SubBox'
  import SubBoxS1 from '../SubBoxS1/SubBoxS1'
  export default {
    data() {
      return {
        activeName: '1',
        isOpen:false
      };
    },
    components:{'sub-box':SubBox,'sub-box-s1':SubBoxS1},
    mounted: function () {
      this.isOpen=true;
    }
  }
</script>
<style scoped>
  *{box-sizing: border-box}
  .content {
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-top: -21px;
    text-align: left;

  }
  .box{
    background-color:#333333 ;
  }
  .slideLeft {
    overflow: hidden;
    position: relative;
    margin-right: 400px;
   /* height: 812px;*/
    background-color:#333333;
    padding: 30px 10px;
  }

  .slideRight {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    /*height: 812px;*/
    padding: 30px 10px;
    box-sizing: border-box;
    background-color:#333333;
  }
  .list-item{
    background-color: #ffffff;
    width: 90%;
    border-radius: 5px;
    margin: 10px auto;
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    cursor: pointer;
  }
  .list-item:first-child{
    margin-top: 0px;
    cursor: pointer;
  }
  .list-item h3{
    color: #333333;
    font-weight: 600;
    font-size: 20px;
  }
  .list-item-content{
    /* padding: 10px 0px; */
    line-height: 1.3;
    /* margin: 10px 0px; */
    color: #999999;
    font-size: 16px;
    margin-left: 68px;
    margin-top: -10px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .list-item-footer{
    /*height: 30px;
    line-height: 30px;*/
    height: 60px;
    line-height: 60px;
  }
  .list-item-footer ul li{
    float: left;
    margin-right: 10px;
  }
  .list-item h3 img{
    width: 60px;
    height: 60px;
    border-radius: 100px;
    margin-right: 10px;
  }
  .list-item h3>*{
    vertical-align: middle;
  }
</style>
