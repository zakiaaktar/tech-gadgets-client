import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  console.log("state in the location login page", location.state);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);

      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    //console.log(value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
 
  
  return (
    <>
      <Helmet>
        <title>Tech Gadgets | Login</title>
      </Helmet>
      <section className="container mx-auto lg:mt-12">
        <div className="lg:flex items-center justify-center lg:gap-32">
          <div className="bg-gradient-to-r from-[#6d0feb] to-[#7071E8] w-full py-20 lg:py-80 text-center text-white rounded-tl-3xl rounded-br-3xl">
            <h2 className="font-bold text-5xl mb-4">Tech Gadgets</h2>
            <h2 className="font-semibold text-4xl">Login </h2>
          </div>
          <div className="w-11/12 lg:w-full bg-blue-100 drop-shadow-2xl mx-auto rounded-tl-3xl rounded-br-3xl">
            <form
              onSubmit={handleLogin}
              className="card-body lg:px-32 pt-6 lg:pt-32 pb-9"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-[#444]">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input rounded focus:border-[#7071E8]"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl text-[#444]">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input rounded focus:border-[#7071E8]"
                  required
                />
              </div>

              {/* chaptcha */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the Captcha Above"
                  className="input input-bordered rounded focus:border-[#7071E8]"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  className="btn btn-outline rounded font-bold text-xl text-white bg-gradient-to-r from-[#6d0feb] to-[#7071E8] border-0 hover:opacity-80"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="mt-2 text-center">
              <p className="font-medium text-lg ">
                <small>
                  New in Tech Gadgets ? Please{" "}
                  <Link to="/signup">
                    <span className="text-[#7071E8] font-bold text-xl"> Sign Up</span>
                  </Link>
                </small>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;



