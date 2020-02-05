import React from 'react'
import Logo from './logo'
import MenuBar from './MenuBar';

const Header = () =>{

        return (
          <header className="section" role="navigation">
            <div className="container">
              <input type="checkbox" className="menu-btn" id="menu-btn" />
              <label htmlFor="menu-btn" className="navbar-burger">
                <span className="navicon"></span>
              </label>
              <Logo />
              <MenuBar />
              <div className="navbar-search">
                <input
                  type="text"
                  className="searchInput"
                  name="search"
                  placeholder="إبحث عن فيلم أو مسلسل"
                />
              </div>
            </div>
          </header>
        );
}


export default Header;