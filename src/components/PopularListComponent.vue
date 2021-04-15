<template>
    <div class="popular-list" v-if="this.arr !== []">
        <div v-for="item in this.arr" :key="item.name" class="popular">
            <span>{{item.name}}</span>
            <span>{{item.price}}</span>
            <span :class="item.yestIncrease">{{item.yest}}</span>
            <span :class="item.yestIncrease">{{item.percent}}</span>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            arr : []
        }
    },
    methods:{
        getPopular(){
            setInterval(async ()=>{
                this.arr = (await axios.get('/popular')).data;
            }, 1000);
        }
    },
    computed:{

    },
    mounted(){
        this.getPopular();
    }
}
</script>
<style scoped>
    .popular-list{
        width: 20vw;
        height: 40vh;
        display: grid;
        grid-auto-rows: 50px;
        grid-gap: 20px;
    }

    .popular{
        line-height: 50px;
        background-color: white;
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, .1);
        border-radius: 3px;
    }

    .pluse{
        color: red;
    }

    .miuse{
        color: blue;
    }
</style>