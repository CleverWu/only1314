<template>
  <div>
    <form action="https://api.on1314.cn/excelArticle" method="post" enctype='multipart/form-data'>
      <h4>上传学生信息excel:</h4>
      <input type="hidden" name="userId" v-model="userId" />
      <input type="hidden" name="username" v-model="username" />
      <input type="file" name="Filedata">
      <button type="submit">上传学生信息excel表</button>
    </form>
  </div>
</template>
<script>
  export default{
      data(){
          return{
             userId:JSON.parse(this.$store.state.userInfo.userInfo)._id,
             username:JSON.parse(this.$store.state.userInfo.userInfo).username
          }
      }
  }
</script>
