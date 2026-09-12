import React from "react";
function Hero() {
  return (
    <div className="container">
      <div
        style={{ marginTop: "30px" }}
        className="p-5 text-center border-bottom"
      >
        <h1>Pricing</h1>
        <p className="fs-5 pt-3 text-muted">
          Free equity investment and flat ₹20 Intraday and F&O trades
        </p>
      </div>
      <div style={{marginTop:"60px"}} className="row pb-5 border-bottom text-center">
        <div className="col p-5">
          <img
            style={{ width: "80%" }}
            src="media/images/pricing0.svg"
            alt=""
          />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col p-5">
          <img
            style={{ width: "80%" }}
            src="media/images/intradayTrades.svg"
            alt=""
          />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-5 ">
          <img
            style={{ width: "80%" }}
            src="media/images/pricing0.svg"
            alt=""
          />
          <h3>Free equity delivery</h3>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
