import styled, { keyframes } from "styled-components";

export const Grid = styled.div`
  font-family: "Roboto", sans-serif;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    "h"
    "s";
  height: 100%;
  grid-row-gap: 30px;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23d7d2df' fill-opacity='0.34'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

export const HeaderTemplate = styled.div`
  grid-area: h;
  display: grid;
  justify-items: center;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
`;

export const SubHeader = styled.h2`
  margin: 0;
  padding: 0;
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

export const AddBookWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background: #fed330;
  height: 50px;
  width: 50px;
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 100%;
  margin-right: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: all 200ms;

  &:hover {
    height: 55px;
    width: 55px;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.2);
  }
`;
