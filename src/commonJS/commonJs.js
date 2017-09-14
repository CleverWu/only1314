var handle = {
  tips_success: function (_this, message) {
    _this.$message({
      showClose: false,
      message: message,
      type: 'success',
      duration: 1000
    });
  },
  tips_warn: function (_this, message) {
    _this.$message({
      showClose: false,
      message: message,
      type: 'warning',
      duration: 1000
    });
  },
  tips_confirm: function (_this, message, handle, title) {
    _this.$confirm(message, title || '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'info'
    }).then(() => {
      handle()
    }).catch(() => {
      /*this.$message({
       type: 'info',
       message: '已取消删除'
       });*/
    });
  },
  verifiyLoginStatus:function (_this,router) {
    var userInfo=JSON.parse(_this.$store.state.userInfo.userInfo);
    if(userInfo==null){
      this.tips_warn(_this,'请登陆后再回复')
    }else if(userInfo.activeStatus==false){
      this.tips_confirm(_this,'账户未激活,是否转到激活页面',function () {
        router.push({ path: '/activeEmail' })
      },'未激活提示')
    }else{
      return true
    }
  }


}
export default handle


/*exports.install = function (Vue, options) {
 console.log("wew",Vue)
 Vue.prototype.handle = {
 tips_success:function (_this,message) {
 Vue.$message({
 showClose: false,
 message: message,
 type: 'success',
 duration:1000
 });
 }
 }
 };*/
