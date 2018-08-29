import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { update } from './utils/BooksAPI'

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  handleChange(book, event) {
    const shelf = event.target.value

    update(book, shelf).then((response) => {
      this.props.onShelfExchange(true)
    })
  }

  render() {
    const { book } = this.props

    return (
      <div className="book-shelf-changer">
        <select defaultValue='move' onChange={(event) => this.handleChange(book, event)}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default ShelfChanger
