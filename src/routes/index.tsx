import Event from "../pages/Event";
import Login from "../pages/Login";
import React, {ReactNode} from "react";

export interface IRoute {
    path: string,
    component: ReactNode,
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT =  '/'
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN,
        component: <Login/>,
    }
]
export const privateRoutes: IRoute[] = [
    {
        path: RouteNames.EVENT,
        component: <Event/>,
    }
]
