<template>
  <div class="content">
      <div class="box clearfix">
        <div class="slideLeft">
          <div class="clearfix">
            <div class="list-item" v-for="item in articleLists">
              <div class="item-head clearfix">
                <img class="item-head-img" :src=item.userPhoto>
                <div class="item-head-info">
                  <h3>{{item.companyName}}</h3>
                  <p>{{item.publishdate | dateFormat}}</p>
                </div>
              </div>
              <div class="list-item-content" v-text="item.desc">
              </div>
              <div class="item-img" @click="goArticle(item._id)">

                <img v-if=item.picArr[0] :src=item.picArr[0] alt="文章简介图">
                <img  v-else src="https://only1314.cn/static/images/bg_2.jpg">
              </div>
              <div class="list-item-footer clearfix">
                <ul>
                  <li @click="goArticle(item._id)">更多</li>
                  <li>{{item.replyNums}}回复</li>
                  <li>{{item.likeNums}}赞</li>
                </ul>
                <ul>
                  <li>{{item.region}}</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="block textCenter mt15">
            <el-pagination
              v-show="pageTotal"
              @current-change="handleCurrentChange"
              layout="prev, pager, next"
              :total="pageTotal" :page-size="pageSize" :current-page="currentPage">
            </el-pagination>
          </div>
        </div>
        <div class="slideRight textLeft">
          <!--<el-collapse v-model="activeName" accordion>
            <el-collapse-item title="本站主旨" name="1">
              <div>本站为纯公益性质</div>
              <div>在于打造为反应各个公司信誉的平台</div>
              <div>用户可以根据情况发布自己在求职过程中遭遇的不公平待遇</div>
              <div>举报不诚信公司，为后面的求职者，也包括自己提供一个好的求职环境</div>
            </el-collapse-item>
            <el-collapse-item title="目标" name="2">
              目前主要开通对财务及互联网行业公司的举报
            </el-collapse-item>
            <el-collapse-item title="联系" name="3">
              <div>
                如果你有好的建议，请联系我：
              </div>
              <div>
                mail:admin@only1314.cn
              </div>
            </el-collapse-item>
            <el-collapse-item title="最新" name="4">
              希望大家真实举报，也可以发布一些比较好的公司信息,供大家参考
            </el-collapse-item>
          </el-collapse>-->
          <ul class="collapse">
            <li>
              <div class="collapse-title b-FBC421" v-bind:class="showColl==1?'boder-bottom-none':''" @click="showColl=1"><i></i><span>本站性质</span></div>
              <div class="collapse-content" v-show="showColl==1">
                <div>本站为纯公益性质</div>
                <div>在于打造为反应各个公司信誉的平台</div>
                <div>用户可以根据情况发布自己在求职过程中遭遇的不公平待遇</div>
                <div>举报不诚信公司，为后面的求职者，也包括自己提供一个好的求职环境</div>
              </div>
            </li>
            <li>
              <div class="collapse-title b-5CB6D0" v-bind:class="showColl==2?'boder-bottom-none':''" @click="showColl=2"><i></i><span>开通栏目</span></div>
              <div class="collapse-content" v-show="showColl==2">
               <div> 目前主要开通对财务及互联网行业公司的举报</div>
              </div>
            </li>
            <li>
              <div class="collapse-title b-A796C3" v-bind:class="showColl==3?'boder-bottom-none':''" @click="showColl=3"><i></i><span>想联系我</span></div>
              <div class="collapse-content" v-show="showColl==3">
                <div>
                  如果你有好的建议，请联系我：
                </div>
                <div style="font-size: 14px;">
                  mail:admin@only1314.cn
                </div>
              </div>
            </li>
            <li>
              <div class="collapse-title b-FF5061" v-bind:class="showColl==4?'boder-bottom-none':''" @click="showColl=4"><i></i><span>最新公告</span></div>
              <div class="collapse-content" v-show="showColl==4">
                <div> 希望大家真实举报，也可以发布一些比较好的公司信息,供大家参考</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    <sub-box-s1></sub-box-s1>
  </div>
