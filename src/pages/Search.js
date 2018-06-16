import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search, update, getAll } from "../utils/booksAPI";
import {
  Grid,
  SearchBarWrapper,
  SearchBar,
  HomeLinkWrapper
} from "../components/StyledComponents";
import Shelf from "../components/Shelf";
import Loading from "../components/Loading";
import Modal from "react-responsive-modal";
import ModalContent from "../components/ModalContent";

class Search extends Component {
  state = {
    field: "",
    queriedBooks: [],
    isFetching: false,
    activeBook: null,
    modalIsOpen: false,
    bookIdToStatus: {}
  };

  componentDidMount() {
    // When component mounts get currently reading/wantToRead/read books and build
    // a dictionary which maps bookID to bookStatus
    this.rebuildMapper();
  } // componentDidMount

  rebuildMapper = () => {
    getAll()
      .then(currentShelves =>
        currentShelves.reduce((acc, { id, shelf }) => {
          acc[id] = shelf;
          return acc;
        }, {})
      )
      .then(bookIdToStatus => this.setState({ bookIdToStatus }));
  };

  handleModalClose = () =>
    this.setState({ modalIsOpen: false, activeBook: null });

  handleClickedBook = book =>
    this.setState({ activeBook: book, modalIsOpen: true });

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
      this.rebuildMapper();
    });
  };

  handleOnChange = ({ target }) => {
    this.setState({ isFetching: true });
    const field = target.value;
    const { bookIdToStatus } = this.state;

    if (field === "") {
      this.setState({ queriedBooks: [], field: "", isFetching: false });
    } else {
      this.setState({ field }, () => {
        search(field).then(books =>
          this.setState({
            queriedBooks: Array.isArray(books)
              ? books.map(
                  book =>
                    bookIdToStatus.hasOwnProperty(book.id)
                      ? { ...book, shelf: bookIdToStatus[book.id] }
                      : book
                )
              : [],
            isFetching: false
          })
        );
      });
    }
  };

  render() {
    const { activeBook } = this.state;
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
            openModalWith={this.handleClickedBook}
            title={this.state.field}
            books={this.state.queriedBooks}
            updateBookStatus={this.updateSearchedBookStatus}
          />
        )}
        {activeBook !== null && (
          <Modal onClose={this.handleModalClose} open={this.state.modalIsOpen}>
            <ModalContent activeBook={activeBook} />
          </Modal>
        )}
      </Grid>
    );
  } // render
} // Search

export default Search;
