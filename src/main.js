import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import './public-path'

Vue.config.productionTip = false
Vue.use(VueRouter)

let instance = null
let router = null

function render(props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/vuethree' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if(!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('vue app three bootstraped')
}

export async function mount(props) {
  console.log('vue app three mount')
  render(props)
}

export async function unmount() {
  console.log('vue app three unmount')
  instance.$destroy()
  instance = null
  router = null
}
