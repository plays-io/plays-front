import React from 'react';
import styles from './Categories.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Categories = ({ items, width, setDifficulty }) => {
    const listItems = items.map((element, index) => (
        <li className={cx('list-group-item list-group-item-action')} 
            key={index}
            onClick={() => setDifficulty(element)}
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