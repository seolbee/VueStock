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
                    <apex-chart :width="(this.width / 2)" :height="200" :options="options" :series="series"/>
                    <apex-chart :width="(this.width / 2)" :height="200" :options="options" :series="series"/>
                </div>
                <apex-chart :width="this.width" :height="this.height" type="area" :options="options" :series="series"/>
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
            this.width = window.innerWidth - (this.$refs.popularList.$el.offsetWidth + 260);
        },
        mainChartHeight(){
            this.height = window.innerHeight - 320;
        }
    },
    mounted(){
        window.addEventListener('resize', this.mainChartWidth);
        window.addEventListener('resize', this.mainChartHeight);
        this.mainChartWidth();
        this.mainChartHeight();
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