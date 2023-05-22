import React from 'react';
import { FaUserCircle,FaList,  FaPlus} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DeshbroadLink = () => {
    return (
        <div>
            <Link to='/' className='flex items-center gap-5 text-xl font-bold text-white py-5'>
            <FaUserCircle></FaUserCircle>
             <span>Showkatul</span>
            </Link>
            <Link to='/deshbroad'  className='flex items-center gap-5 text-xl font-bold text-white py-5'>
             <FaList></FaList>
             <span>Your product</span>
            </Link>
            <Link to='/admin-order'  className='flex items-center gap-5 text-xl font-bold text-white py-5'>
             <FaList></FaList>
             <span>Your order</span>
            </Link>
            <Link to='/add-product' className='flex items-center gap-5 text-xl font-bold text-white py-5'>
            <FaPlus></FaPlus>
             <span>AddProduct</span>
            </Link>
 
        </div>
    );
};

export default DeshbroadLink;