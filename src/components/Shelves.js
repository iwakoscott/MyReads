import React, { Component } from "react";
import { ShelvesTemplate } from "./StyledComponents";
import { update, getAll } from "../utils/booksAPI";
import { pack } from "../utils/tools";
import Shelf from "./Shelf";
import Loading from "./Loading";
import Modal from "react-responsive-modal";
import ModalContent from "../components/ModalContent";

const initialState = {
  currentlyReading: [],
  wantToRead: [],
  read: [],
  isFetching: false,
  modalIsOpen: false,
  activeBook: null
};

class Shelves extends Component {
  state = initialState;

  handleModalClose = () =>
    this.setState({ modalIsOpen: false, activeBook: null });

  handleClickedBook = book => {
    // This callback function should be passed down to activate a book modal
    this.setState({ activeBook: book, modalIsOpen: true });
  }; // handleClickedBook

  componentDidMount() {
    // When component mounts, the component should update the local state with the most up to date
    // books data

    this.setState({ isFetching: true });

    getAll()
      .then(books => books.reduce(pack, initialState))
      .then(newState =>
        this.setState({
          ...newState,
          isFetching: false
        })
      );
  } // componentDidMount

  // a callback function to be passed down to Shelf children to update any book status on the server
  updateBookStatus = (book, newShelf) => {
    // optimistically update UI

    // 1. remove book from old shelf and add to new one.
    const { shelf: oldShelf, id } = book;
    const stateToUpdate = {
      [oldShelf]: this.state[oldShelf].filter(b => b.id !== id),
      [newShelf]: [...this.state[newShelf], { ...book, shelf: newShelf }]
    };

    // 2. update the server with the new changes.
    this.setState(stateToUpdate, () => update(book, newShelf));
  };

  render() {
    const {
      currentlyReading,
      wantToRead,
      read,
      isFetching,
      activeBook
    } = this.state;
    return isFetching ? (
      <Loading />
    ) : (
      <ShelvesTemplate>
        <Shelf
          myShelf
          updateBookStatus={this.updateBookStatus}
          title="Currently Reading"
          books={currentlyReading}
          openModalWith={this.handleClickedBook}
        />
        <Shelf
          myShelf
          updateBookStatus={this.updateBookStatus}
          title="Want to Read"
          books={wantToRead}
          openModalWith={this.handleClickedBook}
        />
        <Shelf
          myShelf
          updateBookStatus={this.updateBookStatus}
          title="Read"
          books={read}
          openModalWith={this.handleClickedBook}
        />
        {activeBook !== null && (
          <Modal onClose={this.handleModalClose} open={this.state.modalIsOpen}>
            <ModalContent activeBook={activeBook} />
          </Modal>
        )}
      </ShelvesTemplate>
    );
  } // render
} // Shelves

export default Shelves;
