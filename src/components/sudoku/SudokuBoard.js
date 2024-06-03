import React from "react";
import Sudoku from "logics/Sudoku";
import styles from './SudokuBoard.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const getNewBoard = () => {
    const sudokuString = Sudoku.generate('hard');
    const sudokuArray = [];
    for (let i = 0; i < 9; i++) {
        sudokuArray.push(sudokuString.slice(i * 9, (i + 1) * 9).split(''));
    }
    return sudokuArray;
}

const getCurrentBoard = () => {
    const grids = document.getElementsByClassName('sudoku-grid');
    let board = '';
    [...grids].forEach((grid) => {
        board += grid.innerHTML === '' ? '.' : grid.innerHTML;
    })
    return board;
}

const SudokuBoard = () => {
    const board = getNewBoard();

    return (
        <div className={cx('d-flex justify-content-center sudoku-container')}>
            {board.map((row, rowIndex) => (
                <div key={rowIndex} className="d-flex sudoku-wrap">
                    {row.map((number, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className={`sudoku-grid ${number !== '.' ? 'immutable' : 'mutable'}`}
                        >
                            {number !== '.' ? number : ''}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default SudokuBoard;