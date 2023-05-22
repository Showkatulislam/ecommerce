import { apiSlice } from "./api";

const userApi=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        adduser:builder.mutation({
            query:(data)=>({
                url: `user`,
                method: 'post',
                body:data
            }),
           invalidatesTags:['user']
        }),
        getUser:builder.query({
            query:()=>'/user',
            providesTags:['user']
        })
      
    })
})

export const {useAdduserMutation,useGetUserQuery}=userApi