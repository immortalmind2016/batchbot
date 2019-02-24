import React, { Component } from "react";
import $ from "jquery";
import {
  addSchedule,
  editSchedule
} from "../../../redux/actions/schdulesActions";
import { connect } from "react-redux";
import { Button } from "bootstrap/dist/js/bootstrap.bundle";
class BrodcastingModal extends Component {
  constructor(props) {
    super(props);
    const { schdId: id } = this.props;
    let { schedules } = this.props;

    if (id) schedules = schedules.filter(sch => id === sch.id)[0];
    this.state = {
      sched: {
        id: id ? id : this.props.newId,
        message: id ? schedules.message : "",
        sendNow: {
          sendTo: {
            all: id ? schedules.sendNow.sendTo.all : false,
            admin: id ? schedules.sendNow.sendTo.admin : false,
            student: id ? schedules.sendNow.sendTo.student : false
          }
        },
        schedule: {
          sendTo: {
            all: id ? schedules.schedule.sendTo.all : false,
            admin: id ? schedules.schedule.sendTo.admin : false,
            student: id ? schedules.schedule.sendTo.student : false
          },
          time: id ? schedules.schedule.time : "",
          day: {
            sun: id ? schedules.schedule.day.sun : false,
            mon: id ? schedules.schedule.day.mon : false,
            tue: id ? schedules.schedule.day.tue : false,
            wed: id ? schedules.schedule.day.wed : false,
            thu: id ? schedules.schedule.day.thu : false,
            fri: id ? schedules.schedule.day.fri : false,
            sat: id ? schedules.schedule.day.sat : false
          }
        },
        buttons: []
      },
      error: "",
      buttonSubmit: false,

      button: {
        text: "",
        type: "",
        url: "",
        title: "",
        blockName: ""
      }
    };
  }

  componentDidMount() {
    //navbar
    const that = this;
    //navbar

    $(".schedule-click").hide();
    /* $(".schedule-active").hide();
        $(".sendNow-active").hide();*/

    $(".navbar-sendNow").click(function() {
      $(".navbar-active").css({
        marginLeft: "0px",
        zIndex: "2",
        borderBottom: "50px solid #67cdfd",
        borderRight: " 40px solid transparent",
        borderTop: "0px",
        borderLeft: "0px"
      });

      $(".navbar-schedule").css({
        borderTop: "50px solid #fff",
        borderLeft: " 40px solid transparent",
        color: "#394959",
        zIndex: "1"
      });

      $(".schedule-active").hide();
      /* $(".sendNow").hide();
                $(".schedule").show();*/
      $(".sendNow-active").show();

      $(".sendNow-click").show();
      $(".schedule-click").hide();
    });

    $(".navbar-schedule").click(function() {
      $(".navbar-active").css({
        marginLeft: "340.666px",
        borderTop: "50px solid #67cdfd",
        borderLeft: " 40px solid transparent",
        borderBottom: "0px",
        borderRight: "0",
        zIndex: "2"
      });

      $(".navbar-sendNow").css({
        borderBottom: "50px solid #fff",
        borderRight: " 40px solid transparent",
        color: "#394959",
        zIndex: "1"
      });

      $(".schedule-active").show();
      $(".sendNow-active").hide();
      /* $(".sendNow").show();
                $(".schedule").hide();*/

      $(".sendNow-click").hide();
      $(".schedule-click").show();
    });

    //add button click start
    $(".add-button").on("click", function(e) {
      if (that.state.sched.buttons.length === 2) {
        that.setState(() => ({ error: "can't add more than two buttons" }));
      } else {
        that.setState(() => ({ error: "" }));
        $(".add-button__popup").addClass("add-button__popup--show");
        that.setState(() => ({ buttonSubmit: true }));
        //on closing modal start
        $("body").click(function() {
          $(".add-button__popup").removeClass("add-button__popup--show");
          if (that.state.button.type === "" || that.state.button.title === "") {
            let state = { ...that.state };
            state.error = "please fill out all button's data";
            that.setState(() => ({ ...state }));
          } else if (that.state.buttonSubmit) {
            //adding created button to buttons array
            let buttons = that.state.sched.buttons;
            buttons.push(that.state.button);
            that.setState(() => ({ sched: { ...that.state.sched, buttons } }));
            that.setState(() => ({ buttonSubmit: false }));
            that.setState(() => ({ error: "" }));
          }
        });
        //on closing modal end
      }
    });
    //add button click End
    $(".add-button").on("click", function(e) {
      e.stopPropagation();
    });

    //navTabs
    $(".nav-links-container a").click(function() {
      let target = $(this).data("target");
      $(".nav-links-container a").removeClass("active");
      $(this).addClass("active");
      $(".tabs__container div").removeClass("active");
      $(`div${target}`).addClass("active");
    });

    $(".add-button input").on("focus", function() {
      $(this).removeClass("invalid");
    });
    $(".add-button input").on("blur", function() {
      if (
        $(this)
          .val()
          .trim() === ""
      ) {
        $(this).addClass("invalid");
      }
    });
  }