</template>
<script>
  import SubBox from '../SubBox/SubBox'
  import SubBoxS1 from '../SubBoxS1/SubBoxS1'
  import Vue from "vue";
  /*import Router from 'vue-router';*/
  /*var router=new Router({mode: 'history',});*/
  export default {
    data() {
      return {
        apiBase:'',
        /*activeName: '1',*/
        isOpen:false,
        articleLists:[],
        currentPage:1,
        pageSize:6,
        pageTotal:0,
        showColl:1
      };
    },
    components:{'sub-box':SubBox,'sub-box-s1':SubBoxS1},
    filters: {
      dateFormat: function (value) {
        console.log(value)
        if (!value) return ''
        var date=new Date(value);
        return date.getFullYear()+'-'+parseInt(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()
      }
    },
    mounted: function () {
      this.isOpen=true;
      this.$nextTick(function () {
        this.apiBase=this.$store.state.apiLink.apiLink;
        this.getArticlePage(this.currentPage,this.pageSize);
      })
    },
    methods:{
      handleCurrentChange(currentPage){
        console.log(currentPage,this.pageSize)
        this.getArticlePage(currentPage,this.pageSize)
      },
      goArticle(id){
        this.$store.commit('setArticleId', id);
        this.$router.push({ path: '/article' })
      },
      getArticlePage:function (currentPage,pageSize) {
        var data={
            currentPage:currentPage,
            pageSize:pageSize
        }
        this.$http.post(this.apiBase+'/apiArticles/getArticleList', data)
          .then(response => {
            console.log(response)
            this.articleLists=response.data.data;
            this.pageTotal=response.data.count;
            console.log("32323",this.pageTotal)
            /* this.$store.commit('setArticle', JSON.stringify(this.articleLists));*/
            // success callback
          }, response => {
            console.log("no")
          })
      }
    }
  }
</script>
<style scoped>
  .collapse{width: 100%}
  .collapse li{margin-bottom: 15px}
  .collapse .collapse-title{
    color: #ffffff;
    width: 100%;
    padding: 8px 10px;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
  }
  .b-FBC421{
    background-color: #FBC421;
  }
  .b-A796C3{
    background-color: #A796C3;
  }
  .b-5CB6D0{
    background-color: #5CB6D0;
  }
  .b-FF5061{
    background-color: #FF5061;
  }
  .collapse .collapse-content{
    background-color: rgba(255,255,255,0.2);
    color: #ffffff;
    border-bottom-right-radius:10px;
    border-bottom-left-radius:10px;
    padding: 5px 10px;
    box-sizing: border-box;
  }
  .boder-bottom-none{
    border-bottom-right-radius:0px!important;
    border-bottom-left-radius:0px!important;
  }
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

  }
  .box{
    background-color:#333333;
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
    position: relative;
  }

  .list-item-content{
    /* padding: 10px 0px; */
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
    min-height: 48px;

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

   /* float: left;*/
    position: absolute;
    left: 80px;
    right: 0px;
    height: 60px;
    padding-top: 10px;
    box-sizing: border-box;
    margin-left: 10px;
  }
  .item-head-info h3{
    font-size: 14px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;


  }
  .item-head-info p{
    color: #999;
  }
</style>
<style>
  /*分页*/
  .el-pager li{
    background: rgba(255,255,255,1);
    font-size: 13px;
    min-width: 28px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    margin: 0px 5px;
    border-radius: 100px;
    border: 2px solid #ffffff;
  }
  .el-pagination .btn-next, .el-pagination .btn-prev{
    border-radius: 50px;
    margin: 0 5px;
  }
  .el-pager li.active{
    border-color: #ff4163;
    background-color: #ff4163;
    color: #fff;
    cursor: default;
  }
</style>
