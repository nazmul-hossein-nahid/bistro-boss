import Sectiontitle from "../../../Components/Sectiontitle/Sectiontitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { FaQuoteLeft } from "react-icons/fa";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <Sectiontitle
        subheading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></Sectiontitle>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="flex flex-col items-center space-y-5 text-center w-9/12 mx-auto mt-12">
                <div className="mb-10">
                  <Rating
                    style={{ maxWidth: 200 }}
                    value={review?.rating}
                    readOnly
                  />
                </div>
                <FaQuoteLeft className="text-8xl" />
                <p>{review?.details}</p>
                <h1 className="text-2xl font-bold text-yellow-700">
                  {review?.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
