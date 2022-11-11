import Link from "next/link";
import React from "react";
import SuccessStories from "../SuccessStories";

const Demo2Reviews1 = () => {
  return (
    <section id="reviews-1" className="wide-100 reviews-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-60">
              {/* Title 	*/}
              <h3 className="h3-sm">What Our Students Say</h3>
              {/* Text */}
              <p className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </p>
              {/* Button */}
              <div className="title-btn">
                <Link legacyBehavior href="/reviews">
                  <a className="btn btn-tra-grey rose-hover">
                    Read All Reviews
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* TESTIMONIALS CONTENT */}
        <div className="row">
          <div className="col-md-12">
            <SuccessStories />
          </div>
        </div>
        {/* END TESTIMONIALS CONTENT */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo2Reviews1;
