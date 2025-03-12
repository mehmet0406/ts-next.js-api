import { MovieResponse, SearchResponse } from "./MovieResponse"

export interface MovieDetail extends SearchResponse, MovieResponse {
    overview: string,
    genres: Name[],
    production_countries: Name[],

}
interface Name {
    name: string
}

