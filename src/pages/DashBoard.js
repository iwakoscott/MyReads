import React from "react";
import {
  Grid,
  Header,
  HeaderTemplate,
  AddBookWrapper
} from "../components/StyledComponents";
import Shelves from "../components/Shelves";
import { Link } from "react-router-dom";

export default () => (
  <Grid>
    <HeaderTemplate>
      <Header>
        <span role="img" aria-label="book stack">
          📚
        </span>{" "}
        MyReads
      </Header>
    </HeaderTemplate>
    <Shelves />
    <Link to="/search">
      <AddBookWrapper>
        <span role="img" aria-label="plus sign">
          ➕
        </span>
      </AddBookWrapper>
    </Link>
  </Grid>
);
