import { Link } from "react-router-dom";


const Product = ({product}) => {
    //console.log(product);
    const { _id, name, image, description, vote, timestamp } = product;


    return (
        <div className="card shadow-xl w-96 mx-auto p-4 rounded-none border-2 rounded-tl-3xl rounded-br-3xl border-[#EE9322]">
  <figure><img src={image} alt="product image" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    {/* <p>{description.slice(0, 80)}...</p> */}
    <div className="card-actions justify-between mt-4">
      <div className="badge badge-outline">{vote}</div> 
      <div className="badge badge-outline">{timestamp}</div>
      </div>
  </div>
  <div className="card-actions justify-center items-center">
                    <Link to={`/products/${_id}`}>
                        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 text-black cursor-pointer">More Info...</button>
                    </Link>
                </div>
</div>

    );
};

export default Product;