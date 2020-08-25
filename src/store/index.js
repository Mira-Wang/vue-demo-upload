import Vue from 'vue'
import Vuex from 'vuex'

// vuex模式
import getters from './getters'
import token from './modules/token'
// vuex模式

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bannerList: []
    },
    mutations: {
        // 单store模式
        saveBannerList: (state, bannerList) => {
            console.log('save', state, bannerList)
            state.bannerList = bannerList
        }
         // 单store模式
    },
     // 单store模式
    // getters: {
    //     getBannerList: state => state.bannerList
    // },
     // 单store模式
    actions: {
    },

    // vuex模式
    modules: {
        token
    },

    getters

})