import React, { Component } from "react";
import RightNavbar from "../RightNavbar";
import SideNavbar from "../SideNavbar";
import $ from "jquery";

class Tabs extends Component {
  state = {};
  componentDidMount() {
    $(".custom-nav-toggler__side-nav").click(function() {
      $("#leftSideNav").toggleClass("leftSideNav__right");
      $(this).toggleClass("toggle-icon--left");
    });

    /*start of resizing custom container */
    var windowWidth = $(window).outerWidth();
    if ($(window).outerWidth() < 1200) {
      $(".custom-container").outerWidth(windowWidth);
    } else {
      $(".custom-container").outerWidth(
        windowWidth -
          ($(".side-nav").outerWidth() + $(".side-nav-right").outerWidth())
      );
    }

    $(window).on("resize", function() {
      if ($(window).outerWidth() < 1200) {
        $(".custom-container").outerWidth($(window).outerWidth());
      } else {
        $(".custom-container").outerWidth(
          $(window).outerWidth() -
            ($(".side-nav").outerWidth() + $(".side-nav-right").outerWidth())
        );
      }
    });
    /*end of resizing custom container */

    /*start of activation function */
    function activate(links, activationClass) {
      $(links).on("click", function() {
        $(links).removeClass(activationClass);
        $(this).addClass(activationClass);
      });
    }
    /*end of activation function */
    $(".nav-link").each(function() {
      if ($(this).hasClass("activate"))
        $(this)
          .parent()
          .addClass("active");
    });
    /* side nav tabs  end*/
    /* baoadcasting add button start */
    $("#broadcasting .addButton").on("click", function() {});
    /* baoadcasting add button end */
  }
  render() {
    return (
      <React.Fragment>
        <RightNavbar />
        <SideNavbar />
        <div className="custom-nav-toggler__side-nav d-block d-xl-none">
          <i className="fas fa-chevron-circle-right" />
        </div>
        <div className="custom-container">{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default Tabs;
