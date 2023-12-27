import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useReviews = (product) => {
    const axiosSecure = useAxiosSecure();
    // console.log(product.name)

    

const { data : reviews= [] } = useQuery({
    queryKey: ["review" , product?.name],
    queryFn: async () => {
        const res = await axiosSecure.get(`/reviews?name=${product.name}`)
        return res.data;
    }
});
return [ reviews ];
};

export default useReviews;