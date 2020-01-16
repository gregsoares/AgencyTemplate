import React, { Component } from 'react';
// import logo from './logo.svg';
import TopHeader from './Components/TopHeader/TopHeader';
import TopHero from './Components/TopHero/TopHero';
import Testimonials from './Components/Testimonials/Testimonials';
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from './Components/Footer/Footer';

class App extends Component {


  render() {

    const optBtn = {
      btnLink: '/',
      btnIcon: 'fa-apple',
      btnText: 'Some Text'
    };
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

        {/* <!--========================== */}
        {/* Features Section */}
        {/* ============================--> */}

        <section id="features" className="padd-section text-center wow fadeInUp">

          <div className="container">
            <div className="section-title text-center">
              <h2>Amazing Features.</h2>
              <p className="separator">Integer cursus bibendum augue ac cursus .</p>
            </div>
          </div>

          <div className="container">
            <div className="row">

              <div className="col-md-6 col-lg-3">
                <div className="feature-block">
                  <img src="img/svg/paint-palette.svg" alt="img" className="img-fluid" />
                  <h4>creative design</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="feature-block">
                  <img src="img/svg/vector.svg" alt="img" className="img-fluid" />
                  <h4>Retina Ready</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="feature-block">
                  <img src="img/svg/design-tool.svg" alt="img" className="img-fluid" />
                  <h4>easy to use</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="feature-block">
                  <img src="img/svg/asteroid.svg" alt="img" className="img-fluid" />
                  <h4>Free Updates</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="feature-block">
                  <img src="img/svg/asteroid.svg" alt="img" className="img-fluid" />
                  <h4>Free Updates</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="feature-block">
                  <img src="img/svg/cloud-computing.svg" alt="img" className="img-fluid" />
                  <h4>App store support</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="feature-block">
                  <img src="img/svg/pixel.svg" alt="img" className="img-fluid" />
                  <h4>Perfect Pixel</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="feature-block">
                  <img src="img/svg/code.svg" alt="img" className="img-fluid" />
                  <h4>clean codes</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                </div>
              </div>

            </div>
          </div>
        </section>

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

        {/* <!--========================== */}
        {/* Video Section */}
        {/* ============================--> */}

        <section id="video" className="text-center wow fadeInUp">
          <div className="overlay">
            <div className="container-fluid container-full">

              <div className="row">
                <a href="/" className="js-modal-btn play-btn" data-video-id="s22ViV7tBKE"> </a>
              </div>

            </div>
          </div>
        </section>

        {/* <!--========================== */}
        {/* Team Section */}
        {/* ============================--> */}
        <section id="team" className="padd-section text-center wow fadeInUp">

          <div className="container">
            <div className="section-title text-center">

              <h2>Team Member</h2>
              <p className="separator">Integer cursus bibendum augue ac cursus .</p>

            </div>
          </div>

          <div className="container">
            <div className="row">

              <div className="col-md-6 col-md-4 col-lg-3">
                <div className="team-block bottom">
                  <img src="img/team/1.jpg" className="img-responsive" alt="img" />
                  <div className="team-content">
                    <ul className="list-unstyled">
                      <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                    <span>manager</span>
                    <h4>Kimberly Tran</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-md-4 col-lg-3">
                <div className="team-block bottom">
                  <img src="img/team/2.jpg" className="img-responsive" alt="img" />
                  <div className="team-content">
                    <ul className="list-unstyled">
                      <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                    <span>manager</span>
                    <h4>Kimberly Tran</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-md-4 col-lg-3">
                <div className="team-block bottom">
                  <img src="img/team/3.jpg" className="img-responsive" alt="img" />
                  <div className="team-content">
                    <ul className="list-unstyled">
                      <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                    <span>manager</span>
                    <h4>Kimberly Tran</h4>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-md-4 col-lg-3">
                <div className="team-block bottom">
                  <img src="img/team/4.jpg" className="img-responsive" alt="img" />
                  <div className="team-content">
                    <ul className="list-unstyled">
                      <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                    </ul>
                    <span>manager</span>
                    <h4>Kimberly Tran</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* <!--========================== */}
        {/* Pricing Table Section */}
        {/* ============================--> */}
        <section id="pricing" className="padd-section text-center wow fadeInUp">

          <div className="container">
            <div className="section-title text-center">

              <h2>Meet With Price</h2>
              <p className="separator">Integer cursus bibendum augue ac cursus .</p>

            </div>
          </div>

          <div className="container">
            <div className="row">

