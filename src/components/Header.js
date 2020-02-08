import React from 'react'
import Logo from './logo'
import MenuBar from './MenuBar';
import { withRouter } from 'react-router'

class Header extends React.Component{
  state = {
    searchTerm: '',
    origin: ''
  }

  onChangeHandler = event => {
    if (event.target.value) {
      this.setState({
        searchTerm: event.target.value,
        origin: this.props.location.pathname.includes('/search') ? this.state.origin : this.props.location.pathname,
      });
      return this.props.history.push(`/search/${event.target.value}`);
    } else {
      this.setState({
        searchTerm: '',
      })
      return this.props.history.push(this.state.origin)
    }
  }
  render(){
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
              onChange={this.onChangeHandler}
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
}


export default withRouter(Header);