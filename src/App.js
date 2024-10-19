import {useEffect, useState} from "react";
import './App.css';

function App() {
  const [categories, setCategories] = useState([])
  const [jobs, setJobs] = useState([])
   


   const getCategoriesApiCall = ()=> {
       fetch('https://backend-prod.app.hiringmine.com/api/jobAds/all?limit=10&pageNo=1&keyWord=&category=6499f660d7d3bec5b121e02f')
        .then((res)=>res.json())
        .then((res)=>{
        setCategories(res.data)
        console.log(res)});
      };
  //     const getJobsApiCall = ()=> {
  //       fetch('https://backend-prod.app.hiringmine.com/api/filterations/all')
  //      .then((res)=>res.json())
  //      .then((res)=>{
  //             setJobs(res.data)
  //             console.log(res)});
  //  };
    console.log(categories)

   useEffect(()=>{

    console.log("=========>>> useEffect k ander hun")
    getCategoriesApiCall()
    // getJobsApiCall()
   },[])
  return (
    <div className="hiring">
      <h1>Hirring</h1>
      <h2>Categories</h2>
      <div className="categories">
        {categories.slice(1,2).map((category)=>(
        <div  className="card">
         <p>{category.companyName}</p>
         <p>{category.views}</p>
         
        </div>

        ))}

      </div>
      <App/>
      <App/>
      <App/>
    </div>
  );
}

export default App;
