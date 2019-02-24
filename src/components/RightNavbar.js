import React, { Component } from "react";
import TopTab from "./rightNavbarTbas/TopTab";
import HistoryTab from "./rightNavbarTbas/HistoryTab";
class RightNavbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark side-nav side-nav-right d-none d-xl-block">
        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          <li className="nav-item history-link">
            <a
              className="nav-link active"
              id="pills-home-tab"
              data-toggle="pill"
              href="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              History
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-profile-tab"
              data-toggle="pill"
              href="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Top
            </a>
          </li>
        </ul>
        <div className="ov">
          <div className="tab-content" id="pills-tabContent">
            <HistoryTab />
            <TopTab />
          </div>
        </div>
      </nav>
    );
  }
}

export default RightNavbar;
