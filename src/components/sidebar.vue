<template>
    
    <aside>
            
        <p>Filter  Results</p>

        <div>
            <label for="name">Name [contains]</label>
            <input type="text" name="" id="name" v-model="name" @keyup="filterGamesByName" placeholder="Text string">
        </div>
        
        <div class="aside-grid">
            <div class="min-score-div">
                <label for="minScore">Minimum Score</label>
                <div>
                    <input type="text" name="" v-model="minScore" @keyup="filterGamesByMinScore" id="minScore" placeholder="1 - 10">
                </div>
            </div>
        <div>
            <label for="orderBy">Order By</label>
        
            <div class="input-group">
                    <!-- <button @click="changeOrder"><i class="fa fa-arrow-up"></i></button> -->
                    <button @click="changeOrder">
                        <i class="fa" :class="$store.state.sortOrder == 'asc' ? 'fa-arrow-up':'fa-arrow-down'"></i>
                    </button>
                    <select name="" id="orderBy" v-model="order" @change="setGamesOrder">
                        <option value="release_date">Release Date</option>
                        <option value="score">Score</option>
                        <option value="name">Name</option>
                    </select>
                    </div>
                    </div>
            <div class="clear-div">
                <button @click="clearAllFilters">Clear</button>
            </div>
        </div>
        
    </aside>

</template>

<script>

    export default {
        name:'sidebar',
        data(){
            return {
                order:null,
                minScore:null,
                name:null
            }
        },
        methods:{
            filterGamesByName(event){
                this.$store.commit('UPDATE_NAME_FILTER',event.target.value);
            },
            filterGamesByMinScore(event){
                this.$store.commit('UPDATE_MIN_SCORE_FILTER',event.target.value.trim());
            },
            setGamesOrder(event){
                this.$store.commit('UPDATE_GAMES_ORDER',event.target.value);
            },
            clearAllFilters(){
                this.$store.commit('CLEAR_ALL_FILTERS');
                this.order = null;
                this.minScore = null;
                this.name = null;
            },
            changeOrder(){
                this.$store.commit('CHANGE_ORDER');
            }
        }
    }
</script>

<style>
    
</style>
