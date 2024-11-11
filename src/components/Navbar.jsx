import React, {useContext, useState} from "react";
import {assets} from "../assets/assets"
import {Link, NavLink} from "react-router-dom"
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {

  const [visible,setVisible] = useState(false)

  const {setShowSearch, getCartCount} = useContext(ShopContext);

  const [selected, setSelected] = useState("");


  return (
    <div className="flex items-center justify-between py-2 font-medium">
        <Link to={"/React-Food-Order-Website"}><img src={assets.logo} className="w-28" alt=""/></Link>
        
        <ul className="hidden sm:flex gap-5 text-base text-amber-950">
          <NavLink to="/React-Food-Order-Website" className="flex flex-col items-center gap-1">
              <p>HOME</p>
              <hr className="w-2/4 border-none h-[1.6px] bg-[#866042] hidden" />
          </NavLink>
          <NavLink to="/menu" className="flex flex-col items-center gap-1">
              <p>MENU</p>
              <hr className="w-2/4 border-none h-[1.6px] bg-[#866042] hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
              <p>ABOUT</p>
              <hr className="w-2/4 border-none h-[1.6px] bg-[#866042] hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
              <p>CONTACT</p>
              <hr className="w-2/4 border-none h-[1.6px] bg-[#866042] hidden" />
          </NavLink>
    </ul>

    <div className="flex items-center gap-6">

      <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

      <div className="group relative">
        <Link to={"/login"}><img className="w-6 cursor-pointer" src={assets.profile_icon} alt="" /></Link>
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
        <div className="flex border-[3px] border-[#866042] flex-col gap-2 w-36 py-3 pl-8 pr-0 bg-[#866042] text-slate-50 rounded"> {/** #f0d89e  #866042 **/}
          <p className="cursor-pointer font-medium hover:font-bold">My Profile</p>
          <p className="cursor-pointer font-medium hover:font-bold">Orders</p>
          <p className="cursor-pointer font-medium hover:font-bold">Log Out</p>
        </div>
        </div>
      </div>
      <Link to="/cart" className="relative">
          <img className="w-5 mon-w-5 cursor-pointer" src={assets.cart_icon} alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-amber-950 text-white aspect-square rounded-full text-[9px]">{getCartCount()}</p>
      </Link>
      <img onClick={()=>setVisible(true)} src={assets.menu_icon} className="w-6 cursor-pointer sm:hidden" alt="" />
    </div>


    <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-[#f0d89e] transition-all ${visible? "w-full" : "w-0"}`}>
      <div className="flex flex-col text-amber-900">
          <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img className="h-5 rotate-90" src={assets.dropdown_icon} alt="" />
              <p>Back</p>
          </div>
          <Link to={"/React-Food-Order-Website"}> <p onClick={(e)=>{setVisible(false); setSelected("home")}} className={`py-2 pl-6  border-amber-950 border-t-[2px] text-${selected === "home"? "white" : ""} bg-${selected === "home"? "red-900" : "" }`}>HOME</p></Link>
          <Link to={"/menu"}> <p onClick={()=>{setVisible(false); setSelected("menu")}} className={`py-2 pl-6  border-amber-950 border-t-[2px] text-${selected === "menu"? "white" : ""} bg-${selected === "menu"? "red-900" : "" }`}> MENU</p></Link>
          <Link to={"/about"}> <p onClick={()=>{setVisible(false); setSelected("about")}} className={`py-2 pl-6  border-amber-950 border-t-[2px] text-${selected === "about"? "white" : ""} bg-${selected === "about"? "red-900" : "" }`} >ABOUT </p></Link>
          <Link to={"/contact"}> <p onClick={()=>{setVisible(false); setSelected("contact")}} className={`py-2 pl-6  border-amber-950 border-b-[2px] border-t-[2px] text-${selected === "contact"? "white" : ""} bg-${selected === "contact"? "red-900" : "" }`} >CONTACT </p></Link>
      </div>
    </div>
    </div>

    
  )
}

export default Navbar