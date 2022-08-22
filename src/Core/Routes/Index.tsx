import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {PageRoutes} from "./PageRoutes";
import {RouteWrapper} from "./RouteWrapper";

export const RoutesApp: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    PageRoutes.map(RouteWrapper).map((page, key) =>
                        <Route
                            path={page.path}
                            element={page.element}
                            key={key}
                        />
                    )
                }
            </Routes>
        </BrowserRouter>
    )
}