import { FaEdit, FaTrashAlt } from "react-icons/fa";

import { useSelector } from "react-redux";
import { useDeleteOrderMutation } from "../app/feature/api/orderApi";

const OrderCart = ({ order, id,status}) => {
  const { name, price} = order;
  const { email } = useSelector((state) => state.auth.user);
  const [removeOrder] = useDeleteOrderMutation();
  return (
    <div className="flex bg-teal-400 justify-between items-center   p-3 rounded-lg">
      <div className="w-1/2">
        <div>{name}</div>
        <span>Price :{price}</span>
      </div>
      <div className="text-left">
        status :<span className={`${status==='pendding'?'bg-sky-500':'bg-orange-600'} px-2 py-1 text-white`}>{status}</span>
      </div>
      <div className="flex justify-center">
        <div className="w-7 text-white flex justify-center items-center h-7 rounded-full bg-orange-500 p-3 mr-4">
          <button className="">
            <FaEdit></FaEdit>
          </button>
        </div>
        <div className="w-7 text-white flex justify-center items-center h-7 rounded-full bg-orange-500 p-3">
          <button onClick={() => removeOrder({ email, id })}>
            <FaTrashAlt></FaTrashAlt>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;
