import React from "react";
import "./Collection.css";

const Collection = () => {
  return (
    <>
      <div className="container">
        <div className="grid-collection grid-two-coloums-collection ">
          <div className="collection-section">
            <h3>Vision</h3>
            <p>
            Over the years Mavya has been he pioneer of healthcare in India, and we are humbled by the love and trust placed in us by over 200 million patients and their families. It has motivated us to put in tireless efforts and remain unwavering in our commitment to bring you the best healthcare in the world.
            </p>
          </div>
          <div className="collection-section">
            <h3>Mission</h3>
            <p>
            We have the best doctors and the most care-focused teams coupled with the most advanced equipment, cutting-edge treatments and technologies, including Proton therapy, robotic surgeries, artificial intelligence and more. These ensure we can get you healthy quickly so you can get back to leading a happy and fulfilling life.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid-collection grid-two-coloums-collection ">
          <div className="collection-img img_hover effect_1">
            <img src="./image/vision.jpg" alt="" />
          </div>
          <div className="collection-img img_hover effect_1">
          <img src="./image/mission.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
