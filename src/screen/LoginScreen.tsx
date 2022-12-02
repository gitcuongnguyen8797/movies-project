import React from "react";
import { connect } from "react-redux";
import { PropsAuthReducer } from "../service/auth/type";
import { AppState } from "../service/store";


export interface PropsLoginScreen {
    authReducer: PropsAuthReducer
}

const LoginScreen: React.FC<PropsLoginScreen> = ({authReducer}) => (
    <div>
        <h1>Login Page</h1>
        <h5>Comming Soon</h5>
    </div>
)

const mapStateToProps = (props: AppState) => props

export default connect(mapStateToProps)(LoginScreen);