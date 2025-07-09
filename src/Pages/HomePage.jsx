import React from "react";
import text from "../assets/text";
import tshirt from "../assets/shirt.jpg";
import hero from "../../public/hero.jpg";

const HomePage = () => {
  return (
    <>
      <div className="w-full bg-blue-950 h-full text-white">
        <div className="grid grid-rows-1 ">
          <div className="w-full bg-[url('../../public/hero.jpg')]  flex justify-end pr-10 pt-10 ">
            <img className="p-2 rounded-2xl" src={tshirt} />
          </div>
          <div className="flex text-7xl font-serif justify-end pr-10 pt-10">
            WHITE T-SHIRT SEASON
          </div>
          <div className="flex justify-end pr-10 pt-10">
            CLASSIC SUMMER STYLE STARTS WITH OUR COMFORTABLE SHIRTS
          </div>
          <div className="flex justify-end pt-5 pb-5 pr-10 gap-5 ">
            <button>SHOP BOYS</button>
            <button>SHOP GIRLS</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 p-5">
          <div className="h-96 bg-gradient-to-b from-orange-500 to-blue-950 rounded p-10">
            <p className="text-2xl font-bold">BestSellers</p>
            <p>Fan-Favorite T-Shirts</p>
            <div className="flex gap-5 justify-center pt-50">
              <button>SHOP BOYS</button>
              <button>SHOP GIRLS</button>
            </div>
          </div>
          <div className=" h-96 bg-gradient-to-b from-blue-500  to-blue-950 rounded p-10">
            <p className="text-2xl font-bold">New Arrivals</p>
            <p>The Latest Styles</p>
            <div className="flex gap-5 justify-center pt-50">
              <button className="text-black">SHOP BOYS</button>
              <button className="text-black">SHOP GIRLS</button>
            </div>
          </div>
          <div className=" h-96 bg-gradient-to-b from-cyan-600 to-blue-950  rounded p-10">
            <p className="text-2xl font-bold">Summer Essentials</p>
            <p>Breezy T-shirts For Warmer Days</p>
            <div className="flex gap-5 justify-center pt-50">
              <button>SHOP BOYS</button>
              <button>SHOP GIRLS</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
