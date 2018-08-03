import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class Bookshelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  getBooksByBookshelf = (books, shelf) => {
    return books.filter((book) => book.shelf === shelf)
  }

  render () {
    const { books } = this.props

    let bookshelves = [
      { title: 'Currently Reading', books: this.getBooksByBookshelf(books, 'currentlyReading') },
      { title: 'Want to Read', books: this.getBooksByBookshelf(books, 'wantToRead') },
      { title: 'Read', books: this.getBooksByBookshelf(books, 'read') }
    ]

    return (
      <div>
        <div className="bookshelf">
          {bookshelves.map((bookshelf, index) => (
            <div key={index}>
              <h2 className="bookshelf-title">{bookshelf.title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {bookshelf.books.map((book) => (
                    <li key={book.id}>
                      <Book book={book}/>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Bookshelf
