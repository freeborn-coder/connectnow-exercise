<template>
    <div class="game-card">
        <div class="game-image">
            
        </div>
        <div class="game-details">
            <div>
                <h4>
                    {{ game.name }}
                </h4>
                <p class="small">
                    Release Date: {{ releaseDate }}
                </p>
                <p>
                    [Summary]: {{ game.summary }}
                </p>
            </div>
            <div class="score">
                {{ rating }}
            </div>
        </div>
    </div>
</template>

<script lang = 'ts'>

import { Prop,Vue } from 'vue-property-decorator';
import { GamesInterface } from '../store/type';

export default class GameCard extends Vue{
    
    @Prop({default:null,required:true})
    game!: GamesInterface

    get rating():string {
        return (this.game.rating / 10).toFixed(1);
    }
    
    get releaseDate() : string {
        return new Date(this.game.first_release_date).toLocaleDateString();
    }

}
</script>

<style lang="css" scoped>
    div.score{
        display:flex;
        justify-content: center;
        align-items: center;
    }
</style>
