import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex';
import { GamesInterface, RootState } from './type';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
      games:[],
      filteredGames:[],
      filters:{
          name:null,
          min_score:null
      },
      orderBy:null,
      sortOrder:'asc'
    },
    mutations: {
      ADD_GAMES(state,games:GamesInterface[]) : void {
        state.games.push(...games);
      },
      UPDATE_NAME_FILTER(state, val : string) : void{
          state.filters.name = val;
      },
      UPDATE_MIN_SCORE_FILTER(state,val:number){
          state.filters.min_score = val;
      },
      UPDATE_GAMES_ORDER(state, val:string){
          state.orderBy = val;
      },
      CLEAR_ALL_FILTERS(state){
        state.filters.name = null;
        state.filters.min_score = null;
        state.orderBy = null;
      },
      CHANGE_ORDER(state){
          state.sortOrder = state.sortOrder == 'asc' ? 'desc':'asc';
      }
    },
    actions:{
        async fetchGames({ commit }): Promise<void> {
            try{
                const res: Response = await fetch('https://public.connectnow.org.uk/applicant-test/');
                const games:GamesInterface[] = (await res.json()) as GamesInterface[];
                commit('ADD_GAMES',games);
            }catch(e){
                console.error(e);
            }
        },
        updateNameFilter({commit}, payload:string){
            commit('UPDATE_NAME_FILTER',payload);
        },
        updateMinScoreFilter({ commit }, payload:number){
            commit('UPDATE_MIN_SCORE_FILTER',payload);
        },
        updateGamesOrder({commit}, payload:string){
            commit('UPDATE_GAMES_ORDER',payload);
        },
        clearAllFilters({ commit }){
            commit('CLEAR_ALL_FILTERS');
        },
        changeOrder({ commit }){
            commit('CHANGE_ORDER');
        }
    },
    getters:{
        getGames({ games,filters,orderBy,sortOrder }) : GamesInterface[] {
            let filtered:GamesInterface[] = games;

            if(filters.name){
                filtered = games.filter(game => game.name.toLowerCase().includes(filters.name!.toLocaleLowerCase()));
            }

            if(filters.min_score && !Number.isNaN(filters.min_score)){
                let min:number = Number(filters.min_score) * 10;
                min = Number(min.toFixed(1));
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
        getGamesCount({ games }):number{
            return games.length;
        },
        sortOrder({ sortOrder }):string|null{
            return sortOrder;
        } 
    }
}

export default new Vuex.Store<RootState>(store);