<template>
    <div id="main">
        <line-chart :height="height" :width="width" v-if="json.info != null" :datas="this.chartDatas"></line-chart>
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
            json:{},
            chartDatas:{},
            width:600,
            height:400
        }
    },
    methods:{

    },
    watch:{

    },
    async mounted(){
        this.json = (await axios.get('/stock')).data;
        console.log(this.json);
        let moneyData = this.json.dailyStockList.map(e=> e['_attributes'].day_EndPrice.parseNum()).reverse();
        this.chartDatas = {
            max : this.json.info.High52,
            min : this.json.info.LowJuka,
            labels : this.json.dailyStockList.map(e=> e['_attributes'].day_Date).reverse(),
            dataset:[
                {
                    label: this.json.info.JongName,
                    data: moneyData,
                    backgroundColor: 'rgba(110, 136, 232, 0.7)',
                    borderColor: 'rgba(110, 136, 232, 1)',
                    borderWidth: 1
                }
            ]
        }
    }
}
</script>
<style scoped>

</style>