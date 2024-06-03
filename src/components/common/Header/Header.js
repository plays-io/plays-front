import React from "react";
import Icon from "components/common/Icon/Icon"
import styles from './Header.scss';
import classNames from 'classnames/bind';
import Home from "assets/home.jpg";
import LeftArrow from "assets/left_arrow.png";

const cx = classNames.bind(styles);

const Header = () => {
    return (
        <div className={cx('header-items')}>
            <Icon to="/" src={LeftArrow}></Icon>
            <Icon theme="expand" to="/" src={Home}></Icon>
        </div>
    )
}

export default Header;