  handleSendNowClick = e => {
    const name = e.currentTarget.getAttribute("data-name");
    const state = { ...this.state };
    state.sched.sendNow.sendTo[name] = !state.sched.sendNow.sendTo[name];
    const { all, student, admin } = state.sched.sendNow.sendTo;

    if (name === "all") {
      state.sched.sendNow.sendTo.student = all;
      state.sched.sendNow.sendTo.admin = all;
    } else if (student === admin) {
      state.sched.sendNow.sendTo.all = student;
    } else {
      state.sched.sendNow.sendTo.all = false;
    }

    this.setState(() => ({ ...state }));
  };
  handleScheduleSendTo = e => {
    const name = e.currentTarget.getAttribute("data-name");
    const state = { ...this.state };
    state.sched.schedule.sendTo[name] = !state.sched.schedule.sendTo[name];
    const { all, student, admin } = state.sched.schedule.sendTo;
    if (name === "all") {
      state.sched.schedule.sendTo.student = all;
      state.sched.schedule.sendTo.admin = all;
    } else if (student === admin) {
      state.sched.schedule.sendTo.all = student;
    } else {
      state.sched.schedule.sendTo.all = false;
    }
    this.setState(() => ({ ...state }));
  };
  handleMessageFiledChange = e => {
    let value = e.currentTarget.value;
    const state = { ...this.state };
    state.sched.message = value;
    this.setState(() => ({ ...state }));
  };

  handleTimeChange = e => {
    let state = { ...this.state };
    state.sched.schedule.time = e.currentTarget.value;

    this.setState(() => ({ ...state }));
  };
  selectDaysOnClick = e => {
    const dayName = e.currentTarget.getAttribute("data-name");
    let state = { ...this.state };
    this.state.sched.schedule.day[dayName] = !this.state.sched.schedule.day[
      dayName
    ];
    this.setState(() => ({ ...state }));
  };
  handleSubmittion = e => {
    if (e.currentTarget.getAttribute("id") === "send") {
      const { message } = this.state;
      const { sendNow } = this.state.sched;
      if (
        message === "" ||
        (sendNow.sendTo.student === false && sendNow.sendTo.admin === false)
      ) {
        this.setState(() => ({ error: "please fill required fields" }));
        return false;
      }
    } else if (e.currentTarget.getAttribute("id") === "save") {
      const { message, button } = this.state;
      const { schedule } = this.state.sched;
      const sentToVals = Object.values(schedule.sendTo).find(
        val => val === true
      );

      const At = Object.values(schedule.day).find(day => day === true);
      if (
        message === "" ||
        schedule.time === "" ||
        sentToVals !== true ||
        At !== true
      ) {
        this.setState(() => ({ error: "please fill required fields" }));
        return false;
      }
    }

    this.setState(() => ({ error: "" }));
    if (this.props.schdId) {
      this.props.dispatch(
        editSchedule(this.props.schdId, { ...this.state.sched })
      );
      $(".modal").modal("hide");
    } else {
      this.props.dispatch(addSchedule(this.state.sched));
      $(".modal").modal("hide");
    }
  };
  showValidLetterNumber = e => {
    let value = e.target.value,
      name = e.target.name,
      type = e.target.getAttribute("data-type"),
      state = { ...this.state };
    if (name !== "title") {
      state.button.url = state.button.text = state.button.blockName = "";
      state.button.type = type;
    }
    state.button[name] = value;
    this.setState(() => ({ ...state }));
  };

