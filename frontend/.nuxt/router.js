import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ebe5fa4 = () => interopDefault(import('..\\pages\\books\\index.vue' /* webpackChunkName: "pages/books/index" */))
const _7648c84e = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _86bd7058 = () => interopDefault(import('..\\pages\\students.vue' /* webpackChunkName: "pages/students" */))
const _0620460c = () => interopDefault(import('..\\pages\\students\\Students.vue' /* webpackChunkName: "pages/students/Students" */))
const _29e60c16 = () => interopDefault(import('..\\pages\\students\\_id.vue' /* webpackChunkName: "pages/students/_id" */))
const _2c7a0946 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/books",
    component: _5ebe5fa4,
    name: "books"
  }, {
    path: "/inspire",
    component: _7648c84e,
    name: "inspire"
  }, {
    path: "/students",
    component: _86bd7058,
    name: "students",
    children: [{
      path: "Students",
      component: _0620460c,
      name: "students-Students"
    }, {
      path: ":id?",
      component: _29e60c16,
      name: "students-id"
    }]
  }, {
    path: "/",
    component: _2c7a0946,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
