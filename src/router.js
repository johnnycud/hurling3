import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Media from './components/Media.vue'
import Player from '@/components/PLAYERS/players'
import CreatePlayer from '@/components/PLAYERS/createPlayer'
import SignUp from '@/components/USERS/SIGNUP'
import SignIn from '@/components/USERS/SIGNIN'


Vue.use(Router)

/* eslint-disable */

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/players',
            name: 'player',
            component: Player
        },
        {
            path: '/signup',
            name: 'signup',
            component: SignUp
        },
        {
            path: '/createPlayer',
            name: 'createplayer',
            component: CreatePlayer
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn
        },
        {
            path: '/media',
            name: 'media',
            component: Media
        }
    ],
    mode: 'history'
})