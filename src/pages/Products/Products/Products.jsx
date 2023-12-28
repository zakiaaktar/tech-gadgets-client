import { Helmet } from "react-helmet-async";
//import useProducts from "../../../hooks/useProducts";
import Cover from "../../Shared/Cover/Cover";
import Product from "./Product";
import productImg from "../../../assets/home/productImg.jpg";
import useProducts from "../../../hooks/useProducts";

const Products = () => {
  const [products] = useProducts();

  return (
    <div className="">
      <Helmet>
        <title>Tech Gadgets | Products</title>
      </Helmet>
      <Cover
        img={productImg}
        title="All Exclusive Products"
        description="You Can Choose Any Product"
      ></Cover>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-[93%] mx-auto py-12">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
