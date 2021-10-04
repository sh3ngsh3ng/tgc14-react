import React from 'react'

export default class MovieList extends React.Component {
    state = {
        // minimally should have three sample data for testing
        // after we are done with test, we will delete the sample data
        'movies': [
            {
                '_id': 1,
                'title': 'The Lord of the Rings', // <-- textbox
                'genre': 'fantasy', // <-- radio or select dropdown
                'themes': ['heroic', 'fantasy', 'epic'], // <-- checkboxes,
                'summary': "Two halfings simply walked into Mordor"
            },
            {
                '_id': 2,
                'title': 'The Return of the Jedi',
                'genre': 'science-fiction',
                'themes': ['heroic', 'science-fic', 'epic'],
                'summary': "They are actually sisters and brothers"
            },
            {
                '_id': 3,
                'title': 'Dune',
                'genre': 'science-fiction',
                'themes': ['dark', 'epic', 'political'],
                'summary': "The spice must flow"
            }
        ],
    }

    // display all movies
    displayMovies() {
        let movieJSX = [];
        for (let movie of this.state.movies) {

            // create the JSX for each movie
            // the key is only required for list rendering
            let eachMovieJSX = (<React.Fragment key={movie._id}>
                <div className="card my-3" style={{width: '18rem'}}>                  
                    <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">{movie.summary}</p>
                        <button className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </React.Fragment>)
            
            // push the JSX into the array
            movieJSX.push(eachMovieJSX);
        }

        return movieJSX;
    }

    render() {
        return (
            <React.Fragment>
                <h1>Movies List</h1>
                {/* as long as the expression is an array of JSX elements,
                    React will perform list rendering */}
                {this.displayMovies()}
            </React.Fragment>

        )
    }
}