import React from 'react'
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
                    name='Currently Reading'
                    aFewBooks={this.props.someBooks.filter(book => book.shelf === 'currentlyReading')}/>
                <Bookshelf
                    name='Want to Read'
                    aFewBooks={this.props.someBooks.filter(book => book.shelf === 'wantToRead')}/>
                <Bookshelf
                    name='Read'
                    aFewBooks={this.props.someBooks.filter(book => book.shelf === 'read')}/>
              </div>
            </div>
            <div className="open-search">
              <link to="/search">Add a book</link>
            </div>
          </div>
        );
    }
}

export default Bookcase;