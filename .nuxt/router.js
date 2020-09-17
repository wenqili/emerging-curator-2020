import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _161ef372 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4a1160f4 = () => interopDefault(import('../pages/artists/index.vue' /* webpackChunkName: "pages/artists/index" */))
const _ee880bb6 = () => interopDefault(import('../pages/company/index.vue' /* webpackChunkName: "pages/company/index" */))
const _3aef6d8c = () => interopDefault(import('../pages/index_temp.vue' /* webpackChunkName: "pages/index_temp" */))
const _2315ed56 = () => interopDefault(import('../pages/index_temp2.vue' /* webpackChunkName: "pages/index_temp2" */))
const _60d3b1c0 = () => interopDefault(import('../pages/institution/index.vue' /* webpackChunkName: "pages/institution/index" */))
const _53feedff = () => interopDefault(import('../pages/residency.vue' /* webpackChunkName: "pages/residency" */))
const _6087b008 = () => interopDefault(import('../pages/artists/_artist.vue' /* webpackChunkName: "pages/artists/_artist" */))
const _0808749b = () => interopDefault(import('../pages/institution/_institution.vue' /* webpackChunkName: "pages/institution/_institution" */))
const _35d6ce37 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _161ef372,
    name: "about"
  }, {
    path: "/artists",
    component: _4a1160f4,
    name: "artists"
  }, {
    path: "/company",
    component: _ee880bb6,
    name: "company"
  }, {
    path: "/index_temp",
    component: _3aef6d8c,
    name: "index_temp"
  }, {
    path: "/index_temp2",
    component: _2315ed56,
    name: "index_temp2"
  }, {
    path: "/institution",
    component: _60d3b1c0,
    name: "institution"
  }, {
    path: "/residency",
    component: _53feedff,
    name: "residency"
  }, {
    path: "/artists/:artist",
    component: _6087b008,
    name: "artists-artist"
  }, {
    path: "/institution/:institution",
    component: _0808749b,
    name: "institution-institution"
  }, {
    path: "/",
    component: _35d6ce37,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
