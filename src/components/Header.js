import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="flex text-lg items-center justify-center py-6   gap-x-10 ">
      <div className="w-52 h-18">
        <img src="/images/logo1.png" />
      </div>
      <ul className="flex gap-x-4 mx-56  font-normal">
        <li>About Us</li>
        <li>People</li>
        <li>Jobs</li>
        <li>LogIn</li>
        <li>Join Now</li>
        <li>Employee /Post Job</li>
      </ul>
      <button>button</button>
    </div>
  );
}

export default Header;
