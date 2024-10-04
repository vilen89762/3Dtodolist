import React from "react";

//An arrow function with implicit return
const Button = ({ text, bg, func }) => (
  <button
    onClick={func}
    className={`w-24 inline-block rounded-md border-none cursor-pointer  h-11 ${bg} text-white hover:bg-slate-700`}
  >
    {text}
  </button>
);

export default Button;
