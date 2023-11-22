import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";

const OrderOnlin = () => {
  return (
    <section className="my-20">
      <Sectiontitle
        subheading={"From 11:00am to 10:00pm"}
        heading={"ORDER ONLINE"}
      ></Sectiontitle>
      <div className="mt-12">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full"
                src="https://i.ibb.co/s2dvvhj/slide1.jpg"
                alt=""
              />
              <div className="w-full absolute top-0 text-transparent hover:text-white hover:bg-gradient-to-t hover:duration-1000 from-blue-700 h-full">
                <h1 className="bottom-10 text-center mt-96 uppercase  text-4xl  mx-auto">
                  Salads
                </h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full"
                src="https://i.ibb.co/1XG35dt/slide2.jpg"
                alt=""
              />
              <div className="w-full absolute top-0 text-transparent hover:text-white hover:bg-gradient-to-t hover:duration-1000 from-blue-700 h-full">
                <h1 className="bottom-10 text-center mt-96 uppercase  text-4xl  mx-auto">
                pizzas
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full"
                src="https://i.ibb.co/Z6fjd1p/slide3.jpg"
                alt=""
              />
              <div className="w-full absolute top-0 text-transparent hover:text-white hover:bg-gradient-to-t hover:duration-1000 from-blue-700 h-full">
                <h1 className="bottom-10 text-center mt-96 uppercase  text-4xl  mx-auto">
                Soups
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full"
                src="https://i.ibb.co/k9vMM9t/slide4.jpg"
                alt=""
              />
              <div className="w-full absolute top-0 text-transparent hover:text-white hover:bg-gradient-to-t hover:duration-1000 from-blue-700 h-full">
                <h1 className="bottom-10 text-center mt-96 uppercase  text-4xl  mx-auto">
                  desserts
                </h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="w-full"
                src="https://i.ibb.co/s2dvvhj/slide1.jpg"
                alt=""
              />
              <div className="w-full absolute top-0 text-transparent hover:text-white hover:bg-gradient-to-t hover:duration-1000 from-blue-700 h-full">
                <h1 className="bottom-10 text-center mt-96 uppercase  text-4xl  mx-auto">
                  Salads
                </h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default OrderOnlin;
