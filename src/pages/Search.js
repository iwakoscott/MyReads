import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search, update } from "../utils/booksAPI";
import {
  Grid,
  SearchBarWrapper,
  SearchBar,
  HomeLinkWrapper
} from "../components/StyledComponents";
import Shelf from "../components/Shelf";
import Loading from "../components/Loading";

class Search extends Component {
  state = {
    field: "",
    queriedBooks: [],
    isFetching: false
  };

  updateSearchedBookStatus = (book, newShelf) => {
    const updatedQueriedBooks = this.state.queriedBooks.map(
      queriedBook =>
        book.id === queriedBook.id
          ? {
              ...queriedBook,
              shelf: newShelf
            }
          : queriedBook
    );
    this.setState({ queriedBooks: updatedQueriedBooks }, () => {
      update(book, newShelf);
    });
  };

  handleOnChange = ({ target }) => {
    this.setState({ isFetching: true });
    const field = target.value;

    if (field === "") {
      this.setState({ queriedBooks: [], field: "", isFetching: false });
    } else {
      this.setState({ field }, () => {
        search(field).then(books =>
          this.setState({
            queriedBooks: Array.isArray(books) ? books : [],
            isFetching: false
          })
        );
      });
    }
  };

  render() {
    return (
      <Grid isSearchBar key={this.props.location.pathname}>
        <SearchBarWrapper>
          <div
            style={{
              display: "grid",
              justifySelf: "center",
              alignSelf: "center"
            }}
          >
            <Link
              style={{
                verticalAlign: "middle",
                color: "grey",
                textAlign: "center",
                textDecoration: "none",
                margin: "0px",
                padding: "0px"
              }}
              to="/"
            >
              <HomeLinkWrapper>🔙</HomeLinkWrapper>
            </Link>
          </div>
          <SearchBar
            onChange={this.handleOnChange}
            value={this.state.field}
            type="text"
            placeholder="Search by title or author"
          />
        </SearchBarWrapper>
        {this.state.isFetching ? (
          <Loading />
        ) : (
          <Shelf
            title={this.state.field}
            books={this.state.queriedBooks}
            updateBookStatus={this.updateSearchedBookStatus}
          />
        )}
      </Grid>
    );
  } // render
} // Search

export default Search;
