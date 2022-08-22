import React from "react";
import {LayoutApp} from "../../Presentation/components/LayoutApp/Index";
import {IPage} from "./IPage";
import {Navigate} from "react-router-dom";
import Paths from "./RoutePaths";
import {useAuth} from "../Store/Auth/Contexts/AuthContext";

export const RouteWrapper = (props: IPage): IPage => {

    const {isLoading} = useAuth()

    console.log(isLoading)
    const HiddenLayout = (localProps: { children: React.ReactNode }) => {
        return props.hiddenLayout ? <>{localProps.children}</> : <LayoutApp>{localProps.children}</LayoutApp>;
    }

    const Auth = (localProps: { children: React.ReactNode }) => {
        if (props.isPublic) return HiddenLayout(localProps);

        return isLoading ? HiddenLayout(localProps) : <Navigate to={Paths.Login}/>;
    }

    return {
        ...props,
        element: <Auth>{props.element}</Auth>
    }
}