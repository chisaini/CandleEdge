import React from "react";
function Hero() {
  return (
    <div style={{ height: "560px", backgroundColor: "#dc2525e4" }}>
      <div
        style={{ paddingTop: "50px", margin: "0 190px 0 210px" }}
        className="row"
      >
        <div style={{ color: "white" }} className="col">
          {" "}
          <h4>Support Portal</h4>
        </div>
        <div className="col text-end">
          <a style={{ color: "white" }} href="">
            Track tickets
          </a>
        </div>
      </div>
      <div style={{height: "390px", paddingBottom:"80px", margin: "60px 170px  160px" }} className="align-items-end row">
        <div style={{ color: "white", marginLeft: "-10px" }} className="col-6  ">
          <h3 className="pb-3">Search for an answer or browse help topics to create a ticket</h3>
          <input
            style={{
              height: "70px",
              width: "550px",
              fontSize: "20px",
              border: "none",
              borderRadius: "10px",
              marginBottom:"15px"
            }}
            type="text"
            placeholder="     Eg. how do I activate F&O why is my getting rejected."
          />
          <a style={{color:"white"}} href="">Track Account opening</a>,{" "}
          <a style={{color:"white"}} href="">Track segment activation </a>,{" "}
          <a style={{color:"white"}} href="">Intraday </a>,{" "}
          <a style={{color:"white"}} href="">margins</a>,{" "}
          <a style={{color:"white"}} href="">Kite user manual</a>{" "}
        </div>
        <div style={{ color: "white", paddingLeft: "70px",paddingBottom:"100px" }} className="col-6">
          <h3>Featured</h3>
          <ol className="d-flex flex-column gap-2">
            <li><a style={{color:"white"}} href="">Current Takeovers and Delisting - January 2024</a></li>
            <li><a style={{color:"white"}}href="">Latest Intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
