import React, {useState} from "react";
import Contents from "components/common/Contents/Contents";
import MainStage from "components/common/MainStage/MainStage";
import SudokuBoard from "components/sudoku/SudokuBoard";
import Flatbutton from "components/common/Buttons/FlatButton/FlatButton";
import Counter from "components/common/Counter/Counter";

const difficulty = ['Easy', 'Medium', 'Hard', 'Very hard', 'Insane', 'Inhuman'];

const setSudokuNumber = (number) => {
    console.log(number)
}

const SudokuPlayPage = () => {
    const [selectedDifficulty, setSelectedDifficulty] = useState(null);

    const Description = () => {
        return (
            <>
                <div className={('button-row')}>
                    <Flatbutton onClick={() => setSudokuNumber(1)}>1</Flatbutton>
                    <Flatbutton onClick={() => setSudokuNumber(2)}>2</Flatbutton>
                    <Flatbutton onClick={() => setSudokuNumber(3)}>3</Flatbutton>
                </div>
                <div className={('button-row')}>
                    <Flatbutton onClick={() => setSudokuNumber(4)}>4</Flatbutton>
                    <Flatbutton onClick={() => setSudokuNumber(5)}>5</Flatbutton>
                    <Flatbutton onClick={() => setSudokuNumber(6)}>6</Flatbutton>
                </div>
                <div className={('button-row')}>
                    <Flatbutton onClick={() => setSudokuNumber(7)}>7</Flatbutton>
                    <Flatbutton onClick={() => setSudokuNumber(8)}>8</Flatbutton>
                    <Flatbutton onClick={() => setSudokuNumber(9)}>9</Flatbutton>
                </div>
            </>
        )
    }

    return (
        <Contents headerVisible={true}>
            <MainStage 
                width={520} 
                categories={difficulty}
                descChildren={<Description/>}
                setDifficulty={setSelectedDifficulty}
                counter={<Counter/>}
            >
                <SudokuBoard selectedDifficulty={selectedDifficulty}/>
            </MainStage>
        </Contents>
    )
}

export default SudokuPlayPage;