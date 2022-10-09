import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Index from "./components/Index/Index";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Credits from "./components/Credits/Credits";
import OurWool from "./components/QuickFacts/ExtraPages/OurWool";
import {creditsUrl, indexUrl, ourWoolUrl} from "./Route_urls";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={indexUrl} element={<Index/>}/>
                <Route path={creditsUrl} element={<Credits/>}/>
                <Route path={ourWoolUrl} element={<OurWool/>}/>
            </Routes>
        </BrowserRouter> </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
