import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import useProducts from "../../../hooks/useProducts";
import Button from "../../../components/Button/Button";

const Newest = ({ items, _id }) => {
  //const [products] = useProducts();

  return (
    <section className="my-16">
      <SectionTitle title={`Newest Products`}></SectionTitle>
      <div>
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
          className="text-center container mx-auto my-16"
        >
          <div>
            {items.map((item) => (
              <SwiperSlide key={item._id}>
                <div className="card shadow-xl w-96 mx-auto p-4 rounded-none border-2 rounded-tl-3xl rounded-br-3xl border-[#7071E8]">
                  <img
                    className="rounded-lg rounded-br-[100px]"
                    src={item.image}
                    alt=""
                  />
                  <div className="my-4 h-20">
                    <h2 className="font-bold text-lg mb-2">{item.name}</h2>
                    <p className="font-semibold text-sm  bg-blue-900 w-fit rounded px-2 mx-auto text-white">
                      {item.category}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
      <Link to="/products">
        <Button buttonTitle={`Show all products`}></Button>
      </Link>
    </section>
  );
};

export default Newest;
