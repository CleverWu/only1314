<template>
  <div class="header" v-bind:class="isGrew?'t-999999':'t-ffffff'">
    <!--晴天-->
    <div class="weather_sunny_width" v-if="showWeather==0">
      <div class="shatan_width">
        <div class="weather_sunny_shatan"><i class="weather_sunny_shatan_content"></i></div>
      </div>
      <div class="weather_sunny" v-if="showWeather==0">
        <div class="weather_sunny_dashu"><i class="weather_sunny_dashu"></i></div>
        <div class="weather_sunny_dayun"><i class="weather_sunny_dayun"></i></div>
        <div class="weather_sunny_qiqiu"><i class="weather_sunny_qiqiu_content"></i></div>
        <div class="weather_sunny_shuitong"><i class="weather_sunny_shuitong_content"></i></div>
        <div class="weather_sunny_taiyang"><i class="weather_sunny_taiyang_content"></i></div>
        <div class="weather_sunny_xiaoshu"><i class="weather_sunny_xiaoshu_content"></i></div>
        <div class="weather_sunny_xiaoyu"><i class="weather_sunny_xiaoyu"></i></div>
        <div class="weather_sunny_xiaoyun"><i class="weather_sunny_xiaoyun_content"></i></div>
        <div class="weather_sunny_xiong"><i class="weather_sunny_xiong_content"></i></div>
        <div class="weather_sunny_yingzi"><i class="weather_sunny_yingzi_content"></i></div>
        <div class="weather_sunny_yugan"><i class="weather_sunny_yugan_content"></i></div>
        <div class="weather_sunny_yugou"><i class="weather_sunny_yugou_content"></i></div>
        <div class="weather_sunny_dayu"><i class="weather_sunny_dayu_content"></i></div>
      </div>
    </div>
    <!--多云-->
    <div class="weather_cloudy_width" v-if="showWeather==1">
      <div class="shatan_width">
        <div class="weather_cloudy_shatan"><i class="weather_cloudy_shatan_content"></i></div>
      </div>
      <div class="weather_cloudy">
        <div class="weather_cloudy_xiong"><i class="weather_cloudy_xiong_content"></i></div>
        <div class="weather_cloudy_shu"><i class="weather_cloudy_shu_content"></i></div>
        <div class="weather_cloudy_xiongyingzi"><i class="weather_cloudy_xiongyingzi_content"></i></div>
        <div class="weather_cloudy_shuye1"><i class="weather_cloudy_shuye1_content"></i></div>
        <div class="weather_cloudy_shuye2"><i class="weather_cloudy_shuye2_content"></i></div>
        <div class="weather_cloudy_yun1"><i class="weather_cloudy_yun1_content"></i></div>
        <div class="weather_cloudy_yun2"><i class="weather_cloudy_yun2_content"></i></div>
        <div class="weather_cloudy_yun3"><i class="weather_cloudy_yun3_content"></i></div>
        <div class="weather_cloudy_yun4"><i class="weather_cloudy_yun4_content"></i></div>
        <div class="weather_cloudy_taiyang"><i class="weather_cloudy_taiyang_content"></i></div>
        <div class="weather_cloudy_xiaoniao"><i class="weather_cloudy_xiaoniao_content"></i></div>
      </div>
    </div>
    <!--雨天-->
    <div class="weather_rain_width" v-if="showWeather==2">
      <div class="shatan_width">
        <div class="weather_rain_shatan"><i class="weather_rain_shatan_content"></i></div>
      </div>
      <div class="weather_rain">
        <div class="weather_rain_xiong"><i class="weather_rain_xiong_content"></i></div>
        <div class="weather_rain_shuikeng1"><i class="weather_rain_shuikeng1_content"></i></div>
        <div class="weather_rain_shuikeng2"><i class="weather_rain_shuikeng2_content"></i></div>
        <div class="weather_rain_shuikeng3"><i class="weather_rain_shuikeng3_content"></i></div>
        <div class="weather_rain_wuyun"><i class="weather_rain_wuyun_content"></i></div>
        <div class="weather_rain_yu"><i class="weather_rain_yu_content"></i></div>
        <div class="weather_rain_yusan"><i class="weather_rain_yusan_content"></i></div>
        <div class="weather_rain_yun"><i class="weather_rain_yun_content"></i></div>
      </div>
    </div>
    <!--夜晚-->
    <div class="weather_neight_width" v-if="showWeather==5">
      <div class="shatan_width">
        <div class="weather_neight_shatan"><i class="weather_neight_shatan_content"></i></div>
      </div>
      <div class="weather_neight">
        <div class="weather_neight_caoduo"><i class="weather_neight_caoduo_content"></i></div>
        <div class="weather_neight_liuxing"><i class="weather_neight_liuxing_content"></i></div>
        <div class="weather_neight_paiwu"><i class="weather_neight_paiwu_content"></i></div>
        <div class="weather_neight_yueliang"><i class="weather_neight_yueliang_content"></i></div>
        <div class="weather_neight_z"><i class="weather_neight_z_content"></i></div>
        <div class="weather_neight_zhangpeng"><i class="weather_neight_zhangpeng_content"></i></div>
      </div>
    </div>
    <!--雪天-->
    <div class="weather_snow_width" v-if="showWeather==3">
      <div class="shatan_width">
        <div class="weather_snow_shatan"><i class="weather_snow_shatan_content"></i></div>
      </div>
      <div class="weather_snow">
        <div class="weather_snow_xiong"><i class="weather_snow_xiong_content"></i></div>
        <div class="weather_snow_gouhuo"><i class="weather_snow_gouhuo_content"></i></div>
        <div class="weather_snow_saoba"><i class="weather_snow_saoba_content"></i></div>
        <div class="weather_snow_songshu"><i class="weather_snow_songshu_content"></i></div>
        <div class="weather_snow_xiongyingzi"><i class="weather_snow_xiongyingzi_content"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua1"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua2"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua3"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua4"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua5"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua6"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua7"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua8"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua9"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua10"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua11"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua12"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua13"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua14"></i></div>
        <div class="weather_snow_xuehua"><i class="weather_snow_xuehua_content xuehua15"></i></div>
        <div class="weather_snow_xueren"><i class="weather_snow_xueren_content"></i></div>
        <div class="weather_snow_yun1"><i class="weather_snow_yun1_content"></i></div>
        <div class="weather_snow_yun2"><i class="weather_snow_yun2_content"></i></div>
        <div class="weather_snow_yun3"><i class="weather_snow_yun3_content"></i></div>
      </div>
    </div>
    <!-- 雾霾-->
    <div class="weather_fog_width" v-if="showWeather==4">
      <div class="shatan_width">
        <div class="weather_fog_shatan"><i class="weather_fog_shatan_content"></i></div>
      </div>
      <div class="weather_fog">
        <div class="weather_fog_dengta"><i class="weather_fog_dengta_content"></i></div>
        <div class="weather_fog_fogleft"><i class="weather_fog_fogleft_content"></i></div>
        <div class="weather_fog_fogright"><i class="weather_fog_fogright_content"></i></div>
        <div class="weather_fog_ghost1"><i class="weather_fog_ghost1_content"></i></div>
        <div class="weather_fog_ghost2"><i class="weather_fog_ghost2_content"></i></div>
        <div class="weather_fog_hongqi"><i class="weather_fog_hongqi_content"></i></div>
        <div class="weather_fog_light"><i class="weather_fog_light_content"></i></div>
        <div class="weather_fog_taiyang"><i class="weather_fog_taiyang_content"></i></div>
        <div class="weather_fog_xiong"><i class="weather_fog_xiong_content"></i></div>
        <div class="weather_fog_xiongyingzi"><i class="weather_fog_xiongyingzi_content"></i></div>
        <div class="weather_fog_yun1"><i class="weather_fog_yun1_content"></i></div>
        <div class="weather_fog_yun2"><i class="weather_fog_yun2_content"></i></div>
        <div class="weather_fog_yun3"><i class="weather_fog_yun3_content"></i></div>
        <div class="weather_fog_"><i class="weather_fog_yun3_content"></i></div>
      </div>
    </div>
    <nav class="clearfix" style="background-color:rgba(255,255,255,0)" ref="nav">
      <div class="leftBar" ref="leftBar">ONLY1314</div>
      <div class="header-info">只为，守护您一生一世的求职路...</div>
      <ul class="list-hy animated" style="background-color:rgba(133,214,164,0)" ref="ulnav"
          v-bind:class="[isBanner?'fadeInDown':'fadeOutUp',isBlock]">
        <li>互联网</li>
        <li>财务</li>
        <li>建筑</li>
        <li>金融</li>
        <li>法律</li>
      </ul>
      <div class="relogin clearfix" id="s">
        <p><span v-if="username==' '"><router-link :to="{ name: 'Login'}" v-bind:class="isGrew?'t-999999':'t-ffffff'">登陆/注册</router-link></span>
          <router-link :to="{ path: '/userCenter/welcomeUser'}" v-bind:class="isGrew?'t-999999':'t-ffffff'" v-else><span
            v-html="username"></span></router-link>
        </p>
        <p v-if="username!=' '" class="ml5" @click="loginOut"><i class="iconfont icon-tuichu"></i></p>
        <p class="ml10" v-if="username!=' '"><span><router-link :to="{ name: 'Publish'}"
                                                                v-bind:class="isGrew?'t-999999':'t-ffffff'"><i
          class="iconfont icon-fabu"></i></router-link></span></p>
        <p @click="switchBanner"><i class="iconfont ml20 icon-zhedie" v-bind:class="[isBanner?'showBanner':'']"></i></p>
      </div>
    </nav>
    <section class="indexSearch magictime" v-bind:class="{spaceInDown:isOpen}">
      <i class="iconfont icon-search"></i>
      <input class="mainSearch" v-model="question" type="text" placeholder="请输入想查找的公司...">
      <ul class="indexSearchContent magictime" v-bind:class="{boingInUp:searchList.length>0}"
          v-if="searchList.length>0">
        <li v-for="item in searchList" @click="goArticle(item._id)" class="clearfix"><span class="search-companyName">{{item.companyName}}</span><span
          class="search-author">作者： {{item.author}}</span></li>
      </ul>
      <ul class="indexSearchContent" v-else-if="noAnswer">
        <li class="textCenter noAnswer">没找到哟~~o(╥﹏╥)o</li>
      </ul>
    </section>
    <section class="weather_bar">
      <ul class="clearfix">
        <li>{{weather.name}}</li>
        <li>{{weather.w_text}}</li>
        <li>{{weather.temperature}}℃</li>
      </ul>
    </section>
  </div>
</template>
<script>
  import $ from 'jQuery';
  import handle from '../../CommonJs/CommonJs';
  export default {
    data(){
      return {
        apiBase: '',
        show: false,
        isOpen: false,
        isBanner: false,
        isBlock: '',
        scroll: '',
        isGrew: false,
        question: '',
        searchList: [],
        noAnswer: false,
        showWeather: 365,
        weather: {
          w_text: '',
          text: '',
          name: '',
          temperature: ''
        }
      }
    },
    watch: {
      question: function (newQusetion) {
        /* this.searchQueryIsDirty = true*/
        this.getAnswer(newQusetion)
      }
    },
    mounted: function () {
      this.isOpen = true;
      this.$nextTick(function () {
        this.apiBase = this.$store.state.apiLink.apiLink;
        this.$http.post(this.apiBase + '/apiWeather/getWeather', {})
          .then(response => {
            console.log("xxxxxx", response.data)
            this.weather.name=response.data.data.name;
            this.weather.w_text=response.data.data.w_text;
            this.weather.text=response.data.data.text;
            this.weather.temperature=response.data.data.temperature;
            var weatherCode = response.data.data.code;
            if (weatherCode == 110) {
              this.showWeather = 5;//夜晚
            } else if (weatherCode < 4) {

              this.showWeather = 0;//晴
            } else if (weatherCode < 10) {
              this.showWeather = 1//多云
            } else if (weatherCode < 20) {
              this.showWeather = 2//雨天
            } else if (weatherCode < 26) {
              this.showWeather = 3//雪
            } else if (weatherCode < 36) {
              this.showWeather = 4//雾霾，风
            } else {
              this.showWeather = 1
            }
            if(weatherCode == 110){
              handle.notify_info(this,'',this.weather.text,'yewan_icon','bg_yewan')
            }else{
              handle.notify_info(this,'',this.weather.text,'baitian_icon','bg_baitian')
            }



          }, response => {
            console.log("no")

          })
      })
      /* console.log(JSON.parse(this.$store.state.userInfo.userInfo).username)*/
    },
    created: function () {
      window.addEventListener('scroll', this.nav)
    },
    destroyed () {
      window.removeEventListener('scroll', this.nav)
    },
    methods: {
      clearSearch(){
        this.searchList = [];
        this.noAnswer = false;
        this.question = ''
      },
      goArticle(id){
        this.$store.commit('setArticleId', id);
        this.$router.push({path: '/article'})
      },
      getAnswer: _.debounce(
        function (query) {
          /* if (this.question.indexOf('?') === -1) {
           this.answer = 'Questions usually contain a question mark. ;-)'
           return
           }*/
          var data = {
            queryParam: query
          }
          console.log(query)
          if (query == '') {
            this.noAnswer = false;
            this.searchList = [];
          } else {
            this.$http.post(this.apiBase + '/apiArticles/articleSearchList', data)
              .then(response => {
                console.log(response.data)
                if (response.data.status == -1) {
                  this.noAnswer = true
                }
                this.searchList = response.data.data;
              }, response => {
                console.log("no")

              })
          }
          /* this.answer = 'Thinking...'*/

        },
        // 这是我们为用户停止输入等待的毫秒数
        500
      ),

      loginOut(){
        var _that = this;
        handle.tips_confirm(this, '真的要离开了吗，再给个机会可好？', function () {
          _that.$store.commit('clearUserInfo');
        }, '伤心提示o(╥﹏╥)o')
      },
      switchBanner(){
        this.isBanner = !this.isBanner;
        this.isBlock = 'block'
      },
      nav() {
        this.clearSearch()
        if (this.isBanner == true) {
          this.isBanner = false;
        }
        this.scroll = document.body.scrollTop;
        console.log("滚蛋", this.scroll)
        this.$refs.nav.style.backgroundColor = "rgba(255,255,255," + this.scroll / 400 + ")";
        if (this.scroll > 200) {
          this.$refs.leftBar.style.borderRight = "1px solid #dddddd";
          this.isGrew = true;
        } else {
          this.$refs.leftBar.style.borderRight = "1px solid rgba(0,0,0,0)";
          this.isGrew = false;
        }

        this.$refs.ulnav.style.backgroundColor = "rgba(133,214,164," + this.scroll / 400 + ")";
        console.log(this.scroll / 100)
      }
    },
    computed: {
      username () {
        if (this.$store.state.userInfo.userInfo) {
          return '欢迎回来,' + JSON.parse(this.$store.state.userInfo.userInfo).username
        } else {
          return ' '
        }
      }
    }
  }
