<template>
  <v-app>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
         v-for="item in menuItems"
         :key="item.title"
         router
         :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="success">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Hurling Profiles</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">  
        <v-btn flat 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <main>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <v-layout column align-center>
            <img src="@/assets/hurling.jpg" alt="Vuetify.js" class="mb-5">
          </v-layout>
        </v-slide-y-transition>
      </v-container>    
    </main>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      sideNav:false,
      menuItems:[
        {icon: 'supervisor_account',title:'View Players', link: '/players'},
        {icon: 'perm_media',title:'Media', link: '/media'},
        {icon: 'person',title:'Create Players', link: '/player/new'},
        {icon: 'face',title:'Sign-Up', link: '/signup'},
        {icon: 'lock_open',title:'Sign-In', link: '/signin'}
      ]
    }
  }
}
</script>

<style >
  
</style>
