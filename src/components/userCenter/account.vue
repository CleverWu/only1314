<template>
  <div class="account">
    <div class="centerBox">
      <h3>我的账户</h3>
      <ul class="clearfix">
        <li @click="showTab('m_password')" v-bind:class="showAccountTab=='m_password'?'active':''">密码修改</li>
        <li @click="showTab('m_email')" v-bind:class="showAccountTab=='m_email'?'active':''">邮箱修改</li>
      </ul>
      <div v-show="showAccountTab=='m_password'" class="m_password">
        <el-form  :model="account"  :label-position="labelPosition">
          <el-form-item label="原密码">
            <el-input v-model="account.oldPw"></el-input>
          </el-form-item>
          <el-form-item label="新密码">
            <el-input v-model="account.newPw"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="sure_pw" type="primary">确认修改</el-button>
      </div>
      <div v-show="showAccountTab=='m_email'" class="m_email">
        <el-form :label-position="labelPosition"  :model="account" :rules="rules" ref="account"  >
          <el-form-item label="已绑定邮箱">
            <el-input  :disabled="true" v-model="account.oldEmail"></el-input>
          </el-form-item>
          <el-form-item label="新邮箱"  prop="newEmail">
            <el-input v-model="account.newEmail"  ></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="sure_email('account')" type="primary">确认修改</el-button>
      </div>
    </div>
  </div>
</template>
<script>
    import Vue from "vue";
    import handle from '../../CommonJs/CommonJs'
  export  default{
      data(){
          return {
              apiBase:'',
              labelPosition:'right',
              account:{
                  oldPw:'',
                  newPw:'',
                  oldEmail:'',
                  newEmail:''
              },
            rules: {
              newEmail: [
                { required: true, message: '请输入邮箱地址', trigger: 'blur'  },
                { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
              ]
            },
              showAccountTab:'m_password',
              userInfo:JSON.parse(this.$store.state.userInfo.userInfo)

          }
      },

      mounted:function () {
          window.scrollTo(0,0);
          this.$nextTick(function () {
              this.apiBase=this.$store.state.apiLink.apiLink
          })
      },
      methods:{
          showTab(name){
              if(name=='m_email'){
                  this.account.oldEmail=this.userInfo.email
              }
              this.showAccountTab=name
          },
          sure_pw(){
              var data={
                  uid:this.userInfo._id,
                  oldPw:this.account.oldPw,
                  newPw:this.account.newPw
              }
              console.log("提交的data",data)
              this.$http.post(this.apiBase+'/apiUsers/mPassword', data)
              /* this.$http.post('http://localhost:8081/publish', data)*/
                  .then(response => {
                      if (response.data.status == '200') {
                          console.log(response.data.data)
                          this.account.oldPw='';
                          this.account.newPw='';
                          handle.tips_success(this, '密码修改成功(〃"▽"〃)')
                      } else {
                          handle.tips_warn(this, response.data.message)
                      }
                      // success callback
                  }, response => {
                      console.log("no")
                  })
          },
          sure_email(formName){
            this.$refs[formName].validate((valid) => {
              if (valid) {
                var data={
                  uid:this.userInfo._id,
                  email:this.account.newEmail
                }
                this.$http.post(this.apiBase+'/apiUsers/mEmail', data)
                /* this.$http.post('http://localhost:8081/publish', data)*/
                  .then(response => {
                    if (response.data.status == '200') {
                      console.log(response.data.data)
                      this.$store.commit('setUserInfo',JSON.stringify(response.data.data));
                      this.account.newEmail='';
                      this.account.oldEmail=JSON.parse(this.$store.state.userInfo.userInfo).email;
                      handle.tips_success(this, '邮箱换绑成功(〃"▽"〃)')
                      var _this=this;
                      setTimeout(function () {
                        handle.verifiyLoginStatus(_this, _this.$router)
                      },1000)

                    } else {
                      handle.tips_warn(this, response.data.message)
                    }
                    // success callback
                  }, response => {
                    console.log("no")
                  })
              } else {
                console.log('error submit!!');
                return false;
              }
            });




          }
      }
  }
</script>
<style scope>
  .account{
    overflow: hidden;
  /*  background: url("/static/images/bg_userCenter.jpg") no-repeat center;
    background-size: cover;*/
    height: 100%;
  }
  .centerBox{
    width: 450px;
    margin: 100px auto;
    background-color: #f4f4f4;
    text-align: center;
    border-radius: 5px;
    padding: 20px 0px;
  }
  .centerBox h3{font-size: 16px;margin: 10px 0 20px 0;color: #333333}
  .m_password{
    width: 350px;
    margin: 0 auto;
  }
  .m_email{
    width: 350px;
    margin: 0 auto;
  }
  .centerBox ul{
    margin: 0px auto 20px auto;
  }
  .centerBox ul li{
    display: inline-block;
    width: 50px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #dddddd;
    padding: 0px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  .centerBox ul li.active{
    background-color: #4db3ff;
    color: #ffffff;
  }
  .centerBox ul li:hover{
    background-color: #11b95c;
    color: #ffffff;
  }
</style>
