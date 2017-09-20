<template>
  <div class="header" v-bind:class="isGrew?'t-999999':'t-ffffff'">
      <nav class="clearfix" style="background-color:rgba(255,255,255,0)" ref="nav">
        <div class="leftBar" ref="leftBar">ONLY1314</div>
        <div class="header-info">只为，守护您一生一世的求职路...</div>
        <ul class="list-hy animated" style="background-color:rgba(133,214,164,0)" ref="ulnav"  v-bind:class="[isBanner?'fadeInDown':'fadeOutUp',isBlock]">
          <!--<li class="magictime" v-bind:class="{spaceInUp:isOpen}">首页</li>
          <li class="magictime" v-bind:class="{spaceInDown:isOpen}">互联网</li>
          <li class="magictime" v-bind:class="{spaceInUp:isOpen}">财务</li>
          <li class="magictime" v-bind:class="{spaceInDown:isOpen}">建筑</li>
          <li class="magictime" v-bind:class="{spaceInUp:isOpen}">金融</li>
          <li class="magictime" v-bind:class="{spaceInDown:isOpen}">法律</li>-->
          <li>互联网</li>
          <li>财务</li>
          <li>建筑</li>
          <li>金融</li>
          <li>法律</li>
        </ul>
        <div class="relogin clearfix" id="s">
          <p><span v-if="username==' '"><router-link :to="{ name: 'Login'}"  v-bind:class="isGrew?'t-999999':'t-ffffff'">登陆/注册</router-link></span><router-link :to="{ name: 'userCenter'}" v-bind:class="isGrew?'t-999999':'t-ffffff'" v-else><span  v-html="username"></span></router-link></p>
          <p v-if="username!=' '" class="ml5" @click="loginOut"><i class="iconfont icon-tuichu"></i></p>
          <p class="ml10" v-if="username!=' '"><span><router-link :to="{ name: 'Publish'}"  v-bind:class="isGrew?'t-999999':'t-ffffff'"><i class="iconfont icon-fabu"></i></router-link></span></p>
          <p @click="switchBanner"><i class="iconfont ml20 icon-zhedie" v-bind:class="[isBanner?'showBanner':'']"></i></p>
        </div>
      </nav>

    <section class="canvas-wrap">
      <div id="canvas" class="gradient"></div>
    </section>
      <section class="indexSearch magictime" v-bind:class="{spaceInDown:isOpen}">
        <i class="iconfont icon-search"></i>
        <input class="mainSearch" v-model="question" type="text" placeholder="请输入想查找的公司...">
        <ul class="indexSearchContent magictime" v-bind:class="{boingInUp:searchList.length>0}"  v-if="searchList.length>0">
          <li v-for="item in searchList" @click="goArticle(item._id)" class="clearfix"><span class="search-companyName">{{item.companyName}}</span><span class="search-author">作者： {{item.author}}</span></li>
        </ul>
        <ul class="indexSearchContent" v-else-if="noAnswer">
          <li class="textCenter noAnswer">没找到哟~~o(╥﹏╥)o</li>
        </ul>
     <!--   <ul  class="indexSearchContent">
          <li class="textCenter t-ff4169">没找到哟，请重新输入</li>
        </ul>-->
      </section>
    <section>
       <p>专为守护您的安全而生</p>
    </section>
  </div>
</template>
<script>
  import $ from 'jQuery';
  import handle from '../../CommonJs/CommonJs';
  export default {
      data(){
          return { apiBase:'',
            show:false,
            isOpen:false,
            isBanner:false,
            isBlock:'',
            scroll: '',
            isGrew:false,
            question:'',
            searchList:[],
            noAnswer:false
          }
      },
    watch: {
      question: function (newQusetion) {
       /* this.searchQueryIsDirty = true*/
        this.getAnswer(newQusetion)
      }
    },
    mounted: function () {
     this.isOpen=true;
      this.$nextTick(function () {
        this.apiBase=this.$store.state.apiLink.apiLink;
      })
     /* console.log(JSON.parse(this.$store.state.userInfo.userInfo).username)*/
    },
    created:function () {
        window.addEventListener('scroll', this.nav)
    },
    destroyed () {
      window.removeEventListener('scroll',this.nav)
    },
    methods: {
      clearSearch(){
        this.searchList=[];
        this.noAnswer=false;
        this.question=''
      },
      goArticle(id){
        this.$store.commit('setArticleId', id);
        this.$router.push({ path: '/article' })
      },
      getAnswer: _.debounce(
        function (query) {
         /* if (this.question.indexOf('?') === -1) {
            this.answer = 'Questions usually contain a question mark. ;-)'
            return
          }*/
          var data={
              queryParam:query
          }
          console.log(query)
          if(query==''){
            this.noAnswer=false;
            this.searchList=[];
          }else{
            this.$http.post(this.apiBase+'/articleSearchList', data)
              .then(response => {
                console.log(response.data)
                if(response.data.status==-1){
                  this.noAnswer=true
                }
                this.searchList=response.data.data;
              }, response => {
                console.log("no")

              })
          }
         /* this.answer = 'Thinking...'*/

        },
        // 这是我们为用户停止输入等待的毫秒数
        500
      ),

      loginOut(){
          var _that=this;
          handle.tips_confirm(this,'真的要离开了吗，再给个机会可好？',function () {
            _that.$store.commit('clearUserInfo');
          },'伤心提示o(╥﹏╥)o')
      },
      switchBanner(){
          this.isBanner=!this.isBanner;
          this.isBlock='block'
      },
      nav() {
        this.clearSearch()
        if(this.isBanner==true){
          this.isBanner=false;
        }
        this.scroll = document.body.scrollTop;
        console.log("滚蛋",this.scroll)
        this.$refs.nav.style.backgroundColor="rgba(255,255,255,"+this.scroll/400+")";
        if(this.scroll>200){
          this.$refs.leftBar.style.borderRight="1px solid #dddddd";
          this.isGrew=true;
        }else{
          this.$refs.leftBar.style.borderRight="1px solid rgba(0,0,0,0)";
          this.isGrew=false;
        }

        this.$refs.ulnav.style.backgroundColor="rgba(133,214,164,"+this.scroll/400+")";
        console.log(this.scroll/100)
      }
    },
    computed: {
      username () {
          if(this.$store.state.userInfo.userInfo){
            return '欢迎回来,'+JSON.parse(this.$store.state.userInfo.userInfo).username
          }else{
            return ' '
          }
      }
    }
  }
