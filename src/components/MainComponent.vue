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
            stock:{},
            timeConclude:[]
        }
    },
    methods:{

    },
    async mounted(){
        this.stock = await axios.get('/stock');
        console.log(this.stock.data);
    }
}
</script>
<style scoped>

</style>