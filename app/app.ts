import Vue from 'nativescript-vue'
import Home from './components/Home.vue'

import { handleOpenURL, AppURL } from 'nativescript-urlhandler';
 
declare let __DEV__: boolean;

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = !__DEV__

new Vue({
  created() {
    handleOpenURL((appURL: AppURL) => {
      console.log('Got the following appURL', appURL);
    });
  },
  render: (h) => h('frame', [h(Home)]),
}).$start()
