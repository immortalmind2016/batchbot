import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => (
  <React.Fragment>
    <div className="error-page ">
      <Link
        style={{
          position: "fixed",
          top: "25px",
          left: "25px",
          zIndex: "100",
          color: "black",
          textDecoration: "none",
          fontSize: "25px"
        }}
        to="/"
      >
        <i class="fas fa-arrow-left mr-3 fa-lg" />
        Go Home Page
      </Link>
      <div>
        <h1 data-h1="404">404</h1>
        <p data-p="PAGE NOT FOUND">PAGE NOT FOUND</p>
      </div>
    </div>
    <div id="particles-js" />
  </React.Fragment>
);

export default PageNotFound;
