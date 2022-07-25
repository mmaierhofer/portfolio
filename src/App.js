import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
