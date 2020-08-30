import React, { useEffect, useState } from "react";

const Testimonials = (props) => {
  const content = props.content;
  const [slide, setSlide] = useState([]);

  // FIXME: CarouselItem not taking in input, testimonials not loading!
  const carouselItem = () => {
    content.map((testimonial) =>
      testimonial ? (
        <div className="carousel-item active " key={testimonial.key}>
          <div className="top-top">
            <h2>{testimonial.title}</h2>
            <p>{testimonial.text}</p>
            <h4>
              {testimonial.authorName}
              <span>{testimonial.authorPosition} </span>
            </h4>
          </div>
        </div>
      ) : (
        "No data received into carouselItem()"
      )
    );
  };
  const loadIndicators = () => {
    let indicators = content.map((testimonial) => testimonial.key);
    return indicators;
  };
  useEffect(() => {
    const target = document.getElementById("testimonialContent");
    if (content.length !== 0) content && setSlide(carouselItem);
  }, []);

  return (
    <React.Fragment>
      {/* <!--========================== */}
      {/* Testimonials Section */}
      {/* ============================--> */}

      <section
        className="padd-section text-center wow fadeInUp"
        id="testimonials"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="testimonials-content">
                <div
                  id="carousel-example-generic"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div
                    className="carousel-inner"
                    role="listbox"
                    id="testimonialContent"
                  ></div>

                  <div className="btm-btm">
                    <ul className="list-unstyled carousel-indicators">
                      {/* load testimonials here */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Testimonials;
