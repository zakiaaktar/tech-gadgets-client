import { Helmet } from "react-helmet-async";
import useProducts from "../../../hooks/useProducts";
import Cover from "../../Shared/Cover/Cover";

import { useState } from "react";


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from "react-router-dom";
import ProductTab from "../ProductTab/ProductTab";


const Products = () => {
    const categories = ['featured', 'trending', 'smartphones', 'computers', 'gaming'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    //console.log(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [products] = useProducts([]);


    const featured = products.filter(product => product.category === 'featured');
    const trending = products.filter(product => product.category === 'trending');
    const smartphones = products.filter(product => product.category === 'smartphones');
    const computers = products.filter(product => product.category === 'computers');
    const gaming = products.filter(product => product.category === 'gaming');
    
    
    
    
    


    return (
        <div className="">
            <Helmet>
                <title>Tech Gadgets | Products</title>
            </Helmet>
        <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Featured</Tab>
                    <Tab>Trending</Tab>
                    <Tab>Smartphones</Tab>
                    <Tab>Computers</Tab>
                    <Tab>Gaming</Tab>
                </TabList>
                <TabPanel>
                    <ProductTab product={featured}></ProductTab>
                </TabPanel>
                <TabPanel>
                    <ProductTab product={trending}></ProductTab>
                </TabPanel>
                <TabPanel>
                    <ProductTab product={smartphones}></ProductTab>
                </TabPanel>
                <TabPanel>
                    <ProductTab product={computers}></ProductTab>
                </TabPanel>
                <TabPanel>
                    <ProductTab product={gaming}></ProductTab>
                </TabPanel>
            </Tabs>
        </div>
        </div>
        
    );
};

export default Products;