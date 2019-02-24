import React, { Component } from "react";
class HistoryCard extends Component {
  state = {};
  render() {
    return (
      <div className="historyCard">
        <div className="content">
          <span className="float-left">
            <i className="fas fa-star mr-1" />
            <span>Schedule</span>
          </span>
          <span className="float-right">
            <i className="fas fa-eye " />
            <p className="icon-number">20,124</p>
          </span>
          <span className="clearfix" />
          <p className="card-text ml-2">
            Put your heart,mind and soul into even your smallest acts
          </p>
        </div>
        <div className="logos">
          <i className="far fa-clock">
            <span className="time"> 12:01Am</span>
          </i>
          <i className="far fa-calendar-alt ">
            <span className="day"> friday</span>
          </i>
        </div>
      </div>
    );
  }
}

export default HistoryCard;
