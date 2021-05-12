<template>
    <div id="main">
        <div class="content">
            <div class="chart-box">
                <!-- <div class="small-chart">
                    <line-chart :height="200" :width="(this.width/2)"></line-chart>
                    <line-chart :height="200" :width="(this.width/2)"></line-chart>
                </div>
                <line-chart :height="height" :width="width"></line-chart> -->
                <div class="small-chart">
                    <apex-chart :width="(this.width / 2)" :height="200" :options="stock.options" type="area" :series="stock.series"/>
                    <apex-chart :width="(this.width / 2)" :height="200" :options="stock.options" type="area" :series="stock.series"/>
                </div>
                <apex-chart :width="this.width" :height="this.height" type="area" :options="stock.options" :series="stock.series" v-if="stock.series.data != []"/>
            </div>
            <div class="popular-box">
                <h1>인기 주식</h1>
                <popular ref="popularList"></popular>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import PopularComponent from './PopularListComponent.vue';
export default {
    name:'MainComponent',
    components:{
        'popular' : PopularComponent
    },
    // data(){
    //     return {
    //         chartDatas:{},
    //         popular:[],
    //         width:700,
    //         height:500
    //     }
    // },

    data: function() {
        return {
            stock: {
                options: {
                    chart: {
                        id: 'vuechart-example',
                        toolbar:{
                            show:false
                        }
                    },
                    colors:['#6e88e8', '#e86e88', '#e8cd6e', '#6ee8ce'],
                    fill:{
                        type:['gradient'],
                        colors:['#6e88e8', '#e86e88', '#e8cd6e', '#6ee8ce']
                    },
                    xaxis: {
                        categories: []
                    },
                },
                series: [{
                    name: '',
                    data: []
                }]
            },
            width : 600,
            height : 400,
        }
    },
    methods:{
        mainChartWidth(){
            this.width = window.innerWidth - (this.$refs.popularList.$el.offsetWidth + 260);
        },
        mainChartHeight(){
            this.height = window.innerHeight - 320;
        },
        getStocks(){
            setInterval(async x=>{
                let data = (await axios.get("/stocks")).data;
                let prices = data.map(x=> x.price);
                this.stock.series = [{name: data[0].name, data : prices}];
                this.stock.options.xaxis.categories = data.map(x=> `${new Date(x.date).getHours().format()}:${new Date(x.date).getMinutes().format()}:${new Date(x.date).getSeconds().format()}`);
            }, 10000);
        },
        getKos(){
            setInterval(async x=> {

            });
        }
    },
    mounted(){
        window.addEventListener('resize', this.mainChartWidth);
        window.addEventListener('resize', this.mainChartHeight);
        window.resizeTo(window.innerWidth, window.innerHeight);
        this.getStocks();
    }
}
</script>
<style scoped>
    .content{
        display: flex;
    }

    .small-chart{
        display: flex;
    }

    h1{
        margin-bottom: 10px;
    }
</style>