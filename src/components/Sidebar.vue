<template>
  <div class="sidebar">
    <div class="title">Lorem.</div>
    <div class="menu">
      <router-link class="menu-item" to="/">{{ $t('account') }}</router-link>
      <router-link class="menu-item" to="/">{{ $t('my posts') }}</router-link>
      <router-link class="menu-item" to="/">{{
        $t('create new post')
      }}</router-link>
      <div class="delimiter"></div>
      <div class="menu-item">{{ $t('log in') }}</div>
      <div class="menu-item">{{ $t('log out') }}</div>
    </div>
    <div class="langBlock">
      <span
        class="langEl"
        @click="changeLang('en')"
        v-bind:class="{ colorBlue: $i18n.locale === 'en' }"
        >en</span
      >
      <span
        class="langEl"
        @click="changeLang('ru')"
        v-bind:class="{ colorBlue: $i18n.locale === 'ru' }"
        >ru</span
      >
    </div>
  </div>
</template>

<script>
// import popup from './Popup.js';

export default {
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
    },
  },
};
</script>

<style lang="sass" scoped>
.colorBlue
  color: #444

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
      font-size: 14px
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
    color: #ccc

    > .langEl
        margin: 0px 7px
        transition: color .2s
        cursor: pointer
</style>
