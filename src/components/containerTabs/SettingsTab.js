import $ from "jquery";
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateInfo,
  deleteAccount,
  updatePassword
} from "../../redux/actions/userActions";
import Tabs from "./Tabs";
class SettingsTab extends Component {
  constructor(props) {
    super(props);
    const userId = this.props.match.params.id;
    const users = this.props.users;
    const user = users.filter(u => u.id === userId);
    const {
      imgUrl,
      firstName,
      lastName,
      email,
      phone,
      birthDay,
      password,
      publicProfile,
      additionalBooking
    } = user[0];
    this.state = {
      user: {
        imgUrl,
        firstName,
        lastName,
        email,
        phone,
        birthDay,
        password,
        publicProfile,
        additionalBooking
      },
      newPassword: "",
      oldPassword: "",
      confirmPssowrdChange: "",
      passwordForDelete: "",
      confirmPasswordForDelete: "",
      errors: {
        updateInfoError: "",
        deleteAccountPassError: "",
        updatePasswordError: ""
      }
    };
  }
  componentDidMount() {
    $(".settings .profile-options .choose .rad").click(function() {
      $(this).toggleClass("color-");
      $(this)
        .children()
        .toggleClass("move-");
    });

    $(".settings input").click(function() {
      $(this).css("border-color", "#2c7be5");
    });
    $(".settings input").blur(function() {
      $(this).css("border-color", "#CFD2D6");
    });

    $(".settings .choose-theme button").click(function() {
      $("link[href*=theme]").attr("href", "css/" + $(this).text() + ".css");

      if ($(".settings .choose-theme button").text() === "Dark-theme") {
        $(this).text("Light-theme");
      } else if ($(".settings .choose-theme button").text() === "Light-theme") {
        $(this).text("Dark-theme");
      }
    });
  }
  handleEditFormPassword = e => {
    const name = e.currentTarget.name;
    console.log(name);
    const value = e.currentTarget.value;
    let state = { ...this.state };
    state[name] = value;
    this.setState(() => ({ ...state }));
  };
  handleEditForm = e => {
    const name = e.currentTarget.name;
    console.log(name);
    const value = e.currentTarget.value;
    let state = { ...this.state };
    state.user[name] = value;
    this.setState(() => ({ ...state }));
  };
  handleNumbersKeyDown = e => {
    //to force user writing on certain criteria
    if (
      (e.keyCode >= 48 && e.keyCode <= 57) ||
      (e.keyCode >= 96 && e.keyCode <= 105) ||
      e.keyCode === 8 ||
      e.keyCode === 37 ||
      e.keyCode === 39
    ) {
    } else {
      e.preventDefault();
    }
  };

