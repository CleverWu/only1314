<template>
  <div class="article" ref="article">
    <div class="article-info">
      <div class="websiteName">ONLY1314</div>
      <div class="websiteInfo">永远不要忘记给自己加油~</div>
    </div>
    <div class="articleBox">
        <h1 class="title" v-html="article.companyName">我只是一个新标题</h1>
        <p class="pubtime">{{article.publishdate | dateFormat}}</p>
      <img class="a-img" v-if=article.picArr[0] :src=article.picArr[0]>
      <img class="a-img"  v-else src="https://only1314.cn/static/images/bg_2.jpg">
        <div class="detail" v-html="article.desc">
          黄金客户进口红酒可好看交换空间还款计划计划尽快
        </div>
        <section class="remarks"  v-html="article.remark||'暂无备注'">

        </section>
        <section class="tips clearfix">
          <ul class="leftBar">
           <!-- <li v-html="article.region">互联网</li>-->
            <li>互联网</li>
            <li>财务</li>
          </ul>
          <ul class="rightBar"><li>作者：<span v-html="article.author"></span></li><li>1回复</li><li class="like"  @click="heart($event)"><i class="iconfont icon-xin mr5"></i>25</li></ul>
        </section>
      <div class="replyBox">
        <div class="replyList clearfix" v-for="(item,index) in article.comments">
          <div class="photo"><img v-if="item.userPhoto" :src=item.userPhoto><img v-else src='https://only1314.cn/static/images/photo.png'></div>
          <div class="commentInfo">
            <h3>
              <span class="replyName" v-html="item.name">皓月</span>
              <span class="replydate">{{item.commentdate|dateFormat}}</span>
              <span @click="switchReply($event)" class="z-reply">回复</span></h3>
            <p class="commentInfo-detail" v-html="item.text"></p>
            <div class="replyText"  v-loading="loading1" element-loading-text="正在回复中">
              <textarea v-model="s_text"></textarea>
              <button @click="s_sureReply(index)">确定</button>
            </div>
          </div>
          <div class="otherReply" v-for="list in item.subComment">
            <div class="otherReply-photo"><img v-if="list.userPhoto" :src=list.userPhoto><img v-else src='https://only1314.cn/static/images/photo.png'></div>
            <div class="otherReply-commentInfo">
              <h3><span class="replyName" v-html="list.name">皓月</span><span class="replydate">{{list.commentdate|dateFormat}}</span></h3>
              <p class="otherReply-commentInfo-detail" v-html="list.text">
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="comments clearfix"   v-loading="loading2" element-loading-text="正在回复中">
        <h2>发表新评论</h2>
        <textarea v-model="z_text"></textarea>
        <button @click="z_sureReply" class="newReply">确定</button>
        <button class="reset">重置</button>
      </div>

    </div>
  </div>
