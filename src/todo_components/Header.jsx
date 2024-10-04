import React from "react";

//An arrow function with implicit return
const Header = ({ text }) => (
  <h2 className="w-full flex justify-center font-bold items-center text-2xl h-20 bg-black text-white">
    {text}
  </h2>
);

export default Header;
