import React, { Component } from "react";
import Book from "./Book";
import { BooksTemplate } from "./StyledComponents";
import PropTypes from "prop-types";

const Books = ({ children, books }) => (
  <BooksTemplate>{children(books)}</BooksTemplate>
);

Books.propTypes = {
  children: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default Books;
