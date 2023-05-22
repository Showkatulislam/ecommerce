
import ProductCard from "../component/ProductCard";

const Products = ({products}) => {
  return (
    <div className="bg-neutral-200 shadow-xl rounded-lg  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(products).map(product=><ProductCard key={product[0]} product={product[1]}></ProductCard>)}
    </div>
  );
};

export default Products;
