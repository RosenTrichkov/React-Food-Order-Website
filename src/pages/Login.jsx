import React, { useState } from "react";

const Login = () => {

  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (event) => {
      event.preventDefault();
  }

  return (
    <div className="border-t-[2px] border-[#866042]">
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="prata-regular text-3xl text-amber-950">{currentState}</p>
        </div>
        {currentState === "Login" ? "" : <input type="text" className="w-full px-3 py-2 border border-gray-800 text-amber-900 placeholder-opacity-60 placeholder-amber-900" placeholder="Name" required/>}
        <input type="email" className="w-full px-3 py-2 border border-gray-800 text-amber-900 placeholder-opacity-60 placeholder-amber-900" placeholder="Email" required/>
        <input type="password" className="w-full px-3 py-2 border border-gray-800 text-amber-900 placeholder-opacity-60 placeholder-amber-900" placeholder="Password" required/>
        <div className="w-full flex justify-between text-sm mt-[-8px]">
            <p className="cursor-pointer text-amber-950">Forgot your password?</p>
            {
              currentState === "Login"
              ? <p onClick={()=>setCurrentState("Sign Up")} className="cursor-pointer text-amber-950">Create account</p>
              : <p onClick={()=>setCurrentState("Login")} className="cursor-pointer text-amber-950">Login Here</p>
            }
        </div>
        <button className="bg-red-900 text-white font-light px-8 py-4 mt-4 text-l">{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form></div>
  )
}

export default Login