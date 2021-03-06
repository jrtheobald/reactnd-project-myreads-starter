import React from 'react'
import Book from './book.js'

class Bookshelf extends React.Component {
    componentDidMount() {
        console.log(this);
    }
        
    render() {
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.aFewBooks.map((book, key) => <Book
                                book={book} key={book.id} newShelf={this.props.bookMoves}/>)
                        }
                      
                    </ol>
                  </div>
                </div>
        );
    }
}

export default Bookshelf;