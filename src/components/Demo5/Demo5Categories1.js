import Link from "next/link";
import React from "react";

const Demo5Categories1 = () => {
  return (
    <section id="categories-1" className="categories-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-40">
              {/* Title 	*/}
              <h4 className="h4-xs">Most Popular Categories of 2019</h4>
              {/* Text */}
              <div className="p-md">
                Discover thousands of online courses from the best experts
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex align-items-center">
          <div className="col text-center">
            {/* CATEGORIE BOX #1 */}
            <div className="c1-box">
              <Link legacyBehavior href="/category-details">
                <a>
                  <div className="c1-box-txt">
                    <h5 className="h5-xs">Development</h5>
                    <div>36 Courses</div>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #1 */}
            {/* CATEGORIE BOX #2 */}
            <div className="c1-box">
              <Link legacyBehavior href="/category-details">
                <a>
                  <div className="c1-box-txt">
                    <h5 className="h5-xs">Finance &amp; Accounting</h5>
                    <div>28 Courses</div>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #2 */}
            {/* CATEGORIE BOX #3 */}
            <div className="c1-box">
              <Link legacyBehavior href="/category-details">
                <a>
                  <div className="c1-box-txt">
                    <h5 className="h5-xs">IT &amp; Software</h5>
                    <div>54 Courses</div>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #3 */}
            {/* CATEGORIE BOX #4 */}
            <div className="c1-box">
              <Link legacyBehavior href="/category-details">
                <a>
                  <div className="c1-box-txt">
                    <h5 className="h5-xs">Office Productivity</h5>
                    <div>68 Courses</div>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #4 */}
            {/* CATEGORIE BOX #5 */}
            <div className="c1-box">
              <Link legacyBehavior href="/category-details">
                <a>
                  <div className="c1-box-txt">
                    <h5 className="h5-xs">Photography</h5>
                    <div>159 Courses</div>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #5 */}
            {/* CATEGORIE BOX #6 */}
            <div className="c1-box">
              <Link legacyBehavior href="/category-details">
                <a>
                  <div className="c1-box-txt">
                    <h5 className="h5-xs">Design &amp; Arts</h5>
                    <div>78 Courses</div>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #6 */}
            {/* CATEGORIE BOX #7 */}
            <div className="c1-box">
              <Link legacyBehavior href="/category-details">
                <a>
                  <div className="c1-box-txt">
                    <h5 className="h5-xs">Languages</h5>
                    <div>103 Courses</div>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #7 */}
            {/* CATEGORIE BOX #8 */}
            <div className="c1-box">
              <Link legacyBehavior href="/category-details">
                <a>
                  <div className="c1-box-txt">
                    <h5 className="h5-xs">Sciences &amp; Math</h5>
                    <div>45 Courses</div>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #8 */}
            {/* CATEGORIE BOX #9 */}
            <div className="c1-box">
              <Link legacyBehavior href="/category-details">
                <a>
                  <div className="c1-box-txt">
                    <h5 className="h5-xs">Writing &amp; Journalism</h5>
                    <div>39 Courses</div>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #9 */}
            {/* CATEGORIE BOX #10 */}
            <div className="c1-box">
              <Link legacyBehavior href="/category-details">
                <a>
                  <div className="c1-box-txt">
                    <h5 className="h5-xs">Health and Fitness</h5>
                    <div>62 Courses</div>
                  </div>
                </a>
              </Link>
            </div>
            {/* END CATEGORIE BOX #10 */}
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo5Categories1;
