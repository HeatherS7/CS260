import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bookSeries from './bookList'

let data = {
  allBooks: bookSeries,
  selectedBook: null
}

Vue.config.productionTip = false

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
