import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBooks}/>
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
