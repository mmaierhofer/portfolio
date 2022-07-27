import React from "react";
import Welcome from "./welcome";
import { Route, Routes } from "react-router-dom";
import About from "./about";
import Experience from "./experience";
import Contact from "./contact";
import Project from "./projects";

export default function Main() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-900">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Project />} />
        </Routes>
      </div>
    </>
  );
}
