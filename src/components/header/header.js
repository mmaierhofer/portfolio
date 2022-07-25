import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="h-20 w-full pr-24 pt-12 absolute">
        <div className="w-full flex justify-end">
          <div className="w-1/3 flex justify-between text-white font-mono">
            <Link to={"/"}>
              <div>00. Welcome</div>
            </Link>
            <Link to={"/about"}>
              <div>01. About</div>
            </Link>
            <Link to={"/experience"}>
              <div>02. Experience</div>
            </Link>
            <Link to={"/projects"}>
              <div>03. Projects</div>
            </Link>
            <Link to={"/contact"}>
              <div>04. Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
