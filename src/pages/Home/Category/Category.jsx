import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <div className="md:w-2/3 mx-auto my-16">
      
      <div >
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="text-center"
        >
          <SwiperSlide className="relative ">
            <img className="mx-auto rounded-2xl" src={img5} alt="" />
            <h2
              className={`cinzel text-3xl text-white  absolute bottom-8 right-20`}
            >
              Featured Items
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative ">
            <img className="mx-auto rounded-2xl" src={img5} alt="" />
            <h2
              className={`cinzel text-3xl text-white absolute bottom-8 right-20`}
            >
              Top Rated
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img className="mx-auto rounded-2xl" src={img1} alt="" />
            <h2
              className={`cinzel text-3xl text-white absolute bottom-8 right-20`}
            >
              New Arrival
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative ">
            <img className="mx-auto rounded-2xl" src={img2} alt="" />
            <h2
              className={`cinzel text-3xl text-white absolute bottom-8 right-20`}
            >
              Comming Soon
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative ">
            <img className="mx-auto rounded-2xl" src={img3} alt="" />
            <h2
              className={`cinzel text-3xl text-white absolute bottom-8 right-20`}
            >
              Best Sellers
            </h2>
          </SwiperSlide>
          <SwiperSlide className="relative ">
            <img className="mx-auto rounded-2xl" src={img4} alt="" />
            <h2
              className={`cinzel text-3xl text-white absolute bottom-8 right-20`}
            >
              Most Viewed
            </h2>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Category;