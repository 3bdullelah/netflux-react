import React from 'react';
import Hero from '../components/Hero';
import MovieGrid from '../components/MovieGrid';

import { suggested, mostViwed, recentRelease } from '../utils/helper';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Hero />
        <MovieGrid gridType="is-suggested" title="إقتراحتنا لك" movies={suggested(this.props.movies)} limit={4} />
        <MovieGrid gridType="is-suggested" title="الأكثر مشاهدة" movies={mostViwed(this.props.movies)} limit={4} />
        <MovieGrid gridType="is-movies" title="أحدث المسلسلات" movies={recentRelease(this.props.movies, 'Show')} limit={4} />
        <MovieGrid gridType="is-movies" title="أحدث الأفلام" movies={recentRelease(this.props.movies, 'Film')} limit={8} />
      </>
    );
  }
}

export default HomePage