import React, { createContext, useEffect, useState } from "react";
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState();
  const [cartData, setCartData] = useState([]);
  const [orders, setOrders] = useState([]);
  let url =` ${process.env.REACT_APP_URL}/product`
  useEffect(() => {
    if (query) {
      url = ` ${process.env.REACT_APP_URL}/product?category=${query}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((pres) => setProducts(pres.data));
  }, [query]);
  const addCartproduct = (id) => {
    const newCartProduct = products.find((pro) => pro.id === id);
    newCartProduct.stock = newCartProduct.stock - 1;
    try {
      setCartData([...cartData, newCartProduct]);
      setProducts([...products, newCartProduct]);
    } catch (error) {
      console.log(error.message);
    }
  };
  const placeOrder = () => {
    setOrders([...cartData, ...orders]);
    setCartData([]);
    console.log(orders);
  };

  const RemoveOrder = (id) => {
    const RemainOrder = orders.filter((pro) => pro.id !== id);
    setOrders([...RemainOrder]);
  };
  const RemoveCart = (id) => {
    const remainCart = cartData.filter((pro) => pro.id !== id);
    setCartData([...remainCart]);
  };

  const productinfo = {
    products,
    setQuery,
    addCartproduct,
    cartData,
    orders,
    placeOrder,
    RemoveOrder,
    RemoveCart,
  };

  return (
    <ProductContext.Provider value={productinfo}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
