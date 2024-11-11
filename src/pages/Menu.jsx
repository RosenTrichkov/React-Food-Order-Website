import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Menu = () => {

  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category,setCategory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType,setSortType] = useState("relavent");

  const toggleCategory = (e) =>{
    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item=> item !==e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) =>{
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev=> prev.filter(item=> item !==e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

  const applyFilter = () => {

    let copy = products.slice();

    if (showSearch && search) {
      copy = copy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      copy = copy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      copy = copy.filter(item => subCategory.includes(item.subcategory))
    }
    setFilterProducts(copy)

  }

  const sortProduct = () =>  {

    let fCopy = filterProducts.slice();

    switch(sortType){
      case "high-low":
        setFilterProducts(fCopy.sort((a,b)=>(b.price - a.price)));
        break;
        
      case "low-high":
      setFilterProducts(fCopy.sort((a,b)=>(a.price - b.price)));
      break;
      
      default:
        applyFilter();
        break;
    }

  }

useEffect(()=>{
applyFilter()
},[category,subCategory,search,showSearch])

useEffect(()=>{
  sortProduct();
},[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t-[2px] border-[#866042]">

     
      <div className="min-w-60">
        <p onClick={()=>setShowFilter(!showFilter)} className="my-2 text-xl flex items-center gap-2 text-amber-950">FILTERS
          <img className={`h-3 sm:hidden ${showFilter? "rotate-90" : ""}`} src={assets.dropdown_right} alt="" />
        </p>
        
        <div className={`border-[2px] border-[#866042] pl-5 py-3 mt-6 accent-red-900 ${showFilter ? "":"hidden"} sm:block`}>
          <p className="mb-2 text-base font-medium text-amber-950">CATEGORY</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 text-amber-900">
              <input className="w-3 cursor-pointer" type="checkbox" value={"Main Dish"} onChange={toggleCategory}/> Main
            </p>
            <p className="flex gap-2 text-amber-900">
              <input className="w-3 cursor-pointer" type="checkbox" value={"Salads"} onChange={toggleCategory}/> Salads
            </p>
            <p className="flex gap-2 text-amber-900">
              <input className="w-3 cursor-pointer" type="checkbox" value={"Desserts"} onChange={toggleCategory}/> Desserts
            </p>
          </div>
        </div>
        
        <div className={`border-[2px] border-[#866042] pl-5 py-3 mt-6 my-5 accent-red-900 ${showFilter ? "":"hidden"} sm:block`}>
          <p className="mb-2 text-base font-medium text-amber-950">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 text-amber-900">
              <input className="w-3 cursor-pointer" type="checkbox" value={"Meat"} onChange={toggleSubCategory}/> Meat
            </p>
            <p className="flex gap-2 text-amber-900">
              <input className="w-3 cursor-pointer" type="checkbox" value={"Vegeterian"} onChange={toggleSubCategory}/> Vegeterian
            </p>
            <p className="flex gap-2 text-amber-900">
              <input className="w-3 cursor-pointer" type="checkbox" value={"Vegan"} onChange={toggleSubCategory}/> Vegan
            </p>
          </div>
        </div>
      </div>

     
      <div className="flex-1">

        <div className="flex justify-between text-base sm:text-2xl mb-4">
            <Title text1={"CURRENT"} text2={"MENU"} />
            
            <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-base ps-2">
              <option value="relavent">Sort by: Relavent</option>
              <option value="low-high">Sort by: Low to High</option>
              <option value="high-low">Sort by: High to Low</option>
            </select>
        </div>

        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
            ))
          }
        </div>


      </div>

    </div>
  )
}

export default Menu