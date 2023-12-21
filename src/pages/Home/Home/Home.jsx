import { Helmet } from "react-helmet-async";
import useProducts from "../../../hooks/useProducts";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Facility from "../Facility/Facility";

import Faq from "../Faq/Faq";
import Featured from "../Featured/Featured";
//import Summary from "../Summary/Summary";
import Trending from "../Trending/Trending";


const Home = () => {
    const [products] = useProducts();


    const featured = products.filter((product) => product.category === "featured");
    const trending = products.filter((product) => product.category === "trending");


    return (
        <div>
            <Helmet>
                 <title>Tech Gadgets | Home</title>
            </Helmet>
           
            <Banner></Banner>
            <Facility></Facility>
            <Featured items={featured}></Featured>
            <Trending items={trending}></Trending>
            {/* <Summary></Summary> */}
            <Faq></Faq>
            <Contact></Contact>
           
           
        </div>
    );
};

export default Home;