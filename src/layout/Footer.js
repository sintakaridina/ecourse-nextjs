import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <footer id="footer-2" className="footer division">
      <div className="container">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER INFO */}
          <div className="col-md-5 col-lg-5 col-xl-4">
            <div className="footer-info mb-40">
              {/* Footer Logo */}
              {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 344 x 80 pixels) */}
              <img
                src="images/logo.png"
                width={172}
                height={40}
                alt="footer-logo"
              />
              {/* Text */}
              <div>
                Aliquam orci a nullam tempor sapien gravida donec enim ipsum
                porta justo velna an auctor undo congue magna laoreet augue
                sapien
              </div>
            </div>
          </div>
          {/* FOOTER PRODUCTS LINKS */}
          <div className="col-md-3 col-lg-3 col-xl-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-md">Quick Links</h5>
              {/* Footer Links */}
              <ul className="foo-links clearfix">
                <li>
                  <Link legacyBehavior href="/about">
                    <a>About eTreeks</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/categories-list">
                    <a>Courses Catalog</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/reviews">
                    <a>Our Testimonials</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/pricing">
                    <a>Premium Learning</a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="/blog-listing">
                    <a>From the Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER COMPANY LINKS */}
          <div className="col-md-4 col-lg-4 col-xl-3">
            <div className="footer-links mb-40">
              {/* Title */}
              <h5 className="h5-md">Popular Categories</h5>
              {/* Footer Links */}
              <ul className="clearfix">
                <li>
                  <Link legacyBehavior href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Business English
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Software Development
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Finance &amp; Accounting
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Health and Fitness
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Office Productivity
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER NEWSLETTER FORM */}
          <div className="col-md-7 col-xl-3">
            <div className="footer-form mb-20">
              {/* Title */}
              <h5 className="h5-md">Stay in Touch</h5>
              {/* Newsletter Form Input */}
              <form className="newsletter-form">
                <div className="input-group">
                  <input
                    type="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder="Your Email Address"
                    required
                  />
                  <span className="input-group-btn">
                    <button
                      type="submit"
                      className="btn btn-rose tra-rose-hover"
                    >
                      Subscribe
                    </button>
                  </span>
                </div>
                {/* Newsletter Form Notification */}
                <label className="form-notification" />
              </form>
            </div>
          </div>
          {/* END FOOTER NEWSLETTER FORM */}
        </div>
        {/* END FOOTER CONTENT */}
        {/* BOTTOM FOOTER */}
        <div className="bottom-footer">
          <div className="row">
            {/* FOOTER COPYRIGHT */}
            <div className="col-lg-8">
              <ul className="bottom-footer-list">
                <li>
                  <div>© Copyright eTreeks {new Date().getFullYear()}</div>
                </li>
                <li>
                  <div>
                    <Link legacyBehavior href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="tel:123456789"
                      >
                        508.746.9892
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="last-li">
                    <Link legacyBehavior href="#">
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        href="mailto:yourdomain@mail.com"
                      >
                        hello@domain.com
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            {/* FOOTER SOCIALS LINKS */}
            <div className="col-lg-4 text-right">
              <ul className="foo-socials text-center clearfix">
                <li>
                  <Link legacyBehavior href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-facebook"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-twitter"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-google-plus"
                    >
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link legacyBehavior href="#">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="ico-tumblr"
                    >
                      <i className="fab fa-tumblr" />
                    </a>
                  </Link>
                </li>
                {/*
									<li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>	
									<li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>									
									<li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
									<li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
									<li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>								
									<li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>										
									<li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>
									<li><a href="#" class="ico-yelp"><i class="fab fa-yelp"></i></a></li>
									<li><a href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></a></li>
								    */}
              </ul>
            </div>
          </div>
        </div>
        {/* END BOTTOM FOOTER */}
      </div>
      {/* End container */}
    </footer>
  );
};

export default Footer;
