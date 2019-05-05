import React from 'react';
import { MainMenu } from './menu';
import { AuthForm, PageTemplate, AdminPage } from './containers';
import '../stylesheets/pages.css';
import '../stylesheets/button.css';

export const Main = () =>
  <div className='main'>
    <MainMenu />
    <h1>Main</h1>
    <AuthForm />
  </div>

export const Public = ({ match }) =>
  <PageTemplate match={ match }>
    <h1>Public</h1>
  </PageTemplate>

export const Private1 = ({ match }) =>
  <PageTemplate match={ match }>
    <h1>Private1</h1>
  </PageTemplate>

export const Private2 = ({ match }) =>
  <PageTemplate match={ match }>
    <h1>Private2</h1>
  </PageTemplate>

export const Private3 = ({ match }) =>
  <PageTemplate match={ match }>
    <h1>Private3</h1>
  </PageTemplate>

export const Whoops404 = ({ location }) =>
  <div className='whoops-404'>
    <h1>Resource not found at '{location.pathname}'</h1>
  </div>

export const Admin = ({ match }) =>
  <div className='admin-page'>
    <MainMenu />
    <h1>Admin</h1>
    <AdminPage match={ match } />
  </div>