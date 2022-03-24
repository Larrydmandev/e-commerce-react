import React from "react";

function Offer(params) {
  return (
    <>
      {/* <!-- offer --> */}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src="./images/exclusive.png" className="offer-img" />
            </div>
            <div className="col-2">
              <p>Exclusively Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 feautures a 39.9% largrer(than Mi Band 3)
                Amoled color full-touch display with adjustable brightness, so
                everything is clear as can be
              </small>
              <a href="" className="btn">
                Buy Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer
