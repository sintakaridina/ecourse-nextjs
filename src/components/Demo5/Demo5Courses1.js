import React from "react";
import CoursesSlider from "../CoursesSlider";

const Demo5Courses1 = () => {
  return (
    <section id="courses-1" className="wide-100 courses-section division">
      <div className="container">
        {/* SECTION TITLE */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title title-centered mb-60">
              {/* Title 	*/}
              <h3 className="h3-sm">Best Online Courses of 2019</h3>
              {/* Text */}
              <div className="p-md">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta
              </div>
            </div>
          </div>
        </div>
        {/* COURSE BOXES CAROUSEL */}
        <div className="row">
          <div className="col-lg-12">
            <CoursesSlider />
          </div>
        </div>
        {/* END COURSES BOXES CAROUSEL */}
      </div>
      {/* End container */}
    </section>
  );
};

export default Demo5Courses1;
