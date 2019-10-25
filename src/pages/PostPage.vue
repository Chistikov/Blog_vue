<template>
  <div class="post_wrp">
    {{ getSelectedPost }}
    <div class="dateBlock">
      <q-badge align="middle" color="grey">{{
        formatedDate(getSelectedPost.date)
      }}</q-badge>
    </div>
    <!-- {{ getSelectedPost }} -->
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
</template>

<script>
import moment from 'moment';
import { mapGetters, mapActions } from 'vuex';

export default {
  props: ['post_id'],
  computed: {
    ...mapGetters('postsModule', ['getSelectedPost']),
  },
  methods: {
    ...mapActions('postsModule', ['fetchOnePostById']),

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
  },
  beforeDestroy() {
    // alert('before destroy');
  },
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
