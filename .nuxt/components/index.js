export { default as AppHeader } from '../../components/AppHeader.vue'

export const LazyAppHeader = import('../../components/AppHeader.vue' /* webpackChunkName: "components/AppHeader" */).then(c => c.default || c)
