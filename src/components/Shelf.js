import React from "react";
import { ShelfTemplate, SubHeader } from "./StyledComponents";
import Books from "./Books";
import Book from "./Book";
import PropTypes from "prop-types";

const Shelf = ({ updateBookStatus, title, books, openModalWith }) => (
  <ShelfTemplate>
    <SubHeader>{title}</SubHeader>
    <Books books={books}>
      {({ books }) =>
        books.map(book => (
          <Book
            key={book.id}
            book={book}
            updateBookStatus={updateBookStatus}
            handleClick={openModalWith}
          />
        ))
      }
    </Books>
  </ShelfTemplate>
);

Shelf.propTypes = {
  updateBookStatus: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default Shelf;
