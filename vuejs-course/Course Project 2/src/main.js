import Vue from 'vue'
import App from './App.vue'
import AddQuote from './components/AddQuote.vue';
import Header from './components/Header.vue';
import Quote from './components/Quote.vue';
import Quotes from './components/Quotes.vue';

Vue.component('app-add-quote', AddQuote);
Vue.component('app-header', Header);
Vue.component('app-quotes', Quotes);
Vue.component('app-quote', Quote);

export const quoteBus = new Vue({
  data: {
    quotes: []
  },
  methods: {
    addQuote(quote) {
      if(this.quotes.length >= 10){
        return false;
      }else{
        this.quotes.push(quote);
        return true;
      }
    },
    removeQuote(index) {
      this.quotes.splice(index, 1);
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
