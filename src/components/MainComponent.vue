<template>
    <div id="main">
        <line-chart :height="200" :width="600"></line-chart>
        <line-chart :height="400" :width="600" :data="this.stock"></line-chart>
    </div>
</template>
<script>
import Chart from './ChartComponent';
import axios from 'axios';
export default {
    name:'MainComponent',
    components:{
        'line-chart':Chart
    },
    data(){
        return {
            stock:{}
        }
    },
    methods:{
        async getStock(){
            this.stock = await axios.get('/stock');
            console.log(this.stock);
        }
    },
    mounted(){
        this.getStock();
    }
}
</script>
<style scoped>

</style>