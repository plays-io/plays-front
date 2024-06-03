import React from 'react';
import styles from './Icon.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Icon = ({ theme, to, src }) => {
    return (
        <Link to={to} className={cx('smallicon', theme)}>
            {src ? <img src={src} alt="" /> : null}
        </Link>
    )
}

export default Icon;