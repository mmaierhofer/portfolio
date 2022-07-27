import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="h-20 w-full pr-24 pt-12 absolute">
        <div className="w-full flex justify-end">
          <div className="w-1/3 flex justify-between text-white font-mono">
            <Link to={"/"}>
              <div>
                <span className="text-green-200">00.</span>
                <br /> Welcome
              </div>
            </Link>
            <Link to={"/about"}>
              <div>
                <span className="text-green-200">01.</span>
                <br /> About
              </div>
            </Link>
            <Link to={"/experience"}>
              <div>
                <span className="text-green-200">02.</span>
                <br /> Experience
              </div>
            </Link>
            <Link to={"/projects"}>
              <div>
                <span className="text-green-200">03.</span>
                <br /> Projects
              </div>
            </Link>
            <Link to={"/contact"}>
              <div>
                <span className="text-green-200">04.</span>
                <br /> Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