              <div className="col-md-6 col-lg-3">
                <div className="block-pricing">
                  <div className="table">
                    <h4>basic</h4>
                    <h2>$29</h2>
                    <ul className="list-unstyled">
                      <li><b>4 GB</b> Ram</li>
                      <li><b>7/24</b> Tech Support</li>
                      <li><b>40 GB</b> SSD Cloud Storage</li>
                      <li>Monthly Backups</li>
                      <li>Palo Protection</li>
                    </ul>
                    <div className="table_btn">
                      <a href="/" className="btn"><i className="fa fa-shopping-cart"></i> Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="block-pricing">
                  <div className="table">
                    <h4>PERSONAL</h4>
                    <h2>$29</h2>
                    <ul className="list-unstyled">
                      <li><b>4 GB</b> Ram</li>
                      <li><b>7/24</b> Tech Support</li>
                      <li><b>40 GB</b> SSD Cloud Storage</li>
                      <li>Monthly Backups</li>
                      <li>Palo Protection</li>
                    </ul>
                    <div className="table_btn">
                      <a href="/" className="btn"><i className="fa fa-shopping-cart"></i> Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="block-pricing">
                  <div className="table">
                    <h4>BUSINESS</h4>
                    <h2>$29</h2>
                    <ul className="list-unstyled">
                      <li><b>4 GB</b> Ram</li>
                      <li><b>7/24</b> Tech Support</li>
                      <li><b>40 GB</b> SSD Cloud Storage</li>
                      <li>Monthly Backups</li>
                      <li>Palo Protection</li>
                    </ul>
                    <div className="table_btn">
                      <a href="/" className="btn"><i className="fa fa-shopping-cart"></i> Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="block-pricing">
                  <div className="table">
                    <h4>profeesional</h4>
                    <h2>$29</h2>
                    <ul className="list-unstyled">
                      <li><b>4 GB</b> Ram</li>
                      <li><b>7/24</b> Tech Support</li>
                      <li><b>40 GB</b> SSD Cloud Storage</li>
                      <li>Monthly Backups</li>
                      <li>Palo Protection</li>
                    </ul>
                    <div className="table_btn">
                      <a href="/" className="btn"><i className="fa fa-shopping-cart"></i> Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--========================== */}
        {/* Blog Section */}
        {/* ============================--> */}
        <section id="blog" className="padd-section wow fadeInUp">

          <div className="container">
            <div className="section-title text-center">

              <h2>Latest posts</h2>
              <p className="separator">Integer cursus bibendum augue ac cursus .</p>

            </div>
          </div>

          <div className="container">
            <div className="row">

              <div className="col-md-6 col-lg-4">
                <div className="block-blog text-left">
                  <a href="/"><img src="img/blog/blog-image-1.jpg" alt="img" /></a>
                  <div className="content-blog">
                    <h4><a href="/">whats isthe difference between good and bat typography</a></h4>
                    <span>05, juin 2017</span>
                    <a className="pull-right readmore" href="/">read more</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="block-blog text-left">
                  <a href="/"><img src="img/blog/blog-image-2.jpg" className="img-responsive" alt="img" /></a>
                  <div className="content-blog">
                    <h4><a href="/">whats isthe difference between good and bat typography</a></h4>
                    <span>05, juin 2017</span>
                    <a className="pull-right readmore" href="/">read more</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="block-blog text-left">
                  <a href="/"><img src="img/blog/blog-image-3.jpg" className="img-responsive" alt="img" /></a>
                  <div className="content-blog">
                    <h4><a href="/">whats isthe difference between good and bat typography</a></h4>
                    <span>05, jun 2017</span>
                    <a className="pull-right readmore" href="/">read more</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

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

        {/* <!--========================== */}
        {/* Contact Section */}
        {/* ============================--> */}
        <section id="contact" className="padd-section wow fadeInUp">

          <div className="container">
            <div className="section-title text-center">
              <h2>Contact</h2>
              <p className="separator">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
            </div>
          </div>

          <div className="container">
            <div className="row justify-content-center">

              <div className="col-lg-3 col-md-4">

                <div className="info">
                  <div>
                    <i className="fa fa-map-marker"></i>
                    <p>Gainesville, Florida</p>
                  </div>
                  <div className="email">
                    <i className="fa fa-envelope"></i>
                    <p>yourersolution@gmail.com</p>
                  </div>

                  <div>
                    <i className="fa fa-phone"></i>
                    <p>123-456-7890</p>
                  </div>
                </div>

                <div className="social-links">
                  <a href="/" className="twitter"><i className="fa fa-twitter"></i></a>
                  <a href="/" className="facebook"><i className="fa fa-facebook"></i></a>
                  <a href="/" className="instagram"><i className="fa fa-instagram"></i></a>
                  <a href="/" className="google-plus"><i className="fa fa-google-plus"></i></a>
                  <a href="/" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>

              </div>

              <div className="col-lg-5 col-md-8">
                <div className="form">
                  <div id="sendmessage">Your message has been sent. Thank you!</div>
                  <div id="errormessage"></div>
                  <form action="" method="post" className="contactForm">
                    <div className="form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div className="validation"></div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- #contact --> */}

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