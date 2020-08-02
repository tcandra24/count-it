import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VModal from 'vue-js-modal'
import VMoment from 'vue-moment'
import VueSweetalert2 from 'vue-sweetalert2'
import VueCurrencyFilter from 'vue-currency-filter'
import VueCurrencyInput from 'vue-currency-input'
import Vuelidate from 'vuelidate'

import 'sweetalert2/dist/sweetalert2.min.css'
import './assets/styles/index.css'

Vue.use(VueSweetalert2)
Vue.use(VMoment)
Vue.use(VModal)
Vue.use(VueCurrencyInput)
Vue.use(Vuelidate)
Vue.use(VueCurrencyFilter, {
  symbol: 'Rp',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: ',',
  symbolPosition: 'front',
  symbolSpacing: true
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
