import React, { Component } from 'react';

class Success extends Component {
  render() {
    return (
      <React.Fragment>
        <nav style={{ background: 'teal' }}>
          <div className="nav-wrapper">
            <a href="http://lawaldare.com" class="brand-logo center">
              Confirm User Data
            </a>
          </div>
        </nav>
        <div className="container">
          <h1>Thank You For Your Submission</h1>
          <p className="flow-text">
            You will get an email with further instructions
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Success;
