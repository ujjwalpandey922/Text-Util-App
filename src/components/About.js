import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <div className="card" style={{ width: "18 rem" }}>
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">About TextUtil</h5>
          <p className="card-text">
            We help users to modify a text or a part of paragaph to the users
            liking.....:)
          </p>
          <Link to="/" className="btn btn-primary">
            Go To Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
