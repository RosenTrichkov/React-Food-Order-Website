import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>

      <div className="text-center text-2xl pt-10 border-t-[2px] border-[#866042]">
        <Title text1={"CONTACT"} text2={"INFORMATION"}/>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-14 mb-28">
          <img className="w-full md:max-w-[480px] border-[4px] border-[#866042]" src={assets.logo} alt="" />
          <div className="flex flex-col justify-center items-start gap-6 text-base">
              <p className="font-semibold text-xl text-amber-950">Our Restaurant</p>
              <p className="text-amber-900">22 Tasty Street <br />N2 9JZ, London, United Kingdom</p>
              <p className="text-amber-900">Tel: (+44) 78999999 <br />Email: something@tastytavern.com</p>
              <p className="font-semibold text-xl text-amber-950">Jobs at The Tasty Tavern</p>
              <p className="text-amber-900">Learn more about our job openings.</p>
              <button className="border-[2px] border-[#866042] px-6 py-3 text-base hover:bg-red-900 hover:text-white transition-all duration-500 text-amber-900">Explore Jobs</button>
          </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default Contact