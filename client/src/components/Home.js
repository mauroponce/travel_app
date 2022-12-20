import React, { Component } from 'react'
import Registration from './auth/Registration'
import Login from './auth/Login';

export default class Home extends Component {

  handleSuccessfulAuth = (data) => {
    this.props.handleLogin(data);
  }

  render() {
    return (
      <div>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
        {/* <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} /> */}
      </div>
    )
  }
}
