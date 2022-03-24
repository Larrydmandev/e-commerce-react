import React from "react";

function FeauturedProducts(params) {
  return (
    <>
      {/* <!-- feautured products --> */}
      <div className="small-container">
        <h2 className="title">Feautured Products</h2>
        <div className="row">
          <div className="col-4">
            <a href="./product-details.html">
              <img src="./images/product-1.jpg" />
            </a>
            <a href="./product-details.html">
              <h4>Red Printed T-Shirt</h4>
            </a>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="./images/product-2.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="./images/product-3.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="./images/product-4.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeauturedProducts
