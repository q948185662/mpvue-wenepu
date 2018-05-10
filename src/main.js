import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [
      '^pages/home/main',
      'pages/more/main',
      'pages/bind/main'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#0080ff',
      navigationBarTitleText: 'We 东油',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      borderStyle: 'black',
      selectedColor: '#0080ff',
      backgroundColor: '#fff',
      list: [
        {
          pagePath: 'pages/home/main',
          iconPath: 'static/images/tab-bar/home.png',
          selectedIconPath: 'static/images/tab-bar/selected-home.png',
          text: '首页'
        },
        {
          pagePath: 'pages/more/main',
          iconPath: 'static/images/tab-bar/more.png',
          selectedIconPath: 'static/images/tab-bar/selected-more.png',
          text: '更多'
        }
      ]
    }
  }
}
