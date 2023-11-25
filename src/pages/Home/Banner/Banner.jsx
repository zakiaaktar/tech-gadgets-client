import banner from "../../../assets/home/banner.jpg";
import { Parallax } from 'react-parallax';

const Banner = () => {
    return (

        <Parallax 
        blur={{ min: -50, max: 50 }}
        bgImage={banner}
        bgImageAlt="Banner"
        strength={-200}
    >
        <div className="hero h-[700px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-[#EE9322] text-5xl font-bold uppercase">Come Here And Enjoy!!!</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-outline border-0 border-b-4 btn-warning text-white text-xl">Shop Now</button>
    </div>
  </div>
</div>
    </Parallax>
    );
};

export default Banner;