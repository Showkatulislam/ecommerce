import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useDeleteAdminProductByIdMutation } from '../app/feature/api/ProductApi';

const DashbroadProductCart = ({product}) => {
    const {name,img,_id}=product
    const [deleteProduct]=useDeleteAdminProductByIdMutation()
    return (
        <div className='bg-teal-400 p-4 flex gap-2 rounded'>
            <div className='flex-1 flex items-center gap-2'>
                <div className='w-10 h-10 object-cover'>
                    <img src={img} alt="" />
                </div>
                <p>{name}</p>
          
            </div>
            <div className="w-7 text-white flex justify-center items-center h-7 rounded-full bg-orange-500 p-3 mr-4">
          <button className="">
            <FaEdit></FaEdit>
          </button>
        </div>
        <div className="w-7 text-white flex justify-center items-center h-7 rounded-full bg-orange-500 p-3">
          <button onClick={()=>deleteProduct(_id)}>
            <FaTrashAlt></FaTrashAlt>
          </button>
        </div>
        </div>
    );
};

export default DashbroadProductCart;