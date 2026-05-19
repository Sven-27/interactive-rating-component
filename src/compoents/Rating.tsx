import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <>
      <div className="size-[clamp(40px,7vw,48px)] rounded-full bg-grey-900 grid place-items-center">
        <FaStar className="text-orange-500 text-[clamp(14px,3vw,16px)]" />
      </div>
      <section className="">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
        </p>
        <ul className="flex items-center justify-between mt-6 mb-8">
          <li className="size-[clamp(40px,7vw,48px)] rounded-full bg-grey-900 grid place-items-center hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"><span>1</span></li>
          <li className="size-[clamp(40px,7vw,48px)] rounded-full bg-grey-900 grid place-items-center hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"><span>2</span></li>
          <li className="size-[clamp(40px,7vw,48px)] rounded-full bg-grey-900 grid place-items-center hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"><span>3</span></li>
          <li className="size-[clamp(40px,7vw,48px)] rounded-full bg-grey-900 grid place-items-center hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"><span>4</span></li>
          <li className="size-[clamp(40px,7vw,48px)] rounded-full bg-grey-900 grid place-items-center hover:bg-orange-500 hover:text-white transition-colors duration-300 cursor-pointer"><span>5</span></li>
        </ul>
        <button className="w-full py-3 bg-orange-500 text-black uppercase tracking-wide rounded-full hover:bg-white hover:text-orange-500 transition-colors duration-300">Submit</button>
      </section>
    </>
  )
}

export default Rating