</script>
<style scoped>
  .noAnswer{
    color: #0e0f13;
    font-size: 16px;
  }
  .search-author{
    float: right;
    color: #333333;
  }
  .search-companyName{
    float: left;
    font-size: 15px;
    color: #333333;
  }
  .indexSearchContent{
    width: 100%;
    position: absolute;
    z-index: 1000;
    text-align: left;
    background-color: rgba(255,255,255,0.5);
    color: #999999;
    left: 0%;
    top: 235px;
    box-sizing: border-box;
    box-shadow: 1px 2px 3px #000000;
  }
  .indexSearchContent li{cursor: pointer;padding: 5px 10px}
  .indexSearchContent li:hover{
    background-color: #ff7f0d;
    color: #ffffff;
  }
  .indexSearchContent li:hover span{
    color: #ffffff;
  }
  .block{display: block!important;}
  .fadeInDown{
    display: block!important;
  }
  .showBanner{
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }
  .icon-zhedie{display: inline-block}
  a{text-decoration: none;color: #ffffff}
  a:hover{color: #ff4169;transform: scale(1.2,1.2)}
  .relogin{
    position: relative;
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 20px;
  }
  .header-info{
    text-align: left;
    margin-left: 20px;
    float: left;
    height: 60px;
    line-height: 60px;
  /*  color: #ffffff;*/
  }
  .list-hy{
    display: none;
  }
  .relogin p{
    float: left;
    /*color: #ffffff;*/
    letter-spacing: 2px;
    font-size: 15px;
    cursor: pointer;
  }
  .relogin p:hover{
    color: #ff4169;
  }
  .icon-fabu:hover{
    color: #ff4169;
  }
  #canvas{
    width:100%;
    height:400px;
    overflow: hidden;
    position:absolute;
    top:0;
    left:0;
    background-color: #1a1724;
  }
  .canvas-wrap{
    position:absolute;
    height: 400px;
    width: 100%;

  }
  .icon-tuichu{
    font-size: 18px;
  }
  .t-ffffff{color: #ffffff;}
  .t-999999{color: #999999;}
  .header{
    /*overflow: hidden;*/
    width: 100%;
    height: 400px;
    z-index: 50;
 /*   background: url(/static/images/bg.jpg);*/
    background-size: cover;
    position: relative;
  }
  .header .leftBar{
    width: 150px;
    float: left;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
   /* color: #ffffff;*/

  }
  nav{width: 100%;position: fixed;z-index: 100;background-color: rgba(255,255,255,0.9);height: 60px;display: block;top:0}
  nav ul{width: 100%;height: 100%;position: absolute;background-color: #85D6A4;box-sizing: border-box;padding: 0 20px;top: 60px}
  nav ul li{
    cursor: pointer;
    float: right;
    height: 60px;
    line-height: 60px;
   /* padding: 5px 30px;*/
    color: #ffffff;
    margin: 0px 10px;
    font-size: 16px;
  /*  border: 1px solid #ffffff;*/
  }
  nav ul li:hover{
    color: #ff4169;
    transform: scale(1.2,1.2);
  }

  .indexSearch{
    width: 50%;
    height: 55px;
    color: #ffffff;
    margin: 0px auto;
    position: relative;
    padding-top: 180px;

  }
  .indexSearch i{
    position: absolute;
    font-size: 35px;
    top: 195px;
    left: 10px;
  }
  .mainSearch{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    line-height: 55px;
    padding: 5px 60px;
    font-size: 20px;
    background-color: rgba(0,0,0,0);
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  　:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #dddddd; opacity:1;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #dddddd;opacity:1;
  }

  input:-ms-input-placeholder{
    color: #dddddd;opacity:1;
  }

  input::-webkit-input-placeholder{
    color: #dddddd;opacity:1;
  }

</style>
