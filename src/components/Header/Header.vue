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
          <p><span v-if="username==' '"><router-link :to="{ name: 'Login'}"  v-bind:class="isGrew?'t-999999':'t-ffffff'">登陆/注册</router-link></span><span v-html="username"></span></p>
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
        <input class="mainSearch" type="text" placeholder="想找的搜出来">
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
          return { show:false,isOpen:false,isBanner:false,isBlock:'',scroll: '',isGrew:false}
      },
    mounted: function () {
     this.isOpen=true;
     /* console.log(JSON.parse(this.$store.state.userInfo.userInfo).username)*/
    },
    created:function () {
        window.addEventListener('scroll', this.nav)

    },
    destroyed () {
      window.removeEventListener('scroll',this.nav)
    },
    methods:{
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
        if(this.isBanner==true){
          this.isBanner=false;
        }
        this.scroll = document.body.scrollTop;
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
    overflow: hidden;
    width: 100%;
    height: 400px;
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
  nav{width: 100%;position: fixed;z-index: 100;background-color: rgba(255,255,255,0.9);height: 60px;display: block;}
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
    width: 40%;
    height: 40px;
    color: #ffffff;
    margin: 180px auto;
  }
  .indexSearch i{
    position: absolute;
    font-size: 40px;
    top: 14px;
    left: 10px;
  }
  .mainSearch{
    width: 100%;
    height: 100%;
    line-height: 40px;
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
