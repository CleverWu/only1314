<template>
  <div></div>
</template>
<script>
  console.log("232",this)
  export default{
    data(){
     return {
       tips_success:function (message) {
         console.log(this)
         this.$message({
           showC lose: false,
           message: message,
           type: 'success',
           duration:1000
         });
       }
     }
    }

  }

</script>
