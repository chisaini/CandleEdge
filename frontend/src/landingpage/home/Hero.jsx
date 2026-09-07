import React from "react";
function Hero() {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <img
          style={{ width: "90%" }}
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5 mt-5 mx-auto"
        />
        <h1 className="mt-5">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives,mutual funds, and
          more
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "17%", margin: "0 auto" }}
        >
          Signup now
        </button>
      </div>
    </div>
  );
}

export default Hero;
