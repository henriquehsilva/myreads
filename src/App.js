import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import { getAll } from './utils/BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  getBooks = () => {
    getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
   this.getBooks()
  }

  updateBookshelves = (bool) => {
    bool&&this.getBooks()
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks books={books} onShelfExchange={(bool) => this.updateBookshelves(bool)}/>
        )}/>
        <Route exact path="/" render={() => (
          <ListBooks books={books} onShelfExchange={(bool) => this.updateBookshelves(bool)}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
