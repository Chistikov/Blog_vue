<template>
  <div class="wrapper">
    <Header></Header>
    <div class="content">
      <Content></Content>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header';
import Content from './Content';
import Footer from '../components/Footer';

export default {
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  components: { Header, Content, Footer },
};
</script>

<style lang="sass" scoped>
.wrapper
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between

.content
  align-items: stretch
  flex-grow: 1

.footer
  height: 80px
  line-height: 80px
  text-align: center


</style>
