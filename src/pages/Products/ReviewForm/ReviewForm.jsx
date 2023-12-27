import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../../components/Button/Button";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useProducts from "../../../hooks/useProducts";



const ReviewForm = () => {
  const data = useLoaderData();
  //console.log(data);
  const { name } = data;
  // const [products] = useProducts([]);
  // const { name } = product;
  // console.log(name)
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();


  const handleReview = (e) => {
    e.preventDefault();
    // const reviewerName = e.target.name.value;
    // const reviewerImage = e.target.image.value;
    const review = e.target.review.value;
    const rating = e.target.rating.value;

    // console.log(reviewerName, reviewerImage, review, rating);

    const reviewItem = {
      product_name: name,
      reviewer_name: user?.displayName,
      reviewer_image: user?.photoURL,
      review,
      rating,
    };

    axiosSecure.post("/reviews", reviewItem).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Review Posted Successfully !",
          showClass: {
            popup: "animate_animated animate_fadeInDown",
          },
          hideClass: {
            popup: "animate_animated animate_fadeOutUp",
          },
        });
      }
    });

    e.target.reset();
  };

  return (
    <div className="container mx-auto">
      <SectionTitle title={`Review This Product`}></SectionTitle>

      <div className="w-11/12 bg-blue-100 drop-shadow-2xl mx-auto rounded-none rounded-tl-3xl rounded-br-3xl border-[#7071E8]">
        <form onSubmit={handleReview} className="card-body lg:px-32">
          <div className="">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="avatar">
                <div className="w-20 mask mask-squircle">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <h2 className="font-medium text-2xl md:text-3xl text-[#6d0feb]">
                {user?.displayName}
              </h2>
            </div>
          </div>
          {/* review message  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#7071E8]">
                Review Message
              </span>
            </label>
            <textarea
              name="review"
              id=""
              placeholder="Type Your Review"
              required
              cols="10"
              rows="10"
              className="textarea textarea-primary"
            ></textarea>
          </div>
          {/* rating  */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#7071E8]">
                Rating
              </span>
            </label>
            <input
              type="range"
              name="rating"
              min="0"
              max="5"
              className="range"
            ></input>
            <div className="w-full flex justify-between px-2 text-[#7071E8]">
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#6d0feb] to-[#7071E8] border-0 hover:opacity-80"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <div className="m-6">
        <Link to="/products">
          <Button buttonTitle={`Back To Home`}></Button>
        </Link>
      </div>
    </div>
  );
};

export default ReviewForm;
