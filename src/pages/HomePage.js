import React from 'react';
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieSuggestion from '../components/MovieSuggestions'
import Footer from '../components/Footer'
import NewMovies from '../components/NewMovies'
import NewShows from '../components/NewShows'
import MostViwed from '../components/MostViwed';


// import data
import data from '../data/movies.json'

class HomePage extends React.Component {

  state = {
    movies: data,
  };

  render() {
    console.log(data)
    return (
      <>
        <Header />
        <Hero />
        <MovieSuggestion movies={this.state.movies} />
        <MostViwed movies={this.state.movies} />
        <NewShows movies={this.state.movies} />
        <NewMovies movies={this.state.movies} />
        <Footer movies={this.state.movies} />
      </>
    );
  }
}

export default HomePage