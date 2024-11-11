import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {

  const [method,setMethod] = useState("cod");

  const {navigate} = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 border-t-[2px] border-[#866042]">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">

        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"}/>
        </div>
        <div className="flex gap-3">
            <input className="border border-gray-800 rounded py-1.5 px-3.5 w-full text-amber-900 placeholder-opacity-60 placeholder-amber-900" type="text" placeholder="First name" />
            <input className="border border-gray-800 rounded py-1.5 px-3.5 w-full text-amber-900 placeholder-opacity-60 placeholder-amber-900" type="text" placeholder="Last name" />
        </div>
        <input className="border border-gray-800 rounded py-1.5 px-3.5 w-full text-amber-900 placeholder-opacity-60 placeholder-amber-900" type="email" placeholder="Email address" />
        <input className="border border-gray-800 rounded py-1.5 px-3.5 w-full text-amber-900 placeholder-opacity-60 placeholder-amber-900" type="text" placeholder="Street name" />
        <div className="flex gap-3">
            <input className="border border-gray-800 rounded py-1.5 px-3.5 w-full text-amber-900 placeholder-opacity-60 placeholder-amber-900" type="text" placeholder="City" />
            <input className="border border-gray-800 rounded py-1.5 px-3.5 w-full text-amber-900 placeholder-opacity-60 placeholder-amber-900" type="text" placeholder="State" />
        </div>
        <div className="flex gap-3">
            <input className="border border-gray-800 rounded py-1.5 px-3.5 w-full text-amber-900 placeholder-opacity-60 placeholder-amber-900" type="number" placeholder="Zipcode" />
            <input className="border border-gray-800 rounded py-1.5 px-3.5 w-full text-amber-900 placeholder-opacity-60 placeholder-amber-900" type="text" placeholder="Country" />
        </div>
        <input className="border border-gray-800 rounded py-1.5 px-3.5 w-full text-amber-900 placeholder-opacity-60 placeholder-amber-900" type="number" placeholder="Phone number" />
      </div>


      <div className="mt-8">

          <div className="mt-8 min-w-80">
              <CartTotal/>
          </div>

          <div className="mt-12">
            <Title text1={"PAYMENT"} text2={"METHOD"}/>

            <div className="flex gap-3 flex-col lg:flex-row">

                <div onClick={()=>setMethod("stripe")} className="flex items-center gap-3 border-[2px] border-[#866042] p-2 px-3 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 rounded-full border-[2px] border-[#866042] ${method === "stripe" ? "bg-red-900" : ""}`}></p>
                    <img className="h-7 mx-4" src={assets.stripe_logo} alt="" />
                </div>
                <div onClick={()=>setMethod("paypal")} className="flex items-center gap-3 border-[2px] border-[#866042] p-2 px-3 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 rounded-full border-[2px] border-[#866042] ${method === "paypal" ? "bg-red-900" : ""}`}></p>
                    <img className="h-7 mx-4" src={assets.paypal_logo} alt="" />
                </div>
                <div onClick={()=>setMethod("card")} className="flex items-center gap-3 border-[2px] border-[#866042] p-3 px-3 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 rounded-full border-[2px] border-[#866042] ${method === "card" ? "bg-red-900" : ""}`}></p>
                    <p className="text-amber-900 text-sm font-medium mx-4">CREDIT CARD</p>
                </div>
                <div onClick={()=>setMethod("cod")} className="flex items-center gap-3 border-[2px] border-[#866042] p-3 px-3 cursor-pointer">
                    <p className={`min-w-3.5 h-3.5 rounded-full border-[2px] border-[#866042] ${method === "cod" ? "bg-red-900" : ""}`}></p>
                    <p className="text-amber-900 text-sm font-medium mx-4">PAY CASH ON DELIVERY</p>
                </div>

            </div>

            <div className="w-full text-end mt-8">
                <button onClick={()=>navigate("/orders")} className="bg-red-900 hover:bg-red-950 transition-all duration-500 text-white px-16 py-3 text-base">MAKE ORDER</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default PlaceOrder