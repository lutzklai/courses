import Vue from 'vue'
import App from './App.vue'
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import ServerDetails from './components/ServerDetails.vue';
import Server from './components/Server.vue';

Vue.component('my-header', Header);
Vue.component('my-footer', Footer);
Vue.component('my-server-details', ServerDetails);
Vue.component('my-server', Server);

new Vue({
  el: '#app',
  render: h => h(App)
})
