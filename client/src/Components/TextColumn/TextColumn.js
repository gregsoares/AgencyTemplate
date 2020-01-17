import React from "react";

const TextColumn = props => {

  return (
    <React.Fragment>
      {/* <!--========================== */}
      {/* About Us Section */}
      {/* ============================--> */}
      <section id="text-column" className="text-column  wow fadeInUp pt-4">
        <div className="container-fluid">
          <div className="row justify-content-center">

            <div className="col-md-5 col-lg-5 border-right">
              <div className="column-content ">
                <h2><span>eStartup</span>UI Design Mobile </h2>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
              </div>
            </div>

            <div className="col-md-7 col-lg-6">
              <div className="about-content">

                <h2><span>eStartup</span>UI Design Mobile </h2>
                <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>

                <ul className="list-unstyled">
                  <li><i className="fa fa-angle-right"></i>Creative Design</li>
                  <li><i className="fa fa-angle-right"></i>Retina Ready</li>
                  <li><i className="fa fa-angle-right"></i>Easy to Use</li>
                  <li><i className="fa fa-angle-right"></i>Unlimited Features</li>
                  <li><i className="fa fa-angle-right"></i>Unlimited Features</li>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </section>

    </React.Fragment>
  )
}

export default TextColumn;