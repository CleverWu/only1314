<template>
  <div  v-loading.fullscreen.lock="fullscreenLoading">
    <div>
      <app-header></app-header>
      <div class="baktop clearfix">
        <img class="animal" src="/static/images/animal.png">
      </div>
      <app-content></app-content>
      <app-footer></app-footer>
    </div>
  </div>
</template>
<script>
/*  import Header from '../Header/Header'
  import Content from '../Content/Content'
  import Footer from '../Footer/Footer'*/
  const Header= resolve=> {
    require(['../Header/Header.vue'], resolve)
  };
  const Content= resolve=> {
    require(['../Content/Content.vue'], resolve)
  };
  const Footer= resolve=> {
    require(['../Footer/Footer.vue'], resolve)
  };
  export default {
    data() {
      return {
        seller: 'sss',
        fullscreenLoading: true

      }
    },
    components: {
      'app-header': Header,
      'app-content': Content,
      'app-footer':Footer
    },
    created:function () {
      this.fullscreenLoading=false
    }

  }
</script>
<style scoped>
  .baktop{
    width: 100%;
    height: 60px;
    background: url(/static/images/leaves.png) repeat-x;
    background-size: auto 100%;
    background-position: -2% 0%;
    margin-top: 10px;
    position: relative;
  }
  .animal{
    position: absolute;
    height: 100%;
    right: 100px;
    bottom: 5px;
  }
</style>
