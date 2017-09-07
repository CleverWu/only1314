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
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="图片">
            <el-upload
              action="http://localhost:8081/fileload"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog v-model="dialogVisible" size="tiny">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </el-form-item>
          <el-form-item label="描述">
            <el-input type="textarea" :rows="15" v-model="form.desc"></el-input>
          </el-form-item>
          <el-dialog v-model="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
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
  var router=new Router();
  export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        form: {
         /* name: '',*/
          region:'',
          companyName:'',
          date1: '',
          date2: '',
          desc: '',
        }
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      onSubmit() {
        var userInfo=JSON.parse(this.$store.state.userInfo.userInfo);
        console.log(userInfo)
        var data={
          userInfo:userInfo,
          date1: this.form.date1,
          date2:this.form.date2,
          companyName:this.form.companyName,
          region:this.form.region,
          desc:this.form.desc
        }
        /*this.$http.post('https://api.only1314.cn/publish', data)*/
        this.$http.post('http://localhost:8081/publish', data)
          .then(response => {
            if(response.data.status=='200'){
              handle.tips_success(this,'发表成功(〃"▽"〃)')
              setTimeout(function () {
                router.push({ path: '/' })
              },1000)
            }else{
              handle.tips_warn(this,response.data.message)
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
  .publishTopBar{
    background: url(/static/images/publish_top_bg.jpg);
    background-size: cover;
    width: 100%;
    height: 400px;
  }
  .content{
    text-align: left;
    width: 600px;
    margin: 50px auto;
  }
  .box{
    overflow: hidden;
  }

</style>
