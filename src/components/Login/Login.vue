<template>
  <div class="login" ref="login">
   <!-- <div class="pen-title">
      <h1>Only1314</h1></span>
    </div>-->
    <div class="container"  v-bind:class="{active:isOpen}">
      <div class="card"></div>
      <div class="card">
        <h1 class="title">登陆</h1>
        <form autocomplete="off">
          <div class="input-container">
            <input type="text" v-model="login.username" v-verify.login="login.username"/>
            <label class="lab" v-bind:class="login.username!=''?'active':''">用户名</label>
            <div v-remind="login.username" class="bar"></div>
          </div>
          <div class="input-container">
            <input type="password" v-model="login.pwd" v-verify.login="login.pwd" />
            <label class="lab" v-bind:class="login.pwd!=''?'active':''">密码</label>
            <div v-remind="login.pwd" class="bar"></div>
          </div>
          <div class="button-container">
            <button @click.stop.prevent="sureLogin"><span>确定</span></button>
          </div>
          <div class="footer">忘记密码？</div>
        </form>
      </div>
      <div class="card alt">
        <div class="toggle" @click="changeRegist"><span>注册</span></div>
        <h1 class="title">注册
          <div class="close magictime" @click="changeLogin"></div>
        </h1>
        <form>
          <div class="input-container">
            <input type="text" v-model="regist.username"  v-verify.regist="regist.username"/>
            <label class="lab" v-bind:class="regist.username!=''?'active':''">用户名:</label>
            <div v-remind="regist.username" class="bar"></div>
          </div>
          <!--<div class="input-container">
            <input type="text" v-model="regist.phone"/>
            <label class="lab">手机号码:</label>
            <div class="bar"></div>
          </div>-->
          <div class="input-container">
            <input type="text" v-model="regist.email" v-verify.regist="regist.email"/>
            <label class="lab" v-bind:class="regist.email!=''?'active':''">邮箱:</label>
            <div v-remind="regist.email" class="bar"></div>
          </div>
          <div class="input-container">
            <input type="password" v-model="regist.pwd" v-verify.regist="regist.pwd"/>
            <label class="lab" v-bind:class="regist.pwd!=''?'active':''">密码</label>
            <div v-remind="regist.pwd" class="bar"></div>
          </div>
        <!--  <div class="input-container">
            <input type="password" v-model="regist.pwd_repeat" v-verify="regist.pwd_repeat"/>
            <label class="lab">重复密码</label>
            <div v-remind="regist.pwd_repeat" class="bar"></div>
          </div>-->
          <div class="button-container">
            <button v-if="isOpen" @click.stop.prevent="sureRegist"><span>确定</span></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from "vue";
  import verify from "vue-verify-plugin";
 /* import Router from 'vue-router';*/
  import handle from '../../CommonJs/CommonJs'
 /* var router=new Router();*/
  Vue.use(verify,{
    blur:true
  });
  export default {
    data() {
      return {
        changeStatus:false,
        isOpen:false,
        apiBase:'',
        login:{
          username:'',
          pwd:''
        },
        regist:{
          username:'',
          phone:'',
          pwd:'',
          email:''
        }

      }
    },
    verify: {
     regist:{
         username: [
           "required",
           {
             minLength:2,
             message: "姓名不得小于两位"
           },
           {
             maxLength:10,
             message: "姓名不得大于10位"
           }
         ],
       email:"email",
       /*phone:["required","mobile"],*/
       pwd: {
         minLength:6,
         message: "密码不得小于6位"
       }
     },
      login:{
        username: [
          "required",
          {
            minLength:2,
            message: "姓名不得小于两位"
          },
          {
            maxLength:10,
            message: "姓名不得大于10位"
          }
        ],
        pwd: {
          minLength:6,
          message: "密码不得小于6位"
        }
      }

    },
    mounted: function () {
      this.$refs.login.style.height = window.innerHeight + 'px';
      this.$nextTick(function () {
        this.apiBase=this.$store.state.apiLink.apiLink
      })
    },
    methods:{
        changeRegist () {
          this.isOpen=true;
        },
      changeLogin () {
        this.isOpen=false;
      },
      sureRegist(){
            var _this=this;
        if(this.$verify.check("regist")===true){
          var data={
            username:this.regist.username,
            password:this.regist.pwd,
            email:this.regist.email
          }
          this.$http.post(this.apiBase+'/apiUsers/regist', data)
            .then(response => {
                if(response.data.status=='200'){
                  this.$store.commit('setUserInfo',JSON.stringify(response.data.data));
                  this.$message({
                    showClose: false,
                    message: '恭喜你，注册成功',
                    type: 'success',
                    duration:1000
                  });
                  setTimeout(function () {
                    _this.$router.push({ path: '/activeEmail' })
                  },1000)
                }else{
                    handle.tips_warn(this,response.data.message+"(╥﹏╥)o")
                }
              // success callback
            }, response => {
              console.log("no")
            })
        }
      },
      sureLogin(){
          var _this=this;
        if(this.$verify.check("login")===true){
          var data={
            username:this.login.username,
            password:this.login.pwd
          }
          this.$http.post(this.apiBase+'/apiUsers/login', data)
         /* this.$http.post('http://localhost:8081/login', data)*/
            .then(response => {
              if(response.data.status=='200'){
                this.$store.commit('setUserInfo',JSON.stringify(response.data.data));
                handle.tips_success(this,'登陆成功(〃"▽"〃)')
                setTimeout(function () {
                  _this.$router.push({ name: 'Web' })
                },1000)
              }else{
                console.log(this)
                this.$store.commit('clearUserInfo');
                handle.tips_warn(this,response.data.message)
              }
              // success callback
            }, response => {
              console.log("错误提示",response)
            })
        }
      }
    }
  }
