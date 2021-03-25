import Vue from 'vue';
import Router from 'vue-router';
import MainApp from '@/MainApp';

import './app.css';

Vue.use(Router);

const router = new Router({
    routes:[
        {
            path:'/',
            name:'main-page',
            component: "",
        }
    ]
})

window.onload = ()=>{
    new Vue({
        el:"#app",
        router,
        render:h=>h(MainApp)
    })
};