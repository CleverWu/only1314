<template>
  <div class="userCenter">
    <div class="userCenter-info">
      <div class="websiteName">ONLY1314</div>
      <div class="websiteInfo">个人中心-简易版（先这么用着吧）</div>
    </div>
    <div class="bottom">
      <div class="leftBar">
        <ul>
          <li><router-link to="/userCenter/userPhoto">头像</router-link></li>
          <li><router-link to="/userCenter/account">账户</router-link></li>
          <li><router-link to="/userCenter/userPhoto">我的文章</router-link></li>
        </ul>
      </div>
      <div class="rightBar">
        <router-view></router-view>
      </div>
    </div>


  </div>
</template>
<script>
  export default{
      data(){
          return{

          }
      }
  }
</script>
<style scoped>
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
    background-color: salmon;
  }
  .leftBar{
    width: 120px;
    background-color: #00a0ee;
    position: fixed;
    height: 100%;
  }
  .rightBar{
    margin-left: 120px;
  }
</style>
