import React, { useState, useEffect } from "react";
import generateCells from "./helpers/generateCells";
import { type Cell } from "./types";
import { defaultValue } from "./constants";
import { useQuery, useMutation } from "@apollo/client";
import { LIST_CELLS, TOGGLE_CELL } from "./queries";

const App: React.FC = () => {
  const { loading, error, data } = useQuery(LIST_CELLS);
  const [toggleCell] = useMutation(TOGGLE_CELL);

  const [highlightedCell, setHighlightedCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const [cells, setCells] = useState<Cell[][]>([]);

  // Effect to sync the cells with the data from the server.
  useEffect(() => {
    if (data) {
      const updatedCells = generateCells(
        defaultValue.rows,
        defaultValue.columns
      ).map((rowCells) =>
        rowCells.map((cell) => {
          const matchedCell = data.listCells.find(
            (c: Cell) => c.row === cell.row && c.col === cell.col
          );
          return matchedCell
            ? { ...cell, isActive: matchedCell.isActive }
            : cell;
        })
      );
      setCells(updatedCells);
    }
  }, [data]);

  /**
   * Function to handle hover event on a cell.
   * Allow highlighting of the row and column of the cell.
   */
  const handleHover = (row: number, col: number) => {
    setHighlightedCell({ row, col });
  };

  /**
   * Function to handle click event on a cell.
   * Allow toggling of the cell.
   */
  const handleClick = async (row: number, col: number) => {
    setCells((prevCells) =>
      prevCells.map((rowCells) =>
        rowCells.map((cell) =>
          cell.row === row && cell.col === col
            ? { ...cell, isActive: !cell.isActive }
            : cell
        )
      )
    );

    await toggleCell({ variables: { row, col } }); // Call the toggleCell mutation.

    handleClearHighlight(); // Clear the rest of the highlighted cells.
  };

  /**
   * Function to clear the highlighted cell.
   * Allow clearing of the row and column of the cell when mouse leaves.
   */
  const handleClearHighlight = () => {
    setHighlightedCell(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading cells</p>;

  return (
    <>
      <header>
        <h1>Grid</h1>
        <p>
          Move the mouse over the cell and select/unselect the one you want.
        </p>
      </header>
      <section>
        <div className="grid">
          {cells.map((rowCells, rowIndex) => (
            <div key={rowIndex} className="row">
              {rowCells.map((cell, colIndex) => {
                // Check if the cell is highlighted.
                const isHighlighted =
                  highlightedCell &&
                  (highlightedCell.row === cell.row ||
                    highlightedCell.col === cell.col);

                // Check if the cell is directly hovered.
                const isDirectlyHovered =
                  highlightedCell &&
                  highlightedCell.row === cell.row &&
                  highlightedCell.col === cell.col;

                // Set the highlight style based on the hover state.
                const highlightStyle = isDirectlyHovered
                  ? "rgba(255, 165, 0, 1)"
                  : isHighlighted
                  ? "rgba(255, 165, 0, 0.5)"
                  : "transparent";

                // Set the cell style based on the toggle state.
                const cellStyle = cell.isActive
                  ? "rgba(255, 165, 0, 1)"
                  : highlightStyle;

                return (
                  <div
                    key={colIndex}
                    className="cell"
                    style={{
                      backgroundColor: cellStyle,
                    }}
                    onClick={() => handleClick(cell.row, cell.col)}
                    onMouseOver={() => handleHover(cell.row, cell.col)}
                    onMouseLeave={handleClearHighlight}
                  >
                    {cell.row}, {cell.col}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
