import React from "react";
import "./Header.css";
import P1 from "../../assets/site-logo.svg";
import P2 from "../../assets/cart.svg";

const Header = () => {
    return (
        <div className="header-container">
            <div className="left-header">
            <a class="site-logo" title="logo" href="#">
            <img src={P1} className="about-container" alt="about" />
            </a>
            </div>
            <div className="right-header">
            <a href='#'  className='login-link'>
                Login  
            </a>
                     &nbsp;&nbsp;
                         |
                      &nbsp;&nbsp;
            <a href='#' className='register-link'>
                Register  
            </a>
            &nbsp;&nbsp;
            <div className="cart">
                    <a title="Cart" href="#"
                              ><img src={P2} alt="cart" />
                        
                        </a>
                    <span className="number">0</span>
            </div>
            
            </div>
        </div>
    )
}

export default Header;