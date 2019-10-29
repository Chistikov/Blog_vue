export default {
  setPostsList(state, data) {
    state.postsList = data;
  },

  setSelectedPost(state, post) {
    state.selectedPost = post;
  },

  destroyData_selectedPost(state) {
    state.selectedPost = {};
  },
};
