<template>
    
    <section class="home-section">
        <Sidebar />
    
        <article>
            <template v-if="games.length">
                <GameCard 
                    v-for="game in getGames()" :key="game.id" 
                    :game="game">
                </GameCard>
            </template>    
            <h4 v-else>Loading Games...</h4>
        </article> 

    </section>
    
</template>

<script lang="ts">

import Component from 'vue-class-component';
import Vue from 'vue';
import GameCard from '../components/game-card.vue'
import Sidebar from '../components/sidebar.vue'
import { mapActions, mapGetters } from 'vuex'
import { GamesInterface } from '@/store/type';

@Component({ 
    computed:{
        ...mapGetters({
            games:'getGames',
            count:'getGamesCount'
        })
    },
    methods:{
        ...mapActions({fetchGames:'fetchGames'})
    },
    components:{
        GameCard, Sidebar
    }
})
export default class Index extends Vue {
    fetchGames!: () => Promise<void>
    getGames! : () => GamesInterface[]
    getGamesCount! : () => number
    
    mounted() {
        if(this.getGamesCount() < 1) this.fetchGames();
    }

}

</script>

<style lang="stylus" scoped>

</style>
