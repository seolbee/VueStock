<script>
import {Line} from 'vue-chartjs';
export default {
    name:'ChartComponent',
    extends:Line,
    props:['width', 'height', 'datas'],
    data(){
        return {
            data:{
                labels: this.datas.labels,
                datasets: this.datas.dataset
            },
            options: {
                responsive:false,
                scales: {
                    yAxes: [{
                        ticks: {
                            min : this.datas.min.parseNum(),
                            max : this.datas.max.parseNum()
                        }
                    }],
                }
            }
        }
    },
    methods:{
        
    },
    mounted(){
        console.log(this.datas);
        this.renderChart(this.data, this.options);
    }
}
</script>
<style scoped>

</style>