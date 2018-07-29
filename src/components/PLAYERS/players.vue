<template>
  <v-container>
      <h2 class="centre">This is a list of Hurling players from the past;</h2>
      <v-layout row wrap>
          <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
             <v-card class="info">
                 <v-container fluid>
                     <v-layout row>
                         <v-flex xs5 sm4 md3>
                             <v-card-media
                             src="https://cdn-04.independent.ie/sport/article31172892.ece/b282e/AUTOCROP/w620/2015-04-26_spo_8620492_I1.JPG"
                             height="125px">
                             </v-card-media>
                         </v-flex>
                         <v-flex xs7 sm8 md9>
                             <v-card-title primary-title>
                                 <div>
                                   <h3 class="white--text">Eddie Keher</h3>
                                   <div>County: Kilkenny</div>
                                 </div>
                             </v-card-title>
                             <v-cars-actions>
                                 <v-btn flat to="/player/1">
                                     <v-icon left light>arrow_forward</v-icon>
                                     View Player
                                 </v-btn>
                             </v-cars-actions>
                         </v-flex>
                     </v-layout>
                 </v-container>
             </v-card>   
          </v-flex>
          
      </v-layout>
  </v-container>
 
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>