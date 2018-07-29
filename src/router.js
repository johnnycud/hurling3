import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Media from '@/components/Media'
import Players from '@/components/Players/Players'
import CreatePlayer from '@/components/Players/CreatePlayer'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'
import Player from '@/components/Players/Player'

Vue.use(Router)

/* eslint-disable */

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/players',
            name: 'Players',
            component: Players
        },
        {
            path: '/players/:id',
            name: 'Player',
            component: Player
        },
        {
            path: '/player/new',
            name: 'CreatePlayer',
            component: CreatePlayer
        },

        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        },

        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '/media',
            name: 'Media',
            component: Media
        }
    ],
    mode: 'history'
})