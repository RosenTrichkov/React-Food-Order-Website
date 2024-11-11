import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {

const {productId} = useParams();
const {products, currency,addToCart} = useContext(ShopContext);
const [productData,setProductData] = useState(false);
const [image,setImage] = useState("");
const [size,setSize] = useState("");

const fethProductData = async () => {

products.map((item)=>{
if (item._id === productId) {
  setProductData(item)
  setImage(item.image[0])
  return null;
}
})

}

useEffect(()=>{
  fethProductData();
},[productId])

  return productData ? (
    <div className="border-t-[2px] border-[#866042] pt-10 transition-opacity ease-in duration-500 opactiy-100">

      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">


        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
              {
                productData.image.map((item,index)=>(
                  <img onClick={()=>setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
                ))
              }
          </div>
          <div className="w-full sm:-[80%]">
              <img className="w-auto h-auto mt-3" src={image} alt="" />
          </div>
        </div>


        <div className="flex-1 divide-black">
          <h1 className="font-medium text-2xl mt-2 text-amber-950">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.star_icon} alt="" className="w-3 5" />
                <img src={assets.empty_star} alt="" className="w-3 5" />
                <p className="pl-2 text-amber-900">(100)</p>
            </div>
            <p className="mt-5 text-3xl font-medium text-amber-950">{currency}{productData.price}</p>
            <p className="mt-3 font-semibold text-amber-900 md:w-4/5 text-lg">{productData.description}</p>
            <div className="flex flex-col gap-4 my-8 text-amber-900 text-base">
              <p className="font-semibold">Select Size:</p>
              <div className="flex gap-2">
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border-[2px] py-2 px-4 bg-gray-100 ${item === size ? "border-[#866042]" : ""}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className="bg-red-900 text-white px-8 py-3 text-sm active:bg-red-950">ADD TO CART</button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-amber-900 mt-5 flex flex-col gap-1">
                <p>Cash on delivery is available</p>
                <p>Different portion sizes, same price</p>
            </div>
        </div>
      </div>


      <div className="mt-20">
          <div className="flex">
              <b className="border-[2px] border-b-[0px] border-r-[1px] border-[#866042] px-5 py-3 text-sm text-amber-950">Description & Ingredients</b>
              <p className="border-[2px] border-b-[0px] border-l-[1px] border-[#866042] px-5 py-3 text-sm text-amber-950">Reviews (100)</p>
          </div>
          <div className="flex flex-col gap-4 border-[2px] border-[#866042] px-6 py-6 text-sm text-amber-900">
              <p>Here at the Tasty Tavern we offer the best food at offordable prices, please enjoy our amazing dishes which contain only the tastiests of ingredients that will leave you wanting more!</p>
              <b>Ingredients:</b>
              {productData.ingredients.map((item,index)=>(
                <p key={index}>- {item}</p>))}
          </div>
      </div>


    <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className="opacity-0"></div>
}

export default Product