import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadedPlayers: [{
                imageUrl: 'https://cdn-04.independent.ie/sport/article31172892.ece/b282e/AUTOCROP/w620/2015-04-26_spo_8620492_I1.JPG',
                id: 'afaj1',
                title: 'Eddie Keher',
                date: '2018-07-31'
            },
            {
                imageUrl: 'http://www.dublincity.ie/sites/default/files/galleries/sl099_kilkenny_players.jpg',
                id: 'afaj2',
                title: 'Ollie Walsh',
                date: '2018-07-29'
            },
            {
                imageUrl: 'https://pbs.twimg.com/media/B9eAS1wIYAI8xK_.jpg',
                id: 'afaj3',
                title: 'Michael"Babs" Keating',
                date: '2018-07-27'
            },
            {
                imageUrl: 'https://cdn-03.independent.ie/business/farming/article36418357.ece/a6d66/AUTOCROP/w620/2017-12-19_bus_37006425_I1.JPG',
                id: 'afaj4',
                title: 'Tony Doran',
                date: '2018-07-26'
            }
        ],
        user: {
            id: 'a1',
            registeredPlayers: ['afaj1']
        }
    },
    mutations: {},
    actions: {},
    getters: {
        loadedPlayers(state) {
            return state.loadedPlayers.sort((playerA, playerB) => {
                return playerA.date > playerB.date
            })
        },
        featuredPlayers(state, getters) {
            return getters.loadedPlayers.slice(0, 5)
        },
        loadedPlayer(state) {
            return (playerId) => {
                return state.loadedPlayers.find((player) => {
                    return player.id === playerId
                })
            }
        }
    }
})