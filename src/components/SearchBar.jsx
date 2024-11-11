import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {

const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
const [visible,setVisible] = useState(false)
const location = useLocation();

useEffect(()=>{
    if (location.pathname.includes("menu")) {
        setVisible(true);
    }
    else{
        setVisible(false)
    }
},[location])

  return showSearch && visible ? (
    <div className=" border-t-[2px] border-[#866042] bg-[#f0d89e] text-center">
        <div className="inline-flex items-center justify-center border-[2px] border-[#866042] px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
            <input value={search} onChange={(e=>setSearch(e.target.value))} className="flex-1 outline-none bg-inherit text-md placeholder-opacity-60 placeholder-amber-900 text-amber-900" type="text" placeholder="Search" />
            <img className="w-5" src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className="inline w-5 cursor-pointer" src={assets.cross_icon} alt="" />

    </div>
  ): null
}

export default SearchBar