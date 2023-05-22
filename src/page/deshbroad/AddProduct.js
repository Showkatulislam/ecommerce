import React from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useAddProductMutation } from '../../app/feature/api/ProductApi';
const AddProduct = () => { 
    const {email}=useSelector(state=>state.auth.user)
    const [addProduct,{data:success}]=useAddProductMutation()
     const { register, handleSubmit,reset} = useForm({
        defaultValues:{
            seller:email
        }
     });
     
   
     const onSubmit = data =>{
        if(data.name &&data.category && data.price &&data.img){
            addProduct(data)
        }
        reset()
        if(success?._id){
            const ele=<p className="bg-green-700">Product add successfully</p>
            alert(ele)
        }
        }

    return (
        <div className='bg-neutral-200 h-[100vh] flex items-center justify-center'>
           <form onSubmit={handleSubmit(onSubmit)} className='w-[400px] flex flex-col gap-2 bg-white p-6 rounded-lg' action="">
            <label className='text-xs font-normal' htmlFor="">Name</label>
            <input className='w-full border-2 rounded-lg border-sky-500 outline-none p-2' placeholder='Name' {...register("name")}  type="text" id="name" />
            <label className='text-xs font-normal' htmlFor="">Category</label>
            <input className='w-full border-2 rounded-lg border-sky-500 outline-none p-2' placeholder='Category' {...register("category")}  type="text"  id="category" />
            <label className='text-xs font-normal' htmlFor="">Seller</label>
            <input className='w-full border-2 rounded-lg border-sky-500 outline-none p-2' placeholder='Seller' {...register("seller")} defaultValue={email} disabled type="text"  id="seller" />
            <label className='text-xs font-normal' htmlFor="">Price</label>
            <input className='w-full border-2 rounded-lg border-sky-500 outline-none p-2' placeholder='Price' {...register("price")} type="text"  id="price" />
            <label className='text-xs font-normal' htmlFor="">Stock</label>
            <input className='w-full border-2 rounded-lg border-sky-500 outline-none p-2' placeholder='Stock' {...register("stock")} type="text"  id="stock" />
            <label className='text-xs font-normal' htmlFor="">Image</label>
            <input className='w-full border-2 rounded-lg border-sky-500 outline-none p-2' placeholder='Image' {...register("img")} type="text"  id="img" />
            <button className='w-full bg-orange-500 py-2  text-white font-bold rounded-full'>Add Product</button>
           </form>
        </div>
    );
};

export default AddProduct;