import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render () {
    const { books, onShelfExchange } = this.props

    return (
      <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <Bookshelf books={books} onShelfExchange={(bool) => onShelfExchange(bool)}/>
      </div>
      <Link to="/search" className="open-search">Add a book</Link>
    </div>
    )
  }
}

export default ListBooks
