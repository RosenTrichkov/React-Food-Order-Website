import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";

const Cart = () => {

  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(()=>{

    const tempData = [];
    for(const items in cartItems){
      for(const item in cartItems[items]){
       if (cartItems[items][item] > 0) {
        tempData.push({
          _id: items,
          size: item,
          quantity: cartItems[items][item]
        })
       } 
      }
    }
setCartData(tempData)
  },[cartItems])

  return (
    <div className="border-t-[2px] border-[#866042] pt-14">

      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"}/>
      </div>  

      <div>
        {
          cartData.map((item,index)=>{

            const productData = products.find((product)=> product._id === item._id);

            return (
              <div key={index} className="py-4 border-t border-b border-[#866042] grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                <div className="flex items-start gap-6">
                  <img className="w-24 mt-[0px] h-[60px] lg:w-32 lg:h-[80px] lg:mt-[0px] md:w-28 md:h-[70px] md:mt-[0px] sm:w-28 sm:h-16 sm:mt-[2px]" src={productData.image[0]} alt="" />
                  <div>
                    <p className="text-s sm:text-lg font-medium text-amber-900">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2 text-amber-900">
                      <p>{currency}{productData.price}</p>
                      <p className="px-2 sm:px-3 sm:py-1 border-[1px] border-[#866042] bg-slate-50">{item.size}</p>
                    </div>
                  </div>
                </div>
                <input onChange={(e)=> e.target.value === "" || e.target.value === "0" ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className="border-[1px] border-[#866042] max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 text-amber-900 " type="number" min={1} defaultValue={item.quantity} />
                <img onClick={()=>updateQuantity(item._id, item.size, 0)} className="w-5 mr-4 sm:w-5 cursor-pointer" src={assets.trash} alt="" />
              </div>
            )

          })
        }
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal/>
          <div className="w-full text-end">
            <button onClick={()=>navigate("/place-order")} className="bg-red-900 hover:bg-red-950 transition-all duration-500 text-white text-sm my-8 px-8 py-3">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart