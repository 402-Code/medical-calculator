import React, { useState } from "react";
import Agreement from "./components/Agreement/Agreement";
import MainPage from "./components/MainPage/MainPage";
import './App.scss';

function App() {
    const [isAccepted, setAccepted] = useState(() => !!localStorage.getItem("agreement"));

    function accept() {
        localStorage.setItem("agreement", true);
        setAccepted(true);
    }

    return (
        <div>
            {isAccepted ? <MainPage /> : <Agreement onAccept={accept} />}
        </div>
    );
};

export default App;
