import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {

    const {currency,delivery,getCartAmount} = useContext(ShopContext);

  return (
    <div className="w-full">
        <div className="text-2xl">
            <Title text1={"CART"} text2={"TOTAL"}/>
        </div>

        <div className="flex flex-col gap-2 mt-2 text-base divide-black text-amber-900">
            <div className="flex justify-between">
                <p>Subtotal</p>
                <p>{currency} {getCartAmount()}</p>
            </div>
            <hr className=""/>
            <div className="flex justify-between">
                <p>Shipping Fee</p>
                <p>{currency} {delivery}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal