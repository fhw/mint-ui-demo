import Vue from 'vue';
import Router from 'vue-router';
import top250List from '@/components/top250List';
import searchMovie from '@/components/searchMovie';
import inTheaterSwipe from '@/components/inTheaterSwipe'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
        path: '/',
        // component: '',
        components:{
        	itSwipe:inTheaterSwipe,
        }
    }, {
        path: '/search',
        component: searchMovie,
    }]
})
