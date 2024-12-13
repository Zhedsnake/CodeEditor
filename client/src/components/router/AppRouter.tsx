import React, {Suspense} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Loader from "../UI/Loader.tsx";

import {publicRoutes} from "../../router";

const AppRouter: React.FC = () => {

    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;