<template>
    <div class="test">
        <h1>This is an about page</h1>
        <div>{{this.count}}</div>
        <button @click="renderCount">+</button>
        <button @click="getCount">get</button>
    </div>
</template>
<script lang="js">
    export default {
        data() {
            return {
                count: this.$store.state.pageModules.count
            }
        },
        // 对应观察对象
        watch: {
            watchCountChange(value){
                this.count = value;
            }
        },
        //监视对象需要返回的数据处理
        computed: {
            watchCountChange() {
                return this.$store.state.pageModules.count
            }
        },
        methods: {
            getCount() {
                console.log('测试值', this.$store.state.pageModules.count);
            },
            renderCount() {
                this.count++;
                //渲染到store里面去
                this.$store.dispatch('reducePriceAsync', this.count);
            }
        }
    }
</script>