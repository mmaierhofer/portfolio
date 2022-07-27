import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { RiLinkedinLine, RiInstagramLine } from "react-icons/ri";

export default function Sidebar() {
  return (
    <>
      <div className="absolute h-screen w-20 left-0">
        <div className="h-full w-full flex flex-col justify-end text-3xl items-center pb-32 text-slate-400">
          <a
            className="mt-4 cursor-pointer"
            href="https://github.com/mmaierhofer"
          >
            <VscGithubAlt />
          </a>
          <a
            className="mt-8 cursor-pointer"
            href="https://www.linkedin.com/in/maximilian-maierhofer-0a0924135/"
          >
            <RiLinkedinLine />
          </a>
          <a
            className="mt-8 cursor-pointer"
            href="https://www.instagram.com/flyrhfr_/"
          >
            <RiInstagramLine />
          </a>
        </div>
      </div>
    </>
  );
}
