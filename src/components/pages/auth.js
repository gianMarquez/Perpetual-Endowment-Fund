import React, { Component } from "react";
import Login from "../auth/login";
import loginImg from "../../../static/assets/images/bottega-guy.jpg";
import Blogo from "../../../static/assets/images/Bottega-logo.png"
export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  }

  handleUnsuccessfulAuth() {
    this.props.handleUnsuccessfulLogin();
  }

  render() {
    return (
      <div className="auth-page-wrapper">
        <div
          className="left-column"
          style={{
            backgroundImage: `url(${loginImg})`
          }}
        />

        <div className="right-column">
          <div className="main-logo">
            <img src={Blogo} alt="Bottega"/>
          </div>
          <div className="login-to-access">
            <div> <br/> </div>
            <div>
              <Login
              handleSuccessfulAuth={this.handleSuccessfulAuth}
              handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
              />
            </div>
            <div> <br/> </div>
          </div>
        </div>
      </div>
    );
  }
}