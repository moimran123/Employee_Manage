import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import "./Main_Page.css";
function Main_Page()

{
    return(<div className="container">
            <Header/>
            
            <Link className="btn btn-info mb- add-employee-button " to="/search-employee">
             Search By Id 
          </Link>
          <Link className="btn btn-info mb- add-employee-button " to="/login">
             Logout 
          </Link>
         

          <br>
          </br>
          <Link className="btn btn-info mb-2 add-employee-button" to="/employee">
           Show All Employee
          </Link>
       


    </div>);
}

export default Main_Page;