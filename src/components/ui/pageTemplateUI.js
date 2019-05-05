import React, { Component } from 'react';
import { MainMenu } from '../menu';

class PageTemplateUI extends Component{

  constructor(props) {
    super(props);
    const { users, currentUser, match } = props;
    const user = users.filter(u => u.login === currentUser.login)[0];
    const page = user.pages.filter(page => page.url === match.path)[0];
    this.props = props;
    this.value = page.text;
    this.onChangeText = this.onChangeText.bind(this);
  };

  onChangeText(e) {
    const { props } = this;
    const { onSetCurrentUserText, currentUser, match } = props;
    const page = currentUser.pages
      .filter(page => page.url === match.path)[0];
    const { url } = page;
    this.value = e.target.value;
    onSetCurrentUserText(url, e.target.value)
  };

  componentWillReceiveProps(nextProps) {
    const { currentUser, match } = nextProps;
    const page = currentUser.pages
      .filter(page => page.url === match.path)[0];
    const { text } = page;
    this.value = text;
  };

  render() {
    const { onChangeText, props, value} = this;
    const { children, onSaveText, currentUser, match } = props;
    const page = currentUser.pages
      .filter(page => page.url === match.path)[0];
    const { access, url } = page;
    const { login } = currentUser;
    return (
      <div className="page">
        <MainMenu />
        { children }
        { access ?
          <div className="page-content">
            <textarea 
              className="text-field"
              value={value}
              onChange={onChangeText}>
            </textarea>
            <button 
              className="button"
              onClick={(e) => onSaveText(login, url, this.value)} >
              Save</button>
          </div> : 'No Access'
        }
      </div>
    );
  };
};

export default PageTemplateUI;