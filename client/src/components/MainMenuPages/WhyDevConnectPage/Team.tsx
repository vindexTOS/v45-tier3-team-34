// import React from "react";

import { AliHover } from "./AliHover";
import { EdrisHover } from "./EdrisHover";
import { GiorgiHover } from "./GiorgiHover";
import { GreenHover } from "./GreenHover";

export default function Team() {
  return (
    <div className="">
      <div className="relative">
        <div className="flex items-center justify-center">
          <div className="text-left whitespace-nowrap text-tersiary dark:text-muted">
            <h1 className="text-[2rem] font-bold">
              Meet the developers
            </h1>
            <p className="mt-2">
              Hover over each photo to see more
              information
            </p>
            <hr className="mt-4 border-primary w-16 border-2" />
          </div>
          {/* Map */}
          <div>
            <img
              src="/assets/img/map.png"
              alt="map"
              className="p-5 opacity-40"
            />
          </div>

          {/* People */}
          <div className="hidden lg:block">
            {/* Ali Avatar */}
            <div className="absolute top-[360px] right-[430px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-float">
              <AliHover />
            </div>

            {/* Green Avatar */}
            <div className="absolute top-[240px] right-[480px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
              <GreenHover />
            </div>
            {/* Edris Avatar */}
            <div className="absolute top-[160px] right-[430px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
              <EdrisHover />
            </div>
            {/* Giorgi Avatar */}
            <div className="absolute top-[100px] right-[450px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
              <GiorgiHover />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
