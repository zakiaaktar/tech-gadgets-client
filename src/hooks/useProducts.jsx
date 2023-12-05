import { useEffect, useState } from "react";


const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    


    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        });
    }, [])


    // useEffect( () =>{
    //     fetch(`http://localhost:1000/products?search=${search}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setProducts(data);
    //         setLoading(false);
    //     });
    // }, [search])


    return [products, loading]
};

export default useProducts;