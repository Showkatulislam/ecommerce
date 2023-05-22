import OrderCart from '../component/OrderCart';
import { useGetOrderQuery } from '../app/feature/api/orderApi';
import { useSelector } from 'react-redux';
const Order = () => {
    const {email}=useSelector(state=>state.auth.user)
    const {data}=useGetOrderQuery(email,{pollingInterval:3000})

    const orders=data?.result;
    return (
        <div className='max-w-2xl mx-auto mt-12  p-6 rounded-xl'>
            <h1 className='text-center text-3xl font-bold text-sky-700'>Order page</h1>
            <div className='flex flex-col gap-4 my-2'>
            {
                orders?.map(order=><OrderCart status={order.status} key={order._id} order={order?.product_id} id={order._id}></OrderCart>)
            }
            </div>
        </div>
    );
};

export default Order;