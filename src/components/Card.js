import React from "react";
import { useState, useEffect } from "react";

import("../App.css");
function Card() {
  const [categories, setCategories] = useState([]);

  const getCategoriesApiCall = () => {
    fetch(
      "https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=6499f660d7d3bec5b121e02f"
    )
      .then((res) => res.json())
      .then((res) => {
        setCategories(res.data);
      });
  };

  useEffect(() => {
    console.log(categories);

    getCategoriesApiCall();
  }, [categories]);

  return (
    <div className="hir"> 
    
        <h1>catogries </h1>
      <div className="hiring">
      {categories.slice(0, 8).map((ress) => (
        <div className="card">
          <p>{ress.category.name}</p>
          <p>{ress.views}</p>
          <p>{ress.companyName}</p>
          <p>{ress.country}</p>
          <p>{ress.city}</p>
          <p>{ress.payRangeStart}</p>
          <p>{ress.position}</p>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Card;
