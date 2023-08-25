import { HiStar } from "react-icons/hi";

const RatesStars = ({ num,reviews }: { num: number,reviews?:number }) => {
    const stars = new Array(5).fill("hey");
  return (
      <div className="flex justify-between max-w-fit items-center gap-3">
          <div className="flex gap-0">
              {
                  stars.map((st, i) => (
                      <p
                          className={`${i<num?'text-orange-500':'text-slate-500'} text-xl`}
                          key={i}>
                          <HiStar/>
                      </p>
                  ))
              }
          </div>
          <div className="text-green-900 dark:text-green-100">
              {reviews} {" "} reviews
          </div>
      </div>
  )
}

export default RatesStars