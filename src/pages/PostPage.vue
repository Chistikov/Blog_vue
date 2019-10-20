<template>
  <div class="post_wrp">
    <div class="dateBlock">
      <q-badge align="middle" color="grey">10/20/2019</q-badge>
    </div>
    <div
      class="title"
    >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, modi! post {{post_id}}</div>
    <div class="text">
      Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Numquam optio corrupti earum incidunt quis necessitatibus aspernatur
      tempora doloremque accusantium tempore consectetur,
      corporis at veniam, amet unde debitis nostrum beatae illo.
      Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Numquam optio corrupti earum incidunt quis necessitatibus aspernatur
      tempora doloremque accusantium tempore consectetur,
      corporis at veniam, amet unde debitis nostrum beatae illo.
      Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Numquam optio corrupti earum incidunt quis necessitatibus aspernatur
      tempora doloremque accusantium tempore consectetur,
      corporis at veniam, amet unde debitis nostrum beatae illo.
      Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Numquam optio corrupti earum incidunt quis necessitatibus aspernatur
      tempora doloremque accusantium tempore consectetur,
      corporis at veniam, amet unde debitis nostrum beatae illo.
    </div>
    <div class="tags">
      <q-chip size="12px">#some</q-chip>
      <q-chip size="12px">#fucking</q-chip>
      <q-chip size="12px">#tags</q-chip>
    </div>
  </div>
</template>

<script>
export default {
  props: ['post_id'],
};
</script>

<style lang="sass" scoped>
.post_wrp
  max-width: 960px
  margin: auto
  margin-top: 64px
  padding: 15px

  > .dateBlock
    text-align: center
    margin-bottom: 50px

  > .title
    font-size: 20px
    font-weight: 500
    line-height: 26px
    margin-bottom: 25px

  > .text
    line-height: 25px
    text-align: justify
    color: #444

  > .tags
    margin-top: 40px
</style>
