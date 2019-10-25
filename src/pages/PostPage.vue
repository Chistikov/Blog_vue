<template>
  <div>
    <div class="loaderWrp" v-if="Object.keys(getSelectedPost).length === 0">
      <q-spinner color="primary" size="3em" />
    </div>
    <div class="post_wrp" v-else>
      <div class="authorBlockWrp">
        <div class="authorBlock">
          <div
            class="avatar"
            :style="{
              backgroundImage: `url(${getSelectedPost.authorData.img})`,
            }"
          ></div>
        </div>
      </div>
      <div class="dateBlock">
        <q-badge align="middle" color="grey">{{
          formatedDate(getSelectedPost.date)
        }}</q-badge>
      </div>
      <div class="title">
        {{ getSelectedPost.title }}
      </div>
      <div class="text">
        {{ getSelectedPost.text }}
      </div>
      <div class="tags">
        <q-chip size="12px" v-for="(tag, id) in getSelectedPost.tags" :key="id">
          #{{ tag }}
        </q-chip>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  props: ['post_id'],
  computed: {
    ...mapGetters('postsModule', ['getSelectedPost']),
  },
  methods: {
    ...mapActions('postsModule', ['fetchOnePostById']),
    ...mapMutations('postsModule', ['destroyData_setSelectedPost']),

    formatedDate(unixDate) {
      const m = moment(unixDate * 1000);
      if (!m.isValid()) {
        return '';
      }
      moment.locale(this.$i18n.localeg);
      return m.format('D.M.YYYY');
    },
  },
  created() {
    this.fetchOnePostById(this.post_id);
    console.log(this);
  },
  beforeDestroy() {
    this.destroyData_setSelectedPost();
  },
};
</script>

<style lang="sass" scoped>
.loaderWrp
  display: flex
  max-width: 960px
  margin: auto
  margin-top: 64px
  padding: 15px

  > svg
    margin: auto

.post_wrp
  max-width: 960px
  margin: auto
  margin-top: 64px
  padding: 15px

  > .authorBlockWrp
    text-align: center

    > .authorBlock
      display: inline-block
      padding: 30px
      display: flex
      background: pink
      justify-content: center

      > .avatar
        width: 40px
        height: 40px
        background-size: cover
        background-position: center
        border-radius: 100%

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
