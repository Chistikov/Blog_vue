<template>
  <div class="categoriesWrp">
    <router-link
      :to="`/category/${category.categoryRoute}`"
      v-for="(category, id) in getСategoriesList"
      v-bind:key="id"
      class="categoryBlock"
      :style="{
        backgroundImage: `url(${category.categoryImg})`,
      }"
    >
      <div class="categoryTitle">{{ category.categoryTitle }}</div>
      <div class="postsCounter">{{ category.categoryCounter }}</div>
    </router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions('categoriesModule', ['fetchAllCategories']),
    // ...mapActions('fetchAllCategories'),
  },
  computed: {
    ...mapGetters('categoriesModule', ['getСategoriesList']),
  },
  created() {
    this.fetchAllCategories();
  },
};
</script>

<style lang="sass" scoped>
.categoriesWrp
  display: flex
  flex-wrap: wrap
  max-width: 960px
  margin: auto
  margin-top: 64px
  padding: 15px
  justify-content: center
  margin-top: 44px


  > .categoryBlock
    flex-grow: 1
    max-width: 430px
    height: 200px
    background: #ccc
    margin: 20px
    flex-basis: 180px
    min-width: 150px
    vertical-align: bottom
    display: flex
    flex-direction: column
    justify-content: flex-end
    align-items: center
    border-radius: 10px
    background-size: auto 100%
    background-repeat: no-repeat
    background-position: center
    text-decoration: none
    position: relative
    overflow: hidden
    transition: background-size 0.3s ease-in-out

    &:after
      position: absolute
      top: 0px
      left: 0px
      content: ""
      display: block
      width: 100%
      height: 100%
      background: linear-gradient(to top, rgba(0,0,0,.15) , rgba(0,0,0,0))
      transition: opacity .3s ease-in-out

    &:hover
      background-size: auto 105%

      &:after
        opacity: 0

    > .categoryTitle
      padding: 7px 14px
      background: #fff
      border-radius: 7px
      color: #111
      text-transform: uppercase
      font-size: 13px
      z-index: 1

    > .postsCounter
      padding: 3px 6px
      background: #fff
      border-radius: 7px
      margin-top: 12px
      font-size: 12px
      color: #666
      margin-bottom: 30px
      z-index: 1
</style>
