import React from 'react'
import {Route, Routes} from "react-router"
import {privateRoutes, publicRoutes} from "../routes"
import Login from '../pages/Login'
import Event from '../pages/Event'

const AppRouter = () => {
    const isAuth = true
    return (
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={route.component} key={route.path}/>
                )}
                <Route path="*" element={<Event/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.component} key={route.path}/>
                )}
                <Route path="*" element={<Login/>}/>
            </Routes>
    )
};

export default AppRouter