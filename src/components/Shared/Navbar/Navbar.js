import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div class="logo">AHMED BIKES</div>
        <input type="checkbox" id="click" />
        <label for="click" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <ul>
          <li>
            {/* <a class="active" href="/">
              Home
            </a> */}
            <NavLink className="active" to="/home" activeClassName="active">
              HOME
            </NavLink>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            {/* <a href="/gallary">Gallery</a> */}
            <NavLink to="/gallary">Gallary</NavLink>
          </li>
          <li>
            <a href="/">Feedback</a>
          </li>
          {/* <li className="nav-item nav-text">Welcome :{user?.displayName}</li> */}
          {/* {user.photoURL && user.email && (
            <img
              src={user?.photoURL}
              height="40px"
              style={{ borderRadius: "50%" }}
              width="40px"
              alt=""
              className="pull-left img-circle login"
            />
          )} */}
        </ul>
      </nav>
      {/* <div class="content">
        <div>Responsive Navigation Menu Bar Design</div>
        <div>using only HTML & CSS</div>
      </div> */}
      {/* {user.email ? (
        <div>
          <button
            onClick={handleLogOut}
            className="btn btn btn-outline-danger position-absolute top-50 end-0 translate-middle-y mx-5"
            type=""
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
          >
            Logout
          </button>
        </div>
      ) : (
        <NavLink to="/loginform">
          <button
            className="btn btn btn-outline-dark position-absolute top-50 end-0 translate-middle-y mx-5"
            type=""
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
          >
            Login
          </button>
        </NavLink>
      )} */}
    </div>
  );
};

export default Navbar;
