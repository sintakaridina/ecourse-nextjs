import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { home1CoursesProps } from "./sliderProps";
const CoursesSlider = () => {
  return (
    <Swiper {...home1CoursesProps}>
      {/* COURSE #1 */}
      <SwiperSlide className="cbox-1">
        <Link legacyBehavior href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/course-1-img.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <div className="course-tags">
                <span>Languages</span>
                <span>English</span>
              </div>
              {/* Course Title */}
              <h5 className="h5-xs">Beginner Level English - Foundations</h5>
              {/* Course Rating */}
              <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>4.5 (26 Ratings)</span>
              </div>
              {/* Course Price */}
              <span className="course-price">
                <span className="old-price">$149.99</span>
                $138.99
              </span>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #1 */}
      {/* COURSE #2 */}
      <SwiperSlide className="cbox-1">
        <Link legacyBehavior href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/course-2-img.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <div className="course-tags">
                <span>Languages</span>
                <span>English</span>
              </div>
              {/* Title */}
              <h5 className="h5-xs">
                Diploma in Basic English Grammar - Revised 2019
              </h5>
              {/* Course Rating */}
              <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>5 (118 Ratings)</span>
              </div>
              {/* Course Price */}
              <span className="course-price">
                <span className="old-price">$174.99</span>
                $59.99
              </span>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #2 */}
      {/* COURSE #3 */}
      <SwiperSlide className="cbox-1">
        <Link legacyBehavior href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/course-3-img.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <div className="course-tags">
                <span>Network Security</span>
              </div>
              {/* Title */}
              <h5 className="h5-xs">
                The Complete Cyber Security Course : End Point Protection!
              </h5>
              {/* Course Rating */}
              <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>4.5 (72 Ratings)</span>
              </div>
              {/* Course Price */}
              <span className="course-price">
                <span className="old-price">$119.99</span>
                $34.99
              </span>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #3 */}
      {/* COURSE #4 */}
      <SwiperSlide className="cbox-1">
        <Link legacyBehavior href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/course-4-img.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <div className="course-tags">
                <span>SEO</span>
                <span>Marketing</span>
              </div>
              {/* Title */}
              <h5 className="h5-xs">Google AdWords for Beginners 2020</h5>
              {/* Course Rating */}
              <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>5 (281 Ratings)</span>
              </div>
              {/* Course Price */}
              <span className="course-price">Free Course</span>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #4 */}
      {/* COURSE #5 */}
      <SwiperSlide className="cbox-1">
        <Link legacyBehavior href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/course-5-img.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <div className="course-tags">
                <span>Design</span>
                <span>WordPress</span>
              </div>
              {/* Title */}
              <h5 className="h5-xs">
                Wordpress for Beginners - Master Wordpress Quickly
              </h5>
              {/* Course Rating */}
              <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>4.15 (58 Ratings)</span>
              </div>
              {/* Course Price */}
              <span className="course-price">
                <span className="old-price">$194.99</span>
                $62.99
              </span>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #5 */}
      {/* COURSE #6 */}
      <SwiperSlide className="cbox-1">
        <Link legacyBehavior href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/course-6-img.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <div className="course-tags">
                <span>Sowtware</span>
                <span>Productivity</span>
              </div>
              {/* Title */}
              <h5 className="h5-xs">
                Excel Essentials: The Complete Excel Series - Level 1 &amp; 2
              </h5>
              {/* Course Rating */}
              <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>5 (31 Ratings)</span>
              </div>
              {/* Course Price */}
              <span className="course-price">
                <span className="old-price">$149.99</span>
                $45.99
              </span>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #6 */}
      {/* COURSE #7 */}
      <SwiperSlide className="cbox-1">
        <Link legacyBehavior href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/course-7-img.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <div className="course-tags">
                <span>Web Design</span>
                <span>HTML 5</span>
              </div>
              {/* Title */}
              <h5 className="h5-xs">
                Landing Page Design &amp; Conversion Rate Optimization 2020
              </h5>
              {/* Course Rating */}
              <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <span>4.8 (74 Ratings)</span>
              </div>
              {/* Course Price */}
              <span className="course-price">
                <span className="old-price">$109.99</span>
                $23.99
              </span>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #7 */}
      {/* COURSE #8 */}
      <SwiperSlide className="cbox-1">
        <Link legacyBehavior href="/course-details">
          <a>
            {/* Image */}
            <img
              className="img-fluid"
              src="images/courses/course-8-img.jpg"
              alt="course-preview"
            />
            {/* Text */}
            <div className="cbox-1-txt">
              {/* Course Tags */}
              <div className="course-tags">
                <span>Internet</span>
                <span>Marketing</span>
              </div>
              {/* Title */}
              <h5 className="h5-xs">
                Instagram Marketing 2020: A Step-By-Step to 10,000 Followers
              </h5>
              {/* Course Rating */}
              <div className="course-rating clearfix">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>5 (374 Ratings)</span>
              </div>
              {/* Course Price */}
              <span className="course-price">
                <span className="old-price">$169.99</span>
                $33.99
              </span>
            </div>
          </a>
        </Link>
      </SwiperSlide>
      {/* END COURSE #8 */}
      <div className="owl-nav mt-5">
        <button type="button" className="owl-prev">
          <span>
            <img src="images/prev.png" alt="image" />
          </span>
        </button>
        <button type="button" className="owl-next">
          <span>
            <img src="images/next.png" alt="image" />
          </span>
        </button>
      </div>
    </Swiper>
  );
};

export default CoursesSlider;
