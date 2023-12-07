import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";



const Featured = ({ items }) => {

    return (
        <section className="my-16">
            <SectionTitle
        title={`Featured Products`}
        description={`Discover a future of innovation with our featured products—smart
        glasses, quantum computing, advanced drones, mind-reading tech, space
        habitats, solar-powered spacecraft, holographic displays, and
        bio implants. Redefine possibilities with these technological marvels.`}
      ></SectionTitle>
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
                <div className="card shadow-xl w-96 mx-auto p-4 rounded-none border-2 rounded-tl-3xl rounded-br-3xl border-blue-900">
                  <img
                    className="rounded-lg rounded-br-[100px]"
                    src={item.image}
                    alt=""
                  />
                  <div className="my-4 h-20">
                    <h2 className="font-bold text-lg text-black mb-2">
                      {item.name}
                    </h2>
                    <p className="font-semibold text-sm  bg-blue-900 w-fit rounded px-2 mx-auto text-white">
                      {item.tag}
                    </p>
                  </div>
                  <button className="btn btn-outline bg-slate-100 border-0 border-b-4 w-2/4 mx-auto border-blue-900 text-black cursor-pointer mb-11">
                      View Deatails...
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
    );
};

export default Featured;