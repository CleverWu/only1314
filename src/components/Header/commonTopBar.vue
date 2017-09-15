<template>
  <div class="topBar-info clearfix">
    <div class="websiteName" @click="skipeToIndex">ONLY1314</div>
    <div class="websiteInfo">{{websiteInfo}}</div>
    <div class="rightBar"><ul><li @click="goUserCenter" v-if="userInfo">{{userInfo.username||''}}</li></ul></div>
  </div>
</template>
<script>
  export default{
    props: {
      websiteInfo: {
        type: String
      }
    },
      data(){
          return {
              username:'',
              userInfo:JSON.parse(this.$store.state.userInfo.userInfo)
          }
      },
    created:function () {

    },
    methods: {
      skipeToIndex(){
          this.$router.push({name:'Web'})
      },
      goUserCenter(){
        this.$router.push({name:'userCenter'})
      }
    }
  }
</script>
<style scoped>
  .topBar-info{
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
  .websiteName{float:left;width: 200px;border-right: 1px solid #dddddd;font-size: 20px;cursor: pointer}
  .websiteInfo{margin-left: 10px;text-align: left;float: left}
  .rightBar{
    position: relative;
    float: right;
    height: 70px;
    line-height: 70px;
    margin-right: 20px;
  }
  .rightBar ul li{cursor: pointer}
</style>
