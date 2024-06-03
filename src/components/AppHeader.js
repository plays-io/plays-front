import React from "react";
import classNames from "classnames/bind";
import styles from "styles/base.scss"

const cx = classNames.bind(styles);

const AppHeader = () => {
    return (
        <header className={cx('header')}>
            <div className={cx('logo-wrapper')}>
                <div className={cx('logo')}></div>
                <div className={cx('welcome')}>안녕하세요</div>
            </div>
        </header>
    )
}

export default AppHeader;