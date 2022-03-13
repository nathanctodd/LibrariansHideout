import Vue from 'vue'
import App from './App.vue'
import router from './router'
import booklist from './books.js';
import listOfBooks from './listofbooks.js'

Vue.config.productionTip = false


let data = {
  books: booklist,
  explore: listOfBooks,
  checkoutList: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
