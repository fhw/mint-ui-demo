import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import topnav from '@/components/topnav'

Vue.use(Router)

export default new Router({
	mode: "history",
    routes: [{
            path: '/',
            components: {
                a: Hello,
                b: topnav
            }
        }

    ]
})
