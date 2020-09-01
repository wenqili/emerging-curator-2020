import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _173cfcc9 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _2a6516ef = () => interopDefault(import('../pages/database.vue' /* webpackChunkName: "pages/database" */))
const _36f4d78e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _173cfcc9,
    name: "about"
  }, {
    path: "/database",
    component: _2a6516ef,
    name: "database"
  }, {
    path: "/",
    component: _36f4d78e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
