import Vue from 'vue';
import Router from 'vue-router';
import MainApp from '@/MainApp';
import VueApexCharts from 'vue-apexcharts';

import MainComponent from '@/components/MainComponent';
import LoginComponent from '@/components/LoginComponent';
import RegisterComponent from '@/components/RegisterComponent';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faHome, faChartBar,faEllipsisV, faUser, faLock, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import './app.css';

Vue.use(Router);
Vue.use(VueApexCharts);

library.add(faHome, faChartBar, faEllipsisV, faUser, faLock, faPhoneAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('apexchart', VueApexCharts);

String.prototype.parseNum = function(){
    return parseInt(this.replace(",", ""))
}

const router = new Router({
    routes:[
        {
            path:'/',
            name:'main-page',
            component: MainComponent,
        },
        {
            path:"/login",
            name:'login-page',
            component :LoginComponent
        },
        {
            path:'/register',
            name:'register-page',
            component:RegisterComponent
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