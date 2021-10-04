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
                'themes': ['heroic', 'fantasy', 'epic'] // <-- checkboxes
            },
            {
                '_id': 2,
                'title': 'The Return of the Jedi',
                'genre': 'science-fiction',
                'themes': ['heroic', 'science-fic', 'epic']
            },
            {
                '_id': 3,
                'title': 'Dune',
                'genre': 'science-fiction',
                'themes': ['dark', 'epic', 'political']
            }
        ]
    }

    render() {
        return (
            <React.Fragment>
                <h1>Movies List</h1>
            </React.Fragment>

        )
    }
}