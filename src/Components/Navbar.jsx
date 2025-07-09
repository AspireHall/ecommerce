import React from "react";
import bear from "../../public/teddy.jpg";

export const Navbar = () => {
  return (
    <div className="flex w-full h-10 bg-amber-400 justify-center align-middle">
      <ul className="grid-cols-5 flex justify-center items-center bg-blue-500 w-full text-white">
        <li className=" flex w-2000 pl-10 text-2xl font-bold">AIDEN BEAR</li>
        <li className="w-full  font-bold p-1">NEW ARRIVALS</li>
        <li className="w-full font-bold p-1">SPECIALS</li>
        <li className="w-full font-bold p-1">BOYS</li>
        <li className="w-full font-bold p-1">GILRS</li>
        <li></li>
      </ul>
    </div>
  );
};
