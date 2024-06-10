import React from 'react';
import styles from './MainStage.scss';
import classNames from 'classnames/bind';
import Categories from "components/common/MainStage/Categories/Categories";
import Description from "components/common/MainStage/Description/Description";

const cx = classNames.bind(styles);

const MainStage = ({ width, children, categories, description, descChildren, setDifficulty, counter }) => {

    return (
        <div className={cx('main-stage-container')}>
            <Categories items={categories} setDifficulty={setDifficulty}/>
            <div className={cx('main-stage')} style={{width: width}}>
                {children}
            </div>
            <Description items={description} children={descChildren} counter={counter}/>
        </div>
    )
}

export default MainStage;