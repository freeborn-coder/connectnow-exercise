<template>
    
    <section class="home-section">
        <Sidebar />
    
        <article>
            <GameCard />
            <GameCard />
            <GameCard />
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
        }
    }
</script>

<style lang="stylus" scoped>

</style>
