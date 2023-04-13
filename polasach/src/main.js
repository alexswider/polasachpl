import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import SocialSharing from 'vue-social-sharing';

Vue.use(SocialSharing);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDdbvUUGfTHsbUB-sChAJfqQB2EiEXQV-Q', 
    libraries: 'places',
  },
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
