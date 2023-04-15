import Vue from 'vue';
import App from './App.vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import SocialSharing from 'vue-social-sharing';
import './assets/styles.scss'; // For SCSS
import VueAnalytics from "vue-analytics";

Vue.use(SocialSharing);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDdbvUUGfTHsbUB-sChAJfqQB2EiEXQV-Q', 
    libraries: 'maps',
  },
});

// Configure vue-analytics
Vue.use(VueAnalytics, {
  id: "UA-2621L863YQ", // Replace with your Google Analytics tracking ID
  checkDuplicatedScript: true,
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
