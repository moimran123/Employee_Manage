import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const HeaderComponent = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  // const { logout } = useAuth0();
  return (
    <div>
      <header>
        <nav
          className="navbar navbar-expand-md navbar-dark"
          id="nav1"
          style={{ backgroundColor: "#808080" }}
        >
          <div className="container-fluid justify-content-center">
            <a      style={{ color:"white"}}
              href="https://legacy.reactjs.org/"
              className="navbar-brand text-center"
            >
              Employee Management Application
            </a>
            {isAuthenticated ? (
              <button  className="btn btn-primary mb-2"style={{marginLeft:"680px" }}
                 onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            ) : (
              <button  className="btn btn-primary mb-2"style={{marginLeft:"680px" }}  onClick={() => loginWithRedirect()}>Log In</button>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
