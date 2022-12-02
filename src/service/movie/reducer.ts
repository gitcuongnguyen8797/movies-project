import { MovieActions, MovieEnum, PropsMovieReducer, PosterMovie} from "./type";

const movieState: PropsMovieReducer = {
    movieList: [],
    movie: undefined
}

export default function MovieReducer(state = movieState, action: MovieActions) {
    switch (action.type) {
        case MovieEnum.FETCH_LIST_MOVIE_SUCCESS:
            return { ...state, ...action.props }
        case MovieEnum.FETCH_MOVIE_SUCCESS:
            return { ...state, ...action.props.movie }
        default:
            return { ...state }
    }
}