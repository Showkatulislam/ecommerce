import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { createUser, getUser } from '../app/feature/AuthSlice';
import { useAdduserMutation} from '../app/feature/api/userApi';
const Registration = () => {
  const dispatch=useDispatch()
  const { register, handleSubmit } = useForm();
  const navigate=useNavigate()
  const [addUser,{isSuccess,isLoading}]=useAdduserMutation()
  const onSubmit = data =>{ dispatch(createUser(data));addUser(data)}
  const {errorMessage,loading,user:{email}}=useSelector(state=>state.auth)
  useEffect(()=>{
    if(!loading && email && !isLoading){
      navigate('/')
    }else if(isSuccess){
      dispatch(getUser(email))
    }
  },[loading,email,isSuccess])
    return (
        <div className="w-[100vw] h-[100vh] m-auto bg-slate-200 flex  justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="w-96 flex gap-6 flex-col bg-white p-4 shadow-xl rounded-xl">
          <h1 className="text-center text-xl font-bold">Register</h1>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="border-b-2 outline-0 p-2"
            id="name"
            {...register("name")}
            placeholder="Name"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="border-b-2 outline-0 p-2"
            id="email"
            {...register('email')}
            placeholder="Email"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="border-b-2 outline-0 p-2"
            id="password"
            placeholder="Password"
            {...register('password')}
          />
           <button className="w-full bg-orange-500 text-white p-2 rounded-full">submit</button>
           <p className='text-orange-600'>{errorMessage}</p>
          <Link to='/login' className='text-center '>Already have a Account?</Link>
        </form>
      </div>
    );
};

export default Registration;