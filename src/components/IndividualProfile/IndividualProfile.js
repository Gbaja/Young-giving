import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchProfile } from "../../actions/get_requests";
import Header from "../Shared/Header";
import { FormsSubmitButton } from "../Shared/Shared.styled";

class IndividualProfilePage extends Component {
  componentDidMount() {
    const { id, accountType } = this.props.match.params;
    this.props.fetchProfile(id, accountType);
  }

  goBackBtn = () => {
    this.props.history.goBack();
  };
  render() {
    console.log(this.props.profile);
    const {
      id,
      firstName,
      lastName,
      email,
      location,
      gender,
      ethnicity,
      imageUrl,
      universityName,
      degree,
      graduationYear,
      jobTitle,
      company,
      dateStarted,
      endDate,
      industry,
      biography,
      reason,
      socialMediaUrl,
      availability
    } = this.props.profile;
    return (
      <div>
        <Header />
        <FormsSubmitButton onClick={this.goBackBtn}>
          <p>Go back</p>
        </FormsSubmitButton>
        <h3>Pofile page</h3>
        <p>
          {firstName} {lastName}
        </p>
        <p>{biography}</p>
        <p>{location}</p>
        <p>{gender}</p>
        <p>{ethnicity}</p>
        <p>{universityName}</p>
        <p>{degree}</p>
        <p>{graduationYear}</p>
        <p>{jobTitle}</p>
        <p>{company}</p>
        <p>{dateStarted}</p>
        <p>{industry}</p>
        <p>{reason}</p>
        <p>{socialMediaUrl}</p>
        <p>{availability}</p>
        {this.props.auth.accountType !== "Mentor" &&
        this.props.match.params.accountType !== "Mentee" ? (
          <Link to={`/request_mentorship/${id}`}>Request mentorship</Link>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    fetchProfile
  }
)(IndividualProfilePage);
