import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t-[2px] border-[#866042]">
          <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className="my-10 flex flex-col lg:flex-row md:flex-col gap-16">
        <img className="w-full lg:max-w-[500px] lg:max-h-[500px] md:w-full border-[4px] border-[#866042]" src={assets.logo} alt="" />
        <div className="flex flex-col text-base lg:text-base md:text-base justify-center gap-6 md:w-full text-amber-900">
            <p>The Tasty Tavern is a family owned restaurant which offers amazing food at affordable prices. Please feel welcome to come to our restaurant or make an order here on our website, we will make sure you get your food on time wherever and whenever!</p>
            <p>You can trust our 20 years of experience in delivering the best possible experience for you, your friends and your fammily. Be ready for a truly tasty experience!</p>
            <b className="text-amber-950 text-lg">Our Mission</b>
            <p>Ensuring that every single one of our clients has the best possible food and experience when visiting our restaurant as well as when ordering our food at home. We make sure that all of our clients can trust us!</p>
        </div>
      </div>

      <div className="text-xl py-4">
          <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-col text-base mb-20">
        <div className="border-[2px] lg:border-r-[0px] md:border-r-[2px] sm:border-r-[2px] px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-[#866042]">
          <b className="text-amber-950 text-lg">Quality:</b>
          <p className="text-amber-900">Our cooks are talanted and renowned chefs that ensure that every dish has an amazing taste, we ensure and are commited to delivering perfectionism in every dish.
          </p>
        </div>
        <div className="border-[2px] lg:border-t-[2px] md:border-t-[0px] md:border-r-[2px] lg:border-r-[0px] border-r-[2px] border-t-[0px] sm:border-r-[2px] sm:border-t-[0px] px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-[#866042]">
          <b className="text-amber-950 text-lg">Convenience:</b>
          <p className="text-amber-900">Due to our excellent employees the Tasty Tavern ensures that we offer the best possible serivice both in our restaurant as well as when we deliver food to you!
          </p>
        </div>
        <div className="border-[2px] lg:border-t-[2px] md:border-t-[0px] sm:border-t-[0px] border-t-[0px] px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 border-[#866042]">
          <b className="text-amber-950 text-lg">Affordability:</b>
          <p className="text-amber-900">We offer great prices regardless of which dish or what portion you choose. We are dedicated in ensuring that every customer can enjoy our food no matter what.
          </p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About