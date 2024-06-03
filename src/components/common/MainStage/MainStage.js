import React from 'react';
import styles from './MainStage.scss';
import classNames from 'classnames/bind';
import Categories from "components/common/MainStage/Categories/Categories";

const cx = classNames.bind(styles);

const MainStage = ({ children, categories, description }) => {

    return (
        <div className={cx('main-stage-container')}>
            <Categories items={categories}/>
            <div className={cx('main-stage')}>
                {children}
            </div>
        </div>
    )
}

export default MainStage;