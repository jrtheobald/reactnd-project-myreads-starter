import React from 'react'
import {Link} from 'react-router-dom'
import Bookshelf from './bookshelf.js'

class Bookcase extends React.Component {
    componentDidMount() {
        console.log(this);
    }

    

    render() {
        // console.log()
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf
                    bookMoves={this.props.moveBook}
                    name='Currently Reading'
                    aFewBooks={this.props.someBooks.filter(book => book.shelf === 'currentlyReading')}/>
                <Bookshelf
                    bookMoves={this.props.moveBook}
                    name='Want to Read'
                    aFewBooks={this.props.someBooks.filter(book => book.shelf === 'wantToRead')}/>
                <Bookshelf
                    bookMoves={this.props.moveBook}
                    name='Read'
                    aFewBooks={this.props.someBooks.filter(book => book.shelf === 'read')}/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
              Add a book
              </Link>
            </div>
          </div>
        );
    }
}

export default Bookcase;