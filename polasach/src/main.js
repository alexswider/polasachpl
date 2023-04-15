import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import SocialSharing from 'vue-social-sharing';
import './assets/styles.scss'; // For SCSS
import VueGtag from "vue-gtag";

Vue.use(SocialSharing);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDdbvUUGfTHsbUB-sChAJfqQB2EiEXQV-Q', 
    libraries: 'maps',
  },
});

// Configure vue-gtag
Vue.use(VueGtag, {
  config: {
    id: "G-2621L863YQ", // Replace with your Google Analytics 4 Measurement ID
  },
});
  

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
