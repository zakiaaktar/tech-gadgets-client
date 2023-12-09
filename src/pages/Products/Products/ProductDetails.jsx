import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import ReviewForm from '../ReviewForm/ReviewForm';



const ProductDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { _id, name, image, description,  tag} = data;


    const handleAddToCart = () => {
       //console.log(food);
    }



    return (
        <>
      {name && (
        <Helmet>
          <title>{`Tech Gadgets | ${name}`}</title>
        </Helmet>
      )}

        <div className="rounded-t-lg h-fit">
        <h2 className="font-semibold text-2xl md:text-3xl bg-[#13a0fe] text-center py-12 text-white rounded-lg rounded-br-[30px] md:rounded-br-[50px]">
          {name}
        </h2>
        </div>
        
        <div className="card card-side bg-base-100 shadow-xl rounded-none">
            <figure className='w-1/2'>

                <img src={image} alt='service-img' />

            </figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='mt-12'>{description}</p>
                {/* <p className='text-xl text-green-500 font-bold text-semibold'>Price: ${price}</p> */}
                <div>
                  <button 
                    onClick={handleAddToCart}
                    className="btn btn-outline bg-slate-100 border-0 border-b-4 w-1/4 mx-auto border-blue-900 text-black cursor-pointer mb-11">
                      Add to cart
                  </button>
                    
                </div>
            </div>

        </div>
        
      <ReviewForm></ReviewForm>
     
    </>

    

);

   
};

export default ProductDetails;