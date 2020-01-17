import React, { Component } from 'react';
// import logo from './logo.svg';
import AboutUs from "./Components/AboutUs/AboutUs";
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import GetStarted from './Components/GetStarted/GetStarted';
import Newsletter from './Components/Newsletter/Newsletter';
import PriceTable from './Components/PriceTable/PriceTable';
import ScreenShots from './Components/ScreenShots/ScreenShots';
import Team from './Components/Team/Team';
import Testimonials from './Components/Testimonials/Testimonials';
import TopHeader from './Components/TopHeader/TopHeader';
import TopHero from './Components/TopHero/TopHero';
import Video from './Components/Video/Video';

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
    const testimonials = {
      testimonial: {
        title: 'T1',
        text: 'Such nice things to say',
        authorName: 'Greg Soares',
        authorPosition: 'Boss'
      },
      // testimonial: {
      //   title: 'T2',
      //   text: 'Such great things to say',
      //   authorName: 'Greg Soares 2',
      //   authorPosition: 'Bossy'
      // }
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
        <Features />
        <Testimonials content={testimonials.testimonial}/>
        <AboutUs />
        <Team />
        {/* <Video /> */}
        <Blog />
        <GetStarted />
        <PriceTable />
        {/* <ScreenShots /> */}
        <Newsletter />
        <Contact />
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