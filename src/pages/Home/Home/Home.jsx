import { Helmet } from "react-helmet-async";
import Products from "../../Products/Products/Products";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/NavBar/NavBar";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Summary from "../Summary/Summary";


const Home = () => {
    return (
        <div>
            <Helmet>
                 <title>Tech Gadgets | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Products></Products>
            <Summary></Summary>
            {/* <Category></Category> */}
            <Footer></Footer>
        </div>
    );
};

export default Home;