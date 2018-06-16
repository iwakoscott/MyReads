import styled, { keyframes } from "styled-components";

// Modal Components

export const ModalContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 80px;
  grid-row-gap: 20px;
  padding: 5px;
`;

export const ModalHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-family: "Roboto", sans-serif;
`;

export const ModalHeader = styled.h1`
  padding: 0;
  margin: 0;
`;

export const ModalBodyWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

export const ModalImageWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
`;

export const ModalImage = styled.img`
  display: grid;
  justify-self: center;
  align-self: center;
`;

export const ModalText = styled.div`
  font-family: "Roboto", sans-serif;
`;

export const Grid = styled.div`
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-rows: ${props => (props.isSearchBar ? "40px" : "min-content")} 1fr;
  grid-template-areas:
    "h"
    "s";
  height: 100%;
  grid-row-gap: 30px;
`;

export const HeaderTemplate = styled.div`
  grid-area: h;
  display: grid;
  justify-items: center;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 20px 0 0 0;
`;

export const SubHeader = styled.h2`
  margin: 0;
  padding: 0 0 0 20px;
`;

export const ShelvesTemplate = styled.div`
  grid-area: s;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  grid-row-gap: 30px;
`;

export const ShelfTemplate = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
`;

// Loading Component

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingTemplate = styled.h1`
  font-size: 90px;
  display: inline-block;
  animation: ${rotate360} 1s linear infinite;
  z-index: 10;
  display: grid;
  justify-self: center;
  align-self: center;
  margin: 0;
  padding: 0;
`;

// Select Template
export const Select = styled.select`
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 100px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none; /* remove default arrow */
  color: transparent;
  background: url("https://use.fontawesome.com/releases/v5.0.13/svgs/solid/caret-down.svg")
    no-repeat center; /* add custom arrow */
  background-color: #fed330;
  background-size: contain;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 100ms;
  margin: 5px;
  &:hover {
    width: 32px;
    height: 32px;
  }
`;

export const SelectWrapper = styled.div`
  justify-self: end;
  align-self: end;
  border: none;
  grid-row: 2 / -1;
  border-radius: 100px;
`;

// Search Bar Template

export const SearchBarWrapper = styled.div`
  grid-area: h;
  box-shadow: 0 4px 15px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
  display: grid;
  grid-template-columns: 80px 1fr;
`;

export const SearchBar = styled.input`
  border: none;
  background: transparent;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

// Books Template

export const BookTitle = styled.h5`
  padding: 0;
  margin: 0;
`;

export const BookCover = styled.div`
  display: grid;
  grid-template-rows: 128px min-content;
  ${props => `
    background-image: url(${props.bookCover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `};
`;

export const BookDescription = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-row-gap: 5px;
  margin-top: 5px;
  cursor: pointer;
`;

export const BookAuthor = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 15px;
  list-style-type: none;
  color: #95a5a6;
`;

export const BookWrapper = styled.div`
  display: grid;
  grid-template-columns: 128px;
  grid-auto-rows: minmax(min-content, max-content);
  justify-self: center;
`;

export const BookTemplate = styled.div`
  display: grid;
  grid-template-rows: 1fr min-content;
`;

export const BooksTemplate = styled.div`
  margin: 25px 10px;
  grid-gap: 10px;
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`;

export const HomeLinkWrapper = styled.div``;

export const AddBookWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background: #fed330;
  height: 50px;
  width: 50px;
  padding: 5px;
  font-size: 20px;
  border-radius: 100%;
  margin-right: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 200ms;
  display: grid;
  align-items: center;
  justify-items: center;

  &:hover {
    height: 55px;
    width: 55px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;
