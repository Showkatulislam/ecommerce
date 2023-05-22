import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import DeshbroadLink from "../../component/DeshbroadLink";
import { FaListAlt } from "react-icons/fa";
const Dashboard = () => {
    const [seeMore,setSeeMore]=useState(false)
  return (
    <div className="d-block md:grid grid-cols-12  max-w-full">
      <div className="hidden md:block col-span-1 lg:col-span-2  bg-sky-400 p-8">
        <DeshbroadLink></DeshbroadLink>
      </div>
      
        <div className="bg-sky-400 p-2 text-white font-semibold text-3xl md:hidden">
          <button onClick={()=>setSeeMore(!seeMore)}>
          <FaListAlt></FaListAlt>
          </button>
        </div>
       {seeMore&&
        <div className="bg-sky-400 px-20">
            <DeshbroadLink></DeshbroadLink>
        </div>
       }
      <div className="col-span-12 md:col-span-11 lg:col-span-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
