import React from "react";
import Welcome from "./welcome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./about";

export default function Main() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-900">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
