import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _154df549 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _74289bcb = () => interopDefault(import('../pages/artists/index.vue' /* webpackChunkName: "pages/artists/index" */))
const _9a599608 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _234b4e6f = () => interopDefault(import('../pages/database.vue' /* webpackChunkName: "pages/database" */))
const _53561e77 = () => interopDefault(import('../pages/institution/index.vue' /* webpackChunkName: "pages/institution/index" */))
const _61bb911f = () => interopDefault(import('../pages/artists/_artist.vue' /* webpackChunkName: "pages/artists/_artist" */))
const _3505d00e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _154df549,
    name: "about"
  }, {
    path: "/artists",
    component: _74289bcb,
    name: "artists"
  }, {
    path: "/company",
    component: _9a599608,
    name: "company"
  }, {
    path: "/database",
    component: _234b4e6f,
    name: "database"
  }, {
    path: "/institution",
    component: _53561e77,
    name: "institution"
  }, {
    path: "/artists/:artist",
    component: _61bb911f,
    name: "artists-artist"
  }, {
    path: "/",
    component: _3505d00e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
