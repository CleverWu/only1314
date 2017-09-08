<template>

  <div class="content">
      <div class="box clearfix">
        <div class="slideLeft clearfix">
              <div class="list-item" v-for="item in articleLists">
                <div class="item-head clearfix">
                  <img class="item-head-img" src="/static/images/photo.png">
                  <div class="item-head-info">
                    <h3>{{item.companyName}}</h3>
                    <p>{{item.publishdate}}</p>
                  </div>
                </div>
                <div class="list-item-content">
                  {{item.desc}}
                </div>
                <div class="item-img">

                  <img v-if=item.picArr[0] :src=item.picArr[0]>
                  <img  v-else src="https://only1314.cn/static/images/bg_2.jpg">
                </div>
                <div class="list-item-footer clearfix">
                  <ul>
                    <li>更多</li>
                    <li>1回复</li>
                    <li>1赞</li>
                  </ul>
                  <ul>
                    <li>{{item.region}}</li>
                  </ul>
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
        isOpen:false,
        articleLists:[]
      };
    },
    components:{'sub-box':SubBox,'sub-box-s1':SubBoxS1},
    mounted: function () {
      this.isOpen=true;
      this.$nextTick(function () {
        this.$http.post('https://api.only1314.cn/getArticleList', {})
          .then(response => {
              console.log(response)
            this.articleLists=response.data.data;
            // success callback
          }, response => {
            console.log("no")
          })
      })
    }
  }
</script>
<style scoped>
  .test{
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: center;
  }
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
    min-height: 400px;
  }

  .slideRight {
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    /*height: 812px;*/
    padding: 40px 10px;
    box-sizing: border-box;
    background-color:#333333;
  }
  .list-item{
    background-color: #ffffff;
    width: 32.666%;
    border-radius: 5px;
    margin: 10px 1% 10px 0px;
    box-sizing: border-box;
    text-align: left;
    float: left;
    display: inline-block;
    cursor: pointer;
  }
  .list-item:nth-child(3n){
    margin-right: 0%;
  }
  .item-head{
    padding: 20px 20px 0px 20px;
  }

  .list-item-content{
    /* padding: 10px 0px; */
    line-height: 1.3;
    /* margin: 10px 0px; */
    color: #999999;
    font-size: 12px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin: 10px 0px;
    padding: 0px 20px;
    min-height: 30px;

  }
  .item-img{
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-bottom: 1px dashed #dddddd;
  }
  .item-img img{
    width: 100%;
  }
  .list-item-footer{
    /*height: 30px;
    line-height: 30px;*/
   /* line-height: 60px;*/
    padding: 10px 20px;
  }
  .list-item-footer ul:first-child li{
    float: left;
    margin-right: 10px;
    border-radius: 5px;
    border: 1px solid #d9d9d9;
    padding: 0 8px 0 10px;
    color: #777;
  }
  .list-item-footer ul:first-child li:hover{
    border: 1px solid #ff7f0d;
  }
  .list-item-footer ul:last-child li{
    float: right;
    margin-right: 10px;
    text-align: center;
    font-size: 12px;
    color: #777;
    padding: 0 8px 0 10px;
    max-width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background-color: #efefef;
  }
  .item-head-img{
    width: 60px;
    height: 60px;
    border-radius: 100px;
    float: left;
  }
  .item-head-info{
    float: left;
    height: 60px;
    padding-top: 10px;
    box-sizing: border-box;
    margin-left: 10px;
  }
  .item-head-info h3{
    font-size: 14px;
    font-weight: 600;
  }
  .item-head-info p{
    color: #999;
  }
</style>
