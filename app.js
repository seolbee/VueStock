import Vue from 'vue';
import Router from 'vue-router';
import MainApp from '@/MainApp';
import VueApexCharts from 'vue-apexcharts';
import VueSession from 'vue-session';

import MainComponent from '@/components/MainComponent';
import LoginComponent from '@/components/LoginComponent';
import RegisterComponent from '@/components/RegisterComponent';
import ChartComponent from '@/components/ChartComponent';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faHome, faChartBar,faEllipsisV, faUser, faLock, faPhoneAlt, faChartArea, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {faIdCard, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import './app.css';
// import requestPromise from 'request-promise-native';

Vue.config.productionTip = false;

const sessionOption = {
    persist : true
}

Vue.use(Router);
Vue.use(VueApexCharts);

Vue.use(VueSession, sessionOption);

library.add(faHome, faChartBar, faEllipsisV, faUser, faLock, faPhoneAlt, faIdCard, faChartArea, faTimesCircle, faCheckCircle);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('apex-chart', VueApexCharts);

String.prototype.parseNum = function(){
    return parseInt(this.replace(",", ""))
}

Number.prototype.format = function(){
    let value = "00" + this;
    return value.substring(value.length, value.length -2);
}



const router = new Router({
    routes:[
        {
            path:'/',
            name:'main-page',
            component: MainComponent,
            beforeEnter : (to, from, next)=>{
                if(!Vue.prototype.$session.exists()) next('/login');
                else next();
            }
        },
        {
            path:'/chart',
            name:'chart-page',
            component:ChartComponent,
            beforeEnter : (to, from, next)=>{
                if(!Vue.prototype.$session.exists()) next('/login');
                else next();
            }
        },
        {
            path:"/login",
            name:'login-page',
            component :LoginComponent,
            beforeEnter: (to,from, next)=>{
                if(Vue.prototype.$session.exists()) next('/');
                else next();
            }
        },
        {
            path:'/register',
            name:'register-page',
            component:RegisterComponent,
            beforeEnter: (to,from, next)=>{
                if(Vue.prototype.$session.exists()) next('/');
                else next();
            }
        }
    ]
});

window.onload = ()=>{
    new Vue({
        el:"#app",
        router,
        render:h=>h(MainApp)
    })
};