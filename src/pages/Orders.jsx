import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {

  const {products,currency} = useContext(ShopContext);

  return (
    <div className="border-t-[2px] border-[#866042] pt-16">

      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"}/>
      </div>

      <div>
        {
          products.slice(1,3).map((item,index)=>(
            <div key={index} className="py-4 border-t border-[#866042] flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-6 text-sm">
                    <img className="w-28 mt-[8px] h-[65px] lg:w-32 lg:h-[80px] lg:mt-[4px] md:w-28 md:h-[70px] md:mt-[8px] sm:w-28 sm:h-16 sm:mt-[8px]" src={item.image[0]} alt="" />
                    <div >
                        <p className="sm:text-base lg:text-lg md:text-lg font-medium text-amber-950">{item.name}</p>
                        <div className="flex md:text-base text-sm items-center gap-3 mt-2 sm:text-sm text-amber-900">
                            <p className="text-base lg:text-lg md:text-lg sm:text-base">{currency}{item.price}</p>
                            <p>Quantity: 1</p>
                            <p>Size: M</p>
                        </div>
                        <p className="mt-2 text-amber-950 sm:text-xs">Date: <span className="text-amber-900">25,Jul, 2024</span></p>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-between">
                    <div className="flex items-center gap-2">
                        <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                        <p className="text-sm md:text-base sm:text-sm text-amber-950">Ready to ship</p>
                    </div>
                    <button className="border border-[#866042] px-5 py-3 text-sm font-medium rounded-sm bg-red-900 hover:bg-red-950 transition-all duration-500 text-white">Track Order</button>
                </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders