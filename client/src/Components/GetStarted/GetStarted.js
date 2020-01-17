import React from "react";

const GetStarted = props => {

  return (
    <React.Fragment>
      {/* <!--========================== */}
      {/* Get Started Section */}
      {/* ============================--> */}

      <section id="get-started" className="padd-section text-center wow fadeInUp">

        <div className="container">
          <div className="section-title text-center">

            <h2>simple systeme fordiscount </h2>
            <p className="separator">Integer cursus bibendum augue ac cursus .</p>

          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-md-6 col-lg-4">
              <div className="feature-block">

                <img src="img/svg/cloud.svg" alt="img" className="img-fluid" />
                <h4>introducing whatsapp</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <a href="/">read more</a>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-block">

                <img src="img/svg/planet.svg" alt="img" className="img-fluid" />
                <h4>user friendly interface</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <a href="/">read more</a>

              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-block">

                <img src="img/svg/asteroid.svg" alt="img" className="img-fluid" />
                <h4>build the app everyone love</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <a href="/">read more</a>

              </div>
            </div>

          </div>
        </div>

      </section>
    </React.Fragment>
  );
}
export default GetStarted;
