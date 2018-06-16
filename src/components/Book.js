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
          <BookCover
            bookCover={
              book.imageLinks
                ? book.imageLinks.thumbnail
                : "https://use.fontawesome.com/releases/v5.0.13/svgs/solid/question.svg"
            }
          >
            <SelectWrapper>
              <Select value={this.state.value} onChange={this.handleOnChange}>
                {!this.props.myShelf && (
                  <option
                    defaultChecked={typeof this.state.value === "undefined"}
                    value="none"
                  >
                    None
                  </option>
                )}
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </Select>
            </SelectWrapper>
          </BookCover>
          <BookDescription onClick={() => this.props.handleClick(book)}>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>
              {book.authors &&
                book.authors.map(author => <li key={author}>{author}</li>)}
            </BookAuthor>
          </BookDescription>
        </BookTemplate>
      </BookWrapper>
    );
  } // render
} // Book

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookStatus: PropTypes.func.isRequired,
  myShelf: PropTypes.bool
};

export default Book;
