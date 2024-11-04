/**
 * Generate a 2D array of cells
 */
const generateCells = (rows: number, columns: number): Cell[][] => {
  return Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, col) => ({
      row,
      col,
      isActive: false,
    }))
  );
};

export default generateCells;
