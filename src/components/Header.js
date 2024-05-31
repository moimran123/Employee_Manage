import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from './image.jpg';
import "./Header.css";
function Header()
{
   return (<div className="container">
   <div className="image-container">
     <img src={image} alt="Employees" className="header-image" />
     <div className="overlay-text">Welcome to the Dashboard </div>
   </div>
   </div>
   );
}
export default Header;