  handleUpdateInfo = () => {
    const { firstName, lastName, email, birthDay } = this.state.user;
    let state = { ...this.state };
    if (!firstName || !lastName || !email || !birthDay) {
      state.errors.updateInfoError = "please fill the required data";
      this.setState(() => ({ ...state }));
      return false;
    } else {
      state.errors.updateInfoError = "";
      this.setState(() => ({ ...state }));
      this.props.dispatch(
        updateInfo(this.props.match.params.id, this.state.user)
      );
      this.props.history.push("/");
    }
  };
  handleDeleteAccount = () => {
    let state = { ...this.state };
    if (this.state.user.password !== this.state.passwordForDelete) {
      state.errors.deleteAccountPassError = "password icorrect";
      this.setState(() => ({ ...state }));
      return false;
    } else if (
      this.state.passwordForDelete !== this.state.confirmPasswordForDelete
    ) {
      state.errors.deleteAccountPassError =
        "password doesn't match confirmation";
      this.setState(() => ({ ...state }));
      return false;
    } else {
      state.errors.deleteAccountPassError = "";
      this.setState(() => ({ ...state }));
      this.props.dispatch(deleteAccount(this.props.match.params.id));
      this.props.history.push("/");
    }
  };
  handleUpdatePassword = () => {
    const { oldPassword, newPassword, confirmPssowrdChange } = this.state;
    let state = { ...this.state };
    if (oldPassword !== this.state.user.password) {
      state.errors.updatePasswordError = "incorrect password";
      this.setState(() => ({ ...state }));
      return false;
    } else if (newPassword === this.state.user.password) {
      state.errors.updatePasswordError =
        "new password can't be the same as the old one";
      this.setState(() => ({ ...state }));
      return false;
    } else if (newPassword !== confirmPssowrdChange) {
      state.errors.updatePasswordError = "password doesn't match confirmation";
      this.setState(() => ({ ...state }));
      return false;
    } else if (
      !/^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(newPassword)
    ) {
      state.errors.updatePasswordError =
        "password Invalid please follow password's criteria";
      this.setState(() => ({ ...state }));
      return false;
    } else {
      state.errors.updatePasswordError = "";
      this.setState(() => ({ ...state }));
      this.props.dispatch(
        updatePassword(this.props.match.params.id, newPassword)
      );
      this.props.history.push("/");
    }
  };
  render() {
    return (
      <Tabs>
        <div>
          {/* start setings*/}
          <div className="settings">
            <div className="container">
              <h6 className="text-left">OVERVIEW</h6>
              <h1 className="text-left">Settings</h1>

              {/* start setings otions*/}
              <div className="setings-options">
                <div className="container">
                  <ul className="list-unstyled row">
                    <li className="active">General</li>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <li>Profile</li>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <li>Billing</li>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <li>Notifications</li>
                  </ul>

                  <div className="line" />
                </div>
              </div>

              {/* end setings otions*/}

              {/* start setings form */}

              <div className="form">
                <div className="container">
                  <h5>Edit information</h5>

                  <div>
                    <div className="change-photo row">
                      <div className="ch-cam col-3 ">
                        <i className="fas fa-camera fa-2x" />
                      </div>
                      <a className="col-sm-9 ch-upload">Update profile photo</a>
                    </div>
                    <img src={this.state.user.imgUrl} />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 frow">
                      <label htmlFor="firstNames">First name</label>
                      <input
                        type="text"
                        id="firstNames"
                        name="firstName"
                        value={this.state.user.firstName}
                        onChange={this.handleEditForm}
                      />
                    </div>
                    <div className="col-lg-6 frow">
                      <label htmlFor="lastNames">Last name</label>
                      <input
                        type="text"
                        id="lastNames"
                        name="lastName"
                        value={this.state.user.lastName}
                        onChange={this.handleEditForm}
                      />
                    </div>
                  </div>
                  <div className="frow">
                    <label htmlFor="emailAddresss">
                      Email addres
                      <h6>
                        This contact will be shown to others publicly, so choose
                        it carefully.
                      </h6>
                    </label>
                    <input
                      type="text"
                      id="emailAddresss"
                      name="email"
                      value={this.state.user.email}
                      onChange={this.handleEditForm}
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6 frow">
                      <label htmlFor="phones">Phone</label>
                      <input
                        type="text"
                        id="phones"
                        placeholder="( _ _ _ ) _ _ _-_ _ _"
                        name="phone"
                        value={this.state.user.phone}
                        onChange={this.handleEditForm}
                        onKeyDown={this.handleNumbersKeyDown}
                        maxLength="11"
                      />
                    </div>
                    <div className="col-lg-6 frow">
                      <label htmlFor="Birthdays">Birthday</label>
                      <input
                        type="text"
                        className="datepicker"
                        id="Birthdays"
                        name="birthDay"
                        value={this.state.user.birthDay}
                        onChange={this.handleEditForm}
                      />
                    </div>
                    {this.state.updateInfoError && (
                      <span style={{ color: "red" }}>
                        {this.state.errors.updateInfoError}
                      </span>
                    )}
                    <div className="container">
                      <button type="button" onClick={this.handleUpdateInfo}>
                        Update information
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* end setings form */}
              {/*start profile-options */}
              <div className="profile-options">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6">
                      <h6>Public profile</h6>
                      <p>
                        Making your profile public means that anyone on the
                        Dashkit network will be able to find you.
                      </p>
                      <div className="row container choose">
                        <div
                          onClick={() =>
                            this.setState(() => ({
                              user: {
                                ...this.state.user,
                                publicProfile: !this.state.user.publicProfile
                              }
                            }))
                          }
                          className={`rad ${this.state.user.publicProfile &&
                            "color-"}`}
                        >
                          <div
                            className={`rounded-circle circl  ${this.state.user
                              .publicProfile && "move-"} `}
                          />
                        </div>
                        <h6>You're currently invisible</h6>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <h6>Allow for additional Bookings</h6>
                      <p>
                        If you are available for hire outside of the current
                        situation, you can encourage others to hire you.
                      </p>
                      <div className="row container choose">
                        <div
                          onClick={() => {
                            this.setState(() => ({
                              user: {
                                ...this.state.user,
                                additionalBooking: !this.state.user
                                  .additionalBooking
                              }
                            }));
                          }}
                          className={`rad ${this.state.user.additionalBooking &&
                            "color-"}`}
                        >
                          <div
                            className={`rounded-circle circl  ${this.state.user
                              .additionalBooking && "move-"} `}
                          />
                        </div>
                        <h6>You're currently available</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*end profile-options */}
              {/*start change password-form*/}
              <div className="password-form">
                <div className="container">
                  <h5>Change password</h5>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="prow">
                        <label htmlFor="ps11">Password</label>
                        <input
                          name="oldPassword"
                          value={this.state.oldPassword}
                          onChange={this.handleEditFormPassword}
                          type="password"
                          id="ps11"
                        />
                      </div>
                      <div className="prow">
                        <label htmlFor="New-password11">New password</label>
                        <input
                          name="newPassword"
                          onChange={this.handleEditFormPassword}
                          type="Password"
                          value={this.state.newPassword}
                          id="New-password11"
                        />
                      </div>
                      <div className="prow">
                        <label htmlFor="Confirm-new-password11">
                          Confirm new password
                        </label>
                        <input
                          type="Password"
                          onChange={this.handleEditFormPassword}
                          name="confirmPssowrdChange"
                          value={this.state.confirmPssowrdChange}
                          id="Confirm-new-password11"
                        />
                        {this.state.errors.updatePasswordError && (
                          <span style={{ color: "red" }}>
                            {this.state.errors.updatePasswordError}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 Password-requirements">
                      <h6>Password requirements</h6>
                      <p>
                        To create a new password, you have to meet all of the
                        following requirements:
                      </p>
                      <ul>
                        <li>Minimum 8 character</li>
                        <li>At least one special character</li>
                        <li>At least one number</li>
                        <li>Can't be the same as a previous password</li>
                      </ul>
                    </div>

                    <div className="container">
                      <button type="button" onClick={this.handleUpdatePassword}>
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/*end change password-form*/}
              {/*start delete acount*/}

              <div className="deleteAcount">
                <div className="container">
                  <h5>Delete Acount</h5>
                  <div className="row">
                    <div className="col-lg-6 dpassword">
                      <div>
                        <label htmlFor="password11">Password</label>
                        <input
                          name="passwordForDelete"
                          value={this.state.oldPassword}
                          onChange={this.handleEditFormPassword}
                          type="Password"
                          id="password11"
                        />
                      </div>
                      <div>
                        <label htmlFor="New-password">Confirm password</label>
                        <input
                          name="confirmPasswordForDelete"
                          onChange={this.handleEditFormPassword}
                          value={this.state.confirmPasswordForDelete}
                          type="Password"
                          id="New-password"
                        />
                      </div>
                      {this.state.errors.deleteAccountPassError && (
                        <span style={{ color: "red" }}>
                          {this.state.errors.deleteAccountPassError}
                        </span>
                      )}
                    </div>
                    <div className="col-lg-6 DeleteAccountWarning">
                      <h6>Delete account warning</h6>
                      <p>
                        Deleting your user account removes all repositories,
                        forks of private repositories, issues and pages owned by
                        your account. Issues and pull requests you've created
                        and comments you've made in repositories owned by other
                        users will not be deleted - instead, they'll be
                        associated with our Ghost user
                      </p>
                    </div>
                  </div>
                </div>
                <div className="container">
                  <button type="button" onClick={this.handleDeleteAccount}>
                    Delete account
                  </button>
                </div>
              </div>
              {/*end delete acount*/}
              {/*start choose theme */}
              <div className="choose-theme text-center">
                <div className="container justify-content-center">
                  <button>Dark-theme</button>
                </div>
              </div>
              {/*end choose theme */}
            </div>
          </div>
          {/* end settings*/}
        </div>
      </Tabs>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users
});
export default connect(mapStateToProps)(SettingsTab);
