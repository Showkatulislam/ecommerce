import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../component/Header";


const Main = () => {
  return (
    <div className="max-w-7xl m-auto ">
      <Header></Header>
     
       <Outlet></Outlet>
    </div>
  );
};

export default Main;
