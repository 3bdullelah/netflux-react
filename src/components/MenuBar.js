// import react
import React from 'react';
import {NavLink} from 'react-router-dom'

// create component
const MenuBar = () => {
  return (
    <ul className="navbar-menu">
      <li><NavLink  className={`navbar-item`} exact to="/">الرئيسية</NavLink></li>
      <li><NavLink  className="navbar-item" exact to="/movies">الافلام</NavLink></li>
      <li><NavLink  className="navbar-item" exact to="/shows"> المسلسلات</NavLink></li>
    </ul>
  );
};

// export component
export default MenuBar;
