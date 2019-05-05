import C from './constants';

export const setCurrentUser = (user) => 
  ({
    type: C.SET_CURRENT_USER,
    user,
  });

export const saveText = (login, url, text) =>
  ({
    type: C.CHANGE_TEXT,
    login,
    url,
    text,
    time: new Date().toString(),
  });

export const setCurrentUserText = (url, text) =>
  ({
    type: C.CHANGE_TEXT,
    url,
    text,
  });