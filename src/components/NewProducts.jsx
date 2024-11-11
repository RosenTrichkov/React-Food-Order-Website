import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const NewProducts = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts,setLatestProducts] = useState([]);

    useEffect(()=>{
        const newItem = products.filter((item)=>(item.new));
        setLatestProducts(newItem.slice(0,10));
    },[])

  return (
    <div className="my-10">
        <div className="text-center py-8 text-3xl">
            <Title text1={"LATEST"} text2={"DISHES"}/>
        </div>

    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4">
        {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
    </div>

    </div>
  )
}

export default NewProducts