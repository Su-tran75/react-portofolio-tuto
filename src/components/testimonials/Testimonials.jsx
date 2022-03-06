import React from "react";
import "./testimonials.css";
import avatar1 from "../../assets/avatar1.jpeg";
import avatar2 from "../../assets/avatar2.jpeg";
import avatar3 from "../../assets/avatar3.jpeg";
import avatar4 from "../../assets/avatar4.jpeg";

const data = [
  {
    avatar: avatar1,
    name: "Dallas Herman",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque quasi quis, voluptas quae aut natus, fugiat officia recusandae nobis ad repellendus error omnis accusamus. Enim tempore perferendis suscipit doloremque eveniet itaque aspernatur ipsum dolorum adipisci, labore fugiat consequatur a voluptatum!",
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

      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
