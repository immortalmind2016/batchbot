import React from "react";
import Subject from "./Subject";
import Options from "./Options";
import Lec from "./Lec";
import $ from "jquery";

export default class Subjects extends React.Component {
  state = {
    colors: [
      "first-letter green",
      "first-letter red",
      "first-letter blue",
      "first-letter yellow"
    ]
  };
  componentDidMount = () => {
    $(".sub .matarial .options .show .show-button").click(function() {
      $(".sub .matarial .thin").toggle();
    });

    $("body .sub .matarial .term-type").click(function() {
      $(this).addClass("active");
      $(this)
        .siblings()
        .removeClass("active");
    });
  };

  render() {
    return (
      <div>
        <div className="sub">
          <div className="container">
            <div className="matarial">
              <Options />

              <div className="container">
                <div className="row">
                  <div className="col-sm-6 thin">
                    <div className="row choose-terms">
                      <span className="col-sm-6 text-sm-right term-type">
                        1st Term
                      </span>
                      <span className="col-sm-6 text-sm-left term-type active">
                        2nd Term
                      </span>
                    </div>
                    <Subject color={this.state.colors[0]} />
                    <Subject color={this.state.colors[1]} />
                    <Subject color={this.state.colors[2]} />
                    <Subject color={this.state.colors[3]} />
                    <Subject color={this.state.colors[0]} />
                    <Subject color={this.state.colors[1]} />
                    <Subject color={this.state.colors[2]} />
                    <Subject color={this.state.colors[3]} />
                    <Subject color={this.state.colors[0]} />
                    <Subject color={this.state.colors[1]} />
                    <Subject color={this.state.colors[2]} />
                    <Subject color={this.state.colors[3]} />
                    <Subject color={this.state.colors[0]} />
                    <Subject color={this.state.colors[1]} />
                    <Subject color={this.state.colors[2]} />
                    <Subject color={this.state.colors[3]} />
                  </div>
                  <div className="fat">
                    <div className="container">
                      <div className="row">
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                        <Lec />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
