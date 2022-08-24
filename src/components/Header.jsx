/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
     <header class="header">
                <div class="container">
                    <button type="button" class="mobile-menu-toggle">
                        {/* <img src="images/menu-bars.svg" alt="" /> */}
                    </button>
                    <div class="header__logo">
                        <a href="#" class="header__logo__link">
                            <figure>
                                {/* <img src="images/logo.svg" /> */}
                            </figure>
                        </a>
                    </div>
                    <nav class="header__navbar">
                        <ul>
                            <li>
                                <Link to = '/' >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <a href="#"> Checkout </a>
                            </li>
                            <li>
                                <a href="#"> Cart </a>
                            </li>
                            <li>
                                <a href="#"> Blog </a>
                            </li>
                            <li>
                                <a href="#"> Categories </a>
                            </li>
                            <li>
                                <a href="#"> About Us </a>
                            </li>
                        </ul>
                    </nav>
                    <div class="header__buttons">
                        <div class="header__cart-btn">
                            <Link to = '/cart' >
                                <figure>
                                    {/* <img src="images/shopping-cart.svg" /> */}
                                </figure>
                                <span> 0 </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
  )
}

export default Header