import React, { Component } from "react";
import AboutUs from "./Components/AboutUs/AboutUs";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Newsletter from "./Components/Newsletter/Newsletter";
import PriceTable from "./Components/PriceTable/PriceTable";
import ScreenShots from "./Components/ScreenShots/ScreenShots";
import Team from "./Components/Team/Team";
// import Testimonials from "./Components/Testimonials/Testimonials";
import TopHeader from "./Components/TopHeader/TopHeader";
import TopHero from "./Components/TopHero/TopHero";
import Video from "./Components/Video/Video";

class App extends Component {
  render() {
    const icons = {
      iconOne: {
        text: "Icon One Text",
      },
      iconTwo: {
        text: "Icon Two Text",
      },
      iconThree: {
        text: "Icon Three Text",
      },
    };

    // const testimonials = [
    //   {
    //     title: "Works as expected",
    //     text:
    //       " Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    //     authorName: "Greg Soares",
    //     authorPosition: "User",
    //     key: 0,
    //   },
    //   {
    //     title: "Testimonial Two",
    //     text:
    //       "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    //     authorName: "Greg Soares",
    //     authorPosition: "Dev guy",
    //     key: 1,
    //   },
    //   {
    //     title: "T1",
    //     text:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    //     authorName: "Thoman Henderson",
    //     authorPosition: "Manager",
    //     key: 2,
    //   },
    // ];

    return (
      <React.Fragment>
        <TopHeader />

        <TopHero
          title="Company Intro Section"
          subtitle="Section Subtitle here"
          imgPath="img/hero-img.png"
          btnText="Explore"
          iconOne={icons.iconOne}
          iconTwo={icons.iconTwo}
          iconThree={icons.iconThree}
        />
        <Features />
        {/* <Testimonials content={testimonials} /> */}
        <AboutUs />
        <Team />
        <Video />
        <Blog />
        <GetStarted />
        <PriceTable />
        <ScreenShots />
        <Newsletter />
        <Contact />
        <Footer />

        <a href="/" className="back-to-top">
          <i className="fa fa-chevron-up"></i>
        </a>

        {/* <!-- JavaScript Libraries --> */}
        <script src="lib/jquery/jquery.min.js"></script>
        <script src="lib/jquery/jquery-migrate.min.js"></script>
        <script src="lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="lib/superfish/hoverIntent.js"></script>
        <script src="lib/superfish/superfish.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/modal-video/js/modal-video.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/wow/wow.min.js"></script>
        {/* <!-- Contact Form JavaScript File --> */}
        <script src="contactform/contactform.js"></script>

        {/* <!-- Template Main Javascript File --> */}
        <script src="js/main.js"></script>
      </React.Fragment>
    );
  }
}

export default App;
