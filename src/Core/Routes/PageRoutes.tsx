import React from "react";
import {UserOutlined} from "@ant-design/icons";
import Paths from "./RoutePaths";
import {Login} from "../../Presentation/pages/Auth/Login/Index";
import {IPage} from "./IPage";

export const PageRoutes:IPage[] =[
    {
        name: 'Login',
        path: Paths.Login,
        icon: UserOutlined,
        element: <Login/>,
        hiddenLayout: true,
        isPublic: true
    },
    {
        name: 'Pagina inicial',
        path: Paths.Home,
        icon: UserOutlined,
        element: <div>Pagina inicial</div>,
    }

]