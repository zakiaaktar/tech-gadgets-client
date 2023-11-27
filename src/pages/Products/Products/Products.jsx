import { Helmet } from "react-helmet-async";
import useProducts from "../../../hooks/useProducts";
import Cover from "../../Shared/Cover/Cover";
import Product from "./Product";
import productImg from '../../../assets/home/productImg.jpg'


const Products = () => {
    const [products] = useProducts([]);



    return (
        <div className="">
            <Helmet>
                <title>Tech Gadgets | Products</title>
            </Helmet>
            <Cover img={productImg} title='Our Exclusive Products'></Cover>
            <div className="bg-blue-400 mt-12 w-3/4 mx-auto">
            <form >
                <input type="text" name="search" id="" />
            </form>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-[93%] mx-auto py-12">
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