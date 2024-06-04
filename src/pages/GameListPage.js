import React from "react";
import WideButton from "components/common/Buttons/WideButton/WideButton";
import Contents from "components/common/Contents/Contents";
import SudokuLogo from "assets/sudoku.png";
import NonogramLogo from "assets/nonogram.jpg";
import _2048Logo from "assets/2048.png";
import PipeLogo from "assets/pipe.png";
import ContinueLogo from "assets/continue.png";

const GameListPage = () => {
    return (
        <Contents headerVisible={false}>
            <div className={"d-flex"}>
                <WideButton to="/sudoku" src={SudokuLogo} width={237.5}>Sudoku</WideButton>
                <WideButton to="/nonogram" src={NonogramLogo} width={237.5}>Nonogram</WideButton>
                <WideButton to="/2048" src={_2048Logo} width={237.5}>2048</WideButton>
                <WideButton to="/pipe" src={PipeLogo} width={237.5}>Pipe</WideButton>
            </div>
            <div className={"d-flex"}>
                <WideButton src={ContinueLogo} width={237.5}></WideButton>
            </div>
        </Contents>
    )
}

export default GameListPage;