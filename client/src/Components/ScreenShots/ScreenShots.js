import React from "react";

const ScreenShots = props => {

  return (
    <React.Fragment>
        {/* <!--========================== */}
        {/* Screenshots Section */}
        {/* ============================--> */}
        <section id="screenshots" className="padd-section text-center wow fadeInUp">

          <div className="container">
            <div className="section-title text-center">
              <h2>App Gallery</h2>
              <p className="separator">Integer cursus bibendum augue ac cursus .</p>
            </div>
          </div>

          <div className="container">
            <div className="owl-carousel owl-theme">

              <div><img src="img/screen/1.jpg" alt="img" /></div>
              <div><img src="img/screen/2.jpg" alt="img" /></div>
              <div><img src="img/screen/3.jpg" alt="img" /></div>
              <div><img src="img/screen/4.jpg" alt="img" /></div>
              <div><img src="img/screen/5.jpg" alt="img" /></div>
              <div><img src="img/screen/6.jpg" alt="img" /></div>
              <div><img src="img/screen/7.jpg" alt="img" /></div>
              <div><img src="img/screen/8.jpg" alt="img" /></div>
              <div><img src="img/screen/9.jpg" alt="img" /></div>

            </div>
          </div>

        </section>



      </React.Fragment>
      );
    }
export default ScreenShots;
