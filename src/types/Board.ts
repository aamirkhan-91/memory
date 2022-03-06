export type GridSize = 4 | 6;

export type BoardType = 'numbers' | 'icons';

export type CellState = {
  value: number;
  revealed: boolean;
  viewing: boolean;
};

export type CellCoordinates = {
  row: number;
  column: number;
};

export type BoardSlice = {
  boardType: 'numbers' | 'icons';
  gridSize: GridSize;
  currentlyViewing: CellCoordinates[];
  grid: CellState[][] | null;
  setRevealCell: (coordinates: CellCoordinates) => void;
  setBoardType: (type: BoardType) => void;
  setGridSize: (size: GridSize) => void;
  hideViewing: () => void;
  initializeBoard: () => void;
  detectMatch: () => void;
};
