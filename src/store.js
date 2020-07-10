import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    // 数据集合
    state: {
        homeData:{
            count:0
        }
    },
    // 存储数据的地方
    mutations: {
        changValue(state,newVal){
            console.log('存')
            state.homeData.count = newVal;
        }
    },
    // 动作发射，这里其实是数据塞。所以用commit就行。相当于对象观察者
    actions: {
        reducePriceAsync: (context, payload) => {
            context.commit('changValue',payload);
        }
    },
    // 可以通过模块化，将上面几个数据进来
    modules: {
    }
})
