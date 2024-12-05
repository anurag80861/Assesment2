import React from "react";

import '../assets/logo.png'
import { jobs } from "../Pages/HomePage";

const JobCard = () => {
  console.log(jobs)
  return (
  <div className="mx-auto w-[90%] justify-center mt-7 ">
  <div className="job-card grid grid-cols-3 w-[90%]  gap-3 ml-24">
      {jobs.map(({ title,remote,salary,companyName,companyLogo,loc,location,saved},i)=>(
        <div key={i} className="flex flex-col w-[375px] border-2 border-gray-300 p-4 gap-2 hover:bg-orange-200 hover:scale-110 duration-300">
          <div>{title}</div>
          <div className="flex justify-between w-[70%]">
            <h2>{remote}</h2>
            <h2>{salary}</h2>
          </div>
          <div className="flex w-full justify-between items-center">
            <div><img src={companyLogo} className="w-10 h-10"></img></div>
            <div className="flex flex-col mr-10" >
              <div>{companyName}</div>
              <div className="flex ">
              <div ><img src={loc} className="w-6 h-6"/></div>
              <div>{location}</div>
              </div>
            </div>
            <div><img src={saved} className="w-6 h-6"/></div>
          </div>


        </div>

     ) )}
     </div>



  </div>
  );
};

export default JobCard;
