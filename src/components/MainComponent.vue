<template>
    <div id="main">
        <line-chart :height="200" :width="600"></line-chart>
        <line-chart :height="400" :width="600"></line-chart>
    </div>
</template>
<script>
import Chart from './ChartComponent';
export default {
    name:'MainComponent',
    components:{
        'line-chart':Chart
    },
    data(){
        return {
        
        }
    },
    methods:{

    },
    mounted(){
        
    }
}
</script>
<style scoped>

</style>