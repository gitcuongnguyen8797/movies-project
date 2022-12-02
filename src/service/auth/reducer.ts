
import { AuthActions, AuthEnums, PropsAuthReducer } from "./type";

const AuthState: PropsAuthReducer = {
    isAuthenticated: false
}

export default function AuthReducer(state = AuthState, action: AuthActions) {

    switch (action.type) {
        case AuthEnums.LOGIN_SUCCESS:
            return { ...state, ...action.props }
        default:
            return { ...state }
    }
}