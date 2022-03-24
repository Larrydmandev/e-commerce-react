import React from "react";

function Navbar(params) {
    return(
        <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <a href="index.html">
                <img src="./images/logo.png" width="125px" />
              </a>
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="./product.html">Products</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="./account.html">Account</a>
                </li>
              </ul>
            </nav>
            <a href="./cart.html">
              <img src="./images/cart.png" width="30px" height="30px" />
            </a>
            <img
              src="./images/menu.png"
              width="30px"
              height="30px"
              className="menu-icon"
              onclick="menutoggle()"
            />
          </div>
         
        </div>
      </div>
    )
}

export default Navbar