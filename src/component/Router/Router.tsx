import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFoundScreen from "../../screen/NotFoundScreen";
import { AppState } from "../../service/store";

export interface PropsRoute {
    path: string,
    component: any,
}

export interface PropsRouter {
    publicRoutes?: PropsRoute[]
    privateRoutes?: PropsRoute[],
    isAuthenticated: boolean
}

const Router: React.FC<PropsRouter> = ({publicRoutes, privateRoutes, isAuthenticated}) => (
    <BrowserRouter>
        <Routes>
            {/* public routes */}
            { publicRoutes?.map((i, index) => <Route key={index} path={i.path} element={i.component} />)}
            {/* private route */}
            { privateRoutes?.map((i, index) => <Route key={index} path={i.path} element={isAuthenticated ? i.component: <Navigate to={'/login'} />} /> )}
            {/* Not found */}
            <Route path="*" element={<NotFoundScreen />} />
        </Routes>
    </BrowserRouter>
)

const mapStateToProps = ({authReducer, movieReducer}: AppState) => ({...authReducer, ...movieReducer})
export default connect(mapStateToProps)(Router);