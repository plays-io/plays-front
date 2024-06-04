import React from 'react';
import styles from './FlatButton.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Flatbutton = ({ children, to, onClick, disabled, theme = 'default', src }) => {

    return (
        <button
            className={cx('flatbutton', theme, {disabled})}
            onClick={disabled ? () => null : onClick}>
            {children}
        </button>
    )
}

export default Flatbutton;