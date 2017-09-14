<template>
  <div>
    <el-form ref="form" label-width="80px">
      <el-form-item label="图片">
        <ul class="publish-pic clearfix" id="js-imgGroupUl">
          <li v-for="pic in picNums"><img :src="pic"><i class="iconfont icon-xx"></i></li>
          <li id="js-upload-img">
            <div class="plus"><input @change="showPre($event)" type="file">
              <p>+</p></div>
          </li>
        </ul>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">发布</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import Vue from "vue";
  import Router from 'vue-router';
  import handle from '../../CommonJs/CommonJs'
  var router = new Router();
  export default {
    data() {
      return {
        apiBase:'',
        picNums: [JSON.parse(this.$store.state.userInfo.userInfo).userPhoto],
        userInfo:JSON.parse(this.$store.state.userInfo.userInfo)
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
        var data = {
          username: this.userInfo.username,
          picArr: this.picNums,
          type:'switchPhoto'
        }
        console.log(data)
        this.$http.post(this.apiBase+'/userCenter', data)
        /* this.$http.post('http://localhost:8081/publish', data)*/
          .then(response => {
            if (response.data.status == '200') {
                console.log(response.data.data)
              this.$store.commit('setUserInfo',JSON.stringify(response.data.data));
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
  .publish-pic {
    width: 100%
  }

  .publish-pic li {
    width: 120px;
    height: 120px;
    float: left;
    margin: 5px;

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
    height: 120px;
    position: relative;
    border: 1px dashed #dddddd;
  }

  .plus input {
    width: 120px;
    height: 120px;
    opacity: 0;
    position: relative;
    z-index: 10;
    cursor: pointer;
  }

  .plus p {
    position: absolute;
    font-size: 69px;
    top: 39px;
    left: 39px;
    z-index: 5;
    cursor: pointer;
  }

</style>
