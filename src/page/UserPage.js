import React, { useContext } from 'react';
import DashbroadProductCart from '../component/DashbroadProductCart';
import { ProductContext } from '../context/ProductProvider';

const UserPage = () => {
    const {products}=useContext(ProductContext)
    const fiterProduct=products.filter(pro=>pro.category==='Bottle')
    return (
        <div className='bg-slate-400 flex justify-center items-center p-8 rounded-lg'>
            <div className='w-[660px]  bg-white p-7 rounded-xl flex flex-col gap-4'>
                {fiterProduct.map(product=><DashbroadProductCart product={product}></DashbroadProductCart>)}
            </div>
        </div>
    );
};

export default UserPage;