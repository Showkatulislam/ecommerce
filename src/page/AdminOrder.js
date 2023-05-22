import {
  useGetAdminOrderQuery,
  useChangeStatusMutation,
} from "../app/feature/api/orderApi";
import { useSelector } from "react-redux";
const AdminOrder = () => {
  const { email } = useSelector((state) => state.auth.user);
  const { data } = useGetAdminOrderQuery(email,{pollingInterval:5000});
  const orders = data?.result;
  const [changeStatus] = useChangeStatusMutation();
 

  return (
    <div className="max-w-3xl my-8 mx-auto ">
      <h1>Admin order come</h1>
      <div className="flex flex-col">
        {orders?.map((order) => (
          <div className="flex items-center justify-between my-4 p-3 shadow-lg rounded-lg bg-teal-400">
            <p>Name :{order.product_id.name}</p>
            <p>order by {order.email}</p>
            <p>price :{order.product_id.price}</p>
            <button
              onClick={() =>
                changeStatus({ _id: order._id, data: { status: "pendding" } })
              }
              className="p-2"
            >
              status: <span className="bg-sky-300">pendding</span>
            </button>
            <button
              onClick={() =>
                changeStatus({ _id: order._id, data: { status: "delivery" } })
              }
              className="p-2"
            >
              status: <span className="bg-sky-300">delivery</span>
            </button>
            <p>state Now :{order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminOrder;
