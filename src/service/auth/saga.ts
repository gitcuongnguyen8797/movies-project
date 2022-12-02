import { all, takeLatest } from 'redux-saga/effects'
import { AuthActions, AuthEnums,  } from './type'

function* handleAuthByGoogle({ props }: AuthActions) {
    console.log('hello', props)
}

function* watcherAuthByGoogleAction() {
    yield takeLatest(AuthEnums.LOGIN_GOOGLE, handleAuthByGoogle)
}

export default function* rootSaga() {
    yield all([
        watcherAuthByGoogleAction(),
    ])
}