  render() {
    return (
      <div className="braodcast-page">
        <div
          className="modal fade"
          id={this.props.schdId ? this.props.schdId : "scheduleModal"}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="schduleModal"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered d-flex justify-content-center"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-body">
                {/*start navbar*/}
                <ul className="broadcast-navbar">
                  <li className="navbar-sendNow">
                    <div className="sendNow">Send Now</div>
                  </li>

                  <li className="navbar-schedule">
                    <div className="schedule">Schedule</div>
                  </li>

                  <li className="navbar-active">
                    <div className="sendNow-active">Send Now</div>
                    <div className="schedule-active">Schedule</div>
                  </li>
                </ul>

                {/*end navbar*/}

                {/*start send-now page*/}

                <div className="sendNow-click">
                  {/* start message part */}
                  <div className="message-part">
                    <form>
                      <textarea
                        value={this.state.sched.message}
                        placeholder="type your message..."
                        onChange={this.handleMessageFiledChange}
                      />
                    </form>

                    <div className="learn-more">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Learn More
                      </a>
                    </div>
                    {this.state.sched.buttons.map((btn, i) => (
                      <div key={i} className="learn-more added-button">
                        <a
                          className="nav-link active"
                          id="home-tab"
                          data-toggle="tab"
                          href="#home"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          {btn.title}
                        </a>
                      </div>
                    ))}

                    <div className="add-button" onClick={this.AddButtonClick}>
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        onClick={e => {
                          e.preventDefault();
                        }}
                      >
                        + Add Button
                      </a>

                      <div className="add-button__popup">
                        <div className="input-container">
                          <input
                            className="form-control"
                            placeholder="Enter button Name"
                            onChange={this.showValidLetterNumber}
                            maxLength="20"
                            name="title"
                          />
                          <span className="badge badge-pill badge-info">
                            {20 - this.state.button.title.length}
                          </span>
                        </div>
                        <nav className="nav">
                          <div className="nav-links-container">
                            <a
                              className="nav-link active"
                              href="#"
                              data-target=".block-tab"
                            >
                              <i className="fas fa-th-large mr-3" />
                              Block
                            </a>
                            <a
                              className="nav-link"
                              href="#"
                              data-target=".url-tab"
                            >
                              <i className="fas fa-link mr-3" />
                              URL
                            </a>
                            <a
                              className="nav-link"
                              href="#"
                              data-target=".text-tab"
                            >
                              <i className="fas fa-font mr-3" />
                              Text
                            </a>
                          </div>

                          <div className="tabs__container">
                            <div className="block-tab active">
                              <input
                                className="form-control"
                                placeholder="Enter Subject Name"
                                list="subjects"
                                name="blockName"
                                data-type="postback"
                                onChange={this.showValidLetterNumber}
                              />
                              <datalist id="subjects">
                                <option>sub 1</option>
                                <option>sub 2</option>
                              </datalist>
                            </div>
                            <div className="url-tab">
                              <input
                                className="form-control"
                                placeholder="Enter url"
                                name="url"
                                data-type="web_url"
                                onChange={this.showValidLetterNumber}
                              />
                            </div>
                            <div className="text-tab">
                              <input
                                className="form-control"
                                placeholder="Enter Text"
                                name="text"
                                data-type="text"
                                onChange={this.showValidLetterNumber}
                              />
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/* end message part */}

                  {/*start send-to part*/}
                  <div className="sendNow-sendTo-part">
                    <div className="sendTo">
                      <i className="fa fa-users" />
                      Send To
                    </div>

                    <div
                      className="sendNow-sendTo-all"
                      data-name="all"
                      onClick={this.handleSendNowClick}
                    >
                      <div
                        className={`sendNow-all ${this.state.sched.sendNow
                          .sendTo.all && " sendNow-all-active"} `}
                      />
                      <span
                        className={`all ${this.state.sched.sendNow.sendTo.all &&
                          " all-active"} `}
                      >
                        {" "}
                        All
                      </span>
                    </div>

                    <div
                      className="sendNow-sendTo-admins"
                      data-name="admin"
                      onClick={this.handleSendNowClick}
                    >
                      <div
                        className={`sendNow-admins ${this.state.sched.sendNow
                          .sendTo.admin && " sendNow-admins-active"}`}
                      />
                      <span
                        className={`admins ${this.state.sched.sendNow.sendTo
                          .admin && " admins-active"}`}
                      >
                        Admins{" "}
                      </span>
                    </div>

                    <div
                      className="sendNow-sendTo-students"
                      data-name="student"
                      onClick={this.handleSendNowClick}
                    >
                      <div
                        className={`sendNow-students ${this.state.sched.sendNow
                          .sendTo.student && " sendNow-students-active"}`}
                      />
                      <span
                        className={`students ${this.state.sched.sendNow.sendTo
                          .student && " students-active"}`}
                      >
                        {" "}
                        Students
                      </span>
                    </div>

                    <div className="sendNow-send">
                      <button
                        className="send-button btn"
                        type="button"
                        id="send"
                        onClick={this.handleSubmittion}
                      >
                        <i className="fa fa-paper-plane" />
                        Send
                      </button>
                    </div>
                  </div>
                </div>
                {/*end send-to part*/}

                {/*end send-now page*/}

                {/*start schedule page*/}

                <div className="schedule-click">
                  {/*start message part */}
                  <div className="message-part">
                    <form>
                      <textarea
                        value={this.state.sched.message}
                        placeholder="type your message..."
                        onChange={this.handleMessageFiledChange}
                      />
                    </form>

                    <div className="learn-more">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Learn More
                      </a>
                    </div>

                    <div className="add-button">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        + Add Button
                      </a>
                      <div className="add-button__popup">
                        <div className="input-container">
                          <input
                            className="form-control"
                            placeholder="Enter button Name"
                            onChange={this.showValidLetterNumber}
                            maxLength="20"
                            name="title"
                          />
                          <span className="badge badge-pill badge-info">
                            {20 - this.state.button.title.length}
                          </span>
                        </div>
                        <nav className="nav">
                          <div className="nav-links-container">
                            <a
                              className="nav-link active"
                              href="#"
                              data-target=".block-tab"
                            >
                              <i className="fas fa-th-large mr-3" />
                              Block
                            </a>
                            <a
                              className="nav-link"
                              href="#"
                              data-target=".url-tab"
                            >
                              <i className="fas fa-link mr-3" />
                              URL
                            </a>
                            <a
                              className="nav-link"
                              href="#"
                              data-target=".text-tab"
                            >
                              <i className="fas fa-font mr-3" />
                              Text
                            </a>
                          </div>

                          <div className="tabs__container">
                            <div className="block-tab active">
                              <input
                                className="form-control"
                                placeholder="Enter Subject Name"
                                list="subjects"
                                name="blockName"
                                data-type="postback"
                                onChange={this.showValidLetterNumber}
                              />
                              <datalist id="subjects">
                                <option>sub 1</option>
                                <option>sub 2</option>
                              </datalist>
                            </div>
                            <div className="url-tab">
                              <input
                                className="form-control"
                                placeholder="Enter url"
                                name="url"
                                data-type="web_url"
                                onChange={this.showValidLetterNumber}
                              />
                            </div>
                            <div className="text-tab">
                              <input
                                className="form-control"
                                placeholder="Enter Text"
                                name="text"
                                data-type="text"
                                onChange={this.showValidLetterNumber}
                              />
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  {/*end message part */}

                  {/*start sendTo part */}
                  <div className="schedule-sendTo-part">
                    <div className="sendTo">
                      <i className="fa fa-users" />
                      Send To
                    </div>

                    <div
                      className="schedule-sendTo-all"
                      onClick={this.handleScheduleSendTo}
                      data-name="all"
                    >
                      <div
                        className={`schedule-all ${this.state.sched.schedule
                          .sendTo.all && " schedule-all-active"}`}
                      />
                      <span
                        className={`to-all ${this.state.sched.schedule.sendTo
                          .all && " to-all-active"}`}
                      >
                        {" "}
                        All
                      </span>
                    </div>

                    <div
                      className="schedule-sendTo-admins"
                      onClick={this.handleScheduleSendTo}
                      data-name="admin"
                    >
                      <div
                        className={`schedule-admins ${this.state.sched.schedule
                          .sendTo.admin && " schedule-admins-active"}`}
                      />
                      <span
                        className={`to-admins ${this.state.sched.schedule.sendTo
                          .admin && " to-admins-active"}`}
                      >
                        Admins{" "}
                      </span>
                    </div>

                    <div
                      className="schedule-sendTo-students"
                      onClick={this.handleScheduleSendTo}
                      data-name="student"
                    >
                      <div
                        className={`schedule-students ${this.state.sched
                          .schedule.sendTo.student &&
                          " schedule-students-active"}`}
                      />
                      <span
                        className={`to-students ${this.state.sched.schedule
                          .sendTo.student && " to-students-active"}`}
                      >
                        {" "}
                        Students
                      </span>
                    </div>

                    <div className="schedule-time">
                      <div className="Specific-time">
                        <label>Specific Time</label>
                      </div>
                      <div className="time">
                        <input
                          type="time"
                          value={this.state.sched.schedule.time}
                          onChange={this.handleTimeChange}
                        />
                      </div>
                    </div>

                    <div className="schedule-save">
                      <button
                        id="save"
                        className="save-button btn"
                        type="button"
                        onClick={this.handleSubmittion}
                      >
                        <i className="fa fa-download" aria-hidden="true" />
                        Save
                      </button>
                    </div>
                  </div>
                  {/*end sendTo part */}

                  {/* at section */}

                  <div className="schedule-at-part">
                    <div className="at">
                      <i className="fa fa-calendar" /> At
                    </div>

                    <div
                      className="at-sunday"
                      data-name="sun"
                      onClick={this.selectDaysOnClick}
                    >
                      <div
                        className={`sunday ${this.state.sched.schedule.day
                          .sun && "day-active"}`}
                      />
                      <span
                        className={`sun ${this.state.sched.schedule.day.sun &&
                          "dayName-active"}`}
                      >
                        Sun{" "}
                      </span>
                    </div>

                    <div
                      className="at-monday"
                      data-name="mon"
                      onClick={this.selectDaysOnClick}
                    >
                      <div
                        className={`monday ${this.state.sched.schedule.day
                          .mon && "day-active"}`}
                      />
                      <span
                        className={`mon ${this.state.sched.schedule.day.mon &&
                          "dayName-active"}`}
                      >
                        Mon{" "}
                      </span>
                    </div>

                    <div
                      className="at-tuesday"
                      data-name="tue"
                      onClick={this.selectDaysOnClick}
                    >
                      <div
                        className={`tuesday ${this.state.sched.schedule.day
                          .tue && "day-active"}`}
                      />
                      <span
                        className={`tue ${this.state.sched.schedule.day.tue &&
                          "dayName-active"}`}
                      >
                        {" "}
                        Tue
                      </span>
                    </div>

                    <div
                      className="at-wednesday"
                      data-name="wed"
                      onClick={this.selectDaysOnClick}
                    >
                      <div
                        className={`wednesday ${this.state.sched.schedule.day
                          .wed && "day-active"}`}
                      />
                      <span
                        className={`wed ${this.state.sched.schedule.day.wed &&
                          "dayName-active"}`}
                      >
                        {" "}
                        Wed
                      </span>
                    </div>

                    <div
                      className="at-thursday"
                      data-name="thu"
                      onClick={this.selectDaysOnClick}
                    >
                      <div
                        className={`thursday ${this.state.sched.schedule.day
                          .thu && "day-active"}`}
                      />
                      <span
                        className={`thu ${this.state.sched.schedule.day.thu &&
                          "dayName-active"}`}
                      >
                        {" "}
                        Thu
                      </span>
                    </div>

                    <div
                      className="at-friday"
                      data-name="fri"
                      onClick={this.selectDaysOnClick}
                    >
                      <div
                        className={`friday ${this.state.sched.schedule.day
                          .fri && "day-active"}`}
                      />
                      <span
                        className={`fri ${this.state.sched.schedule.day.fri &&
                          "dayName-active"}`}
                      >
                        {" "}
                        Fri
                      </span>
                    </div>

                    <div
                      className="at-saturday"
                      data-name="sat"
                      onClick={this.selectDaysOnClick}
                    >
                      <div
                        className={`saturday ${this.state.sched.schedule.day
                          .sat && "day-active"}`}
                      />
                      <span
                        className={`sat ${this.state.sched.schedule.day.sat &&
                          "dayName-active"}`}
                      >
                        {" "}
                        Sat
                      </span>
                    </div>
                  </div>
                </div>
                {this.state.error && (
                  <div
                    className="mt-3 text-danger text-center"
                    style={{ fontWeight: 700, fontSize: "14px" }}
                  >
                    {this.state.error}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  schedules: state.schedules
});
export default connect(mapStateToProps)(BrodcastingModal);
