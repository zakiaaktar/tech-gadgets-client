import { Helmet } from "react-helmet-async";
import useProducts from "../../../hooks/useProducts";
import Banner from "../Banner/Banner";
import BestSelling from "../BestSelling/BestSelling";
import Contact from "../Contact/Contact";
import Facility from "../Facility/Facility";
import Faq from "../Faq/Faq";
import Newest from "../Newest/Newest";



const Home = () => {
    const [products] = useProducts();


    const newest = products.filter((product) => product.category === "Newest");
    const bestSelling = products.filter((product) => product.category === "Best Selling");


    return (
        <div>
            <Helmet>
                 <title>Tech Gadgets | Home</title>
            </Helmet>
           
            <Banner></Banner>
            <Facility></Facility>
            <BestSelling items={bestSelling}></BestSelling>
            <Newest items={newest}></Newest>
            <Faq></Faq>
            <Contact></Contact>
           
           
        </div>
    );
};

export default Home;