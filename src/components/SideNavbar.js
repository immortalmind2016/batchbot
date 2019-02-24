import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class SideNav extends Component {
  state = {};
  componentDidMount() {}
  render() {
    return (
      <nav
        className="navbar navbar-dark side-nav leftSideNav__left"
        id="leftSideNav"
      >
        <ul className="navbar-nav mx-auto flex-column h-100">
          <Link className="navbar-brand mx-auto" to="/">
            Logo
          </Link>
          <div className="float-right profile my-5 px-4">
            <div className="d-flex">
              <img
                className="profile-pic img-fluid"
                src="https://via.placeholder.com/100x100"
                alt="profile picture"
              />
              <div className="mx-4">
                <span className="text-light">Developer name</span>
                <div className="">
                  <NavLink
                    activeClassName="active"
                    to="#"
                    className="text-light"
                  >
                    Logout
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="items-container">
            <NavLink
              className="sidenav-link"
              activeClassName="active"
              to="/devdashboard-analysis"
            >
              <li className="nav-item">
                <div className="nav-link">
                  <i className="icon fas fa-chart-area" />
                  <span>Analysis</span>
                </div>
              </li>
            </NavLink>

            <NavLink
              className="sidenav-link"
              activeClassName="active"
              to="/devdashboard-brodcast"
            >
              <li className="nav-item ">
                <div className="nav-link">
                  <i className="icon fas fa-paper-plane" />
                  <span>Broadcasting</span>
                </div>
              </li>
            </NavLink>

            <NavLink
              className="sidenav-link"
              activeClassName="active"
              to="/devdashboard-inbox"
            >
              <li className="nav-item">
                <div className="nav-link">
                  <i className=" icon fas fa-inbox" />
                  <span>Inbox</span>
                </div>
              </li>
            </NavLink>

            <NavLink
              className="sidenav-link"
              activeClassName="active"
              to="/devdashboard-review"
            >
              <li className="nav-item">
                <div className="nav-link">
                  <i className="icon fas fa-star" />
                  <span>Reviews</span>
                </div>
              </li>
            </NavLink>

            <NavLink
              className="sidenav-link"
              activeClassName="active"
              to="/devdashboard-request"
            >
              <li className="nav-item">
                <div className="nav-link">
                  <i className="icon fas fa-hand-paper" />
                  <span>Requests</span>
                </div>
              </li>
            </NavLink>

            <NavLink
              className="sidenav-link"
              activeClassName="activate"
              to="/devdashboard-settings"
            >
              <li className="nav-item">
                <div className="nav-link">
                  <i className="icon fas fa-cog" />
                  <span>Settings</span>
                </div>
              </li>
            </NavLink>
          </div>
        </ul>
      </nav>
    );
  }
}

export default SideNav;
