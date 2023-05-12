import { Link } from 'react-router-dom';
import './Footer.scss';
import React, { Component } from "react";
class Footer extends React.Component {
  render() {
    return (
        <><div class="content">
        </div><div class="footer-container">
            <div class="pre-footer">
              <ul class="footer-menu">
                <li>
                  <h3>Money plant</h3>
                  <ul>
                    <li><a href="#">about us</a></li>,
                    <li><a href="#">Blog</a></li>,
                    <li><a href="#">Help & Support</a></li>,
                    <li><a href="#">Link Four</a></li>,
                  </ul>
                </li>
                <li>
                  <h3>Category Two</h3>
                  <ul>
                    <li><a href="#">Link One</a></li>
                    <li><a href="#">Link Two</a></li>
                    <li><a href="#">Link Three</a></li>
                    <li><a href="#">Link Four</a></li>
                  </ul>
                </li>
                <li>
                  <h3>Category Three</h3>
                  <ul>
                    <li><a href="#">Link One</a></li>
                    <li><a href="#">Link Two</a></li>
                    <li><a href="#">Link Three</a></li>
                    <li><a href="#">Link Four</a></li>
                  </ul>
                </li>
                <li>
                  <h3>Category Four</h3>
                  <ul>
                    <li><a href="#">Link One</a></li>
                    <li><a href="#">Link Two</a></li>
                    <li><a href="#">Link Three</a></li>
                    <li><a href="#">Link Four</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div></>
    )
  };
};
export default Footer;
