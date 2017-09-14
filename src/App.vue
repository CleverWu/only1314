<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    mounted () {
      const script = document.createElement('script')
      script.src = 'https://s22.cnzz.com/z_stat.php?id=1264426330&web_id=1264426330'
      script.language = 'JavaScript'
      document.body.appendChild(script)
    },
    watch: {
      '$route' () {
        if (window._czc) {
          let location = window.location
          let contentUrl = location.pathname + location.hash
          let refererUrl = '/'
          window._czc.push(['_trackPageview', contentUrl, refererUrl])
        }
      }
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
