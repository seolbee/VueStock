<script>
import {Line} from 'vue-chartjs';
export default {
    name:'ChartComponent',
    extends:Line,
    props:['data'],
    data(){
        return {
            datasets:this.data,
            // data:{
            //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            //     datasets: [{
            //         label: 'color',
            //         data: [12, 19, 3, 5, 2, 3],
            //         backgroundColor: 'rgba(110, 136, 232, 0.7)',
            //         borderColor: 'rgba(110, 136, 232, 1)',
            //         borderWidth: 1
            //     }]
            // },
            options: {
                responsive:false,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                }
            }
        }
    },
    methods:{
        
    },
    mounted(){
        console.log(this.datasets);
        this.renderChart(this.data, this.options);
    }
}
</script>
<style scoped>

</style>