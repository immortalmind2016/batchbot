import React from "react";
import { removeSchedule } from "../../../redux/actions/schdulesActions";
import { Link } from "react-router-dom";
const BrodcastingCard = ({ schedule, dispatch }) => {
  let daysArray = Object.entries(schedule.schedule.day);
  let days = daysArray.filter(day => day[1] === true);
  days = days.map(day => day[0]);
  return (
    <div className="historyCard">
      <div className="content">
        <span className="float-left">
          <i className="fas fa-calendar-plus" />
          <span className="ml-2">
            {schedule.schedule.time ? "Schedule" : "Ordinary"}
          </span>
        </span>
        <span className="float-right">
          <Link
            to={`/devdashboard-brodcast/${schedule.id}`}
            style={{ color: "inherit" }}
            data-toggle="modal"
            data-target={`#${schedule.id}`}
          >
            <i className="fas fa-edit mr-1" />
          </Link>

          <i
            className="fas fa-trash ml-1"
            onClick={() => {
              dispatch(removeSchedule(schedule.id));
            }}
          />
        </span>
        <p className="clearfix" />
        <div className="d-flex">
          <p className="card-text ">{schedule.message}</p>
        </div>
      </div>
      <div className="logos">
        <i className="far fa-clock">
          <span className="time"> {schedule.schedule.time}</span>
        </i>
        <i className="far fa-calendar-alt ">
          <span className="day ml-2 dropdown schedule-card__dropdown">
            <button
              className=" dropdown-toggle schedule-card__dropdown__button"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              days
            </button>
            <div
              className="dropdown-menu "
              aria-labelledby="dropdownMenuButton"
            >
              {days.map(day => (
                <span key={day} className="dropdown-item">
                  {day}
                </span>
              ))}
            </div>
          </span>
        </i>
      </div>
    </div>
  );
};

export default BrodcastingCard;
