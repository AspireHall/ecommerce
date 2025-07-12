import React from "react";
import "../app.css";

function Footer() {
  return (
    <div className="bg-slate-900 h-96 pt-20">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-start">
          <label className="m-10 text-white font-bold">
            SUBSCRIBE TO OUR EMAILS
          </label>
          <input
            className="ml-10"
            type="email"
            placeholder="Email Address"
          ></input>
        </div>
        <div className="flex gap-20">
          <div className="grid grid-rows-4 text-white text-left">
            <p className="font-bold">HELP</p>
            <p>Text Us</p>
            <p>Help@Aidenbear.com</p>
            <p>FAQ/Contact Us</p>
            <p>Call Us</p>
          </div>
          <div className="grid grid-rows-4 text-white text-left">
            <p className="font-bold">SHOP</p>
            <p>Shop Boys</p>
            <p>Shop Girls</p>
            <p>Specials</p>
            <p>New Arrivals</p>
          </div>
          <div className="grid grid-rows-4 text-white text-left">
            <p className="font-bold">AIDENBEAR</p>
            <p>Our Story</p>
            <p>Affiliates</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Investors</p>
          </div>
        </div>
      </div>
      <div className="mt-30 text-white pl-5 pr-5">
        <hr></hr>
        <div className="flex m-2 gap-50">
          <p> Ⓒ 2025 AIDENBEAR, Inc. All Rights Reserved</p>
          <p> Refund Policy</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
