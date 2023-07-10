import React from "react";
import "./testimonials.css";
import AV1 from "../../assets/avatar1.jpg";
import AV2 from "../../assets/avatar2.jpg";
import AV3 from "../../assets/avatar3.jpg";
import AV4 from "../../assets/avatar4.jpg";

import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const details = [
  {
    id: 1,
    image: AV1,
    name: "Mark",
    review: "Amazing Developer..",
  },
  {
    id: 2,
    image: AV2,
    name: "Rudra",
    review: "Created Awesome Website For me",
  },
  {
    id: 3,
    image: AV3,
    name: "Shivansh",
    review: "Great Developer",
  },
  {
    id: 4,
    image: AV4,
    name: "Riya",
    review: "Thanks For The Amazing Websites",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      modules={[ Pagination,Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
     
     
      >
        {details.map(({ id, image, name, review }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client_avatar">
              <img src={image} alt={image} />
            </div>
            <h5 className="client_name">{name}</h5>
            <small className="client_review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
