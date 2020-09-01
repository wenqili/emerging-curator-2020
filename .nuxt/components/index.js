export { default as TheNavigation } from '../../components/TheNavigation.vue'

export const LazyTheNavigation = import('../../components/TheNavigation.vue' /* webpackChunkName: "components/TheNavigation" */).then(c => c.default || c)
