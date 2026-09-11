import React from "react";
function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container  p-5">
      <div className="row pt-5">
        <div className="col px-5">
          <img style={{ width: "90%" }} src={imageURL} alt="" />
        </div>
        <div className="col">
          <h1>{productName}</h1>
          <p style={{ lineHeight: "1.6" }}>{productDescription}</p>
          <div className="pb-5">
            <a style={{ textDecoration: "none",marginRight:"100px"}} href={tryDemo}>
              Try Demo →
            </a>
            <a  style={{ textDecoration: "none" }} href={learnMore}>
              Learn More →
            </a>
          </div>

          <div>
            <a className="pe-5" href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>

            <a className="p" href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
