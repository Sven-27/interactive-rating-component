import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ setSelected }: { setSelected: (rating: number | null) => void }) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const ratings: number[] = [1,2,3,4,5];

  return (
    <>
      <div className="size-[clamp(40px,7vw,48px)] rounded-full bg-grey-900 grid place-items-center mb-[clamp(24px,5vw,32px)]">
        <FaStar className="text-orange-500 text-[clamp(14px,3vw,16px)]" />
      </div>
      <section className="">
        <h1 className="text-white text-[clamp(24px,5vw,28px)] font-bold">How did we do?</h1>
        <p className="text-grey-500 text-[clamp(14px,3vw,15px)] mt-4">
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <ul className="flex items-center justify-between mt-6 mb-8">
          {
            ratings.map((rating: number) => (
              <li 
                key={rating}
                className={`size-[clamp(42px,7vw,52px)] rounded-full bg-grey-900 grid place-items-center hover:bg-orange-500 focus:bg-white active:bg-white focus:text-black transition-colors duration-300 cursor-pointer ${selectedRating === rating ? 'bg-orange-500' : ''}`}
                onClick={() => {
                  setSelectedRating(rating);
                }}
              >
                <span className="text-grey-500 text-[clamp(14px,3vw,16px)]">{rating}</span>
              </li>
            ))
            
          }
        </ul>
        <button 
          className="w-full py-3 text-[14px] font-semibold bg-orange-500 text-black uppercase tracking-wide rounded-full hover:bg-white hover:text-orange-500 transition-colors duration-300"
          onClick={() => setSelected(selectedRating)}
        >
          Submit
        </button>
      </section>
    </>
  )
}

export default Rating