import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../hooks/useAuth';
import useProducts from '../../../hooks/useProducts';



const ReviewForm = ({product}) => {
    const [products] = useProducts([]);
    // const { name } = product;
    const { user } = useAuth();



    const handleReview = (e) => {
        e.preventDefault();
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

    }



    return (
        <div className="container mx-auto mt-12">
            <SectionTitle title={`Review This Product`}></SectionTitle>
     
      <div className="w-11/12 bg-slate-100 rounded-lg drop-shadow-2xl mx-auto">
        <form
          onSubmit={handleReview}
          className="card-body lg:px-32"
        >
          <div className="">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="avatar">
                <div className="w-20 mask mask-squircle">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <h2 className="font-medium text-2xl md:text-3xl text-black">
                {user?.displayName}
              </h2>
            </div>
          </div>
          {/* review message  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#444]">
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
              className="textarea textarea-info"
            ></textarea>
          </div>
          {/* rating  */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-xl text-[#444]">
                Rating
              </span>
            </label>
            <input
              type="range"
              name="rating"
              min="0"
              max="5"
              className="range range-info"
            ></input>
            <div className="w-full flex justify-between px-2">
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
              className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#13a0fe] to-[#022889] border-0 hover:opacity-80"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <div className="mt-6">
        <Link to="/products">
          <Button buttonTitle={`Go Back`}></Button>
        </Link>
      </div>
    </div>
    );
};

export default ReviewForm;