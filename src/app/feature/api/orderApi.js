import { apiSlice } from "./api";

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (data) => ({
        method: "post",
        url: `order/v1`,
        body: data,
      }),
      invalidatesTags: ["order"],
    }),
    getOrder: builder.query({
      query: (email) => `order/v1?email=${email}`,
      providesTags: ["order"],
    }),
    getAdminOrder: builder.query({
      query: (email) => `order/v1?seller=${email}`,
      providesTags: ["order"],
    }),
    deleteOrder: builder.mutation({
      query: ({ email, id }) => ({
        method: "delete",
        url: `order/v1?_id=${id}&&email=${email}`,
      }),
      invalidatesTags: ["order"],
    }),
    changeStatus:builder.mutation({
      query:({_id,data})=>({
        method:'put',
        url:`order/v1?_id=${_id}`,
        body:data
      })
    })
  }),
});

export const { useAddOrderMutation, useGetOrderQuery, useDeleteOrderMutation,useGetAdminOrderQuery,useChangeStatusMutation } =
  orderApi;
