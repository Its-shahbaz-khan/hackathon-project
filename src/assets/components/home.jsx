import React from "react";

const Home = () => {
  return (
    <div className="container-fluid Home p-0">
      <div className="first-container ">
        <div className="container">
        <div className="row">
          <div style={{backgroundImage:URL}} className="col-lg-6">
            <div>
              <h6>
              Best Furniture For Your Castle....
              </h6>
              <h1>New Furniture Collection <br/>
              Trends in 2020</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="col-lg-6">
       
            <img
              src="/images/Screenshot 2024-12-14 231750.png"
              alt="Description"
            />
          </div>
        </div>
        </div>
        <span> &nbsp;</span>
      <span> &nbsp; </span>
      <span> &nbsp;</span>
      </div>
    <div className="second-container container">
      <h1>
      Featured Products
      </h1>
      <div className="row">
        <div className="col-lg-3">
          <img width={"100px"} src="/images/image 1168.png" alt="" />
        </div>
        <div className="col-lg-3">
          <img width={"100px"} src="/images/image 1.png" alt="" />
        </div>
        <div className="col-lg-3">
          <img width={"100px"} src="/images/image 1169.png" alt="" />
        </div>
        <div className="col-lg-3">
          <img width={"100px"} src="/images/image 3.png" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
