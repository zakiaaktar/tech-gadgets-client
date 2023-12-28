import { Link } from "react-router-dom";

const Product = ({ product }) => {
  //console.log(product);
  const { _id, name, image, description, category } = product;

  return (
    <div className="card shadow-xl w-96 mx-auto p-4 rounded-none border-2 rounded-tl-3xl rounded-br-3xl border-[#7071E8] text-center my-16">
      <div>
        <img
          data-aos="zoom-out"
          data-aos-duration="1500"
          className="rounded-lg rounded-br-[100px]"
          src={image}
          alt=""
        />
      </div>
      <div className="my-4 h-20">
        <h2 className="font-bold text-lg text-black mb-2">{name}</h2>
        <p className="font-semibold text-sm  bg-blue-900 text-white w-fit rounded px-2 mx-auto my-4">
          {category}
        </p>
      </div>
      <Link to={`/products/${_id}`}>
        <button className="btn btn-outline bg-slate-100 border-0 border-b-4 w-2/4 mx-auto border-blue-900 text-black cursor-pointer mb-11">
          More Deatails...
        </button>
      </Link>
    </div>
  );
};

export default Product;
