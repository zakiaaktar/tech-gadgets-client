import { Helmet } from "react-helmet-async";
import useProducts from "../../../hooks/useProducts";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";


const Home = () => {
    const [products] = useProducts();


    const featured = products.filter((product) => product.tag === "featured");
    const trending = products.filter((product) => product.tag === "trending");


    return (
        <div>
            <Helmet>
                 <title>Tech Gadgets | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Featured items={featured}></Featured>
            {/* <Category></Category> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;