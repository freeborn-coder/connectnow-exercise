<template>
    
    <aside>
            
        <p>Filter  Results</p>

        <div>
            <label for="name">Name [contains]</label>
            <input 
                type="text" 
                name="" id="name" 
                v-model="name" 
                placeholder="Text string"
                @keyup="updateNameFilter($event.target.value)" 
            >
        </div>
        
        <div class="aside-grid">
            <div class="min-score-div">
                <label for="minScore">Minimum Score</label>
                <div>
                    <input 
                        type="text" name="" 
                        v-model="minScore" 
                        id="minScore" placeholder="1 - 10"
                        @keyup="updateMinScoreFilter($event.target.value)" 
                    >
                </div>
            </div>
        <div>
            <label for="orderBy">Order By</label>
        
            <div class="input-group">
                    <button @click="changeOrder">
                        <i class="fa" :class="sortOrder === 'asc' ? 'fa-arrow-up':'fa-arrow-down'"></i>
                    </button>
                    <select name="" id="orderBy" v-model="order" @change="updateGamesOrder($event.target.value)">
                        <option value="release_date">Release Date</option>
                        <option value="score">Score</option>
                        <option value="name">Name</option>
                    </select>
                    </div>
                    </div>
            <div class="clear-div">
                <button @click="clearFilters">Clear</button>
            </div>
        </div>
        
    </aside>

</template>

<script lang="ts">

import { Component,Vue } from 'vue-property-decorator';
import { Action,Getter } from 'vuex-class';

@Component
export default class Sidebar extends Vue{

    order = null
    minScore = null
    name = null

    @Action('updateNameFilter')
    // eslint-disable-next-line no-unused-vars
    updateNameFilter!: (param: string) => void;

    @Action('updateMinScoreFilter')
    // eslint-disable-next-line no-unused-vars
    updateMinScoreFilter!: (param:number) => void;

    @Action('updateGamesOrder')
    // eslint-disable-next-line no-unused-vars
    updateGamesOrder!: (param:string) => void;

    @Action('clearAllFilters')
    clearAllFilters!: () => void;

    @Action('changeOrder')
    changeOrder!: () => void;

    @Getter('sortOrder')
    sortOrder!: () => string;

    clearFilters():void{
        this.clearAllFilters();
        this.order = null;
        this.minScore = null;
        this.name = null;
    }
    
}
</script>

<style>
    
</style>
