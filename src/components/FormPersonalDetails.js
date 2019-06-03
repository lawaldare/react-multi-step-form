import React, { Component } from 'react';

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <nav style={{ background: 'teal' }}>
          <div className="nav-wrapper">
            <a href="http://lawaldare.com" class="brand-logo center">
              Enter Personal Details
            </a>
          </div>
        </nav>
        <br />
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12 m4 offset-m4">
              <input
                id="occupation"
                type="text"
                class="validate"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
              />
              <label htmlFor="occupation">Enter Your Occupation</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m4 offset-m4">
              <input
                id="city"
                type="text"
                class="validate"
                onChange={handleChange('city')}
                defaultValue={values.city}
              />
              <label htmlFor="city">Enter Your City</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 m4 offset-m4">
              <input
                id="bio"
                type="text"
                class="validate"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
              />
              <label htmlFor="bio">Enter Your Bio</label>
            </div>
          </div>
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
                Continue
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default FormPersonalDetails;
