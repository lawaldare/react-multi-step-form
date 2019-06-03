import React, { Component } from 'react';

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <nav style={{ background: 'teal' }}>
          <div className="nav-wrapper">
            <a href="http://lawaldare.com" class="brand-logo center">
              Enter User Details
            </a>
          </div>
        </nav>
        <br />
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 m4 offset-m4">
              <input
                id="firstName"
                type="text"
                class="validate"
                onChange={handleChange('firstName')}
                defaultValue={values.firstName}
              />
              <label htmlFor="firstName">Enter Your First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m4 offset-m4">
              <input
                id="lastName"
                type="text"
                class="validate"
                onChange={handleChange('lastName')}
                defaultValue={values.lastName}
              />
              <label htmlFor="lastName">Enter Your Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m4 offset-m4">
              <input
                id="email"
                type="email"
                class="validate"
                onChange={handleChange('email')}
                defaultValue={values.email}
              />
              <label htmlFor="email">Enter Your Email</label>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m4 offset-m4">
              <button
                style={{ width: '100%', display: 'block' }}
                className="btn"
                onClick={this.continue}>
                Continue
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
