import { useStore } from '@src/store';
import { CellCoordinates } from '@src/types/Board';
import clsx from 'clsx';
import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { Cell } from './components';

const Board: FC = () => {
  const [revealedCells, setRevealedCells] = useState(0);

  const grid = useStore((state) => state.grid);
  const gridSize = useStore((state) => state.gridSize);
  const currentlyViewing = useStore((state) => state.currentlyViewing);
  const gameStarted = useStore((state) => state.gameStarted);
  const gameEnded = useStore((state) => state.gameEnded);

  const setRevealCell = useStore((state) => state.setRevealCell);
  const hideViewing = useStore((state) => state.hideViewing);
  const detectMatch = useStore((state) => state.detectMatch);
  const initializeBoard = useStore((state) => state.initializeBoard);
  const setGameEnded = useStore((state) => state.setGameEnded);
  const tickMoves = useStore((state) => state.tickMoves);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const totalCells = useMemo(() => {
    return gridSize * gridSize;
  }, [gridSize]);

  useEffect(() => {
    initializeBoard();
  }, [gameStarted, initializeBoard]);

  useEffect(() => {
    setRevealedCells(0);
  }, [gameEnded]);

  useEffect(() => {
    if (totalCells === revealedCells) {
      setGameEnded(true);
    }
  }, [revealedCells, totalCells, setGameEnded]);

  const revealCell = useCallback(
    (payload: CellCoordinates) => {
      if (grid === null) return;

      const { row, column } = payload;
      const cell = { ...grid[row][column] };

      if (!cell) return;
      if (cell.viewing || cell.revealed) return;

      if (currentlyViewing.length === 0) {
        setRevealCell(payload);
      } else if (currentlyViewing.length === 1) {
        tickMoves();

        const alreadyViewingCoordinates = currentlyViewing[0];
        const alreadyViewingCell =
          grid[alreadyViewingCoordinates.row][alreadyViewingCoordinates.column];

        if (cell.value === alreadyViewingCell.value) {
          setRevealCell(payload);
          detectMatch();
          setRevealedCells((prev) => prev + 2);
        } else {
          setRevealCell(payload);
          timeout.current = setTimeout(hideViewing, 1000);
        }
      } else if (currentlyViewing.length === 2) {
        if (timeout.current) {
          clearTimeout(timeout.current);
        }

        hideViewing();
        setRevealCell(payload);
      }
    },
    [grid, currentlyViewing, setRevealCell, tickMoves, detectMatch, hideViewing]
  );

  if (grid === null) {
    return null;
  }

  let classes =
    'grid gap-2 min-w-[327px] min-h-[327px] h-[327px] w-[327px] xs:w-[450px] xs:h-[450px] sm:h-[550px] sm:w-[550px] m-auto'.split(
      ' '
    );

  switch (gridSize) {
    case 4:
      classes = classes.concat('grid-cols-4 grid-rows-4');
      break;

    case 6:
      classes = classes.concat('grid-cols-6 grid-rows-6');
      break;
  }

  return (
    <div className={clsx(classes)}>
      {grid.map((row, rowIndex) =>
        row.map((cellState, columnIndex) => (
          <Cell
            {...cellState}
            key={`${rowIndex}_${columnIndex}`}
            onClick={() =>
              revealCell({
                row: rowIndex,
                column: columnIndex,
              })
            }
          />
        ))
      )}
    </div>
  );
};

export default Board;
