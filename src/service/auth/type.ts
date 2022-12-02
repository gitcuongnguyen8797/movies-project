import { Action } from "@reduxjs/toolkit";

export enum AuthEnums {
    LOGIN_GOOGLE = "LOGIN_GOOGLE",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
}

export type PropsAuthReducer = {
    isAuthenticated: boolean
}

export interface AuthActions extends Action {
    type: AuthEnums,
    props: PropsAuthReducer
}