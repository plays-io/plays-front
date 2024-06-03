import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GameListPage, SudokuPlayPage, NotFoundPage } from 'pages';

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<GameListPage/>}/>
            <Route path="/sudoku" element={<SudokuPlayPage/>}/>
            <Route element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default App;