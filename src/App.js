import "./App.css";
import Header from "./components/header/header";
import Main from "./components/main/main";

import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
