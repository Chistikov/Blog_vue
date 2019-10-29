import axios from 'axios';

export default {
  fetchAllCategories(context) {
    axios.get('http://localhost:3000/categories').then((response) => {
      context.commit('setCategoriesList', response.data);
    });
  },
};
