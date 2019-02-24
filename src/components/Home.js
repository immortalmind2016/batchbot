import React, { Component } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
class Home extends Component {
  state = {};
  componentDidMount() {
    $(" .why-section__nav li , .homePage .navbar-nav li ").on(
      "click",
      function() {
        $(".why-section__nav li , .homePage .navbar-nav li").removeClass(
          "active"
        );
        $(this).addClass("active");
      }
    );
  }
  render() {
    return (
      <div className="homePage">
        <nav className="navbar navbar-expand-lg  py-0 navbar-light">
          <Link className="navbar-brand mt-3" to="/" />
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item mx-2 px-2 active">
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item mx-2 px-2">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item mx-2 px-2">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item mx-2  px-2">
                <a className="nav-link " href="#">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          {/* intro section */}
          <header className="sec-1 row my-4">
            <div className="col-12 col-lg-6">
              <div className="row">
                <h2 className="mb-4">Stay in touch with your college</h2>
                <p>
                  You will be able to connect with your batch throw batchbot and
                  your college profile which is supported by your batch delegate
                </p>
              </div>
              <div className="row mt-4 mt-lg-0">
                <div className="col-6 col-lg-12">
                  <img
                    className="img-fluid"
                    src="/images/home/usersIcon.png"
                    alt="logo"
                  />
                </div>
                <div className="col-6 d-block d-lg-none">
                  <img
                    className="img-fluid"
                    src="/images/home/ropotIcon.png"
                    alt="chat"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 d-none d-lg-block">
              <img
                className="img-fluid"
                src="/images/home/ropotIcon.png"
                alt="chat"
              />
            </div>
          </header>

          {/* why batchbot */}
          <section className="sec-2 row my-4">
            <div className="col-12 text-center">
              <h3 className="why-batchbot">WHY BATCHBOT?</h3>
              You have access to lectures,sections and tasks within 24 hours,
              <br />
              which helps you to study without conflicts.
            </div>
            <div className="col-12 mt-5">
              <div className="row">
                <div className="col-12 col-lg-5 text-center">
                  <img
                    className="img-fluid"
                    src="/images/home/services.png"
                    alt="services"
                  />
                </div>
                <div className="offset-lg-1" />
                <div className="col-12 col-lg-6 mt-5 mt-lg-0">
                  <ul className="nav flex-column text-center why-section__nav">
                    <li className="nav-item row text-left align-items-center active">
                      <a className="nav-link col-3 text-center" href="#">
                        <img
                          className="img-fluid"
                          src="images/home/route.png"
                          alt="route"
                        />
                      </a>
                      <span className="col-9">
                        <h5>Take the route</h5>
                        <p>Start your way of success by passing here</p>
                      </span>
                    </li>
                    <li className="nav-item row text-left align-items-center">
                      <a className="nav-link col-3 text-center" href="#">
                        <img
                          className="img-fluid"
                          src="/images/home/broadcast.png"
                          alt="broadcast"
                        />
                      </a>
                      <span className="col-9">
                        <h5>Brodcast</h5>
                        <p>
                          You'll be notified when there's anything new in your
                          batch
                        </p>
                      </span>
                    </li>
                    <li className="nav-item row text-left align-items-center">
                      <a className="nav-link col-3 text-center" href="#">
                        <img
                          className="img-fluid"
                          src="/images/home/messenger.png"
                          alt="messenger"
                        />
                      </a>
                      <span className="col-9">
                        <h5>Messager</h5>
                        <p>Study throw messanger while chatting with others</p>
                      </span>
                    </li>
                    <li className="nav-item row text-left align-items-center">
                      <a className="nav-link col-3 text-center" href="#">
                        <img
                          className="img-fluid"
                          src="/images/home/cloud-computing.png"
                          alt="cloud"
                        />
                      </a>
                      <span className="col-9">
                        <h5>Uploading</h5>
                        <p>Open source cloud throw your batch</p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container-fluid weavy-blue-img-container">
          <div className="container">
            {/* our paltforms */}
            <section className="sec-3 row my-4 pt-4">
              <div className="col-12 col-md-6">
                <div className="row justify-content-center">
                  <div className="col-12 mb-5 p-0">
                    <h5 className="text-light">OUR PLATFORMS</h5>
                  </div>
                  <div className="col-8 box box--light p-5 mb-5">
                    <div className="row align-items-center">
                      <div className="col-4">
                        <img
                          className="img-fluid"
                          src="/images/home/blank-mopile.png"
                          alt="mobile"
                        />
                      </div>
                      <h5 className="col-8 text-center">
                        Mobile Application
                        <br /> For
                        <br /> Representatives
                      </h5>
                    </div>
                  </div>
                  <div className="col-8 box box--light p-5">
                    <div className="row align-items-center">
                      <div className="col-4">
                        <img
                          className="img-fluid"
                          src="/images/home/earth.png"
                          alt="earth"
                        />
                      </div>
                      <h5 className="col-8 text-center">
                        Mobile Application
                        <br /> For
                        <br /> Representatives
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="row justify-content-center ">
                  <div className="col-12 mb-5">
                    <h5 style={{ color: "transparent" }}>OUR PLATFORMS</h5>
                  </div>
                  <div className="col-8 box box--blue p-5 mb-5">
                    <div className="row align-items-center">
                      <div className="col-4">
                        <img
                          className="img-fluid"
                          src="/images/home/protection-bg-blue.png"
                          alt="mobile"
                        />
                      </div>
                      <h5 className=" col-8 text-center">More Secure Now</h5>
                    </div>
                  </div>
                  <div className="col-8 box box--blue p-5">
                    <div className="row align-items-center">
                      <div className="col-4">
                        <img
                          className="img-fluid"
                          src="/images/home/messanger-bg-blue.png"
                          alt="earth"
                        />
                      </div>
                      <h5 className="text-light col-8 text-center">
                        messager cahtbot
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer className="row sec-4 home__footer">
            <div className="container" style={{ position: "relative" }}>
              <div className="row py-5">
                <div className="col-12 text-light text-center">
                  <h1>HOW TO USE BATCHBOT</h1>
                  <p>
                    We decided to make a platform linked with chatbot to make
                    self learning more easy when lectures,sections etc..uploaded
                    here with batchbot broadcasting get in touch with new
                    educational system which makes it easy for you to improve.
                  </p>
                </div>
              </div>
              <div className="container-inner bg-light">
                <div className="row w-100 h-100 ">
                  <div className="col-12 col-md-6">
                    <div class="mop-img__container">
                      <img
                        className="img-fluid"
                        src="/images/home/mobile-chatbot.png"
                        alt="chatbot-mobile"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6 pt-5">
                    <ul className="nav flex-column text-center">
                      <li className="list-item row text-left align-items-center">
                        <a className="nav-link col-3 text-center" href="#">
                          <img
                            className="img-fluid"
                            src="/images/home/route.png"
                            alt="route"
                          />
                        </a>
                        <span className="col-9">
                          <p>Data stored in your batch website</p>
                        </span>
                      </li>
                      <li className="list-item row text-left align-items-center">
                        <a className="nav-link col-3 text-center" href="#">
                          <img
                            className="img-fluid"
                            src="/images/home/open.png"
                            alt="broadcast"
                          />
                        </a>
                        <span className="col-9">
                          <p>Open your batchbot from messager</p>
                        </span>
                      </li>
                      <li className="list-item row text-left align-items-center">
                        <a className="nav-link col-3 text-center" href="#">
                          <img
                            className="img-fluid"
                            src="/images/home/file.png"
                            alt="messenger"
                          />
                        </a>
                        <span className="col-9">
                          <p>Choose folder, then lectures or sections </p>
                        </span>
                      </li>
                      <li className="list-item row text-left align-items-center">
                        <a className="nav-link col-3 text-center" href="#">
                          <img
                            className="img-fluid"
                            src="/images/home/download.png"
                            alt="cloud"
                          />
                        </a>
                        <span className="col-9">
                          <p>Now you can download your data</p>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Home;
