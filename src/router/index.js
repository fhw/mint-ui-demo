import Vue from 'vue';
import Router from 'vue-router';
import movieList from '@/components/MovieList';
import searchMovie from '@/components/searchMovie';
import inTheaterSwipe from '@/components/inTheaterSwipe';
import movieDetail from '@/components/movieDetail';
import top250Swipe from '@/components/top250Swipe';

Vue.use(Router);

export default new Router({
    // mode: "history",
    routes: [{
            path: '/',
            // component: '',
            components: {
                itSwipe: inTheaterSwipe,
                top250Swipe: top250Swipe,
                listTabBar: listTabBar
            }
        }, {
            path: '/search',
            component: searchMovie,
        }, {
            path: '/movieDetail/:id',
            component: movieDetail
        }, {
            path: '/movie/movieList/:type',
            component: movieList
        },
        // {
        //   path: '/movie',
        //   component: listTabBar,
        //   children: [{
        //     path: '/movie/movieList/:type',
        //     component: movieList
        //   }]
        // }
    ]
})
