<template>
  <div>
    <div class="row justify-center q-mt-xl q-mb-sm q-pa-md">
      <div class="centerContainer col">
        <div class="inputWrp q-mr-sm">
          <q-input outlined v-model="input" label="search..." class="col-md-12" />
        </div>
        <div class="selectWrp q-mr-sm col-md-12">
          <q-select outlined v-model="select" :options="options" label="select category" />
        </div>

        <q-btn outline color="primary" label="search" />
      </div>
    </div>

    <div class="row justify-center q-mt-xl q-mb-sm q-pa-md">
      <div class="postsWrp">
        <div class="postCard">
          <div
            class="userData"
            style="backgroudImage: url('https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80')"
          >
            <q-avatar size="45px" class="avatar">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <div class="rBlock">
              <div class="login">@ndev98</div>
              <div class="username">John Doe</div>
            </div>

            <!-- <q-chip dense color="orange" text-color="white" icon-right="star">Star</q-chip> -->
            <div>
              <q-chip outline color="orange" text-color="white" icon-right="star">Star</q-chip>
              <q-chip color="primary" text-color="white" icon="bookmark">subscribe</q-chip>
            </div>
          </div>
          <div class="tags"></div>
          <div class="postContent q-mt-lx">
            <div class="title">Lorem, ipsum dolor.</div>Lorem ipsum, dolor sit amet
            consectetur adipisicing
            elit. Odio illo in quaerat repudiandae nam fugit iusto architecto?
            Ut, cupiditate doloremque! Dignissimos ullam pariatur illo! Cum cumque quidem
            perferendis animi molestiae maiores eaque nisi minus. Nisi, officia? Voluptas,
            doloremque doloribus sapiente asperiores a delectus.
          </div>
        </div>
      </div>

      <div class="postsWrp">
        <div class="postCard">
          <div
            class="userData"
            style="backgroudImage: url('https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80')"
          >
            <q-avatar size="45px" class="avatar">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <div class="rBlock">
              <div class="login">@ndev98</div>
              <div class="username">John Doe</div>
            </div>

            <div>
              <q-chip outline color="orange" text-color="white" icon-right="star">Star</q-chip>
              <q-chip color="primary" text-color="white" icon="bookmark">subscribe</q-chip>
            </div>
          </div>
          <div class="tags"></div>
          <div class="postContent q-mt-lx">
            <div class="title">Lorem, ipsum dolor.</div>Lorem ipsum, dolor sit amet
            consectetur adipisicing
            elit. Odio illo in quaerat repudiandae nam fugit iusto architecto?
            Ut, cupiditate doloremque! Dignissimos ullam pariatur illo! Cum cumque quidem
            perferendis animi molestiae maiores eaque nisi minus. Nisi, officia? Voluptas,
            doloremque doloribus sapiente asperiores a delectus.
          </div>
        </div>
      </div>

      <div class="postsWrp">
        <div class="postCard">
          <div
            class="userData"
            style="backgroudImage: url('https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80')"
          >
            <q-avatar size="45px" class="avatar">
              <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <div class="rBlock">
              <div class="login">@ndev98</div>
              <div class="username">John Doe</div>
            </div>

            <!-- <q-chip dense color="orange" text-color="white" icon-right="star">Star</q-chip> -->
            <div>
              <q-chip outline color="orange" text-color="white" icon-right="star">Star</q-chip>
              <q-chip color="primary" text-color="white" icon="bookmark">subscribe</q-chip>
            </div>
          </div>
          <div class="tags"></div>
          <div class="postContent q-mt-lx">
            <div class="title">Lorem, ipsum dolor.</div>Lorem ipsum, dolor sit amet
            consectetur adipisicing
            elit. Odio illo in quaerat repudiandae nam fugit iusto architecto?
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['1', '2'],
      input: '',
      select: '',
    };
  },
};
</script>

<style lang="sass" scoped>
.centerContainer
  max-width: 960px
  display: block
  display: flex
  flex-wrap: wrap

  .inputWrp
    flex-grow: 1

  .selectWrp
    flex-grow: 1

.postsWrp
  width: 960px
  max-width: 960px
  display: flex
  flex-direction: column

  .postCard
    width: 100%
    // background: green
    border-radius: 10px
    border: 1px solid #ccc
    margin-bottom: 20px
    display: flex
    flex-direction: row
    overflow: hidden

    .userData
      display: flex
      // background: url('https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80')
      background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80')
      background-size: cover
      padding: 50px
      flex-direction: column
      width: 250px
      align-items: center
      flex-shrink: 0
      text-align: center
      color: #fff
      box-sizing: border-box
      background-position: center
      justify-content: center


      > .avatar
        margin-bottom: 10px

      > .rBlock
        margin-bottom: 18px


        > .login
          font-size: 16px
          color: #fff

        > .username
          font-size: 13px
          color: #fff
          font-weight: 300

      > .subBtn
        width: 20px
        height: 20px
        background-color: red


    .tags

    .postContent
      margin: 30px 30px

      > .title
        font-size: 20px
        margin-bottom: 20px


</style>
