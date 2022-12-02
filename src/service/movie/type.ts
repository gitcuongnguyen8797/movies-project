import { Action } from "@reduxjs/toolkit"

export enum MovieEnum {
    FETCH_LIST_MOVIE = "FETCH_LIST_MOVIE",
    FETCH_LIST_MOVIE_SUCCESS = "FETCH_LIST_MOVIE_SUCCESS",
    FETCH_LIST_MOVIE_FAILURE = 'FETCH_LIST_MOVIE_FAILURE',

    FETCH_MOVIE = "FETCH_MOVIE",
    FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS",
    FETCH_MOVIE_FAILURE = "FETCH_MOVIE_FAILURE"
}


export type PropsMovieReducer = {
    movieListId?: number,
    movieId?: number,
    movieList?: PosterMovie[]
    movie?: PosterMovie
}

export interface MovieActions extends Action {
    type: MovieEnum,
    props: PropsMovieReducer
}


export interface PosterMovie {
    id: number;
    original_title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
}