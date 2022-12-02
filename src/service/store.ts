import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from '@redux-saga/core';
import AuthReducer from "./auth/reducer";
import MovieReducer from "./movie/reducer";
import rootSaga from "./saga";

const rootReducer = combineReducers({
    authReducer: AuthReducer,
    movieReducer: MovieReducer
})

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export default store;