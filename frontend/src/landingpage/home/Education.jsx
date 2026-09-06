import React from "react";
function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
            <img style={{width:"70%"}}src="media/images/education.svg" alt="" />
        </div>
        <div className="col">
          <h2 className="mb-3">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            Varsity
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a style={{ textDecoration: "none" }} href="">
            TradingQ&A<i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
