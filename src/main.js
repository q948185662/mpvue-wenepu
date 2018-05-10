import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [
      '^pages/home/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0080ff',
      navigationBarTitleText: 'We 东油',
      navigationBarTextStyle: 'black'
    }
  }
}
