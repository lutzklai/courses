import Vue from 'vue'
import App from './App.vue'
import Server from './components/Server/Server.vue';

Vue.component('app-server', Server);

export const eventBus = new Vue({
  methods: {
    changeServerStatus(server, status){
      server.status = status;

      let newServer = JSON.parse(JSON.stringify(server));

      this.$emit('serverWasChanged', newServer);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
