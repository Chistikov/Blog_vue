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
        <router-link to="/post/1" class="postCard">
          <div
            class="lBlock"
            style="background-image: url('https://images.unsplash.com/photo-1442328166075-47fe7153c128?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')"
          >
            <div class="userData">
              <q-avatar size="45px" class="avatar">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
              <div class="rBlock">
                <div class="login">@ndev98</div>
                <div class="username">John Doe</div>
              </div>

              <div>
                <div>
                  <q-chip outline color="orange" text-color="white" icon-right="star">Star</q-chip>
                </div>
                <!-- <div>
                  <q-chip color="primary" text-color="white" icon="bookmark">subscribe</q-chip>
                </div>-->
                <div>
                  <q-chip outline color="primary" text-color="primary" icon="bookmark">1</q-chip>
                </div>
              </div>
            </div>
          </div>
          <div class="postContent">
            <div class="titleBlock">
              <div
                class="title"
              >Lorem, ipsum dolor, ipsum dolor. Lorem, ipsum dolor, ipsum dolor Loolor, ips.</div>
              <div class="dateBlock">
                <q-badge align="middle" color="grey">3 days ago</q-badge>
              </div>
            </div>
            <div class="contentBlock">
              Lorem ipsum dolor sit amet consectetur adipisicing
              lit consectetur adipisicing elit consectetur adipisicing elit
              consectetur adipisicing elit consectetur adipisicing elit
              consectetur adipisicing elit consectetur adipisicing elit
              consectetur adipisicing elitconsectetur adipisicing elit
              consectetur adipisicing elit.
            </div>
            <div class="tags">
              <q-chip size="12px">some</q-chip>
              <q-chip size="12px">fucking</q-chip>
              <q-chip size="12px">tags</q-chip>
            </div>
          </div>
        </router-link>

        <router-link to="/post/2" class="postCard">
          <div
            class="lBlock"
            style="background-image: url('https://images.unsplash.com/photo-1571396616632-30c678b40c04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')"
          >
            <div class="userData">
              <q-avatar size="45px" class="avatar">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
              <div class="rBlock">
                <div class="login">@ndev98</div>
                <div class="username">John Doe</div>
              </div>

              <div>
                <div>
                  <q-chip outline color="orange" text-color="white" icon-right="star">Star</q-chip>
                </div>
                <!-- <div>
                  <q-chip color="primary" text-color="white" icon="bookmark">subscribe</q-chip>
                </div>-->
                <div>
                  <q-chip outline color="primary" text-color="primary" icon="bookmark">1</q-chip>
                </div>
              </div>
            </div>
          </div>
          <div class="postContent">
            <div class="titleBlock">
              <div
                class="title"
              >Lorem, ipsum dolor, ipsum dolor. Lorem, ipsum dolor, ipsum dolor Loolor, ips.</div>
              <div class="dateBlock">
                <q-badge align="middle" color="grey">3 days ago</q-badge>
              </div>
            </div>
            <div class="contentBlock">
              Lorem ipsum dolor sit amet consectetur adipisicing
              lit consectetur adipisicing elit consectetur adipisicing elit
              consectetur adipisicing elit consectetur adipisicing elit
              consectetur adipisicing elit consectetur adipisicing elit
              consectetur adipisicing elitconsectetur adipisicing elit
              consectetur adipisicing elit.
            </div>
            <div class="tags">
              <q-chip size="12px">some</q-chip>
              <q-chip size="12px">fucking</q-chip>
              <q-chip size="12px">tags</q-chip>
            </div>
          </div>
        </router-link>

        <router-link to="/post/3" class="postCard">
          <div
            class="lBlock"
            style="background-image: url('https://images.unsplash.com/photo-1471896281934-0868e62fe49f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')"
          >
            <div class="userData">
              <q-avatar size="45px" class="avatar">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
              </q-avatar>
              <div class="rBlock">
                <div class="login">@ndev98</div>
                <div class="username">John Doe</div>
              </div>

              <div>
                <div>
                  <q-chip outline color="orange" text-color="white" icon-right="star">Star</q-chip>
                </div>
                <!-- <div>
                  <q-chip color="primary" text-color="white" icon="bookmark">subscribe</q-chip>
                </div>-->
                <div>
                  <q-chip outline color="primary" text-color="primary" icon="bookmark">1</q-chip>
                </div>
              </div>
            </div>
          </div>
          <div class="postContent">
            <div class="titleBlock">
              <div
                class="title"
              >Lorem, ipsum dolor, ipsum dolor. Lorem, ipsum dolor, ipsum dolor Loolor, ips.</div>
              <div class="dateBlock">
                <q-badge align="middle" color="grey">3 days ago</q-badge>
              </div>
            </div>
            <div class="contentBlock">
              Lorem ipsum dolor sit amet consectetur adipisicing
              lit consectetur adipisicing elit consectetur adipisicing elit
              consectetur adipisicing elit consectetur adipisicing elit
              consectetur adipisicing elit consectetur adipisicing elit
              consectetur adipisicing elitconsectetur adipisicing elit
              consectetur adipisicing elit.
            </div>
            <div class="tags">
              <q-chip size="12px">some</q-chip>
              <q-chip size="12px">fucking</q-chip>
              <q-chip size="12px">tags</q-chip>
            </div>
          </div>
        </router-link>
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
    border-radius: 10px
    border: 1px solid #fff
    // margin-bottom: 30px
    margin-bottom: 60px
    display: flex
    flex-direction: row
    overflow: hidden
    transition: border .25s
    text-decoration: none
    color: #000
    &:hover
      border: 1px solid #e5e5e5

    .lBlock
      display: flex
      background: linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) )
      background-size: cover
      flex-direction: column
      width: 250px
      align-items: center
      flex-shrink: 0
      text-align: center
      color: #fff
      box-sizing: border-box
      background-position: center
      justify-content: center

      > .userData
        padding: 40px 0px
        width: 100%
        height: 100%
        background-color: rgba(0,0,0,.4)


        > .avatar
          margin-bottom: 10px

        > .rBlock
          margin-bottom: 18px


          > .login
            font-size: 16px
            color: rgba(255,255,255,.55)
            font-weight: 300

          > .username
            font-size: 13px
            color: #fff
            font-weight: 100

    .postContent
      margin: 15px 30px
      display: flex
      width: 100%
      flex-direction: column
      flex-wrap: nowrap
      justify-content: space-between

      > .titleBlock
        display: flex
        justify-content: space-between

        > .title
          font-size: 20px
          margin-bottom: 20px
          font-weight: 500
          line-height: 26px

        > .dateBlock
          padding-top: 4px
          padding-left: 15px

      > .contentBlock
        flex-grow: 1
        color: #444

      > .tags
        width: 100%

</style>
