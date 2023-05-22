import { FaCompress, FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addcart } from "../app/feature/cart/CartSlice";

const ProductCard = ({ product }) => {
  const { name, img, price, stock } = product;


  const dispatch=useDispatch()
 
  return (
    <div className="bg-white  w-full h-full flex flex-col gap-4 p-3 shadow-lg rounded-lg items-center relative ">
      <div>
        <img
          className="w-72 h-48 object-fill hover:scale-100"
          src={img}
          alt="img"
          srcSet=""
        />
      </div>
      <h1 className="text-sky-400 text-xl font-semibold">{name}</h1>
      <p>
        Price: <span>{price}</span>
      </p>
      <div className="flex items-center text-yellow-500">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
      </div>
      <div className="w-6 h-6 p-4 flex items-center justify-center absolute top-0 right-0 rounded-full bg-lime-600 text-white">
        {stock}
      </div>
      <div className="flex items-center ">
         <button  onClick={()=>dispatch(addcart(product))}  className={`rounded-full bg-orange-500 py-2 px-3 text-white flex items-center justify-between mr-3 $addcart:bg-orange-200`} ><span  className="mr-2">add cart</span> <FaShoppingCart></FaShoppingCart></button>
         <Link className="rounded-full bg-orange-500 py-2 px-3 text-white flex items-center justify-between"><span className="mr-2">show detail</span><FaCompress></FaCompress></Link>
      </div>
    </div>
  );
};

export default ProductCard;
