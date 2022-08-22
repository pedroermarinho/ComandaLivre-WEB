import React from "react";

export interface IPage {
    name: string;
    path: string;
    element: React.ReactNode;
    isPublic?: boolean;
    hiddenLayout?: boolean;
    icon?: React.ForwardRefExoticComponent<any>;
}