import React, { Component } from "react";
import BrodcastingCard from "../layout/cards/BrodcastingCard";
import $ from "jquery";
import { addSchedule, editSchedule } from "../../redux/actions/schdulesActions";
import { connect } from "react-redux";
import Tabs from "../containerTabs/Tabs";
import uuid from "uuid";
import BrodcastingModal from "../layout/modals/BrodcastingModal";
class BrodcastingTab extends Component {
  constructor(props) {
    super(props);
    let { schedules } = this.props;
    this.state = {
      sched: {
        id: uuid(),
        message: "",
        sendNow: {
          sendTo: {
            all: false,
            admin: false,
            student: false
          }
        },
        schedule: {
          sendTo: {
            all: false,
            admin: false,
            student: false
          },
          time: "",
          day: {
            sun: false,
            mon: false,
            tue: false,
            wed: false,
            thu: false,
            fri: false,
            sat: false
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

  render() {
    return (
      <React.Fragment>
        <Tabs>
          <BrodcastingModal newId={uuid()} />
          <div>
            <h1>Broadcasting</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto nesciunt facere non sint incidunt modi vero vitae alias
              assumenda inventore officiis molestiae impedit, repellendus sequi
              ea atque possimus voluptas obcaecati.
            </p>
            <button
              className="btn addButton"
              data-toggle="modal"
              data-target="#scheduleModal"
            >
              <i className="fas fa-plus" />
            </button>
            <div className="casting-cards-container">
              <div className="row">
                {this.props.schedules.map(sch => (
                  <BrodcastingCard
                    key={sch.id}
                    schedule={sch}
                    dispatch={this.props.dispatch}
                    onEditClick={this.onEditClick}
                  />
                ))}
              </div>
            </div>
          </div>
          {/*Modals mapping Part */}
          {this.props.schedules.map(sch => (
            <BrodcastingModal key={sch.id} newId={""} schdId={sch.id} />
          ))}
        </Tabs>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  schedules: state.schedules
});
export default connect(mapStateToProps)(BrodcastingTab);
