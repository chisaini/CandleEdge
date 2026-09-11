import React from "react";
function Universe() {
  return (
    <div className="container text-center">
      <div>
        <p className="  ">
          Want to know more about our technology stack? Check out the{" "}
          <a style={{ textDecoration: "none" }} href="">
            CandleEdge.tech
          </a>{" "}
          blog.
        </p>
      </div>
      <div className="pt-5 pb-3">
        <h1>The CandleEdge Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row pt-5 pb-5">
        <div className="col-4">
          <img
            style={{ width: "50%",marginTop:"13px"}}
            src="media/images/smallcaseLogo.png"
            alt=""
          />
          <p className="pt-3 text-small text-muted">
            Thematic investing platform 
          </p>
        </div>
        <div className="col-4">
          <img
            style={{ width: "50%" }}
            src="media/images/streakLogo.png"
            alt=""
          />
          <p className="text-small text-muted pt-3">Algo & strategy platform</p>
        </div>
        <div className="col-4">
          <img
            style={{ width: "50%" }}
            src="media/images/CandleEdgeFundHouse.png"
            alt=""
          />
          <p className="pt-3 text-small text-muted">
            Asset management
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img
            style={{ width: "40%" }}
            src="media/images/dittoLogo.png"
            alt=""
          />
          <p className="text-small text-muted pt-3">Insurance</p>
        </div>
        <div className="col-4">
          <img
            style={{ width: "40%", marginTop: "17px" , marginTop: "17px"  }}
            src="media/images/goldenpiLogo.png"
            alt=""
          />
          <p className="pt-2 text-small text-muted">Bonds trading platform</p>
        </div>
        <div className="col-4">
          <img
            style={{ width: "50%" , marginTop: "20px" }}
            src="media/images/sensibullLogo.svg"
            alt=""
          />
          <p className="text-small text-muted pt-3">
            Options trading platform
          </p>
        </div>
      </div>
      <div className="text-center pt-3 pb-5">
        <button style={{width:"16%"}}className="btn btn-primary fs-5">sign up for free</button>
      </div>
    </div>
  );
}

export default Universe;
