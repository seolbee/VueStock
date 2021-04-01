<template>
    <div class="main">
        <line-chart height="400" width="600"></line-chart>
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