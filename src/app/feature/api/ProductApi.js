import { apiSlice } from "./api";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "post",
        body: data,
      }),
    }),
    getproduct: builder.query({
      query: (filter) => `/products?category=${filter}`,
    }),
    getAdminProduct: builder.query({
      query: (email) => `/product?seller=${email}`,
      providesTags: ["product"],
    }),
    deleteAdminProductById: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "delete",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetproductQuery,
  useAddProductMutation,
  useGetAdminProductQuery,
  useDeleteAdminProductByIdMutation,
} = productApi;
