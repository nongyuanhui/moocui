import Vue from 'vue'
import App from './App.vue'


// import '../components/css/demo.scss'
// import '../components/css/card.scss'
// import DemoPage from '../components/lib/demo/index'
// import CardPage from '../components/lib/card/index'
// Vue.use(DemoPage)
// Vue.use(CardPage)

import 'nongyuanhui-ui/dist/css/index.css'
import MUI from 'nongyuanhui-ui'
Vue.use( MUI )

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
