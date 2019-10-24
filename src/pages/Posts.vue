<template>
  <div>
    <!-- данные о постах -->
    <!-- {{ getPostsList }} -->
    <div
      class="row justify-center q-mt-xl q-mb-sm q-pa-md"
      v-if="getPostsList.length > 0"
    >
      <div class="centerContainer col">
        <div class="inputWrp q-mr-sm">
          <q-input
            outlined
            v-model="input"
            :label="$t('search')"
            class="col-md-12"
          />
        </div>
        <div class="selectWrp q-mr-sm col-md-12">
          <q-select
            outlined
            v-model="select"
            :options="Object.keys(getPostsList[0])"
            :label="$t('select category')"
            flat
          >
            <template v-slot:append>
              <q-icon
                v-if="select !== ''"
                name="close"
                @click.stop="select = ''"
                class="cursor-pointer"
              />
            </template>
          </q-select>
        </div>

        <q-btn outline color="primary" :label="$t('search')" />
      </div>
    </div>
    <div class="row justify-center q-mt-xl q-mb-sm q-pa-md">
      <div class="postsWrp">
        <router-link
          :to="`/post/${post.id}`"
          class="postCard"
          v-for="(post, id) in getPostsList"
          v-bind:key="id"
        >
          <div
            class="lBlock"
            :style="{ backgroundImage: `url(${post.bgImage})` }"
          >
            <div class="userData">
              <div
                class="avatar"
                :style="{ backgroundImage: `url(${post.authorData.img})` }"
              ></div>
              <!-- <q-avatar size="45px" class="avatar">
                <img v-bind:src="post.authorData.img" />
              </q-avatar> -->
              <div class="rBlock">
                <div class="login">@{{ post.authorData.login }}</div>
                <div class="username">{{ post.authorData.fullName }}</div>
              </div>

              <div>
                <div>
                  <q-chip outline color="orange" text-color="white" icon="star">
                    1
                  </q-chip>
                </div>
                <!-- <div>
                  <q-chip color="primary" text-color="white" icon="bookmark">subscribe</q-chip>
                </div>-->
                <div>
                  <q-chip
                    outline
                    color="primary"
                    text-color="primary"
                    icon="bookmark"
                  >
                    1
                  </q-chip>
                </div>
              </div>
            </div>
          </div>
          <div class="postContent">
            <div class="titleBlock">
              <div class="title">{{ post.title }}</div>
              <div class="dateBlock">
                <q-badge align="middle" color="grey">
                  {{ formatedDate(post.date) }}
                </q-badge>
              </div>
            </div>
            <div class="contentBlock">{{ post.text }}</div>
            <div class="tags">
              <q-chip size="12px" v-for="(tag, id) in post.tags" v-bind:key="id"
                >#{{ tag }}</q-chip
              >
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      options: ['1', '2'],
      input: '',
      select: '',
    };
  },
  methods: {
    ...mapActions('postsModule', ['fetchAllPosts']),

    formatedDate(unixDate) {
      console.log(unixDate);
      console.log(moment(unixDate).isValid());

      const m = moment(unixDate * 1000);
      if (!m.isValid()) {
        return '';
      }
      moment.locale(this.$i18n.locale);
      return m.fromNow();

      // const formatedDate = new Date(unixDate * 1000);
      // const options = {
      //   era: 'long',
      //   year: 'numeric',
      //   month: 'long',
      //   day: 'numeric',
      //   weekday: 'long',
      //   timezone: 'UTC',
      //   hour: 'numeric',
      //   minute: 'numeric',
      //   second: 'numeric',
      // };

      // return formatedDate.toLocaleString('ru', options);
    },
  },
  mounted() {
    this.fetchAllPosts();
  },
  computed: {
    ...mapGetters('postsModule', ['getPostsList']),

    getSortedPosts() {
      return null;
    },
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
    flex-shrink: 0

  .selectWrp
    flex-grow: 1
    flex-shrink: 0

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

    &:last-child
      margin-bottom: 0

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
          display: inline-block
          height: 45px
          width: 45px
          border-radius: 100%
          margin-bottom: 10px
          background-position: center
          background-size: cover

        > .rBlock
          margin-bottom: 18px


          > .login
            font-size: 16px
            color: rgba(190,190,190,1)
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
