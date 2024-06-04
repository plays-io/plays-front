import React from 'react';
import styles from './WideButton.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const WideButton = ({ children, to, onClick, disabled, theme = 'default', src, width }) => {
    const Element = (to && !disabled) ? Link : Div;

    return (
        <Element
            to={to}
            style={{ width: width }}
            className={cx('buttonicon', theme, {disabled})}
            onClick={disabled ? () => null : onClick}>
            <span>
                {src ? <img src={src} alt="" /> : null}
                {children}
            </span>
        </Element>
    )
}

export default WideButton;