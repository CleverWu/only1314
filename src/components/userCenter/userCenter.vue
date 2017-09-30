<template>
  <div class="userCenter">
    <common-top-bar :websiteInfo="websiteInfo"></common-top-bar>
    <div class="bottom">
      <div class="leftBar">
        <ul>
          <li @click="barActive('photo')"  class="photo">
            <el-tooltip class="item" effect="dark" content="更换头像" placement="right"><router-link to="/userCenter/userPhoto" replace><img v-bind:class="barShow=='photo'?'photoActive':''" :src=JSON.parse(userPhoto).userPhoto></router-link> </el-tooltip>
         </li>
          <li @click="barActive('account')" >
            <el-tooltip class="item" effect="dark" content="账户设置" placement="right"><router-link to="/userCenter/account" replace>  <i v-bind:class="barShow=='account'?'active':''" class="iconfont icon-zhanghuguanli"></i> </router-link></el-tooltip>
          </li>
          <!--<li><router-link to="/userCenter/userPhoto" replace>我的文章</router-link></li>-->
        </ul>
      </div>
      <div class="rightBar">
        <router-view></router-view>
      </div>
    </div>


  </div>
</template>
<script>
  import commonTopBar from '../Header/commonTopBar'
  export default{
      data(){
          return{
            websiteInfo: '欢迎来到个人中心',
              userInfo:JSON.parse(this.$store.state.userInfo.userInfo),
              barShow:''
          }
      },
    computed: {
      // a computed getter
      userPhoto: function () {
        // `this` points to the vm instance
        return this.$store.state.userInfo.userInfo
      }
    },
    components: {'common-top-bar': commonTopBar},
     methods:{
          barActive(name){
              this.barShow=name;
          }
     }
  }
</script>
<style scoped>
  .userCenter{}
  .userCenter-info{
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    position: fixed;
    top: 0px;
    z-index: 10;
    line-height: 70px;
    border-bottom:1px solid #eeeeee;
    box-shadow: 1px 1px 5px #dddddd;
  }
  .websiteName{float:left;width: 200px;border-right: 1px solid #dddddd;font-size: 20px;}
  .websiteInfo{margin-left: 210px;text-align: left}
  .bottom{
    position: absolute;
    width: 100%;
    top: 70px;
    bottom: 0px;
   /* background-color: salmon;*/
  }
  .leftBar{
    width:75px;
   /* background-color: #00a0ee;*/
    position: fixed;
    height: 100%;
    border-right:1px solid #dddddd ;
    box-shadow: 3px 0px 2px #999999;
  }
  .rightBar{
    margin-left: 75px;
    height: 100%;
  }
  .leftBar ul li{
    width: 100%;
    height: 45px;
  /*  background-color: salmon;*/
    margin: 25px auto;
    line-height: 45px;
    position: relative;
  }
  .leftBar ul li i.active{
    color: #1c8de0;
  }
  .leftBar ul li img.photoActive{
    border: 2px solid #1c8de0;
    padding: 2px;
  }

  .leftBar ul li:hover *{
    color: #ff4163;
  }
  .leftBar .photo img{
    box-sizing: border-box;
    display: block;
    margin: 0 auto;
    width: 45px;
    height:45px;
    border-radius: 100px;
  }
  a{text-decoration: none;display: inline-block;width: 100%}
  .iconfont{
    font-size: 40px;
    color: #1f2d3d;
  }
</style>
