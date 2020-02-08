import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import HomePage from './pages/HomePage'
import Movies from './pages/Movies';
import Shows from './pages/Shows';


// import data
import data from './data/movies.json'
import Header from './components/Header';
import Footer from './components/Footer';
import Details from './pages/Detail';

class App extends React.Component {
  state = {
    movies: data
  };
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <div className="container">
            <Header />
            <>
              <Route
                exact
                path="/"
                render={props => {
                  return <HomePage {...props} movies={this.state.movies} />;
                }}
              />

              <Route
                exact
                path="/Movies"
                render={props => {
                  return <Movies {...props} movies={this.state.movies} />;
                }}
              />

              <Route
                exact
                path="/Shows"
                render={props => {
                  return <Shows {...props} movies={this.state.movies} />;
                }}
              />
            </>
            <Route exact path="/details/:id" render={props =>{
              return <Details {...props} movies={this.state.movies} />;
            }}/>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
