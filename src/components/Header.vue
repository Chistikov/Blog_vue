<template>
  <div class="header">
    <div class="userPanel">
      <div class="topPanel">
        <div class="userAvatar q-mr-md">
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </div>
        <div class="userData q-mr-md q-mr-md">
          <div class="login">@ndev98</div>
          <div class="username">John Doe</div>
        </div>
        <div class="menuIconWrp">
          <q-icon name="ion-menu" />
        </div>
      </div>
      <div class="contactsBlock">
        <a href="#">
          <q-icon name="ion-logo-codepen" />
        </a>
        <a href="#">
          <q-icon name="ion-logo-github" />
        </a>
        <a href="#">
          <q-icon name="ion-logo-instagram" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="sass" scoped>
.header
  height: 350px
  background-image: url('https://unsplash.com/photos/NHOqPc7fBaw/download?force=true')
  background-size: cover
  background-position: 0 47%
  display: flex
  align-items: center
  justify-content: center
  position: relative

.userPanel
  padding: 25px 30px
  border-radius: 10px
  background: #fff

.topPanel
  display: flex

  .userData
    padding-top: 3px

    > .login
        font-size: 16px
        color: #999

    > .username
      font-size: 13px

.contactsBlock
  display: flex
  justify-content: center
  font-size: 14px
  margin-top: 20px
  font-size: 20px

  > a
    color: #ccc
    text-decoration: none
    margin: 0px 4px
    transition: color .2s ease-in-out

    &:hover
      color: #111

.menuIconWrp
  align-items: center
  // background: red
  line-height: 50px
  color: #555

</style>
