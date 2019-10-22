<template>
  <div class="wrapper">
    <div class="pulseBtn" @click="toggleSidebar">
      <PulseButton></PulseButton>
    </div>
    <Sidebar v-bind:class="{ hideSidebar: sideBarIsHidden }"></Sidebar>
    <div
      class="mainPage"
      v-bind:class="{ shiftPage: !sideBarIsHidden, dimmed:!sideBarIsHidden }"
      @click="hideSidebar"
    >
      <Header></Header>
      <div class="content">
        <Content></Content>
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Content from './Content';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import PulseButton from '../components/PulseButton';

export default {
  data() {
    return {
      leftDrawerOpen: false,
      sideBarIsHidden: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sideBarIsHidden = !this.sideBarIsHidden;
    },
    hideSidebar() {
      this.sideBarIsHidden = true;
    },
  },
  components: {
    Header,
    Content,
    Footer,
    Sidebar,
    PulseButton,
  },
};
</script>

<style lang="sass" scoped>
.shiftPage
  transform: translateX(170px)
  filter:  saturate(65%)

.hideSidebar
  transform: translateX(-100%)

.wrapper
  overflow: hidden

  .pulseBtn
    position: fixed
    z-index: 1000
    top: 10px
    left: 10px

  .mainPage
    min-height: 100vh
    display: flex
    flex-direction: column
    justify-content: space-between
    transition: transform .2s, filter .25s


  .content
    align-items: stretch
    flex-grow: 1
</style>
