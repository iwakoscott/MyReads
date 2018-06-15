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
      <Header>📚 MyReads</Header>
    </HeaderTemplate>
    <Shelves />
    <AddBookWrapper>
      <Link
        to="/search"
        style={{
          verticalAlign: "middle",
          textAlign: "center",
          textDecoration: "none",
          margin: "0px",
          padding: "0px"
        }}
      >
        ➕
      </Link>
    </AddBookWrapper>
  </Grid>
);
