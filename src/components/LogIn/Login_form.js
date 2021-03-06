import React, { Component } from "react";
import { Field } from "redux-form";
import { Link } from "react-router-dom";

import { renderFormFields } from "../../helpers/reduxFields";
import { FormsSubmitButton } from "../Shared/Shared.styled";

class LogInForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field label="Email" name="email" component={renderFormFields} />
          <Field
            label="Password"
            name="password"
            type="password"
            component={renderFormFields}
          />
          <FormsSubmitButton type="submit">Sign in</FormsSubmitButton>
        </form>
      </div>
    );
  }
}

export default LogInForm;
