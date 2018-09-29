import React, { Component } from React;

class Bookshelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {bookshelfTitle: 'Currently Reading'}
    }
    render() {
        return (
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.state.bookshelfTitle}</h2>
                  <BookshelfBooks />
                </div>
        );
    }
}

class BookshelfBooks extends React.Component {
    render() {
        return(
            <div className="bookshelf-books">
                <Booksgrid />    
                  </div>
        );
    }
}

class Booksgrid extends React.Component {
    render() {
        return(
            <ol className="books-grid">
                      <li>
                        <Book title='' />
                      </li>
                      <li>
                        <Book title='' />
                      </li>
                    </ol>
        );
    }
}