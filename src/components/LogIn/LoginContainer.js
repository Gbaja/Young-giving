import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { logIn, resetError } from "../../actions/post_requests";
import { RESET_ERROR } from "../../actions/types";
import LogInForm from "./Login_form";
import Logo from "../Assets/Logo.png";
import { LogoImg } from "./Login.Styled";

class LoginFormContainer extends Component {
  componentDidMount() {
    this.props.resetError();
  }

  handleFormSubmission = values => {
    this.props.logIn(values, res => {
      console.log("COMPONENT RES: ", res);
      if (res.accountType === "Admin") {
        this.props.history.push(`/owner`);
      } else if (res.accountType === "Mentor") {
        this.props.history.push(`/mentor/dashboard`);
      } else if (res.accountType === "Mentee") {
        this.props.history.push(`/mentee/dashboard`);
      } else if (res.accountType === "University") {
        this.props.history.push("/university_dashboard");
      }
    });
  };
  render() {
    const { handleSubmit, alert } = this.props;
    return (
      <div>
        <LogoImg src={`${Logo}`} />
        <LogInForm
          onSubmit={this.handleFormSubmission}
          handleSubmit={handleSubmit}
          alert={alert}
        />
      </div>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = "Please enter an email address";
  }
  if (!values.password) {
    errors.password = "Please enter a password";
  }
  return errors;
};

export default reduxForm({
  validate,
  form: "LogInForm"
})(withRouter(connect(null, { logIn, resetError })(LoginFormContainer)));
