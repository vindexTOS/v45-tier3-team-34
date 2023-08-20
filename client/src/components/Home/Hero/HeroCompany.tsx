const HeroCompany = ({ title, icon }: {
    title:string,icon:string
}) => {
  return (
    <div className="flex gap-2 w-fit items-center justify-center cursor-pointer">
          <img className="w-10 h-10 filter grayscale hover:filter-none" src={icon} alt="company" />
          <p className="text-md font-bold capitalize hidden md:block">{title}</p>
    </div>
  )
}

export default HeroCompany
