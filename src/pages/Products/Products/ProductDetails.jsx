import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import Cover from '../../Shared/Cover/Cover';
import productImg from '../../../assets/home/productImg.jpg'
import { CgLink, CgVolume } from 'react-icons/cg';
import { FaLevelUpAlt, FaLink } from 'react-icons/fa';



const ProductDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { _id, name, image, description, vote, timestamp, tag, link} = data;



    return (
        <div className="">
            <Helmet>
                <title>Tech Gadgets | Products</title>
            </Helmet>
            <Cover img={productImg} title={name}></Cover>

        
        <div className="card card-side bg-base-100 shadow-xl rounded-none mb-14 mt-12">
            <figure className='w-1/2'>

                <img src={image} alt='service-img' />

            </figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-2xl text-[#EE9322] font-bold">{name}</h2>
                <p className='mt-12'>{description}</p>
                <p className='text-xl text-[#EE9322] font-bold text-semibold'>#{tag}</p>
                


                <div>
                    <FaLink className='text-warning'></FaLink>
                    <span>{link}</span>
                </div>
                <div>
                    <FaLevelUpAlt className=''></FaLevelUpAlt>
                    <span>{vote}</span>
                </div>

                <button className='btn btn-square text-red-600 px-12'>Reported</button>


            </div>

        </div>
        </div>
    );

   
};

export default ProductDetails;