import React, { useState } from "react";
import img1 from "./ProductImages/img_5.png";
import img2 from "./ProductImages/img_3.png";
import img3 from "./ProductImages/img_4.png";
import img4 from "./ProductImages/img_5.png";
import Slide from "react-reveal/Slide";
import ReactImageMagnify from "react-image-magnify";
import "./LandingPage.css";
const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState(img1);
  return (
    <div className="product-container">
      <div className="selected-product p-2">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="product-image">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: currentImage,
                  },
                  largeImage: {
                    src: currentImage,
                    width: 1800,
                    height: 1800,
                  },
                }}
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 ">
            <div className="product-details">
              <h2>Iphone 13 Pro max</h2>
              <p className="text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                facere recusandae consequatur dolores. Veritatis laudantium
                minima maiores hic ipsam, repellendus quidem molestiae tempore
                voluptatibus maxime! Quae accusamus ullam deleniti vitae libero
                illo sequi itaque ipsa quas. Quo voluptate necessitatibus
                deleniti eum quae, commodi qui ipsum autem sed. Autem aliquam
                quo nobis quis, amet, voluptatibus maxime suscipit est error ad
                officia!
              </p>
              <h3 className="text-success">Price : 1200$</h3>
              <div className="product-images mt-5">
                <img
                  src={img1}
                  alt=""
                  onClick={() => {
                    setCurrentImage(img1);
                  }}
                />
                <img
                  src={img2}
                  alt=""
                  onClick={() => {
                    setCurrentImage(img2);
                  }}
                />
                <img
                  src={img3}
                  alt=""
                  onClick={() => {
                    setCurrentImage(img3);
                  }}
                />
                <img
                  src={img4}
                  alt=""
                  onClick={() => {
                    setCurrentImage(img4);
                  }}
                />
              </div>
              <button className="btn btn-success m-3">Add to Cart</button>
              <button className="btn btn-warning m-3 ">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
