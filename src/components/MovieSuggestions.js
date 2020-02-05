import React from 'react';
import MovieGrid from './MovieGrid';
import { suggested } from '../utils/helper';

const MovieSuggestion = props => {
  return (
    <MovieGrid gridType="is-suggested" title="إقتراحتنا لك" movies={suggested(props.movies)} limit={4} />
  );
};

export default MovieSuggestion;