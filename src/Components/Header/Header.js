import { Link } from 'react-router-dom';
import React, { Component } from "react";
import Navbar from "../Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
class Header extends React.Component
{
  render()
  {
    return (
      <Navbar />
    )
  }
}
export default Header;