import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { PersistGate } from 'redux-persist/integration/react'
import {Provider} from "react-redux";
import {store,Storage} from "./Redux/Store/Store";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
            <PersistGate loading={false} persistor={Storage}>
                <App/>
            </PersistGate>
           </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
