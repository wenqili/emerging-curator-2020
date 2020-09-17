export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as ArtistsDataViz } from '../../components/ArtistsDataViz.vue'
export { default as Canvas } from '../../components/Canvas.vue'
export { default as Menu } from '../../components/Menu.vue'
export { default as MenuSection } from '../../components/MenuSection.vue'
export { default as NaviBar } from '../../components/NaviBar.vue'
export { default as Slide } from '../../components/Slide.vue'
export { default as SubNavi } from '../../components/SubNavi.vue'
export { default as TextBlock } from '../../components/TextBlock.vue'

export const LazyAppHeader = import('../../components/AppHeader.vue' /* webpackChunkName: "components/AppHeader" */).then(c => c.default || c)
export const LazyArtistsDataViz = import('../../components/ArtistsDataViz.vue' /* webpackChunkName: "components/ArtistsDataViz" */).then(c => c.default || c)
export const LazyCanvas = import('../../components/Canvas.vue' /* webpackChunkName: "components/Canvas" */).then(c => c.default || c)
export const LazyMenu = import('../../components/Menu.vue' /* webpackChunkName: "components/Menu" */).then(c => c.default || c)
export const LazyMenuSection = import('../../components/MenuSection.vue' /* webpackChunkName: "components/MenuSection" */).then(c => c.default || c)
export const LazyNaviBar = import('../../components/NaviBar.vue' /* webpackChunkName: "components/NaviBar" */).then(c => c.default || c)
export const LazySlide = import('../../components/Slide.vue' /* webpackChunkName: "components/Slide" */).then(c => c.default || c)
export const LazySubNavi = import('../../components/SubNavi.vue' /* webpackChunkName: "components/SubNavi" */).then(c => c.default || c)
export const LazyTextBlock = import('../../components/TextBlock.vue' /* webpackChunkName: "components/TextBlock" */).then(c => c.default || c)
