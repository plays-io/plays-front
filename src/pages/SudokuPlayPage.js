import React from "react";
import Sudoku from "logics/Sudoku";
import Contents from "components/common/Contents/Contents";
import MainStage from "components/common/MainStage/MainStage";
import SudokuBoard from "components/sudoku/SudokuBoard";

const getNewBoard = () => {
    return Sudoku.generate('hard');
}

const getCurrentBoard = () => {
    const grids = document.getElementsByClassName('sudoku-grid');
    let board = '';
    [...grids].forEach((grid) => {
        board += grid.innerHTML === '' ? '.' : grid.innerHTML;
    })
    return board;
}

const SudokuPlayPage = () => {
    return (
        <Contents headerVisible={true}>
            <MainStage>
                <SudokuBoard/>
            </MainStage>
        </Contents>
    )
}

export default SudokuPlayPage;