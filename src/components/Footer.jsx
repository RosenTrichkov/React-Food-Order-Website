import React from "react";
import { assets } from "../assets/assets";
import {Link, NavLink} from "react-router-dom"

const Footer = () => {

const date = new Date();
const year = date.getFullYear();

  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] border-t-[2px] border-[#866042] pt-6 gap-10 lg:gap-14 md:gap-14 mt-24 lg:mt-32 md:mt-24 text-sm">

            <div>
                <img className="mb-5 w-28" src={assets.logo} alt="" />
                <p className="w-full md:w-2/3 text-amber-900">The Tasty Tavern's mission is ensuring that every single one of our customers has the tastiest food when visiting our restaurant or when ordering from us. We are proud to make sure that you can trust us!
                </p>
            </div>
            <div>
                <p className="text-xl font-medium mb-3 lg:mb-5 text-amber-950">COMPANY</p>
                <ul className="flex flex-col gap-1 text-amber-900 cursor-pointer">
                    <Link to={"/React-Food-Order-Website/"} onClick={()=> window.scrollTo(0,0)}><li>Home</li></Link>
                    <Link to={"/about"} onClick={()=> window.scrollTo(0,0)}><li>About Us</li></Link>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-3 lg:mb-5 text-amber-950">CONTACT US</p>
                <ul className="flex flex-col gap-1 text-amber-900">
                    <li>Tel: (+44) 78999999</li>
                    <li>Email: something@tastytavern.com</li>
                </ul>
            </div>
        </div>

        <div>
            <p className="py-6 text-sm text-center text-amber-900">@ {`${year}`} tastytavern.com - All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer