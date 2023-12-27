import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";



const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateItem = () => {
    // const item = useLoaderData();
    // console.log(item);
    const { _id, name, image, description, category, price} = useLoaderData();


    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();



    const onSubmit = async (data) => {
        console.log(data)
         // image upload to imgbb and then get an url
         const imageFile = { image: data.image[0] }
         const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the Product item data to the server with the image url
            const productItem = {
               name: data.name,
               category: data.category,
               price: parseFloat(data.price),
               //product: data.product,
               description: data.description,
               image: res.data.data.display_url
           }
            // 
            const productRes = await axiosSecure.patch(`/product/${_id}`, productItem);
            console.log(productRes.data)
            if(productRes.data.modifiedCount > 0){
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the Product.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log('with image url', res.data);
    }



    return (
        <div className="w-4/5 mx-auto my-16 bg-blue-100 py-8 px-2">
            <SectionTitle title="Update an Item" description="Refresh info"></SectionTitle>

            <div>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-10'>
                <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name*</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Product Name"
                            {...register('name', { required: true })}
                            required
                            className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue={category} {...register('category', { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Smartphones">Smartphones</option>
                                <option value="MacBooks">MacBooks</option>
                                <option value="Monitors">Monitors</option>
                                <option value="Apple Watches">Apple Watches</option>
                                <option value="iPhones">iPhones</option>
                                <option value="Gaming PCs">Gaming PCs</option>
                            </select>
                        </div>

                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* product details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Details</span>
                        </label>
                        <textarea defaultValue={description}{...register('product')} className="textarea textarea-bordered h-24" placeholder="Product Details"></textarea>
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn btn-outline rounded font-bold text-lg text-white bg-gradient-to-r from-[#6d0feb] to-[#7071E8] border-0 hover:opacity-80">
                        Update Product Item
                    </button>
            </form>
            </div>
        </div>
    );
};

export default UpdateItem;