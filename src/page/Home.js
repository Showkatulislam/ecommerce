import {useState} from "react";
import CatagoryLink from "../component/CatagoryLink";
import Products from "./Products";
import { useGetproductQuery } from "../app/feature/api/ProductApi";
import { FaListAlt } from "react-icons/fa";




const Home = () => {
  const [query,setQuery]=useState('Bottle')
  const {data, isLoading, isFetching}=useGetproductQuery(query)
  const [seeMore,setSeeMore]=useState(false)
  return (
    <div className="grid grid-cols-6 mt-4 gap-4">
      <div className="hidden md:block col-span-1 rounded-lg  w-full ">
        <CatagoryLink setFilter={setQuery} isFetching={isFetching} isLoading={isLoading}></CatagoryLink>
      </div>
  
      <div className="md:col-span-5 col-span-12">
      <button onClick={()=>setSeeMore(!seeMore)} className="ml-8 md:hidden text-3xl">
          <FaListAlt></FaListAlt>
        </button>
        {
         seeMore && <CatagoryLink className="d-block" onClick={()=>setSeeMore(false)} setFilter={setQuery} isFetching={isFetching} isLoading={isLoading}></CatagoryLink>
        }
        <Products products={data?data.data:[]}></Products>
      </div>
    </div>
  );
};

export default Home;
