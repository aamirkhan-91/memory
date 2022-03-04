import { BoardSlice, CellState } from '@src/types/Board';

import { StoreSlice } from '.';

// https://stackoverflow.com/a/12646864
const shuffleArray = (array: number[]): number[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

// const useStore = create<Store>((set) => ({
export const createBoardSlice: StoreSlice<BoardSlice> = (set) => ({
  grid: null,
  gridSize: 4,
  boardType: 'numbers',
  currentlyViewing: [],
  setRevealCell: ({ row, column }) =>
    set((state) => {
      const { currentlyViewing, grid } = state;

      if (grid === null) return state;
      const mutatedGrid = [...grid];

      const cell = mutatedGrid[row][column];

      if (!cell) return state;

      if (!cell.revealed && !cell.viewing) {
        cell.viewing = true;

        if (currentlyViewing.length === 0) {
          return {
            ...state,
            currentlyViewing: [
              {
                row,
                column,
              },
            ],
            grid: mutatedGrid,
          };
        } else if (currentlyViewing.length === 1) {
          return {
            ...state,
            currentlyViewing: [
              ...currentlyViewing,
              {
                row,
                column,
              },
            ],
            grid: mutatedGrid,
          };
        }
      }
    }),
  initializeBoard: () =>
    set((state) => {
      const { gridSize } = state;

      const totalCells = Math.pow(gridSize, 2);
      const maxValue = totalCells / 2;

      let values = [];
      for (let i = 1; i <= maxValue; i += 1) {
        values.push(i);
        values.push(i);
      }

      values = shuffleArray(values);

      const grid: CellState[][] = [];

      for (let i = 0; i < gridSize; i += 1) {
        grid[i] = [];
      }

      let k = values.length - 1;
      for (let i = 0; i < gridSize; i += 1) {
        for (let j = 0; j < gridSize; j += 1) {
          grid[i][j] = {
            revealed: false,
            viewing: false,
            value: values[k],
          };

          k--;
        }
      }
      return {
        ...state,
        grid,
      };
    }),
  detectMatch: () =>
    set((state) => {
      const { grid, currentlyViewing } = state;

      if (grid === null) return state;

      const mutatedGrid = [...grid];
      const [{ row: row1, column: column1 }, { row: row2, column: column2 }] =
        currentlyViewing;

      mutatedGrid[row1][column1].viewing = false;
      mutatedGrid[row1][column1].revealed = true;

      mutatedGrid[row2][column2].viewing = false;
      mutatedGrid[row2][column2].revealed = true;

      return {
        ...state,
        grid: mutatedGrid,
        currentlyViewing: [],
      };
    }),
  hideViewing: () =>
    set((state) => {
      const { currentlyViewing, grid } = state;

      if (grid === null) {
        return state;
      }

      const mutatedGrid = [...grid];
      const [cell1Coordinates, cell2Coordinates] = currentlyViewing;

      const cell1: CellState =
        mutatedGrid[cell1Coordinates.row][cell1Coordinates.column];

      cell1.viewing = false;

      const cell2: CellState =
        mutatedGrid[cell2Coordinates.row][cell2Coordinates.column];

      cell2.viewing = false;

      return {
        ...state,
        currentlyViewing: [],
        grid: mutatedGrid,
      };
    }),
  setBoardType: (boardType) =>
    set((state) => {
      return {
        ...state,
        boardType,
      };
    }),
  setGridSize: (gridSize) =>
    set((state) => {
      return {
        ...state,
        gridSize,
      };
    }),
});
