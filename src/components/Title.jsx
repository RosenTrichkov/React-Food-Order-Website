import React from "react";

const Title = ({text1,text2}) => {
  return (
    <div className="inline-flex gap-2 text-2xl lg:text-3xl md:text-3xl items-center mb-3">
        <p className="text-amber-900">{text1} <span className="text-amber-950 font-medium text-decoration-line: underline decoration-amber-950">{text2}</span></p>
    </div>
  )
}

export default Title