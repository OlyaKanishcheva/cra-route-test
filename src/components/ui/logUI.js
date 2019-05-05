import React from 'react';
import '../../stylesheets/log.css';
import '../../stylesheets/button.css';

const LogIn = (props) => {

  const { login } = props.currentUser;

  const logOut = () => {
    const { onSetCurrentUser, guest } = props;
    onSetCurrentUser(guest);
  };

  return (
    <div className='user-data'>
      <div className='user-login'>User: {login}</div>
      <button 
          className='button'
          onClick={logOut}>
          Log Out
        </button>
    </div>
  )
};

export default LogIn;