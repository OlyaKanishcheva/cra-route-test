import React from 'react';
import '../../stylesheets/adminPage.css';

const AdminPageUI = (props) => {
  const { users, currentUser, match } = props;
  const page = currentUser.pages
    .filter(page => page.url === match.path)[0];
  const { access} = page;
  return (
    <div>
    {access ? 
      <div className='users-info'>
        {users.map((user, i) => {
          return (
            <div className='user-info' key={i}>
              <div><b>Login:</b> {user.login}</div>
              <div><b>Password:</b> {user.password ? user.password : 'null'}</div>
              <div className='user-info__pages'>
                <div>
                  <b>url</b>
                  {user.pages.map((page, j) => 
                    <div key={j}>{page.url}</div>
                  )}
                </div>
                <div>
                  <b>access</b>
                  {user.pages.map((page, j) => 
                    <div key={j}>{page.access.toString()}</div>
                  )}
                </div>
                <div>
                  <b>text</b>
                  {user.pages.map((page, j) => 
                    <div key={j}>{page.text ? page.text : '-'}</div>
                  )}
                </div>
                <div>
                  <b>time</b>
                  {user.pages.map((page, j) => 
                    <div key={j}>{page.time ? page.time : '-'}</div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div> : 'No access'
    }
    </div>
  )
};

export default AdminPageUI;