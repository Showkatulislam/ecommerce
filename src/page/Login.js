import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux";
import { getUser, loginUser } from "../app/feature/AuthSlice";
const Login = () => {
  const dispatch=useDispatch()
  const {register,handleSubmit}=useForm()
  const navigate=useNavigate()
  const {loading,user:{email}}=useSelector(state=>state.auth)
  const Onsubmit=async(data)=>{
    await dispatch(loginUser(data))
    await  dispatch(getUser(data.email))
  }
  useEffect(()=>{
    if(!loading &&email){
     
      navigate('/')
    }
  },[loading,email])
  return (
    <div className="w-[100vw] h-[100vh] m-auto bg-slate-200 flex  justify-center items-center">
      <form onSubmit={handleSubmit(Onsubmit)} className="w-96 flex gap-6 flex-col bg-white p-4 shadow-xl rounded-xl">
        <h1 className="text-center text-xl font-bold">login</h1>
        <label htmlFor="">Email</label>
        <input
          type="email"
          className="border-b-2 outline-0 p-2"
          name=""
          id="email"
          {...register('email')}
          placeholder="Email"
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          className="border-b-2 outline-0 p-2"
          name=""
          id="password"
          {...register('password')}
          placeholder="Email"
        />
        <input className="w-full bg-orange-500 text-white p-2 rounded-full" type="submit" value="submit" />
        <Link to='/register' className='text-center '>Already have a Account?</Link>
      </form>
    </div>
  );
};

export default Login;
