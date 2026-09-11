import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container p-5 ">
      <div className="row pt-5 ">
        <div className="col">
          <h1>{productName}</h1>
          <p style={{ lineHeight: "1.6" }}>{productDescription}</p>
          <div className="pb-5">
            <a style={{ textDecoration: "none" }} href={learnMore}>
              Learn More →
            </a>
          </div>
        </div>
        <div className="col px-5">
          <img style={{ width: "90%",marginTop:"-100px" }} src={imageURL} alt="" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
