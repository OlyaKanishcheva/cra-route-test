import { connect } from 'react-redux';
import { setCurrentUser, saveText, setCurrentUserText } from './../actions';
import AuthFormUI from './ui/authFormUI';
import LogUI from './ui/logUI';
import PageTemplateUI from './ui/pageTemplateUI';
import AdminPageUI from './ui/adminPageUI';

export const AuthForm = connect(
  state => 
    ({
      users: state.users
    }),
  dispatch =>
    ({
      onSetCurrentUser(user) {
        dispatch(setCurrentUser(user))
      }
    }) 
)(AuthFormUI);

export const Log = connect(
  state => 
    ({
      currentUser: state.currentUser,
      guest: state.users.filter(user => user.login === 'guest')[0],
    }),
  dispatch =>
    ({
      onSetCurrentUser(user) {
        dispatch(setCurrentUser(user))
      }
    }) 
)(LogUI);

export const PageTemplate = connect(
  (state, { match }) => 
    ({
      currentUser: state.currentUser,
      users: state.users,
      match,
    }),
  dispatch =>
    ({
      onSaveText(login, url, text) {
        dispatch(saveText(login, url, text))
      },
      onSetCurrentUserText(url, text) {
        dispatch(setCurrentUserText(url, text))
      }
    })
)(PageTemplateUI);

export const AdminPage = connect(
  (state, { match }) => 
    ({
      users: state.users,
      currentUser: state.currentUser,
      match,
    }) 
)(AdminPageUI);