<template>
    <div id="main">
        <div class="content">
            <div class="chart-box">
                <!-- <div class="small-chart">
                    <line-chart :height="200" :width="(this.width/2)"></line-chart>
                    <line-chart :height="200" :width="(this.width/2)"></line-chart>
                </div>
                <line-chart :height="height" :width="width"></line-chart> -->
                <apexchart :width="this.width" :height="this.height" type="line" :options="options" :series="series"></apexchart>
            </div>
            <popular ref="popularList"></popular>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import PopularComponent from './PopularListComponent.vue';
export default {
    name:'MainComponent',
    components:{
        // 'line-chart':Chart,
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
            options: {
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                name: 'series-1',
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }],
            width : 600,
            height : 400
        }
    },
    methods:{
        mainChartWidth(){
            this.width = window.innerWidth - (this.$refs.popularList.$el.offsetWidth + 250);
        },
        mainChartHeight(){
            this.height = width.innerHeight - 80;
        }
    },
    mounted(){
        window.addEventListener('resize', this.mainChartWidth);
        window.addEventListener('resize', this.mainChartHeight);
        this.mainChartWidth();
        this.mainChartHeight();
        console.log(this.width, this.height);
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
</style>