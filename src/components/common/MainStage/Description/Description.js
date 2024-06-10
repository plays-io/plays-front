import React from 'react';
import styles from './Description.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Description = ({ children, items, counter }) => {

    return (
        <>
        <div className={cx('description-container')}>
            {children}
            {counter}
        </div>
        </>
    )
}

export default Description;