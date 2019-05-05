import C from '../constants';

export const page = (state = {}, action = { type: null }) => {
  switch (action.type) {
    case C.CHANGE_TEXT :
      return (state.url !== action.url) ? state : 
      {
        ...state,
        text: action.text,
        time: action.time,
      };
    default:
      return state;
  };
};

export const pages = (state = [], action = { type: null }) => {
  switch (action.type) {
    case C.CHANGE_TEXT :
      return state.map(
        p => page(p, action)
      );
    default:
      return state;
  };
};

export const user = (state = {}, action = { type: null }) => {
  switch (action.type) {
    case C.CHANGE_TEXT :
      return (state.login !== action.login) ? state :
        {
          ...state,
          pages: pages(state.pages, action)
        };
    default:
      return state;
  };
};

export const users = (state = [], action = { type: null }) => {
  switch (action.type) {
    case C.CHANGE_TEXT :
      return state.map(
        u => user(u, action)
      );
    default:
      return state;
  };
};

export const currentUser = (state = {}, action = { type: null }) => {
  switch (action.type) {
    case C.SET_CURRENT_USER : 
      return action.user;
    case C.UNSET_CURRENT_USER : 
      return {};
    case C.CHANGE_TEXT :
      return {
        ...state,
        pages: pages(state.pages, action),
      };
    default:
      return state;
  }
};
