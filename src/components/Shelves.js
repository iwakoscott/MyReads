import React, { Component } from "react";
import { ShelvesTemplate } from "./StyledComponents";
import { update, getAll } from "../utils/booksAPI";
import { pack } from "../utils/tools";
import Shelf from "./Shelf";
import Loading from "./Loading";

const initialState = {
  currentlyReading: [],
  wantToRead: [],
  read: [],
  isFetching: false
};

class Shelves extends Component {
  state = initialState;

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
    const { currentlyReading, wantToRead, read, isFetching } = this.state;
    return isFetching ? (
      <Loading />
    ) : (
      <ShelvesTemplate>
        <Shelf
          updateBookStatus={this.updateBookStatus}
          title="Currently Reading"
          books={currentlyReading}
        />
        <Shelf
          updateBookStatus={this.updateBookStatus}
          title="Want to Read"
          books={wantToRead}
        />
        <Shelf
          updateBookStatus={this.updateBookStatus}
          title="Read"
          books={read}
        />
      </ShelvesTemplate>
    );
  } // render
} // Shelves

export default Shelves;
