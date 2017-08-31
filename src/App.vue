<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
  import Header from './components/Header/Header'
  import Content from './components/Content/Content'
  import Footer from './components/Footer/Footer'
export default {
  data() {
    return {
      seller: 'sss'
    }
  },
  components: {
    'app-header': Header,
    'app-content': Content,
    'app-footer':Footer
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
