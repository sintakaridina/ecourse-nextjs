import React from "react";
import Counter from "../Counter";

const Demo5Statistic2 = () => {
  return (
    <div id="statistic-2" className="bg-01 statistic-section division">
      <div className="container white-color">
        <div className="row">
          {/* STATISTIC BLOCK #1 */}
          <div className="col-sm-6 col-md-3">
            <div className="statistic-block text-center">
              {/* Digits */}
              <h5 className="statistic-number">
                2,
                <Counter end={769} />
              </h5>
              {/* Text */}
              <div className="p-md">Online Courses</div>
            </div>
          </div>
          {/* STATISTIC BLOCK #2 */}
          <div className="col-sm-6 col-md-3">
            <div className="statistic-block text-center">
              {/* Digits */}
              <h5 className="statistic-number">
                <Counter end={637} />
              </h5>
              {/* Text */}
              <div className="p-md">Free Tutorials</div>
            </div>
          </div>
          {/* STATISTIC BLOCK #3 */}
          <div className="col-sm-6 col-md-3">
            <div className="statistic-block text-center">
              {/* Digits */}
              <h5 className="statistic-number">
                <Counter end={942} />
              </h5>
              {/* Text */}
              <div className="p-md">eBooks Available</div>
            </div>
          </div>
          {/* STATISTIC BLOCK #4 */}
          <div className="col-sm-6 col-md-3">
            <div className="statistic-block text-center">
              {/* Digits */}
              <h5 className="statistic-number">
                9,
                <Counter end={986} />
              </h5>
              {/* Text */}
              <div className="p-md">Happy Students</div>
            </div>
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </div>
  );
};

export default Demo5Statistic2;
