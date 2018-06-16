import React from "react";
import { BooksTemplate } from "./StyledComponents";
import PropTypes from "prop-types";

const Books = ({ children, books, handleOnClick }) => (
  <BooksTemplate>
    {children({
      books
    })}
  </BooksTemplate>
);

Books.propTypes = {
  children: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default Books;
