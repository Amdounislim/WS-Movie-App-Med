import React from 'react'
import MovieCrad from './MovieCard/MovieCrad'

const MoviesList = ({ movies }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}>
            {movies.map((movie, i) => <MovieCrad movie={movie} key={i} />)}
        </div>
    )
}

export default MoviesList
