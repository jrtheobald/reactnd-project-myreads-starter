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
    this.setState({query: query})
  }

  bookSearch = (query) => {
    BooksAPI.search(query).then((response) => {
      console.log(response)
      this.setState({matchbooks: response})
    }).catch(error => {
      this.setState({matchbooks: ''})
    })
  }

  resetQuery = () => {
    this.setState({query: ""})
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
        <Route exact path="/search" render={
          () => (
            <Search someBooks={this.state.books}
                    moveBook={this.changeBookshelf}
                    matchBooks={this.state.matchbooks}
                    query={this.state.query}
                    updateQuery={this.updateQuery}
                    bookSearch={this.bookSearch} />
          )
        } />

        <Route exact path="/" render={
          () => (
            <Bookcase someBooks={this.state.books}
                      moveBook={this.changeBookshelf}
                      resetQuery={this.resetQuery} />
          )
        } />
        </div>
    );
  }
}

export default BooksApp;