</script>
<style scoped>
  .weather_bar{
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 50;
  }
  .weather_bar ul li{
    float: left;
    margin-left: 10px;
  }
  .noAnswer {
    color: #0e0f13;
    font-size: 16px;
  }

  .search-author {
    float: right;
    color: #333333;
  }

  .search-companyName {
    float: left;
    font-size: 15px;
    color: #333333;
  }

  .indexSearchContent {
    width: 100%;
    position: absolute;
    z-index: 1000;
    text-align: left;
    background-color: rgba(255, 255, 255, 0.5);
    color: #999999;
    left: 0%;
    top: 235px;
    box-sizing: border-box;
    box-shadow: 1px 2px 3px #000000;
  }

  .indexSearchContent li {
    cursor: pointer;
    padding: 5px 10px
  }

  .indexSearchContent li:hover {
    background-color: #ff7f0d;
    color: #ffffff;
  }

  .indexSearchContent li:hover span {
    color: #ffffff;
  }

  .block {
    display: block !important;
  }

  .fadeInDown {
    display: block !important;
  }

  .showBanner {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
  }

  .icon-zhedie {
    display: inline-block
  }

  a {
    text-decoration: none;
    color: #ffffff
  }

  a:hover {
    color: #ff4169;
    transform: scale(1.2, 1.2)
  }

  .relogin {
    position: relative;
    float: right;
    height: 60px;
    line-height: 60px;
    margin-right: 20px;
  }

  .header-info {
    text-align: left;
    margin-left: 20px;
    float: left;
    height: 60px;
    line-height: 60px;
    /*  color: #ffffff;*/
  }

  .list-hy {
    display: none;
  }

  .relogin p {
    float: left;
    /*color: #ffffff;*/
    letter-spacing: 2px;
    font-size: 15px;
    cursor: pointer;
  }

  .relogin p:hover {
    color: #ff4169;
  }

  .icon-fabu:hover {
    color: #ff4169;
  }

  #canvas {
    width: 100%;
    height: 400px;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #1a1724;
  }

  .canvas-wrap {
    position: absolute;
    height: 400px;
    width: 100%;
  }

  .icon-tuichu {
    font-size: 18px;
  }

  .t-ffffff {
    color: #ffffff;
  }

  .t-999999 {
    color: #999999;
  }

  .header {
    /*overflow: hidden;*/
    width: 100%;
    height: 480px;
    z-index: 50;
    /*   background: url(/static/images/bg.jpg);*/
    background-size: cover;
    position: relative;
    background-color: #ffffff;
  }

  .header .leftBar {
    width: 150px;
    float: left;
    height: 60px;
    line-height: 60px;
    font-size: 18px;
    /* color: #ffffff;*/

  }

  nav {
    width: 100%;
    position: fixed;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.9);
    height: 60px;
    display: block;
    top: 0
  }

  nav ul {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #85D6A4;
    box-sizing: border-box;
    padding: 0 20px;
    top: 60px
  }

  nav ul li {
    cursor: pointer;
    float: right;
    height: 60px;
    line-height: 60px;
    /* padding: 5px 30px;*/
    color: #ffffff;
    margin: 0px 10px;
    font-size: 16px;
    /*  border: 1px solid #ffffff;*/
  }

  nav ul li:hover {
    color: #ff4169;
    transform: scale(1.2, 1.2);
  }

  .indexSearch {
    width: 50%;
    height: 55px;
    color: #ffffff;
    margin: 0px auto;
    position: relative;
    padding-top: 180px;
    z-index: 100;

  }

  .indexSearch i {
    position: absolute;
    font-size: 35px;
    top: 195px;
    left: 10px;
  }

  .mainSearch {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    line-height: 55px;
    padding: 5px 60px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #ffffff;
    color: #ffffff;
  }

  　:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #dddddd;
    opacity: 1;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #dddddd;
    opacity: 1;
  }

  input:-ms-input-placeholder {
    color: #dddddd;
    opacity: 1;
  }

  input::-webkit-input-placeholder {
    color: #dddddd;
    opacity: 1;
  }
</style>
<style scoped>
  @import '/static/css/weather.css';
</style>
<style>
  .baitian_icon{
    background: url("/static/images/baitian.png") no-repeat;
    background-size: cover;
  }
  .bg_baitian{
    background:#ffffff url("/static/images/bg_baitian.jpg") no-repeat center;
    background-size: cover;

  }
  .bg_baitian .el-notification__content{
    color: #4f4747;
    letter-spacing: 2px;
    font-weight: 600;
  }
  .bg_baitian .el-notification__closeBtn{
    color: #ffffff;
  }
  .yewan_icon{
    background: url("/static/images/yewan.png") no-repeat;
    background-size: cover;
  }
  .bg_yewan{
    background: url("/static/images/bg_yewan.png") no-repeat left top;
    background-size: cover;
  }
  .bg_yewan .el-notification__content{
    color: #ffffff;
    letter-spacing: 2px;
    font-weight: 600;

  }
  .bg_yewan .el-notification__closeBtn{
    color: #ffffff;
    top: 11px;
    right: 13px;
  }
</style>
