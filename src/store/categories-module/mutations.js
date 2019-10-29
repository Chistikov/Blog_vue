export default {
  setCategoriesList(state, data) {
    state.categoriesList = data;
  },

  destroyData_categoriesList(state) {
    state.categoriesList = [];
  },
};
