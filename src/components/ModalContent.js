import React from "react";
import {
  ModalContentWrapper,
  ModalHeaderWrapper,
  ModalBodyWrapper,
  ModalHeader,
  ModalImage,
  ModalText,
  ModalImageWrapper
} from "../components/StyledComponents";

function ModalContent({ activeBook }) {
  return (
    <ModalContentWrapper>
      <ModalHeaderWrapper>
        <ModalHeader>{activeBook.title}</ModalHeader>
      </ModalHeaderWrapper>
      <ModalBodyWrapper>
        <ModalImageWrapper>
          <ModalImage
            src={
              typeof activeBook.imageLinks !== "undefined"
                ? activeBook.imageLinks.thumbnail
                : "https://use.fontawesome.com/releases/v5.0.13/svgs/solid/question.svg"
            }
          />
          <ModalText>
            {typeof activeBook.authors !== "undefined" && <h3>Authors:</h3>}
            <ul>
              {typeof activeBook.author !== undefined &&
                activeBook.authors.map(author => (
                  <li key={author}>{author}</li>
                ))}
            </ul>
          </ModalText>
        </ModalImageWrapper>
        <ModalText>
          <h3>Description:</h3>
          {activeBook.description}
        </ModalText>
      </ModalBodyWrapper>
    </ModalContentWrapper>
  );
} // ModalContent

export default ModalContent;
