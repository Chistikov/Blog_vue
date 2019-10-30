import Vue from 'vue';
import Vuex from 'vuex';

import postsModule from './posts-module';
import categoriesModule from './categories-module';
import authModule from './auth-module';

window.Vuex = Vuex;
Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      postsModule,
      categoriesModule,
      authModule,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  return Store;
}
