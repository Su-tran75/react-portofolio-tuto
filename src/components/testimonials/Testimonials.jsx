import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.jpeg";
import avatar2 from "../../assets/avatar2.jpeg";
import avatar3 from "../../assets/avatar3.jpeg";
import avatar4 from "../../assets/avatar4.jpeg";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar1} alt="Avatar One" />
          </div>
          <h5>Patricia Watsica</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            inventore sit laudantium totam cumque praesentium ipsa explicabo eum
            reiciendis exercitationem aspernatur id, ullam minima, incidunt
            similique quasi deserunt voluptatem! Cum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar1} alt="Avatar One" />
          </div>
          <h5>Patricia Watsica</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            inventore sit laudantium totam cumque praesentium ipsa explicabo eum
            reiciendis exercitationem aspernatur id, ullam minima, incidunt
            similique quasi deserunt voluptatem! Cum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar1} alt="Avatar One" />
          </div>
          <h5>Patricia Watsica</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            inventore sit laudantium totam cumque praesentium ipsa explicabo eum
            reiciendis exercitationem aspernatur id, ullam minima, incidunt
            similique quasi deserunt voluptatem! Cum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={avatar1} alt="Avatar One" />
          </div>
          <h5>Patricia Watsica</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            inventore sit laudantium totam cumque praesentium ipsa explicabo eum
            reiciendis exercitationem aspernatur id, ullam minima, incidunt
            similique quasi deserunt voluptatem! Cum.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
