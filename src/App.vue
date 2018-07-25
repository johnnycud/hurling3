<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="success">
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>Hurling Profiles</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">  
        <v-btn flat v-for="item in menuItems" :key="item.title">
          <v-icon left dark>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
    <main>
      <router-view/>
    </main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      sideNav:false,
      menuItems:[
        {icon: 'supervisor_account',title:'View Players'},
        {icon: 'perm_media',title:'Media'},
        {icon: 'person',title:'View Profiles'},
        {icon: 'face',title:'Sign-Up'},
        {icon: 'lock_open',title:'Sign-In'}
      ]
    }
  }
}
</script>

<style >
  
</style>
