<template>
    
    <section class="home-section">
        <Sidebar />
    
        <article>
            <template v-if="games.length">
                <GameCard 
                    v-for="game in games" :key="game.id" 
                    :game="game">
                </GameCard>
            </template>    
            <h4 v-else>Loading Games...</h4>
        </article> 

    </section>
    
    
</template>

<script>
    import GameCard from '@/components/game-card'
    import Sidebar from '@/components/sidebar.vue'

    export default {
        name:'index',
        components:{
            GameCard, Sidebar
        },
        computed:{
            games(){
                return this.$store.getters.getGames;
            }
        },
        mounted(){
            if(this.$store.getters.getGamesCount < 1) this.$store.dispatch('fetchGames');
        }
    }
</script>

<style lang="stylus" scoped>

</style>
