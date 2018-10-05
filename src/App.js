import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './bookcase.js'
import Search from './search.js'

class BooksApp extends React.Component {
  
  state = {
    query: '',
    books: [],
    matchbooks: []
  }

  componentDidMount() {
    this.updateQuery('');
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })

    console.log(this);
  }

  changeBookshelf = (book,shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({books:books})
      })
    })
  }
  
  updateQuery = (query) => {
    this.setState({query: query});
  }

  // bookSearch = (query) => {
  //   BooksAPI.search(query).then(() => {
  //     this.setState({matchbooks: books})
  //   })
  // }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path="/search" render={
          () => (
            <Search someBooks={this.state.books}
                    moveBook={this.changeBookshelf}
                    matchBooks={this.state.books}
                    query={this.state.query}
                    aSearch={this.bookSearch}
                    updateQuery={this.updateQuery} />
          )
        } />

        <Route exact path="/"  render={
          () => (
            <Bookcase someBooks={this.state.books}
                      moveBook={this.changeBookshelf} />
          )
        } />
        </div>
    );
  }
}

export default BooksApp;
