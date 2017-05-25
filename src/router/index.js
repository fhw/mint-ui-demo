import Vue from 'vue';
import Router from 'vue-router';
import top250List from '@/components/top250List';
import searchMovie from '@/components/searchMovie';
import inTheaterSwipe from '@/components/inTheaterSwipe'
import movieDetail from '@/components/movieDetail'

Vue.use(Router);

export default new Router({
    // mode: "history",
    routes: [{
        path: '/',
        // component: '',
        components:{
        	itSwipe:inTheaterSwipe,
        }
    }, {
        path: '/search',
        component: searchMovie,
    },{
        path:'/movieDetail/:id',
        component:movieDetail
    },{
            path:'/movie/top250',
            component:top250List
    }]
})
