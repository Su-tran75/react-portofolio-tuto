import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.jpeg";
import avatar2 from "../../assets/avatar2.jpeg";
import avatar3 from "../../assets/avatar3.jpeg";
import avatar4 from "../../assets/avatar4.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: avatar1,
    name: "Dallas Herman",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo consequuntur eaque quibusdam deserunt ipsam modi rerum sint! Quo, corrupti debitis voluptates nihil, reiciendis distinctio recusandae commodi aliquid itaque inventore eius ratione quaerat soluta quae iste. Exercitationem eum in obcaecati?",
  },
  {
    avatar: avatar2,
    name: "Claude Bartoletti",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facilis necessitatibus quae reprehenderit optio voluptas animi velit corrupti, provident fugit ad tempore doloremque, nulla est quas veniam vitae culpa, odit possimus ratione amet rem voluptatem. Possimus rem deserunt eum nam.",
  },
  {
    avatar: avatar3,
    name: "Conner Heidenreich V",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugiat officia doloremque laborum? Excepturi quidem, cumque quasi eligendi, necessitatibus ipsum natus et pariatur dolore, blanditiis veritatis animi mollitia? Quae, quisquam ad quidem iste minus accusantium nobis modi doloremque at dolores?",
  },
  {
    avatar: avatar4,
    name: "Karine Hegmann",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla autem voluptas saepe eius facere, corrupti impedit, ratione recusandae odit dignissimos est facilis blanditiis perspiciatis eaque similique doloribus ad asperiores beatae iure iste explicabo odio ullam quia possimus! Cum, dolore at!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide>
              <article className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                </div>
                <h5>{name}</h5>
                <small className="client__review">{review}</small>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
