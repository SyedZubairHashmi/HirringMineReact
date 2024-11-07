import React from "react";
import "../App.css";

function SearchPage() {
  return (
    <div className="container-fluid"> 
      <div className="section1 flex flex-col items-center justify-center px-72 gap-y-6 pt-14  ">
      <h1 className=" text-8xl text-center font-bold  ">Dig. Apply</h1>
      <h1 className="text-8xl text-center font-bold ">Prepare Your Future</h1>
      <p className="text-2xl font-normal text-center">
        Hiring Mine connects employer and job seekers, where employers are the
        source of the resources and the job seeker can find and apply for their
        targeted job.
      </p>

      <div className="searchIput w-2/3 h-11 pl-3 border-2  border-blue-300  rounded-md">
        <input
          className=" h-10  focus:outline-none  border-2 border-none serchIput"
          type="text"
          placeholder="Search by Role or Keyword"
        />
        <i  class="fa-solid fa-user"></i>
      </div>
      <button className="mainbtn text-xl  bg-blue-600 px-8 py-3 rounded-full text-white font-bold shadow-indigo-500/50">
        Find Jobs
      </button>
      <h2>Popular Searches</h2>
      <div className="flex gap-x-4 gap-y-6 flex-wrap justify-center">
        <button className="btn">Softwere</button>
        <button className="btn">Developer</button>
        <button className="btn">Backend</button>
        <button className="btn">React</button>
        <button className="btn">Node</button>
        <button className="btn">React Native</button>
        <button className="btn">Flutter</button>
        <button className="btn">UI/UX</button>
        <button className="btn">Designer</button>
        <button className="btn">Web</button>
        <button className="btn">SEO</button>
        <button className="btn">Marketing</button>
        <button className="btn">Writer</button>
      </div>
      <div  className="image1 w-screen">

         <img  src="images/img1.png"/>
      </div>
    </div>

    </div>
   
  );
}

export default SearchPage;
