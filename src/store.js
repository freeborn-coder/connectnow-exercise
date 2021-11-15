import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      games:[],
      filteredGames:[],
      filters:{
          name:undefined,
          min_score:undefined
      },
      orderBy:undefined,
      sortOrder:'asc'
    },
    mutations: {
      addGames(state,games){
        state.games.push(...games);
      },
      UPDATE_NAME_FILTER(state,val){
          state.filters.name = val;
      },
      UPDATE_MIN_SCORE_FILTER(state,val){
          state.filters.min_score = val;
      },
      UPDATE_GAMES_ORDER(state,val){
          state.orderBy = val;
      },
      CLEAR_ALL_FILTERS(state){
        state.filters.name = undefined;
        state.filters.min_score = undefined;
        state.orderBy = undefined;
      },
      CHANGE_ORDER(state){
          state.sortOrder = state.sortOrder == 'asc' ? 'desc':'asc';
      }
    },
    actions:{
        async fetchGames(state){
            try{
                const res = await fetch('https://public.connectnow.org.uk/applicant-test/');
                const games = await res.json();
                state.commit('addGames',games);
            }catch(e){
                console.error(e);
            }
        }
    },
    getters:{
        getGames({ games,filters,orderBy,sortOrder }){
            let filtered = games;

            if(filters.name){
                filtered = games.filter(game => game.name.toLowerCase().includes(filters.name.toLocaleLowerCase()));
            }

            if(filters.min_score && !Number.isNaN(filters.min_score)){
                let min = Number(filters.min_score) * 10;
                min = min.toFixed(1);
                filtered = filtered.filter(game => game.rating >= min);
            }

            if(orderBy){
                switch(orderBy){

                    case 'name': filtered.sort((a,b) => a.name.localeCompare(b.name)); break;

                    case 'release_date': filtered.sort((a,b) => (a.first_release_date - b.first_release_date)); break;

                    case 'score': filtered.sort((a,b) => (a.rating - b.rating)); break;

                    default: 
                }
            }

            if( !(filters.name || filters.min_score || orderBy) ) return filtered;

            if(sortOrder == 'desc') filtered.reverse();
            
            return filtered;
        },
        getGamesCount(state){
            return state.games.length;
        } 
    }
})