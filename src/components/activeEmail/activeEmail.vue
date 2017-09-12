<template>
  <div class="activeEmail" ref="activeEmail">
    <div class="box">
      <h1>为了更好的体验本站功能，强烈建议验证您<span @click="openMailLink" class="t-ff4169" v-html="email"></span>的邮箱~</h1>
      <button class="b-00BFFF sure" @click="sureSend">发送激活邮件</button>
      <!--<button @click="sureSend">确定已成功激活</button>-->
      <button class="cancel" @click="skipToIndex">跳过此步骤</button>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import Router from 'vue-router';
  import handle from '../../CommonJs/CommonJs'
  var router = new Router();
  export default{
    data(){
      return {
        apiBase:'',
        intervalid1: '',
        username: JSON.parse(this.$store.state.userInfo.userInfo).username,
        email: JSON.parse(this.$store.state.userInfo.userInfo).email,
        hash: JSON.parse(this.$store.state.userInfo.userInfo).hash,
        emailLink: ''
      }
    },
    mounted: function () {
      this.$refs.activeEmail.style.height = window.innerHeight + 'px';
      this.$nextTick(function () {
        this.apiBase=this.$store.state.apiLink.apiLink
      })
    },
    created(){
      var data = {
        username: this.username
      }
      var _this = this;
      this.intervalid1 = setInterval(function () {
        _this.$http.post(this.apiBase+'/isActiveSuccess', data)
          .then(response => {
            if (response.data.status == '200') {
              router.push({path: '/'})
            } else {
              console.log("没有激活")
            }
          }, response => {
            console.log("no")
          })
      }, 3000)
      this.emailLink = this.gotoEmail(this.email)
    },
    beforeDestroy () {
      clearInterval(this.intervalid1)
    },
    methods: {
      openMailLink(){
        window.open("https://"+this.emailLink)
      },
      gotoEmail($mail) {
        var t = $mail.split('@')[1];
        t = t.toLowerCase();
        if (t == '163.com') {
          return 'mail.163.com';
        } else if (t == 'vip.163.com') {
          return 'vip.163.com';
        } else if (t == '126.com') {
          return 'mail.126.com';
        } else if (t == 'qq.com' || t == 'vip.qq.com' || t == 'foxmail.com') {
          return 'mail.qq.com';
        } else if (t == 'gmail.com') {
          return 'mail.google.com';
        } else if (t == 'sohu.com') {
          return 'mail.sohu.com';
        } else if (t == 'tom.com') {
          return 'mail.tom.com';
        } else if (t == 'vip.sina.com') {
          return 'vip.sina.com';
        } else if (t == 'sina.com.cn' || t == 'sina.com') {
          return 'mail.sina.com.cn';
        } else if (t == 'tom.com') {
          return 'mail.tom.com';
        } else if (t == 'yahoo.com.cn' || t == 'yahoo.cn') {
          return 'mail.cn.yahoo.com';
        } else if (t == 'tom.com') {
          return 'mail.tom.com';
        } else if (t == 'yeah.net') {
          return 'www.yeah.net';
        } else if (t == '21cn.com') {
          return 'mail.21cn.com';
        } else if (t == 'hotmail.com') {
          return 'www.hotmail.com';
        } else if (t == 'sogou.com') {
          return 'mail.sogou.com';
        } else if (t == '188.com') {
          return 'www.188.com';
        } else if (t == '139.com') {
          return 'mail.10086.cn';
        } else if (t == '189.cn') {
          return 'webmail15.189.cn/webmail';
        } else if (t == 'wo.com.cn') {
          return 'mail.wo.com.cn/smsmail';
        } else if (t == '139.com') {
          return 'mail.10086.cn';
        } else {
          return '';
        }
      },
      skipToIndex(){
        router.push({path: '/'})
      },
      sureSend(){
        var data = {
          username: this.username,
          email: this.email,
          hash: this.hash
        }
        console.log(this.$store.state.userInfo.userInfo)
        this.$http.post(this.apiBase+'/activeEmail', data)
          .then(response => {
              if(response.data.status==200){
                handle.tips_success(this,'邮件发送成功，请注意查收(〃"▽"〃)')
              }

            // success callback
          }, response => {
            console.log("no")
          })
      }
    }
  }

</script>
<style scoped>
  .activeEmail {
    width: 100%;
    height: 100%;
    background-color: #ff794c;
    background: url(/static/images/verify_bg.png) no-repeat center;
    background-size: cover;
  }

  body {
    background: #e9e9e9;
    color: #666666;
    font-family: 'RobotoDraft', 'Roboto', sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%)
  }

  .t-ff4169 {
    color: #ff4169;
    margin: 0px 20px;
    cursor: pointer;
  }

  .box h1 {
    font-size: 20px;
    color: #ffffff;
  }

  .box button {
    border: none;
    padding: 10px 15px;
    color: #ffffff;
    border-radius: 5px;
    margin: 20px 30px;
    cursor: pointer;
  }

  .b-00BFFF {
    background-color: #00BFFF;
  }

  .box button.sure:hover {
    background-color: #FF8C00;
  }

  .box button.cancel:hover {
    background-color: #ff4169;
  }
</style>
