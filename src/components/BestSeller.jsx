import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {

    const {products} = useContext(ShopContext);
    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestItem = products.filter((item)=>(item.bestseller));
        setBestSeller(bestItem.slice(0,5))
    },[])

  return (
    <div className="mt-5 mb-20">
        <div className="text-center text-3xl py-8">
            <Title text1={"BEST"} text2={"SELLERS"}/>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                )
                )
            }
        </div>
    </div>
  )
}

export default BestSeller