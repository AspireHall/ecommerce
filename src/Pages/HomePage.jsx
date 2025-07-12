import React from "react";
import text from "../assets/text";
import tshirt from "../assets/shirt.jpg";
import hero from "../../public/hero.jpg";
import bestseller from "../assets/bestseller.avif";
import NA1 from "../assets/NA1.avif";
import se from "../assets/se.jpg";
import { useSelector } from "react-redux";

const HomePage = () => {
  const items = useSelector((state) => state.products.items);

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
          <div className="h-full flex flex-col items-center bg-gradient-to-b from-orange-500 to-blue-950 rounded p-10">
            <p className="text-2xl font-bold">BestSellers</p>
            <p>Fan-Favorite T-Shirts</p>
            <img className="w-[500px] rounded-2xl mt-10" src={bestseller} />
            <div className="flex gap-5 justify-center pt-10">
              <button>SHOP BOYS</button>
              <button>SHOP GIRLS</button>
            </div>
          </div>
          <div className=" h-full bg-gradient-to-b from-blue-500  to-blue-950 rounded p-10">
            <p className="text-2xl font-bold">New Arrivals</p>
            <p>The Latest Styles</p>
            <img className="w-s rounded-2xl mt-10" src={NA1} />
            <div className="flex gap-5 justify-center pt-10">
              <button className="text-black">SHOP BOYS</button>
              <button className="text-black">SHOP GIRLS</button>
            </div>
          </div>
          <div className=" h-full flex flex-col items-center bg-gradient-to-b from-cyan-600 to-blue-950  rounded p-10">
            <p className="text-2xl font-bold">Summer Essentials</p>
            <p>Breezy T-shirts For Warmer Days</p>
            <img className="w-s rounded-2xl mt-10" src={se} />
            <div className="flex gap-5 justify-center pt-10">
              <button>SHOP BOYS</button>
              <button>SHOP GIRLS</button>
            </div>
          </div>
        </div>
        <div className="h-96 rounded ml-5 mr-5  bg-yellow-700 flex justify-center flex-col">
          <p className="font-black text-5xl mb-5">
            WE MAKE SHIRTS FEEL COZY IN A BETTER WAY
          </p>
          <p>
            By looking to the world's greatest designers-Nature-we create shirts
            that feel natural to the touch and comfortable to wear.
          </p>
          <p className="text-2xl font-bold ">AIDEN BEAR</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
