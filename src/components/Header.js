import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="header flex text-lg items-center justify-center py-8  gap-x-10 ">
      <div className="logo w-52 h-18">
        <img src="/images/logo1.png" />
      </div>
      <ul className="nav-bar flex gap-x-4 mx-56  font-normal text-xl">
        <li>About Us</li>
        <li>People</li>
        <li>Jobs</li>
        <li>LogIn</li>
        <li>Join Now</li>
        <a href="https://www.example.com">Employee /Post Job</a>
      </ul>
      <button className="darktheme text-xl">button</button>
      
    </div>
  );
}

export default Header;
