import React from "react";

export default function About() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-2/5">
          <div className="text-white text-2xl font-mono">
            <span className="text-green-200">01.</span> About Me
          </div>
          <div className="text-white text-md text-justify">
            I am a team driven person, that always puts the growth of everyone
            as the number one priority. I am fascinated by the fast pace
            technology brought us humans many steps forward. I am a curious
            person with a continuos improvement mindset. Challenges are what
            really get the best out of me, but i believe that competition only
            exists outside of the company.
          </div>
          <div className="text-white text-md text-justify">
            I made my first steps as a software engineer in Austria in one of
            the best technology campus in Europe. After working full time for a
            leading E-Learning provider, Click&Learn, I took some time to travel
            South America in order to broaden my horizon.
          </div>
          <div className="text-white text-md text-justify">
            From October 2022 on I will officially have my Master of Science degree,
            which I attained in Information Systems at the University of Passau.
          </div>
        </div>
      </div>
    </>
  );
}
