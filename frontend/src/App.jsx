import React from "react";
import "./App.scss";
import Profile from "./components/Profile/Profile";
import { KidProvider } from "./context/KidConext";

function App() {
  return (
    <div>
      <KidProvider>
        <Profile />
      </KidProvider>
    </div>
  );
}

export default App;
