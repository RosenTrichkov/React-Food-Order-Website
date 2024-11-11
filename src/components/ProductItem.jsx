import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import {Link} from "react-router-dom";

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext)

  return (
    <Link className="text-amber-900 cursor-pointer" to={`/product/${id}`}>
        <div className="overflow-hidden border border-[#866042]">
            <img className="hover:scale-110 transition ease-in-out" src={image[0]} alt="" />

        </div>
        <p className="pt-3 pb-1 text-base">{name}</p>
        <p className="text-base font-medium">{currency}{price}</p>
    </Link>
  )
}

export default ProductItem