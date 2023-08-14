import { companies } from "../../contants"
import HeroCTAButton from "../Buttons/HeroCTAButton"
import HeroCompany from "./HeroCompany"


const HeroSection = () => {
  return (
    <section className="bg-gray-100 w-full flex flex-col sm:flex-row">
          <article className="flex-1 flex flex-col gap-20 p-5 md:px-20">
              <div className="flex flex-col gap-3 md:gap-8">
                  <h1 className="text-4xl md:text-8xl capitalize font-bold">how work should work</h1>
                  <p className="text-lg font-semibold">Forget the old rules.you can have the best people <br />Right now. Right here.</p>

                  {/* actions */}
                  <div className="flex gap-x-10 gap-y-2 sm:gap-14 w-full sm:w-max flex-wrap">  
                      <HeroCTAButton title="Hire developers" color="red"/>
                      <HeroCTAButton title="Explorer services" color="white"/>
                  </div>
              </div>
              <div className="flex flex-col gap-4">
                  <h2 className="text-gray-500 font-medium text-lg">Working with the best</h2>
                  {/* socials */}
                  <div className="flex gap-8">
                      {
                          companies.map(({ name, icon }) => (
                              <HeroCompany key={name} title={name} icon={icon} />
                          ))
                      }
                  </div>
              </div>
          </article>
          {/* Image section */}
        <article className="flex-1">
        <img className="" src="assets/img/hero-image.svg" alt="hero"/>
      </article>
    </section>
  )
}

export default HeroSection
