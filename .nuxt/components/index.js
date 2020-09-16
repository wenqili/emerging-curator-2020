export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as Canvas } from '../../components/Canvas.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as NaviBar } from '../../components/NaviBar.vue'
export { default as SubNavi } from '../../components/SubNavi.vue'
export { default as WaffleChart } from '../../components/WaffleChart.vue'

export const LazyAppHeader = import('../../components/AppHeader.vue' /* webpackChunkName: "components/AppHeader" */).then(c => c.default || c)
export const LazyCanvas = import('../../components/Canvas.vue' /* webpackChunkName: "components/Canvas" */).then(c => c.default || c)
export const LazyMenu = import('../../components/Menu.vue' /* webpackChunkName: "components/Menu" */).then(c => c.default || c)
export const LazyNaviBar = import('../../components/NaviBar.vue' /* webpackChunkName: "components/NaviBar" */).then(c => c.default || c)
export const LazySubNavi = import('../../components/SubNavi.vue' /* webpackChunkName: "components/SubNavi" */).then(c => c.default || c)
export const LazyWaffleChart = import('../../components/WaffleChart.vue' /* webpackChunkName: "components/WaffleChart" */).then(c => c.default || c)
