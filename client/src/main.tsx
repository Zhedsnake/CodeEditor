import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter  future={{ v7_startTransition: true }}>
        <App />
    </BrowserRouter>
);