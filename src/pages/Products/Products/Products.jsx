import { Helmet } from "react-helmet-async";
import useProducts from "../../../hooks/useProducts";
import Cover from "../../Shared/Cover/Cover";
import Product from "./Product";
import productImg from '../../../assets/home/productImg.jpg'
import { useState } from "react";


const Products = () => {
    const [products] = useProducts([]);
    const [search, setSearch] = useState('');


    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        //console.log(searchText);
        setSearch(searchText);
    }   

    return (
        <div className="">
            <Helmet>
                <title>Tech Gadgets | Products</title>
            </Helmet>
            <Cover img={productImg} title='All Exclusive Products'></Cover>

            {/* search function */}
            <div className="mt-12 w-3/4 text-center">
            <form onSubmit={handleSearch}>
                <input type="text" name="search" id="" className="input input-bordered"/>
                <input type="submit" value="search" className="btn"/>
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