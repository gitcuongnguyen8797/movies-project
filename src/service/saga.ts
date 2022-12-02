import { all } from "redux-saga/effects";
import AuthService from './auth/saga';
import MovieService from './movie/saga';

export default function* rootSaga() {
    yield all([
        AuthService(),
        MovieService()
    ])
}