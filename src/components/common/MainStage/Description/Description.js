import React from 'react';
import styles from './Description.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Description = ({ children, width }) => {

    return (
        <div className={cx('description-container')} style={{width: width}}>
            <div className={cx('info')}>
                
            </div>
        </div>
    )
}

export default Description;