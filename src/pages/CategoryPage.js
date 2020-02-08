import React from 'react';
import Filter from '../components/Filter';
import MovieGrid from '../components/MovieGrid';

import { suggested, mostViwed, recentRelease } from '../utils/helper';

class CategoryPage extends React.Component{
    state ={
        filter: null,
    }

    onFilter = value => {
        this.setState({filter: value})
    }

    renderMovieGrid = () =>{
        return (
          <>
            <MovieGrid gridType="is-suggested" title="إقتراحتنا لك" movies={suggested(this.props.movies)} limit={4} />
            <MovieGrid gridType="is-suggested" title="الأكثر مشاهدة" movies={mostViwed(this.props.movies)} limit={4} />
            <MovieGrid gridType="is-movies" title={`أحدث ${this.props.typeText}`} movies={recentRelease(this.props.movies, 'Film')} limit={32} />
          </>
        );
    }

    renderFilterResult = () => {
        const filteredMovies = this.props.movies.filter(movie => {
            return movie.genres.includes(this.state.filter)
        })
        return <MovieGrid gridType="is-suggested" title={this.state.filter} movies={filteredMovies}/>;
    }
    render(){
        return (
          <>
            <Filter type={this.props.typeText} optionText={this.props.optionText} onSelectChange={this.onFilter}/>
            {this.state.filter ? this.renderFilterResult() : this.renderMovieGrid()}
          </>
        );
    }
}

export default CategoryPage;