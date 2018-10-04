import React from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookcase from './bookcase.js'
import Search from './search.js'

class BooksApp extends React.Component {
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    query: '',
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })

    console.log(this);
  }

  updateShelf = (book,shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {
        this.setState({books:books})
      })
    })
  }
  
  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        <Route exact path="/search" component={Search} />

        <Route exact path="/"  render={
          () => (
            <Bookcase someBooks={this.state.books} test={this.myTest}
                      updateShelf={this.updateShelf} />
          )
        } />
        </div>
    );
  }
}

export default BooksApp;
