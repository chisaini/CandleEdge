import React from "react";
function Stats() {
  return (
    <div className="container mt-5 p-5">
      <div className="row p-5">
        <div style={{width:"50%"}} className=" p-5 col-6  ">
          <h2 className="mb-5">Trust with confidence</h2>
          <h4>Customer-first always</h4>
          <p className="text-muted">
            That's why 1.3+ crore customers trust CandleEdge with 3.5+ lakh
            crore rupees worth of equity investments.
          </p>
          <h4>No spam or gimmicks</h4>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>
          <h4>The CandleEdge universe</h4>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h4>Do better with money</h4>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 p-5">
          <img className="" src="media/images/ecosystem.png" alt="" style={{width:"100%"}} />
          <div className="text-center ms-5 ">
            <a style={{textDecoration:"none"}} className="mx-5" href="">
              Explore our products <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a style={{textDecoration:"none"}} href="">
              Try BearClaw Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