</script>
<style scoped>
  .login{width: 100%;height: 100%;background-color: #ff794c;
    background:-webkit-gradient(linear, right bottom, right top, from(rgba(254,82,52,1)), to(rgba(255,121,76,1)));}
  body {
    background: #e9e9e9;
    color: #666666;
    font-family: 'RobotoDraft', 'Roboto', sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .bar.active{
    background: red!important;
  }
  /* Pen Title */
  .pen-title {
    padding: 50px 0;
    text-align: center;
    letter-spacing: 2px;
  }
  .pen-title h1 {
    margin: 0 0 20px;
    font-size: 48px;
    font-weight: 300;
  }
  .pen-title span {
    font-size: 12px;
  }
  .pen-title span .fa {
    color: #FFC0CB;
  }
  .pen-title span a {
    color: #FFC0CB;
    font-weight: 600;
    text-decoration: none;
  }

  /* Rerun */
  .rerun {
    margin: 0 0 30px;
    text-align: center;
  }
  .rerun a {
    cursor: pointer;
    display: inline-block;
    background: #FFC0CB;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    padding: 10px 20px;
    color: #ffffff;
    text-decoration: none;
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .rerun a:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  /* Scroll To Bottom */
  #codepen, #portfolio {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: #363636;
    width: 56px;
    height: 56px;
    border-radius: 100%;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -webkit-transition: 0.3s ease;
    transition: 0.3s ease;
    color: #ffffff;
    text-align: center;
  }
  #codepen i, #portfolio i {
    line-height: 56px;
  }
  #codepen:hover, #portfolio:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }

  /* CodePen */
  #portfolio {
    bottom: 96px;
    right: 36px;
    background: #FFC0CB;
    width: 44px;
    height: 44px;
    -webkit-animation: buttonFadeInUp 1s ease;
    animation: buttonFadeInUp 1s ease;
  }
  #portfolio i {
    line-height: 44px;
  }

  /* Container */
  .container {
    width: 480px;
  }
  .container.active .card:first-child {
    background: #f2f2f2;
    margin: 0 15px;
  }
  .container.active .card:nth-child(2) {
    background: #fafafa;
    margin: 0 10px;
  }
  .container.active .card.alt {
    width: 480px;
    height: auto;
    border-radius: 5px;
    padding: 60px 0 40px;
    overflow: hidden;
    text-align: left;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .container.active .card.alt .toggle {
    position: absolute;
    box-shadow: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(10);
    -webkit-transition: -webkit-transform .3s ease;
    transition: -webkit-transform .3s ease;
    transition: transform .3s ease;
    transition: transform .3s ease, -webkit-transform .3s ease;
  }
  .container.active .card.alt .toggle span{
    display: none;
  }
  .container.active .card.alt .toggle:before {
    content: '';
  }
  .container.active .card.alt .title,
  .container.active .card.alt .input-container,
  .container.active .card.alt .button-container {
    left: 0;
    opacity: 1;
    visibility: visible;
    -webkit-transition: .3s ease;
    transition: .3s ease;
  }
  .container.active .card.alt .title {
    -webkit-transition-delay: .3s;
    transition-delay: .3s;
  }
  .container.active .card.alt .input-container {
    -webkit-transition-delay: .4s;
    transition-delay: .4s;
  }
  .container.active .card.alt .input-container:nth-child(2) {
    -webkit-transition-delay: .5s;
    transition-delay: .5s;
  }
  .container.active .card.alt .input-container:nth-child(3) {
    -webkit-transition-delay: .6s;
    transition-delay: .6s;
  }
  .container.active .card.alt .button-container {
    -webkit-transition-delay: .7s;
    transition-delay: .7s;
  }

  /* Card */
  .card {
    position: absolute;
    background: #ffffff;
    border-radius: 5px;
    padding: 60px 0 40px 0;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    -webkit-transition: .3s ease;
    transition: .3s ease;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* Title */
    /* Inputs */
    /* Button */
    /* Footer */
    /* Alt Card */
  }
  .card:first-child {
    background: #fafafa;
    height: 10px;
    border-radius: 5px 5px 0 0;
    margin: 0 10px;
    padding: 0;
  }
  .card .title {
    position: relative;
    z-index: 1;
    border-left: 5px solid #FFC0CB;
    margin: 0 0 35px;
    padding: 10px 0 10px 50px;
    color: #FFC0CB;
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
  }
  .card .input-container {
    position: relative;
    margin: 0 60px 50px;
  }
  .card .input-container input {
    outline: none;
    z-index: 1;
    position: relative;
    background: none;
    width: 100%;
    height: 60px;
    border: 0;
    color: #212121;
    font-size: 24px;
    font-weight: 400;
  }
  .card .input-container input:focus ~ label {
    color: #FFC0CB;
    -webkit-transform: translate(-12%, -50%) scale(0.75);
    transform: translate(-12%, -50%) scale(0.75);
  }
  .card .input-container input:focus ~ .bar:before, .card .input-container input:focus ~ .bar:after {
    width: 50%;
    color: #ff4163;
  }
  .card .input-container .lab.active {
    color: #9d9d9d;
    -webkit-transform: translate(-12%, -50%) scale(0.75);
    transform: translate(-12%, -50%) scale(0.75);
  }
  .card .input-container label {
    position: absolute;
    top: 0;
    left: 0;
    color: #FFC0CB;
    font-size: 16px;
    font-weight: 300;
    line-height: 60px;
    -webkit-transition: 0.2s ease;
    transition: 0.2s ease;
  }
  .card .input-container .bar {
    position: absolute;
    left: 0;
    bottom: 0;
    background: #FFC0CB;
    width: 100%;
    height: 1px;
    color: rgb(255, 65, 99);
  }
  .card .input-container .bar:before, .card .input-container .bar:after {
    content: '';
    position: absolute;
    background: #FFC0CB;
    width: 0;
    height: 2px;
    -webkit-transition: .2s ease;
    transition: .2s ease;
  }
  .card .input-container .bar:before {
    left: 50%;
  }
  .card .input-container .bar:after {
    right: 50%;
  }
  .card .button-container {
    margin: 0 60px;
    text-align: center;
  }
  .card .button-container button {
    outline: 0;
    cursor: pointer;
    position: relative;
    display: inline-block;
    background: 0;
    width: 240px;
    border: 2px solid #e3e3e3;
    padding: 20px 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    overflow: hidden;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    border-radius: 15px;
  }
  .card .button-container button span {
    position: relative;
    z-index: 1;
    color: #ddd;
    -webkit-transition: .3s ease;
    transition: .3s ease;
  }
  .card .button-container button:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    background: #FFC0CB;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    margin: -15px 0 0 -15px;
    opacity: 0;
    -webkit-transition: .3s ease;
    transition: .3s ease;
  }
  .card .button-container button:hover, .card .button-container button:active, .card .button-container button:focus {
    border-color: #FFC0CB;
  }
  .card .button-container button:hover span, .card .button-container button:active span, .card .button-container button:focus span {
    color: #FFC0CB;
  }
  .card .button-container button:active span, .card .button-container button:focus span {
    color: #ffffff;
  }
  .card .button-container button:active:before, .card .button-container button:focus:before {
    opacity: 1;
    -webkit-transform: scale(10);
    transform: scale(10);
  }
  .card .footer {
    margin: 40px 0 0;
    color: #d3d3d3;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
  }
  .card .footer a {
    color: inherit;
    text-decoration: none;
    -webkit-transition: .3s ease;
    transition: .3s ease;
  }
  .card .footer a:hover {
    color: #bababa;
  }
  .card.alt {
    position: absolute;
    top: 40px;
    right: -70px;
    z-index: 10;
    width: 140px;
    height: 140px;
    background: none;
    border-radius: 100%;
    box-shadow: none;
    padding: 0;
    -webkit-transition: .3s ease;
    transition: .3s ease;
    /* Toggle */
    /* Title */
    /* Input */
    /* Button */
  }
  .card.alt .toggle {
    position: absolute;
    background: #FFC0CB;
    width: 70px;
    height: 70px;
    right: -170px;
    top: 285px;
    border-radius: 100%;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    color: #ffffff;
    font-size: 18px;
    line-height: 70px;
    text-align: center;
    cursor: pointer;
  }
  /*.card.alt .toggle:before {
    content: '\f040';
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }*/
  .card.alt .title,
  .card.alt .input-container,
  .card.alt .button-container {
    left: 100px;
    opacity: 0;
    visibility: hidden;
  }
  .card.alt .title {
    position: relative;
    border-color: #ffffff;
    color: #ffffff;
  }
  .card.alt .title .close {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 60px;
    display: inline;
    color: #ffffff;
    font-size: 58px;
    font-weight: 400;
  }
  .card.alt .title .close:before {
    content: '\00d7';
  }
  .card.alt .input-container input {
    color: #ffffff;
  }
  .card.alt .input-container input:focus ~ label {
    color: #ffffff;
  }
  .card.alt .input-container input:focus ~ .bar:before, .card.alt .input-container input:focus ~ .bar:after {
    background: #ffffff;
  }
  .card.alt .input-container input:valid ~ label {
    color: #ffffff;
  }
  .card.alt .input-container label {
    color: rgba(255, 255, 255, 0.8);
  }
  .card.alt .input-container .bar {
    background: rgba(255, 255, 255, 0.8);
  }
  .card.alt .button-container button {
    width: 100%;
    background: #ffffff;
    border-color: #ffffff;
  }
  .card.alt .button-container button span {
    color: #FFC0CB;
  }
  .card.alt .button-container button:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  .card.alt .button-container button:active:before, .card.alt .button-container button:focus:before {
    display: none;
  }

  /* Keyframes */
  @-webkit-keyframes buttonFadeInUp {
    0% {
      bottom: 30px;
      opacity: 0;
    }
  }
  @keyframes buttonFadeInUp {
    0% {
      bottom: 30px;
      opacity: 0;
    }
  }

</style>
