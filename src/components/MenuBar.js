// import react
import React from 'react';


// create component
const MenuBar = () => {
  return (
    <ul className="navbar-menu">
      <li>
        <a href="#" className="navbar-item active">
          الرئيسية
        </a>
      </li>
      <li>
        <a href="#" className="navbar-item">
          الافلام
        </a>
      </li>
      <li>
        <a href="#" className="navbar-item">
          المسلسلات
        </a>
      </li>
    </ul>
  );
};

// export component
export default MenuBar;
