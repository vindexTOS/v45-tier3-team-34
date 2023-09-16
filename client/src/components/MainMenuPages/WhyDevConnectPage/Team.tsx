import { AliHover } from "./AliHover";
import { EdrisHover } from "./EdrisHover";
import { GiorgiHover } from "./GiorgiHover";
import { GreenHover } from "./GreenHover";
export default function Team() {
  return (
    <div className="hidden lg:block">
      <div className="relative">
        <div className="flex items-center justify-center flex-col lg:flex-row">
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
          <div className="">
            {/* Map */}
            <div>
              <img
                src="/assets/img/map-01.png"
                alt="map"
                className=""
              />
            </div>

            {/* People */}

            {/* Ali Avatar */}
            <div className="absolute top-[390px] right-[420px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
              <AliHover />
            </div>

            {/* Green Avatar */}
            <div className="absolute top-[280px] right-[480px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
              <GreenHover />
            </div>
            {/* Edris Avatar */}
            <div className="absolute top-[200px] right-[450px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
              <EdrisHover />
            </div>
            {/* Giorgi Avatar */}
            <div className="absolute top-[130px] right-[420px] rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer">
              <GiorgiHover />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
