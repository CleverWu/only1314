<template>
  <div>
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import Header from '../Header/Header'
  import Content from '../Content/Content'
  import Footer from '../Footer/Footer'
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
