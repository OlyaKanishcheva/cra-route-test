import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/menu.css';

export const MainMenu = () =>
  <nav className="main-menu">
    <NavLink className="main-menu-link" to="/">Main</NavLink>
    <NavLink className="main-menu-link" to="/public">Public</NavLink>
    <NavLink className="main-menu-link" to="/private1">Private1</NavLink>
    <NavLink className="main-menu-link" to="/private2">Private2</NavLink>
    <NavLink className="main-menu-link" to="/private3">Private3</NavLink>
    <NavLink className="main-menu-link" to="/admin">Admin</NavLink>
  </nav>