import Cartproduct from "../component/Cartproduct";
import { useDispatch, useSelector } from "react-redux";
import { removecartall } from "../app/feature/cart/CartSlice";
import { useAddOrderMutation } from "../app/feature/api/orderApi";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { email } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [addOrder] = useAddOrderMutation();
  const data = [];
  cart.forEach((element) => {
    let item = {};
    item.product_id = element._id;
    item.quantity = element.quantity;
    item.email=email;
    item.seller=element.seller
    data.push(item);
  });
  console.log(data);
  const placeOrder = () => {
    addOrder({ email, data });
    dispatch(removecartall());
  };
  return (
    <div className="max-w-4xl bg-slate-300 mx-auto mt-5 p-5 rounded-lg flex flex-col gap-4">
      {cart.map((c) => (
        <Cartproduct key={c.id} cartdata={c}></Cartproduct>
      ))}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => dispatch(removecartall())}
            className="w-48 bg-slate-400 px-4 py-2 rounded-full  font-bold text-1xl"
          >
            CLEAR CART
          </button>
        </div>
        <div>
          <button
            disabled={!cart.length}
            onClick={() => placeOrder()}
            className={`w-48 ${
              !cart.length ? "bg-slate-600" : "bg-orange-500"
            } px-4 py-2 rounded-full text-white font-bold text-1xl`}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
