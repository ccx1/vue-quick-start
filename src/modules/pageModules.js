const pageModules = {
    // 数据集合
    state: {
        count:0,
        aaa:'dfads'
    },
    // 存储数据的地方
    mutations: {
        changValue(state,newVal){
            console.log('存')
            state.count = newVal;
        }
    },
    // 动作发射，这里其实是数据塞。所以用commit就行。相当于对象观察者
    actions: {
        reducePriceAsync: (context, payload) => {
            context.commit('changValue',payload);
        }
    },
}
export default pageModules;