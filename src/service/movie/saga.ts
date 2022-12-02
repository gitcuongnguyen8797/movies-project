import { AxiosResponse } from 'axios';
import { all, put, takeLatest } from 'redux-saga/effects'
import FetchApi from '../../helpers/FetchApi'
import { MovieActions, MovieEnum } from './type'

function* handleFetchListMovie({ props }: MovieActions) {
    const listMovie: AxiosResponse = yield FetchApi.get(`/list/${props.movieListId}`);
    yield put({type: MovieEnum.FETCH_LIST_MOVIE_SUCCESS, props: { movieList: listMovie.data.items }})
}

function* handleFetchMovie({ props }: MovieActions) {
    console.log(props)
}

function* watcherFetchListMovie() {
    yield takeLatest(MovieEnum.FETCH_LIST_MOVIE, handleFetchListMovie)
}

function* watcherFetchMovie() {
    yield takeLatest(MovieEnum.FETCH_MOVIE, handleFetchMovie)
}

export default function* rootSaga() {
    yield all([
        watcherFetchListMovie(),
        watcherFetchMovie(),
    ])
}