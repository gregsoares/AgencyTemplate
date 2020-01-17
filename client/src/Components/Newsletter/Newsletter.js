
import React from "react";

const Newsletter = props => {

  return (
    <React.Fragment>
      {/* <!--========================== */}
      {/* Newsletter Section */}
      {/* ============================--> */}
      <section id="newsletter" className="newsletter text-center wow fadeInUp">
        <div className="overlay padd-section">
          <div className="container">

            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-6">
                <form className="form-inline" method="POST" action="#">

                  <input type="email" className="form-control " placeholder="Email Adress" name="email" />
                  <button type="submit" className="btn btn-default"><i className="fa fa-location-arrow"></i>Subscribe</button>

                </form>

              </div>
            </div>

            <ul className="list-unstyled">
              <li><a href="/"><i className="fa fa-facebook"></i></a></li>
              <li><a href="/"><i className="fa fa-twitter"></i></a></li>
              <li><a href="/"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
            </ul>


          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Newsletter;
