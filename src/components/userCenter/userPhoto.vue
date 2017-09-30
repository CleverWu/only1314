<template>
  <div class="userPhoto">
        <ul class="publish-pic" id="js-imgGroupUl">
          <li class="userPic" v-for="pic in picNums"><img :src="pic"><i class="iconfont icon-xx"></i></li>
          <li id="js-upload-img">
            <div class="plus b-11b95c"><input @change="showPre($event)" type="file"><p>点我选择</p></div>
            <div @click="onSubmit" class="plus b-4db3ff"><p>确定提交</p></div>
          </li>
        </ul>
    <img :src="s">

  </div>
</template>
<script>
  import Vue from "vue";
  import handle from '../../CommonJs/CommonJs'
  export default {
    data() {
      return {
          s:'',
        apiBase:'',
        picNums: [JSON.parse(this.$store.state.userInfo.userInfo).userPhoto],
        pic:JSON.parse(this.$store.state.userInfo.userInfo).userPhoto.substr(27)
      }
    },
    computed: {
      // a computed getter
      userInfo: function () {
        // `this` points to the vm instance
        return JSON.parse(this.$store.state.userInfo.userInfo)
      }
    },
    mounted:function () {
      window.scrollTo(0,0);
      this.$nextTick(function () {
        this.apiBase=this.$store.state.apiLink.apiLink
      })
    },
    methods: {
      onSubmit() {
        var regExp = /\?.*/g;
        var str = this.pic;
        str = str.replace( regExp, "" )
        var data = {
          username: this.userInfo.username,
          uid:this.userInfo._id,
          picArr: this.picNums,
          pic:str,
          type:'switchPhoto'
        }
        this.$http.post(this.apiBase+'/apiUsers/mUserPhoto', data)
        /* this.$http.post('http://localhost:8081/publish', data)*/
          .then(response => {
            if (response.data.status == '200') {
              var info=response.data.data;
              info.userPhoto=info.userPhoto+'?='+Math.random();
              this.$store.dispatch('setUserInfo',JSON.stringify(info));
              handle.tips_success(this, '头像更换成功(〃"▽"〃)')
            } else {
              handle.tips_warn(this, response.data.message)
            }
            // success callback
          }, response => {
            console.log("no")
          })
      },
      showPre(source){
        var _this = this;
        var file = source.target.files[0];
        if (window.FileReader) {
          var fr = new FileReader();
          fr.onloadend = function (e) {
            var img = new Image,
              width = 300,    //图片resize宽度
              quality = 0.4,  //图像质量
              canvas = document.createElement("canvas"),
              drawer = canvas.getContext("2d");
            img.src = e.target.result;
            img.onload=function () {
              canvas.width = width;
              canvas.height = width * (img.height / img.width);
              drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
              _this.picNums.splice(0, 1, canvas.toDataURL('image/png',quality))
            }
          };
          fr.readAsDataURL(file);
        }
      }
    }

  }
</script>
<style>
  .userPhoto{
     /* background: url("/static/images/bg_userCenter.jpg") no-repeat center;
      background-size: cover;*/
      height: 100%;
    text-align: center;
      overflow: hidden;
  }
  .userPhoto ul{
    width: 120px;
    margin: 100px auto 30px auto;
  }
  .publish-pic {
    width: 100%
  }
  .publish-pic li{
    width: 120px;
    margin: 5px;
  }
  .publish-pic li.userPic {

    height: 120px;


  }

  .publish-pic li img {
    width: 100%;
    height: 100%;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  .plus {
    width: 120px;
    height: 30px;
    position: relative;
    border-radius: 10px;
    color: #ffffff;
    letter-spacing: 2px;
    cursor: pointer;
    margin: 10px 0;
   /* cursor: pointer;*/

  }
  .b-11b95c{
    background-color: #11b95c;
  }
  .b-4db3ff{ background-color: #4db3ff;}

  .plus input {
    width: 200px;
    height: 30px;
    opacity: 0;
    left: -70px;;
    top:0;
    z-index: 10;
    cursor: pointer;
    position: absolute;

  }

  .plus p {
    position: absolute;
    font-size: 12px;
    top: 4px;
    font-weight: 600;
    width: 120px;
    left: 0px;
    height: 100%;
    z-index: 5;
   /* cursor: pointer;*/
  }


</style>
