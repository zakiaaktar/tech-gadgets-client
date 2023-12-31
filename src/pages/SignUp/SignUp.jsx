import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // password show and hide
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    //console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          //console.log('user profile info updated')
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user added to the database");
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Tech Gadgets | Sign Up</title>
      </Helmet>
      <section className="container mx-auto lg:mt-6">
        <div className="lg:flex items-center justify-center lg:gap-32">
          <div className="w-11/12 lg:w-full bg-blue-100 rounded-lg drop-shadow-2xl mx-auto rounded-tl-3xl rounded-br-3xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body lg:px-32 pt-6 lg:pt-32 pb-9"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-[#444]">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter Your Name"
                  className="input rounded focus:border-[#7071E8]"
                />
              </div>
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-[#444]">
                    Photo URL
                  </span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Enter Your Photo URL"
                  className="input rounded focus:border-[#7071E8]"
                />
              </div>
              {errors.photoURL && (
                <span className="text-red-600">photoURL is required</span>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-[#444]">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="Enter Your Email"
                  className="input rounded focus:border-[#7071E8]"
                />
              </div>
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-[#444]">
                    Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    name="password"
                    placeholder="Enter Your Password"
                    className="input rounded focus:border-[#7071E8] w-full"
                  />
                  <span
                    className="absolute top-4 right-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
              </div>
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have One Uppercase One Lowercase, One Number and
                  One Special Character.
                </p>
              )}
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#6d0feb] to-[#7071E8] border-0 hover:opacity-80"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center">
              <p className="font-medium mb-4">
                Already have an account
                <Link to="/login">
                  <span className="text-[#7071E8] font-bold text-xl">
                    {" "}
                    Please Login
                  </span>
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>

          {/* right side background */}
          <div className="bg-gradient-to-r from-[#6d0feb] to-[#7071E8] w-full py-20 lg:py-80 text-center text-white rounded-tl-3xl rounded-br-3xl">
            <Link to="/">
              <h2 className="font-bold text-5xl mb-4">Tech Gadgets</h2>
            </Link>
            <h2 className="font-semibold text-4xl">Sign Up</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
