import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row border-top">
        <div className="col p-5 text-center ">
          <h1>People</h1>
        </div>
      </div>
      <div className="row p-5">
        <div className="col text-center">
          {" "}
          <img
            style={{ width: "50%", borderRadius: "100%" }}
            src="media/images/chirag.jpg"
          />
          <h3 className="text-muted pt-4">Chirag Saini</h3>
        </div>
        <div
          style={{ fontSize: "18px", lineHeight: "2.3" }}
          className="text-muted col"
        >
          <p>
            Chirag is a Computer Science student with a strong interest in
            full-stack web development and problem solving. He has hands-on
            experience with Node.js, Express, MongoDB, Mongoose, React, and
            RESTful APIs, along with a solid foundation in Data Structures and
            Algorithms using Java.
            <br />
            He has built practical full-stack projects, including Wanderlust, an
            Airbnb-inspired vacation rental platform, and CandleEdge, a stock
            trading and paper-trading platform.
            <br />
            He enjoys building clean, responsive interfaces and writing
            maintainable code while continuously improving his development
            skills.
          </p>
          <p>
            Lets connect:{" "}
            <a style={{ textDecoration: "none" }} href="">
              HomePage
            </a>{" "}
            /{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/chisaini"
            >
              Github
            </a>{" "}
            /{" "}
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/chirag-saini-a0a0952b1/"
            >
              Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
