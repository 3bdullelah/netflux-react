import React from 'react'
import Filter from '../components/Filter';
import MovieGrid from '../components/MovieGrid';


import { suggested, mostViwed, recentRelease } from '../utils/helper';

export class Shows extends React.Component {
         render() {
           return(
               <>
                <Filter type=" مسلسلات" optionText="نوع المسلسل"/>
                <MovieGrid gridType="is-suggested" title="إقتراحتنا لك" movies={suggested(this.props.movies)} limit={4} />
                <MovieGrid gridType="is-suggested" title="الأكثر مشاهدة" movies={mostViwed(this.props.movies)} limit={4} />
                <MovieGrid gridType="is-movies" title="أحدث المسلسلات" movies={recentRelease(this.props.movies, 'Show')} limit={32} />
               </>
           )
         }
       }

export default Shows
