import React from 'react';

import MovieGrid from './MovieGrid';
import { mostViwed } from '../utils/helper';

const MostViwed = props => {
  return (
    <MovieGrid gridType="is-suggested" title="الأكثر مشاهدة" movies={mostViwed(props.movies)} limit={4} />
  );
};

export default MostViwed;