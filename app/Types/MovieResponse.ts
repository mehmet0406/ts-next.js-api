interface CommonMedia {
    id: number,
    original_language: string,
    poster_path: string,
    vote_average: number,
}

export interface MovieResponse extends CommonMedia {
    original_title: string,
    release_date: string,
}

export interface TvResponse extends CommonMedia {
    original_name: string,
    first_air_date:string
}

export interface CartType extends MovieResponse, TvResponse{}

export interface SearchResponse{
    id:number
    backdrop_path:string,
    original_title:string,
    vote_average:number
    original_language:string
}