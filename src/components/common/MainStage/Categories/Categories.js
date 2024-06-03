import React from 'react';
import styles from './Categories.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const difficulty = ['Easy', 'Medium', 'Hard', 'Very hard', 'Impossible'];

const setDifficulty = (index) => {
    console.log(index);
}

const Categories = ({ children, width }) => {
    const listItems = difficulty.map((element, index) => (
        <li className={cx('list-group-item list-group-item-action')} 
            key={index}
            onClick={setDifficulty}
        >{element}</li>
    ))

    return (
        <div className={cx('category-container')}>
            <ul className={cx('list-group')} style={{width: width}}>
                {listItems}
            </ul>
        </div>
    )
}

export default Categories;