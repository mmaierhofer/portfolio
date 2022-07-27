import React from "react";

export default function Contact() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center flex-col">
        <div className="text-white text-2xl font-mono">
          <span className="text-green-200">04.</span> Leave me a message
        </div>
        <a
          href="mailto:mmaierhofer@outlook.de"
          className="mt-20 text-green-200 p-4 border-2 border-green-200 w-40 text-center text-lg hover:bg-green-200 hover:text-slate-800 cursor-pointer"
        >
          Email me
        </a>
      </div>
    </>
  );
}
