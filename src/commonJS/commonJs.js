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
