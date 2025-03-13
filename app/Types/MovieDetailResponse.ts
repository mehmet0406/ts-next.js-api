import { MovieResponse, SearchResponse, TvResponse } from "./MovieResponse"

interface MoviesAndTv {
    overview: string,
    genres: Name[],
    production_countries: Name[],
}
interface Name {
    name: string
}

export interface MovieDetail extends SearchResponse, MovieResponse, MoviesAndTv { }

export interface TvDetail extends TvResponse, MoviesAndTv { } 
