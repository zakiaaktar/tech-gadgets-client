import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { _id, name, image, description, vote, timestamp } = data;


    return (
        <div className="card card-side bg-base-100 shadow-xl rounded-none mb-14 mt-24">
            <figure className='w-1/2'>

                <img src={image} alt='service-img' />

            </figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='mt-12'>{description}</p>
                {/* <p className='text-xl text-green-500 font-bold text-semibold'>Price: ${price}</p>
                <div className="card-actions justify-center">

                    <Link to={`/addservice/${_id}`}>
                        <button className="btn font-bold bg-green-500 rounded-full mt-3 pr-24 pl-24 border-none">Add Service</button>
                    </Link>
                </div> */}
            </div>

        </div>
    );
};

export default ProductDetails;