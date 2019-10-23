import axios from 'axios';

export default {
  fetchAllPosts(context) {
    axios.get('http://localhost:3000/posts').then((response) => {
      console.log(response.data);
      context.commit('setPostsList', response);
    });
  },
};
