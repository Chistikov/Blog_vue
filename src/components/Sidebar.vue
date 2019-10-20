<template>
  <div class="sidebar">sidebar</div>
</template>

<script>
export default {};
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
</style>
