import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'lodash.debounce'
import { search } from './utils/BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  state = {
    books: []
  }

  findBooks = debounce((query) => {
    query = !query ? " " : query
    search(query).then((books) => {
      this.setState({books})
    })
  }, 1000)

  render() {
    const { books } = this.state;
    const { onShelfExchange } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.findBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {(typeof books !== 'undefined' && books.length > 0)&&(
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    onShelfExchange={(bool) => onShelfExchange(bool)}
                  />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    )
  }
}

export default SearchBooks
