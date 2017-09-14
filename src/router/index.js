import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import picker from '@/pages/picker'
import addressPicker from '@/pages/address-picker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/picker',
      name: 'picker',
      component: picker
    },
    {
      path: '/address-picker',
      name: 'addressPicker',
      component: addressPicker
    }
  ]
})
