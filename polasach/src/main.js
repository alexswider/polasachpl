import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import SocialSharing from 'vue-social-sharing';
import './assets/styles.scss'; // For SCSS

Vue.use(SocialSharing);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDdbvUUGfTHsbUB-sChAJfqQB2EiEXQV-Q', 
    libraries: 'maps',
  },
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
