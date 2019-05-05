import React, { Component } from 'react';
import '../../stylesheets/authForm.css';
import '../../stylesheets/button.css';


class AuthFormUI extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.logIn = this.logIn.bind(this);
  };

  logIn() {
    const { _login, _password } = this.refs;
    const { onSetCurrentUser, users } = this.props;
    if (users.some(user => user.login === _login.value && user.password === _password.value)) {
      onSetCurrentUser(users.filter(user => user.login === _login.value)[0]);
      [_login, _password].forEach(input => input.value = '');
    };
  };

  render() {
    return (
      <div className='auth-form'>
        Login:
        <input
          ref='_login'
          className='auth-input'
          type='text'
          required />
        Password:
        <input
          ref='_password'
          className='auth-input'
          type='password'
          required />
        <button 
          className='button'
          onClick={this.logIn}>
          Log In
        </button>
      </div>
    )
  }

};

export default AuthFormUI;
