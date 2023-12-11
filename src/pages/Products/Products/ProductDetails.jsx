import React from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";
import ReviewForm from '../ReviewForm/ReviewForm';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useCart from '../../../hooks/useCart';



const ProductDetails = () => {
    const data = useLoaderData();
    //console.log(data);
    const { _id, name, image, description, category, price} = data;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location= useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();



    const handleAddToCart = () => {
      if(user && user.email) {
        console.log(user.email);
        //send cart item to the database
         const cartItem = {
            productId: _id,
            email: user.email,
            name,
            image,
            price
        }
        axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                         // refetch cart to update the cart items count
                         refetch();
                    }

                })
      }
      else{
        Swal.fire({
            title: "You are not Logged In",
            text: "Please login to add to the cart?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   send the user to the login page
                //navigate('/login')
                navigate('/login', { state: { from: location } })
                
            }
        });
    }
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

                <img src={image} alt='product-img' />

            </figure>
            <div className="card-body w-1/2">
                <h2 className="card-title text-2xl font-bold">{name}</h2>
                <p className='mt-12'>{description}</p>
                <p className='text-xl text-blue-500 font-bold text-semibold'>Price: ${price}</p>
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