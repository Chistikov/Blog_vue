export default {
  setPostsList(state, data) {
    state.postsList = data;
  },

  setSelectedPost(state, post) {
    state.selectedPost = post;
  },
};
