import { gql } from "@apollo/client";

export const LIST_CELLS = gql`
  query ListCells {
    listCells {
      id
      row
      col
      isActive
    }
  }
`;

export const TOGGLE_CELL = gql`
  mutation ToggleCell($row: Int!, $col: Int!) {
    toggleCell(row: $row, col: $col) {
      id
      row
      col
      isActive
    }
  }
`;
