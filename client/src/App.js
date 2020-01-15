import React, { Component } from 'react';
// import logo from './logo.svg';
import TopHeader from './Components/TopHeader/TopHeader';
import TopHero from './Components/TopHero/TopHero';


class App extends Component {


  render() {
    const optBtn = {
      btnLink: '/',
      btnIcon: 'fa-apple',
      btnText: 'Some Text'
    };
    return (
      <React.Fragment>
                  <TopHeader />

          <TopHero
              title="Your ER Solution"
              subtitle='Section Subtitle here'
              imgPath='img/hero-img.png'
              btnText='Explore'
              otpBtn={ optBtn  }
                // { btnTwo: googlePlayBtn },
                // { btnThree: windowsBtn }
          />

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
    {/* About Us Section */}
  {/* ============================--> */}
  <section id="about-us" className="about-us padd-section wow fadeInUp">
    <div className="container">
      <div className="row justify-content-center">

        <div className="col-md-5 col-lg-3">
          <img src="img/about-img.png" alt="About" />
        </div>

        <div className="col-md-7 col-lg-5">
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
    {/* Testimonials Section */}
  {/* ============================--> */}

  <section id="testimonials" className="padd-section text-center wow fadeInUp">
    <div className="container">
      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="testimonials-content">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

              <div className="carousel-inner" role="listbox">

                <div className="carousel-item  active">
                  <div className="top-top">

                    <h2>Our Users Speack volumes us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries.</p>
                    <h4>Kimberly Tran<span>manager</span></h4>

                  </div>
                </div>

                <div className="carousel-item ">
                  <div className="top-top">

                    <h2>Our Users Speack volumes us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries.</p>
                    <h4>Henderson<span>manager</span></h4>

                  </div>
                </div>

                <div className="carousel-item ">
                  <div className="top-top">

                    <h2>Our Users Speack volumes us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                      specimen book. It has survived not only five centuries.</p>
                    <h4>David Spark<span>manager</span></h4>

                  </div>
                </div>

              </div>

              <div className="btm-btm">

                <ul className="list-unstyled carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ul>

              </div>

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

  {/* <!--========================== */}
    {/* Footer */}
  {/* ============================--> */}
  <footer className="footer">
    <div className="container">
      <div className="row">

        <div className="col-md-12 col-lg-4">
          <div className="footer-logo">

            <a className="navbar-brand" href="/">eStartup</a>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>About Us</h4>

            <ul className="list-unstyled">
              <li><a href="/">About us</a></li>
              <li><a href="/">Features item</a></li>
              <li><a href="/">Live streaming</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>About Us</h4>

            <ul className="list-unstyled">
              <li><a href="/">About us</a></li>
              <li><a href="/">Features item</a></li>
              <li><a href="/">Live streaming</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>Support</h4>

            <ul className="list-unstyled">
              <li><a href="/">faq</a></li>
              <li><a href="/">Editor help</a></li>
              <li><a href="/">Contact us</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

        <div className="col-sm-6 col-md-3 col-lg-2">
          <div className="list-menu">

            <h4>Abou Us</h4>

            <ul className="list-unstyled">
              <li><a href="/">About us</a></li>
              <li><a href="/">Features item</a></li>
              <li><a href="/">Live streaming</a></li>
              <li><a href="/">Privacy Policy</a></li>
            </ul>

          </div>
        </div>

      </div>
    </div>

    <div className="copyrights">
      <div className="container">
        <p>&copy; Copyrights eStartup. All rights reserved.</p>
        
      </div>
    </div>

  </footer>



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
