<template>
    
    <aside>
            
        <p>Filter  Results</p>

        <div>
            <label for="name">Name [contains]</label>
            <input type="text" name="" id="name" placeholder="Text string">
        </div>
        
        <div class="aside-grid">
            <div class="min-score-div">
                <label for="minScore">Minimum Score</label>
                <div>
                    <input type="text" name="" id="minScore" placeholder="1 - 10">
                    </div>
            </div>
        <div>
            <label for="orderBy">Order By</label>
        
            <div class="input-group">
                    <button><i class="fa fa-arrow-up"></i></button>
                    <select name="" id="orderBy">
                        <option value="release date">Release Date</option>
                        <option value="score">Score</option>
                        <option value="name">Name</option>
                    </select>
                    </div>
                    </div>
            <div class="clear-div">
                <button>Clear</button>
            </div>
        </div>
        
    </aside>

</template>

<script>
    export default {
        name:'sidebar'
    }
</script>

<style>
    
</style>
