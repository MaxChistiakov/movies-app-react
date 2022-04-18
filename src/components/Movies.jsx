import {Movie} from './Movie'

import React from 'react';

function Movies(props) {
    const {movies = []} = props;

    return <div className="movies">
        { movies.length ? movies.map(movie => {
            return <Movie key={movie.imdbID} {...movie} />
        }) : <h3>Nothing found</h3>}
    </div>;
}

export { Movies };