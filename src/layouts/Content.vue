<template>
  <div>
    <div class="menuBlock">
      <router-link class="nav-link" to="/">home</router-link>
      <router-link class="nav-link" to="/posts">posts</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
  .menuBlock
    text-align: center
    width: 100%
    margin-top: 60px

    > a
      font-size: 15px
      text-decoration: none
      color: #000
      margin: 0 8px
      text-transform: uppercase
</style>
