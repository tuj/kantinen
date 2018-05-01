import Vue from 'vue'

import vSelect from 'vue-select';
Vue.component('v-select', vSelect);

import Home from './Home.vue';
import Splash from './Splash.vue';

const routes = {
    '/': Splash,
    '/Home': Home,
};

new Vue({
    el: '#app',
    data: {
        currentRoute: window.location.pathname
    },
    computed: {
        ViewComponent () {
            return routes[this.currentRoute]
        }
    },
    render (h) { return h(this.ViewComponent) }
});
