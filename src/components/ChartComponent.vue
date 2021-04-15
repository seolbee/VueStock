
<script>
export default {
    name:'ChartComponent',
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
        }]
        }
    },
    // data(){
    //     return {
    //         data: {
    //             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red','Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //             datasets: [{
    //                 label: '# of Votes',
    //                 data: [12, 19, 3, 5, 2, 3, 10],
    //                 backgroundColor: [
    //                     'rgba(255, 99, 132, 0.2)',
    //                     'rgba(54, 162, 235, 0.2)',
    //                     'rgba(255, 206, 86, 0.2)',
    //                     'rgba(75, 192, 192, 0.2)',
    //                     'rgba(153, 102, 255, 0.2)',
    //                     'rgba(255, 159, 64, 0.2)'
    //                 ],
    //                 borderColor: [
    //                     'rgba(255, 99, 132, 1)',
    //                     'rgba(54, 162, 235, 1)',
    //                     'rgba(255, 206, 86, 1)',
    //                     'rgba(75, 192, 192, 1)',
    //                     'rgba(153, 102, 255, 1)',
    //                     'rgba(255, 159, 64, 1)'
    //                 ],
    //                 borderWidth: 1
    //             }]
    //         },
    //         options: {
    //             responsive:false,
    //             maintainAspectRatio : false,
    //             scales: {
    //                 yAxes: [{
                        
    //                 }],
    //             }
    //         }
    //     }
    // },
    methods:{
        drawChart(){
            this.renderChart(this.data, this.options)
        }
    },
    mounted(){
        this.drawChart();
        window.addEventListener('resize', this.drawChart);
    }
}
</script>
<style scoped>

</style>