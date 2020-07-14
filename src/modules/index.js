import Vuex from "vuex";
import Vue from "vue";
import pageModules from '@/modules/pageModules'
Vue.use(Vuex);
export default new Vuex.Store({
    // 可以通过模块化，将上面几个数据进来
    modules: {
        pageModules
    }
})
