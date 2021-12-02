export interface GamesInterface  {
    id: number;
    first_release_date: number;
    name: string;
    rating: number;
    summary: string;
}

export interface FiltersInterface {
    name: string | null;
    min_score: number | null;
}

export interface RootState {
    games : GamesInterface[];
    filteredGames : GamesInterface[];
    filters: FiltersInterface;
    orderBy: string | null;
    sortOrder: string | null;

}

