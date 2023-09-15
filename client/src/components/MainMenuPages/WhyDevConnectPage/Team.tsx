// import React from "react";

export default function Team() {
  return (
    <div className="">
      <div className="relative">
        <div className="flex items-center justify-center">
          <div className="text-left whitespace-nowrap">
            <h1 className="text-[2rem] font-bold text-tersiary">
              Meet the developers
            </h1>
            <p className="mt-2 text-tersiary">
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
            <div className="absolute top-[330px] right-[400px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out animate-float">
              <img
                className="h-14 w-14 rounded-full object-cover object-top"
                src="/assets/img/ali.jpeg"
                alt="avatar"
              />
            </div>

            {/* Giorgi Avatar */}
            <div className="absolute top-[100px] right-[400px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
              <img
                className="h-14 w-14 rounded-full object-cover object-top"
                src="/assets/img/giorgi.jpeg"
                alt="avatar"
              />
            </div>
            {/* Green Avatar */}
            <div className="absolute top-[240px] right-[480px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
              <img
                className="h-14 w-14 rounded-full object-cover object-top"
                src="/assets/img/ali.jpeg"
                alt="avatar"
              />
            </div>
            {/* Edris Avatar */}
            <div className="absolute top-[160px] right-[430px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out">
              <img
                className="h-14 w-14 rounded-full object-cover object-top"
                src="/assets/img/edris.png"
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
