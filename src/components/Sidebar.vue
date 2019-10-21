<template>
  <div class="sidebar">
    <div class="title">Lorem.</div>
    <div class="menu">
      <router-link class="menu-item" to="/">{{ $t('account') }}</router-link>
      <router-link class="menu-item" to="/">{{ $t('my posts') }}</router-link>
      <router-link class="menu-item" to="/">{{ $t('create new post') }}</router-link>
      <div class="delimiter"></div>
      <router-link class="menu-item" to="/">{{ $t('log out') }}</router-link>
    </div>
    <div class="langBlock">
      <!-- {{$t("success")}} fasf -->
      <span class="langEl" @click="changeLang('en')">en</span>
      <span class="langEl" @click="changeLang('ru')">ru</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      console.log(this.$i18n.locale);
    },
  },
};
</script>

<style lang="sass" scoped>
.sidebar
  position: fixed
  top: 0
  left: 0
  z-index: 100
  width: 300px
  height: 100vh
  background-color: #fff
  transform: translateX(0%)
  transition: transform .2s
  display: flex
  flex-direction: column
  justify-content: space-between

  > .title
    text-align: center
    font-size: 30px
    font-weight: 500
    margin-top: 45px

  > .menu
    padding-top: 40px
    flex-grow: 1

    > .menu-item
      display: block
      text-align: center
      font-size: 15px
      text-decoration: none
      text-transform: uppercase
      color: #444
      height: 35px
      line-height: 35px

    > .delimiter
      height: 1px
      width: 80%
      background-color: #eee
      margin: 20px auto

  > .langBlock
    margin-bottom: 35px
    text-align: center

    > .langEl
        margin: 0px 7px
        color: #666
</style>
