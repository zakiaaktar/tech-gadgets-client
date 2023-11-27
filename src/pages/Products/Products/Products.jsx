import { Helmet } from "react-helmet-async";
import useProducts from "../../../hooks/useProducts";
import Product from "./Product";


const Products = () => {
    const [products] = useProducts([]);



    return (
        <div className="w-[93%] mx-auto">
            <Helmet>
                <title>Tech Gadgets | Products</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;