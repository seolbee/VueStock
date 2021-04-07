import Vue from 'vue';
import Router from 'vue-router';
import MainApp from '@/MainApp';
import MainComponent from '@/components/MainComponent';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faHome, faChartBar,faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import './app.css';

Vue.use(Router);
library.add(faHome, faChartBar, faEllipsisV);
Vue.component('font-awesome-icon', FontAwesomeIcon);

String.prototype.parseNum = function(){
    return parseInt(this.replace(",", ""))
}

const router = new Router({
    routes:[
        {
            path:'/',
            name:'main-page',
            component: MainComponent,
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