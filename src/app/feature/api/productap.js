/* import { apiSlice } from "./api";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "post",
        body: data,
      }),
    }),
  }),
});

export const {useAddProductMutation}=productApi */