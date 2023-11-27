

const Product = ({product}) => {
    //console.log(product);
    const { name, image, description, vote, timestamp } = product;


    return (
        <div className="card shadow-xl w-96 mx-auto p-12 rounded-none border-4 rounded-tl-3xl rounded-br-3xl border-pink-500">
  <figure><img src={image} alt="product image" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{description.slice(0, 80)}...</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">{vote}</div> 
      <div className="badge badge-outline">{timestamp}</div>
    </div>
  </div>
</div>
    );
};

export default Product;