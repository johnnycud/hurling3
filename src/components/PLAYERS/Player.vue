<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title>
                      <h6 class="primary--text">My Player</h6>
                    </v-card-title>
                    <v-card-media
                      src="https://cdn-04.independent.ie/sport/article31172892.ece/b282e/AUTOCROP/w620/2015-04-26_spo_8620492_I1.JPG"
                      height="400px">
                    </v-card-media>
                    <v-card-text>
                        <div class="info--text">Club: BennetBridge County: Kilkenny</div>
                        <div>Rest of info from database</div>
                    </v-card-text>
                    <v-card-action>
                        <v-spacer></v-spacer>
                        <v-btn class="primary">Register</v-btn>
                    </v-card-action>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>