import React from "react";
import { assets } from "../assets/assets";

const Intro = () => {
  return (
     <div className="flex flex-col sm:flex-row border-[3px] border-[#866042]">
        <div className="w-full sm:w-1/2 flex  justify-center items-center py-10 sm:py-0">
            <div className="text-amber-900">
                <div>
                    <p className="font-medium text-sm lg:text-lg md:text-base sm:text-sm">WORLD RENOWNED</p>
                </div>
                <h1 className="prata-regular text-3xl lg:py-2 md:py-1 sm:py-1 lg:text-5xl md:text-4xl sm:text-3xl leading-relaxed">Delicious Food</h1>
                <div>
                <p className="font-medium text-sm lg:text-lg md:text-base sm:text-sm">AT THE TASTY TAVERN</p>
                </div>
            </div>
        </div>
        <img className="w-full sm:w-1/2 sm:h-auto" src={assets.intro_img} alt="" />
    </div>
  )
}

export default Intro