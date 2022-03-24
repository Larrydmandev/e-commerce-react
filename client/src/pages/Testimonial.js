import React from "react";

function Testimonial(params) {
  return (
    <>
      {/* <!------------testimonial-------------> */}
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem Ipsum is simply the dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="./images/user-1.png" />
              <h3>Sean Parker</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem Ipsum is simply the dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="./images/user-2.png" />
              <h3>Mike Smith</h3>
            </div>
            <div className="col-3">
              <i className="fa fa-quote-left"></i>
              <p>
                Lorem Ipsum is simply the dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever
              </p>
              <div className="rating">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-o"></i>
              </div>
              <img src="./images/user-3.png" />
              <h3>Mabel Joe</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial