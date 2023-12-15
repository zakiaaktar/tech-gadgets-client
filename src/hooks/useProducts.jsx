//import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useProducts = () => {
    const axiosPublic = useAxiosPublic();

    const {data: products = [], isPending: loading, refetch} = useQuery({
        queryKey: ['products'], 
        queryFn: async() =>{
            const res = await axiosPublic.get('/products');
            return res.data;
        }
    })

    return [products, loading, refetch]
};

export default useProducts;



// const useProducts = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
    

//     useEffect( () =>{
//         fetch('http://localhost:1000/products')
//         .then(res => res.json())
//         .then(data => {
//             setProducts(data);
//             setLoading(false);
//         });
//     }, [])

//     return [products, loading]


// };

// export default useProducts;