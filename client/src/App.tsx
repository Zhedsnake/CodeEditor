import React, {useEffect} from "react";

//Redux
import {Provider} from 'react-redux';
import store from "./store/store";

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import AppRouter from "./components/router/AppRouter.tsx";


const App: React.FC = () => {

    useEffect(() => {
        (async () => {
            await import('bootstrap/dist/js/bootstrap.bundle.min.js');
        })()
    }, []);

    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    )
}

export default App
