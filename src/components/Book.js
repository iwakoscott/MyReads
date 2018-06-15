import React, { Component } from "react";
import {
  BookTemplate,
  Select,
  SelectWrapper,
  BookWrapper,
  BookCover,
  BookDescription,
  BookTitle,
  BookAuthor
} from "./StyledComponents";
import PropTypes from "prop-types";

class Book extends Component {
  state = {
    value: ""
  };

  componentDidMount() {
    this.setState({
      value: this.props.book.shelf
    });
  } // componentDidMount

  handleOnChange = ({ target }) => {
    const { book, updateBookStatus } = this.props;
    this.setState({ value: target.value }, () => {
      const { value } = this.state;
      updateBookStatus(book, value);
    });
  }; // handleOnChange

  render() {
    const { book } = this.props;
    return (
      <BookWrapper>
        <BookTemplate>
          <BookCover bookCover={book.imageLinks.thumbnail}>
            <SelectWrapper>
              <Select value={this.state.value} onChange={this.handleOnChange}>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </Select>
            </SelectWrapper>
          </BookCover>
          <BookDescription>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>
              {book.authors.map(author => <li key={author}>{author}</li>)}
            </BookAuthor>
          </BookDescription>
        </BookTemplate>
      </BookWrapper>
    );
  } // render
} // Book

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookStatus: PropTypes.func.isRequired
};

export default Book;
