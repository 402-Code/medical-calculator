import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAgreement from './components/Agreement/RequireAgreement';
import './App.scss';

function App() {
    return (
        <RequireAgreement>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<h3>Just checking if App works</h3>} />
                </Routes>
            </BrowserRouter>
        </RequireAgreement>);
};

export default App;