</template>
<script>
  import $ from 'jQuery'
  import handle from '../../CommonJs/CommonJs'
  import Router from 'vue-router'
  var router = new Router();
  export default{
      data(){
          return{
              loading1:false,
              loading2:false,
              apiBase:'',
              articleLists:JSON.parse(this.$store.state.article.article),
              articleId:this.$store.state.article.articleId,
              article:'',
              z_text:'',
              s_text:''
          }
      },
    created:function () {
      console.log("shuzu",this.articleLists);
      console.log("id",this.articleId);
      var _this=this;
        this.articleLists.forEach(function (item) {
          console.log(_this.articleId)
          if(item._id==_this.articleId){
            _this.article=item
          }
        })
    },
    mounted: function () {
      this.$nextTick(function () {
        this.apiBase=this.$store.state.apiLink.apiLink
      })
    },
    filters: {
      dateFormat: function (value) {
        console.log(value)
        if (!value) return ''
        var date=new Date(value);
        return date.getFullYear()+'-'+parseInt(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()
      }
    },
    methods:{
      switchReply(event){
        $(".replyText").fadeOut(0)
       /* $(".z-reply").html("回复")*/
        if(event.target.innerHTML=='回复'){
          event.target.parentNode.parentNode.getElementsByClassName("replyText")[0].style.display='block';
          $(".z-reply").html("回复")
          event.target.innerHTML='收起回复'
        }else{
          event.target.parentNode.parentNode.getElementsByClassName("replyText")[0].style.display='none';
          event.target.innerHTML='回复'
        }

      },
      heart (pos) { //点击以后的飘心效果
        console.log(pos)
        var that = this;
        if (!this._hearts) {
          this._hearts = [];
        }
        createHeart(pos);
        gameloop();
        function gameloop() {
          for (var i = 0; i < that._hearts.length; i++) {
            if (that._hearts[i].alpha <= 0) {
              document.body.removeChild(that._hearts[i].el);
              that._hearts.splice(i, 1);
              continue;
            }
            that._hearts[i].y--;
            that._hearts[i].scale += 0.004;
            that._hearts[i].alpha -= 0.013;
            that._hearts[i].el.style.cssText = "left:" + that._hearts[i].x + "px;top:" + that._hearts[i].y + "px;opacity:" + that._hearts[i].alpha + ";transform:scale(" + that._hearts[i].scale + "," + that._hearts[i].scale + ") rotate(45deg);background:" + that._hearts[i].color;
          }
          if (that._hearts && that._hearts.length > 0){
            requestAnimationFrame(gameloop);
          }
        }

        function createHeart(pos) {
          var d = document.createElement("div");
          d.className = "ui-heart";
          that._hearts.push({
            el: d,
            x: pos.pageX - 5,
            y: pos.pageY - 5,
            scale: 1,
            alpha: 1,
            color: randomColor()
          });
          document.body.appendChild(d);
        }

        function randomColor() {
          return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";
        }
      },
      s_sureReply(index){
        if(handle.verifiyLoginStatus(this,router)){
          this.loading1=true;
          var articleUserInfo=JSON.parse(this.$store.state.userInfo.userInfo)
          var data={
            articleId:this.article._id,
            userPhoto:articleUserInfo.photo||"https://only1314.cn/static/images/photo.png",
            userName:articleUserInfo.username,
            text:this.s_text,
            index:index
          }
          this.$http.post(this.apiBase+'/s_reply', data)
            .then(response => {
              this.loading1=false;
              handle.tips_success(this,'回复成功(〃"▽"〃)')
              this.article.comments[index].subComment.push(response.data.data.thisArticle);
              this.$store.commit('setArticle',JSON.stringify(response.data.data.all));
              this.s_text='';
              $(".replyText").fadeOut(0);
              $(".z-reply").html("回复");
              // success callback
            }, response => {
              console.log("no")
            })
        }
      },
      z_sureReply(){
        if(handle.verifiyLoginStatus(this,router)){
          this.loading2=true;
          var articleUserInfo=JSON.parse(this.$store.state.userInfo.userInfo)
          var data={
            articleId:this.article._id,
            userPhoto:articleUserInfo.photo||"https://only1314.cn/static/images/photo.png",
            userName:articleUserInfo.username,
            text:this.z_text
          }
          this.$http.post(this.apiBase+'/z_reply', data)
            .then(response => {
              this.loading2=false;
              handle.tips_success(this,'回复成功(〃"▽"〃)')
              this.article.comments.push(response.data.data.thisArticle);
              this.$store.commit('setArticle',JSON.stringify(response.data.data.all));
              this.z_text='';
              // success callback
            }, response => {
              console.log("no")
            })
        }
      }
    }
  }
</script>
<style scoped>
  .block{display: block!important;}
  .fadeInDown{
    display: block!important;
  }
  .article{
    background-color: #eeeeee;
    border: 1px solid rgba(0,0,0,0);
    position: relative;
  }
  .article-info{
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    position: fixed;
    top: 0px;
    z-index: 10;
    line-height: 70px;
    border-bottom:1px solid #eeeeee;
    box-shadow: 1px 1px 5px #dddddd;
  }
  .websiteName{float:left;width: 200px;border-right: 1px solid #dddddd;font-size: 20px;}
  .websiteInfo{margin-left: 210px;text-align: left}
  .articleBox{
    position: relative;
    z-index: 5;
    width: 1080px;
    margin: 100px auto 50px auto;
    background-color: #ffffff;
    padding: 40px;
    border-radius: 5px;
  }
  .articleBox>.title{
    font-size: 26px;
    margin: 3% 0 0;
    display: block;
    text-align: center;
  }
  .pubtime{
    color: #999;
    font-size: 12px;
    display: block;
    text-align: center;
    margin: 20px 0px;
  }
  .a-img{
    position: relative;
    display: block;
    width: 90%;
    overflow: hidden;
    -webkit-transition: all .24s ease;
    transition: all .24s ease;
    margin: 0 auto;
  }
  .detail{
    font-size: 14px;
    margin: 20px auto;
    color: #333333;
    text-align: left;
  }
  .remarks{
    position: relative;
    background-color: #eee;
    color: #999;
    font-size: 12px;
    display: block;
    margin: 0 0 10px;
    padding: 20px;
    box-shadow: 1px 2px 3px #ddd;
    text-align: left;
  }
  .tips{
    padding: 20px 0px;

  }
  .tips .leftBar{
    float: left;
  }
  .tips .rightBar{
    float: right;
  }
  .tips .leftBar li{
    float: left;
    margin-left: 10px;
    text-align: center;
    font-size: 12px;
    color: #777;
    padding: 0 8px 0 10px;
    max-width: 100px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    background-color: #efefef;
  }
  .tips .rightBar li{
    position: relative;
    float: left;
    margin: 0px 10px;
  }
  .like{cursor: pointer}
  .replyBox{text-align: left;margin-top: 20px}

  .replyList .photo{
    float: left;
  }
  .replyList .photo img{
    width: 65px;
    height: 64px;
    border-radius: 100px;
  }
  .commentInfo{margin-left:74px}
  .commentInfo h3{font-size: 16px}
  .commentInfo span{display: inline-block;margin-right: 10px}
  .commentInfo span.replydate{font-size: 12px;color: #999999}
  .replyName{font-weight: 600}
  .commentInfo span.z-reply{float: right;font-size: 12px;color: #999999;cursor: pointer}
  .commentInfo-detail{font-size: 14px;line-height: 1.3;padding:0px 0px 10px 0px;border-bottom:1px dashed #dddddd;color: #333333 }
  .otherReply{margin: 10px 0px 10px 90px}
  .otherReply-photo{
    float: left;
  }
   .otherReply-photo img{
    width: 30px;
    height:30px;
     border-radius: 50px;
  }
  .otherReply-commentInfo{margin-left:40px}
  .otherReply-commentInfo h3{font-size: 14px}
  .otherReply-commentInfo span{display: inline-block;margin-right: 10px}
  .otherReply-commentInfo span.replydate{font-size: 12px;color: #999999}
  .replyName{font-weight: 600}
  .otherReply-commentInfo-detail{font-size: 12px;line-height: 1.3;padding:0px 0px 10px 0px;border-bottom:1px dashed #dddddd;color: #333333 }
  .replyText{display:none;box-sizing:border-box;width: 100%;border: 1px solid #dddddd;border-radius: 5px;height: 150px;margin: 10px 0;padding: 10px;position: relative}
  .replyText button{cursor:pointer;position: absolute;border: none;background-color: #00a0e9;color: #ffffff;padding: 5px 10px;border-radius: 5px;bottom: 5px;right: 5px;outline: none;}
  .replyText textarea{
    width: 100%;
    height: 100%;
    border: none;
  }
  .comments{
    text-align: left;
    margin: 20px 0 0 0;
  }
  .comments h2{
    font-size: 16px;
    color: #999999;

  }
  .comments textarea{width: 100%;resize: none;outline: none;height: 200px;padding: 10px;border: 1px solid #dddddd;margin: 10px 0px;border-radius: 5px;color: #0B0B0B;}
  .comments button{
    cursor:pointer;border: none;color: #ffffff;padding: 5px 15px;border-radius: 5px;margin-right:20px;text-align: center;
  }
  .comments button.newReply{background-color: #00a0ee;margin-left: 450px;}
  .comments button.reset{background-color: #ff7f0d}
  .replyList{margin-bottom: 20px;}
</style>
