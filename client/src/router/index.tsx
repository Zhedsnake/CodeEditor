import React from "react";
const HomePage = React.lazy(() => import("../pages/Home.tsx"));

export interface RoutesTypes {
    path: string,
    component: React.ReactNode
}

const commonRoutes: RoutesTypes[] = [
    {path: '/', component: <HomePage />},
]

const privateRoutes: RoutesTypes[] = [
    ...commonRoutes,
]

const publicRoutes: RoutesTypes[] = [
    ...commonRoutes,
]

export {privateRoutes, publicRoutes};

