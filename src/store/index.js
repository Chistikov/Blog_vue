import Vue from 'vue';
import Vuex from 'vuex';

import postsModule from './posts-module';

window.Vuex = Vuex;
Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // так не работало
      postsModule,

      // так попробовал сделать, заработало
      // postsModule: {
      //   getters: {
      //     getPostsList(state) {
      //       console.log(state.postsList);
      //       return state.postsList;
      //     },
      //   },
      //   mutations: {},
      //   actions: {},
      //   state: {
      //     postsList: [1, 'some fucking string'],
      //     dataFromStore: '========================12335434654654645345gdfgasfasldj',
      //   },
      // },
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  return Store;
}
