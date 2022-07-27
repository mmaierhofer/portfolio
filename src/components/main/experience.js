import React, { useState } from "react";

export default function Experience() {
  const [comp, setComp] = useState("itm");

  const getActive = (name) => {
    if (name === comp) {
      return "text-green-200 bg-slate-800 p-2";
    }
    return "text-white cursor-pointer p-2";
  };

  const getContent = () => {
    if (comp === "itm") {
      return (
        <div>
          <div className="text-xl">
            Software Engineer{" "}
            <a
              href="https://www.it-manufactory.com/de/"
              className="text-green-200"
            >
              @ITM
            </a>
          </div>
          <div className="text-slate-400">Jun 2020 - Now</div>
          <div className="flex flex-col text-left mt-4 text-slate-400">
            <div className="flex flex-row">
              <div className="text-green-200">▸</div>
              <div>
                Designing/Assisting the migration process from Monolith to
                Microservices
              </div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="text-green-200">▸</div>
              <div>
                Implementing a Master Data Module in order to modify incoming
                automotive data
              </div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="text-green-200">▸</div>
              <div>
                Migrating the ORM-Provider from EclipseLink to Hibernate
              </div>
            </div>
          </div>
        </div>
      );
    } else if (comp === "oclay") {
      return (
        <div>
          <div className="text-xl">
            Cofounder{" "}
            <a href="https://oclay.de/" className="text-green-200">
              @Oclay
            </a>
          </div>
          <div className="text-slate-400">May 2020 - May 2021</div>
          <div className="flex flex-col text-left mt-4 text-slate-400">
            <div className="flex flex-row">
              <div className="text-green-200">▸</div>
              <div>Building an artisanal ceramic shop from ground up</div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="text-green-200">▸</div>
              <div>
                Implementing the Landing-Page, Catalog, Online-Shop and
                Eventplaner
              </div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="text-green-200">▸</div>
              <div>Implementing the social media marketing strategy</div>
            </div>
            <div className="flex flex-row mt-2">
              <div className="text-green-200">▸</div>
              <div>
                I stepped out of the company after I realized that my cofounder,
                friend and artist Simon is the heart of the shop, and the
                technological aspect was just of supportive character.
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="text-xl">
          Web Developer{" "}
          <a href="https://oclay.de/" className="text-green-200">
            @Click&Learn
          </a>
        </div>
        <div className="text-slate-400">Jan 2017 - Oct 2019</div>
        <div className="flex flex-col text-left mt-4 text-slate-400">
          <div className="flex flex-row">
            <div className="text-green-200">▸</div>
            <div>
              Project Manager for implementation of the Learning Software for
              Greenpeace Austria
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div className="text-green-200">▸</div>
            <div>
              Creation of a Employee Rating System in the Learn Management
              Software
            </div>
          </div>
          <div className="flex flex-row mt-2">
            <div className="text-green-200">▸</div>
            <div>
              Focus on automated Excel Reports to provide the customer exact
              knowledge over the learn process of the employees
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-1/2">
          <div className="text-white text-2xl font-mono">
            <span className="text-green-200">02.</span> Where I got my Skills
          </div>
          <div className="text-white w-full border-2 p-12 pl-0 h-80">
            <div className="flex">
              <div className=" w-1/5">
                <div
                  className={getActive("itm")}
                  onClick={(e) => setComp("itm")}
                >
                  ITM
                </div>
                <div
                  className={getActive("oclay")}
                  onClick={(e) => setComp("oclay")}
                >
                  Oclay
                </div>
                <div className={getActive("cl")} onClick={(e) => setComp("cl")}>
                  Click&Learn
                </div>
              </div>

              <div className="text-left pl-6 w-4/5">{getContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
