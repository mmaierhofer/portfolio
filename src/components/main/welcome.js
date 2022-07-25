import React from "react";

export default function Welcome() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-1/2">
          <div className="text-white text-2xl">Hey, I am</div>
          <div className="text-white text-8xl font-bold">Maxi Maierhofer.</div>
          <div className="text-white text-5xl font-bold">
            An passionate Backend Engineer for everything Web.
          </div>
          <div className="text-white text-xl mt-4">My Tech Stack:</div>
          <div className="text-white text-xl">
            Java, Javascript, PostgreSQL, Quarkus, React, Azure, Python
          </div>
        </div>
      </div>
    </>
  );
}
