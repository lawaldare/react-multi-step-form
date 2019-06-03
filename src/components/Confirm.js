import React, { Component } from 'react';
import './confirm.css';

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <React.Fragment>
        <nav style={{ background: 'teal' }}>
          <div className="nav-wrapper">
            <a href="http://lawaldare.com" class="brand-logo center">
              Confirm User Data
            </a>
          </div>
        </nav>
        <br />
        <li class="collection with-header">
          <li class="collection-header">
            <h4>User Data</h4>
          </li>
          <li class="collection-item">First Name: {firstName}</li>
          <li class="collection-item">Last Name: {lastName}</li>
          <li class="collection-item">Email: {email}</li>
          <li class="collection-item">Occupation: {occupation}</li>
          <li class="collection-item">City: {city}</li>
          <li class="collection-item">Bio: {bio}</li>
        </li>
        <form className="col s12">
          <div className="row">
            <div className="col s12 m4 offset-m4">
              <button
                style={{
                  width: '45%',
                  marginRight: '60px',
                  background: 'white',
                  color: 'black'
                }}
                className="btn"
                onClick={this.back}>
                Back
              </button>
              <button
                style={{ width: '45%' }}
                className="btn"
                onClick={this.continue}>
                Confirm & Continue
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
