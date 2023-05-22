import DashbroadProductCart from '../../component/DashbroadProductCart';
import { useSelector } from 'react-redux';
import { useGetAdminProductQuery } from '../../app/feature/api/ProductApi';


const DashbroadHome = () => {

    const {email}=useSelector(state=>state.auth.user)
    const {data}=useGetAdminProductQuery(email,{pollingInterval:1000})
    const fiterProduct=data?.data
  
    return (
        <div className='  flex justify-center items-center p-8 rounded-lg'>
            <div className='  bg-white p-7 rounded-xl flex flex-col gap-4'>
                {fiterProduct?.map(product=><DashbroadProductCart product={product}></DashbroadProductCart>)}
            </div>
        </div>
    );
};

export default DashbroadHome;