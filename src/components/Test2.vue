<template>
    <div class="test">
        <h1>This is an about page</h1>
        <div>{{this.count}}</div>
        <button @click="renderCount">+</button>
        <button @click="getCount">get</button>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
    </div>
</template>
<script lang="js">
    import {Button,Row} from 'element-ui';
    import Vue from "vue";
    Vue.use(Button);
    Vue.use(Row);

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