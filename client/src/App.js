import React, { Component } from 'react';
// import logo from './logo.svg';
import TopHeader from './Components/TopHeader/TopHeader';
import TopHero from './Components/TopHero/TopHero';
import Testimonials from './Components/Testimonials/Testimonials';
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from './Components/Footer/Footer';

class App extends Component {


  render() {

    const icons = {
      iconOne: {
        text: 'Icon One Text'
      },
      iconTwo: {
        text: 'Icon Two Text'
      },
      iconThree: {
        text: 'Icon Three Text'
      },

    }

    return (
      <React.Fragment>
        <TopHeader />

        <TopHero
          title="Your ER Solution"
          subtitle='Section Subtitle here'
          imgPath='img/hero-img.png'
          btnText='Explore'
          iconOne={icons.iconOne}
          iconTwo={icons.iconTwo}
          iconThree={icons.iconThree}
        />
        <AboutUs />

        <Testimonials />

        {/* TODO: Turn all sections below into components */}


        <Footer />


        <a href="/" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

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