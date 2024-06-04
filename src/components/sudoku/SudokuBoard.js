import React, {useEffect, useState} from "react";
import Sudoku from "logics/Sudoku";
import styles from './SudokuBoard.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const getNewBoard = (difficulty) => {
    const sudokuString = Sudoku.generate(difficulty);
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



const SudokuBoardItem = ({number, onClick, state}) => {
    return (
        <div
            className={`sudoku-grid ${number === '.' ? 'mutable' : 'immutable'}`}
            onClick={onClick}
            style={state ? { opacity:1 } : { opacity:0.75 }}
        >
            {number !== '.' ? number : ''}
        </div>
    )
}

const SudokuBoard = ({ selectedDifficulty }) => {
    const [focused, setFocused] = useState([]);
    const [board, setBoard] = useState([]);

    useEffect(() => {
        setBoard(getNewBoard(selectedDifficulty));
    }, [selectedDifficulty])

    return (
        selectedDifficulty !== null ? (
            <div className={cx('d-flex justify-content-center sudoku-container')}>
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="d-flex sudoku-wrap">
                        {row.map((number, colIndex) => {
                            let state;
                            if (focused.length == 0) {
                                state = true
                            } else {
                                if (focused[0] == rowIndex && focused[1] == colIndex) {
                                    state = true
                                } else {
                                    state = false
                                }
                            }
                            
                            return <SudokuBoardItem 
                                key={colIndex} 
                                number={number} 
                                onClick={() => setFocused([rowIndex, colIndex])}
                                state={state}
                            />
                        })}
                    </div>
                ))}
            </div>
        ) : (
            <div className={cx('d-flex justify-content-center sudoku-container')}>
                <div className={cx('sudoku-info')}>
                    Select your difficulty
                </div>
            </div>
        )
    )
}

export default SudokuBoard;