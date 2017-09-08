<template>
  <div class="publish">
    <div class="publishTopBar">

    </div>
    <div class="box">
      <div class="content">
        <el-form ref="form" :model="form" label-width="80px">
          <!--<el-form-item label="作者">
            <el-input v-model="form.name"></el-input>
          </el-form-item>-->
          <el-form-item label="行业">
            <el-select v-model="form.region" placeholder="请选择行业">
              <el-option label="互联网" value="互联网"></el-option>
              <el-option label="财务" value="财务"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="名称">
            <el-input v-model="form.companyName"></el-input>
          </el-form-item>
          <el-form-item label="时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                              style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="图片">
            <ul class="publish-pic clearfix" id="js-imgGroupUl">
              <li v-for="pic in picNums"><img :src="pic"><i class="iconfont icon-xx"></i></li>
              <li id="js-upload-img">
                <div class="plus"><input @change="showPre($event)" type="file">
                  <p>+</p></div>
              </li>
            </ul>
            <!-- <img id="portrait" src="" width="120" height="120">-->

          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" :rows="15" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">发布</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

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
        picNums: [],
        form: {
          /* name: '',*/
          region: '',
          companyName: '',
          date1: '',
          date2: '',
          desc: '',
        }
      }
    },
    methods: {
      onSubmit() {
        var userInfo = JSON.parse(this.$store.state.userInfo.userInfo);

        var data = {
          userInfo: userInfo,
          date1: this.form.date1,
          date2: this.form.date2,
          companyName: this.form.companyName,
          region: this.form.region,
          desc: this.form.desc,
          picArr: this.picNums
        }
        console.log(data)
        this.$http.post('https://api.only1314.cn/publish', data)
        /* this.$http.post('http://localhost:8081/publish', data)*/
          .then(response => {
            if (response.data.status == '200') {
              handle.tips_success(this, '发表成功(〃"▽"〃)')
              setTimeout(function () {
                router.push({path: '/'})
              }, 1000)
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
              _this.picNums.push( canvas.toDataURL('image/png',quality));
            }
          };
          fr.readAsDataURL(file);
        }
      }
    }

  }
</script>
<style scoped>
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

  .publishTopBar {
    background: url(/static/images/publish_top_bg.jpg);
    background-size: cover;
    width: 100%;
    height: 400px;
  }

  .content {
    text-align: left;
    width: 600px;
    margin: 50px auto;
  }

  .box {
    overflow: hidden;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
