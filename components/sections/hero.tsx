

import React from "react";
import Fadein from "../transitions/fadein";
import Rollup from "../transitions/rollup";


const hero = () => {
  return (
    <>
      <main className="w-screen h-[calc(100vh-4rem)] bg-gradient-to-r from-violet-50  via-purple-100 to-fuchsia-50 flex justify-center items-start bg-fixed">
        <div className="max-w-[1200px] w-[95%] sm:w-full  flex justify-center items-center text-center flex-col">
          <div
        
            className="py-36 sm:px-16"
          >
            <Fadein
              text="  Crafting Tommorrow's Tech,"
              className={"text-5xl md:text-7xl font-medium "}
            ></Fadein>
            <Fadein
              delay={2.4}
              text="Today !"
              className={"text-5xl md:text-7xl font-medium text-primary-1"}
            ></Fadein>
          </div>

          <Rollup
            text={
              "   Join us in revolutionizing the digital landscape and shaping the future together !"
            }
            className={"text-2xl font-thin"}
          ></Rollup>
        </div>
      </main>
    </>
  );
};

export default hero;
