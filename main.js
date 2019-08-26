import Vue from 'vue'
import App from './App'

import pageHead from './components/page-head.vue'
import pageFoot from './components/page-foot.vue'
import uLink from '@/components/uLink.vue'
import store from './store'
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
import uniPopup from '@/components/uni-popup/uni-popup.vue'
import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
// 添加统计
// const Stat = require('./statistics/dcloud-stat');
// Stat.init(Vue);

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$backgroundAudioData = {
	playing: false,
	playTime: 0,
	formatedPlayTime: '00:00:00'
}

Vue.component('page-head', pageHead)
Vue.component('page-foot', pageFoot)
Vue.component('uLink', uLink)
Vue.component('uniList', uniList)
Vue.component('uniListItem', uniListItem)
Vue.component('uniPopup', uniPopup)
Vue.component('uniSwipeAction', uniSwipeAction)

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
