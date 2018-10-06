import React from 'react'
import {Link} from 'react-router-dom'
import Book from './book.js'

class Search extends React.Component {
    componentDidMount() {
        console.log(this);
    }

    render() {
        return (
            <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search">
                Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                value={this.props.query}
                onChange={(event) => {
                    this.props.updateQuery(event.target.value);
                    this.props.bookSearch(event.target.value)
                }}
                type="text"
                placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {this.props.query ?
                    this.props.matchBooks.map((book, key) => <Book
                    book={book} key={book.id} newShelf={this.props.moveBook}/>) : ''  
                }
            </ol>
          </div>
        </div>
        );
    }
}

export default Search;