import React from 'react';
import styles from './MainStage.scss';
import classNames from 'classnames/bind';
import Categories from "components/common/MainStage/Categories/Categories";
import Description from "components/common/MainStage/Description/Description";

const cx = classNames.bind(styles);

const MainStage = ({ children }) => {

    return (
        <div className={cx('main-stage-container')}>
            <Categories/>
            <div className={cx('main-stage')}>
                {children}
            </div>
            <Description width={475}/>
        </div>
    )
}

export default MainStage;