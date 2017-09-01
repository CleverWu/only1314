<template>
  <div class="publish">
    <div class="publishTopBar">

    </div>
    <div class="box">
      <div class="content">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="作者">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="行业">
            <el-select v-model="form.region" placeholder="请选择行业">
              <el-option label="互联网" value="shanghai"></el-option>
              <el-option label="财务" value="beijing"></el-option>
            </el-select>
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
  export default {
    data() {
      return {
        form: {
          name: '',
          date1: '',
          date2: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$http.post('http://localhost:8081/publish', {
          author: this.form.name,
          date1: this.form.date1
        })
          .then(response => {
              console.log("yes")
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
