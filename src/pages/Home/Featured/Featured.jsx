import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



const Featured = ({ items }) => {

    return (
        <section className="my-16">
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
                <div className="card shadow-xl w-96 mx-auto p-4 rounded-none border-2 rounded-tl-3xl rounded-br-3xl border-[#EE9322]">
                  <img
                    className="rounded-lg rounded-br-[100px]"
                    src={item.image}
                    alt=""
                  />
                  <div className="my-4 h-20">
                    <h2 className="font-bold text-lg text-black mb-2">
                      {item.name}
                    </h2>
                    <p className="font-semibold text-sm text-gray-500 bg-sky-300 w-fit rounded px-2 mx-auto">
                      {item.tag}
                    </p>
                  </div>
                  <button className="btn btn-outline bg-slate-100 border-0 border-b-4 w-2/4 mx-auto border-orange-400 text-black cursor-pointer mb-11">
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