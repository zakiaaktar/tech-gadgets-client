import ProductCard from "../ProductCard/ProductCard";


const ProductTab = ({product}) => {
    return (
        <div className='grid md:grid-cols-3 gap-10'>
                   {
                        product.map(item => <ProductCard
                        key={item._id}
                        item={item}
                        ></ProductCard>)
                    }
        </div>
    );
};

export default ProductTab;