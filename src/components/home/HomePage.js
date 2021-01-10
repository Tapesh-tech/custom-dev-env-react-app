import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Fragment>
      <div className="jumbotron">
        <h1>My Home Page</h1>
        <Link to="/about" className="btn btn-primary">
          About Us?
        </Link>
      </div>
    </Fragment>
  );
};
