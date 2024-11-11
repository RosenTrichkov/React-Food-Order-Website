import React from "react";

const NewsletterBox = () => {

  const onSubmitFunction = (event) => {
    event.preventDefault();
  }

  return (
    <div className="text-center lg:pt-8 md:pt-0">
      <p className="lg:text-2xl md:text-2xl text-xl font-medium text-amber-950">Subscribe now & get a 20% discount voucher!</p>
      <p className="text-amber-900 mt-3 text-base lg:text-lg md:text-lg">We update our menu monthly, stay informed of all our tasty dishes with our monthly newsletter!</p>
      <form onSubmit={onSubmitFunction} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border-[2px] border-[#866042] pl-3">
        <input className="w-full sm:flex-1 outline-none bg-[#f0d89e] text-base lg:text-lg md:text-lg text-amber-900 placeholder-opacity-60 placeholder-amber-900" type="email" placeholder="Enter your email" />
        <button type="submit" className="bg-red-900 hover:bg-red-950 transition-all duration-500 text-white text-base px-5 py-3 lg:text-lg md:text-lg lg:px-10 lg:py-4 md:px-5 md:py-4">Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox