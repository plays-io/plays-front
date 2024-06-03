import React from "react";
import Header from "components/common/Header/Header"
import styles from './Contents.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Contents = ({children, headerVisible = true}) => {

    return (
        <div className={cx('container-fluid')}>
            <section className={cx('banner1')}>
                <img src={'https://tpc.googlesyndication.com/simgad/13792003667681961873?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qndgq_Mim3K3tc3Im0YtIwuRKAX4A'}/>
            </section>
            <main>
                {headerVisible && <Header/>}
                <section className={cx('main-contents')}>
                    {children}
                </section>
            </main>
            <section className={cx('banner2')}>
                <img src={'https://tpc.googlesyndication.com/simgad/13792003667681961873?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qndgq_Mim3K3tc3Im0YtIwuRKAX4A'}/>
            </section>
        </div>
    )
}

export default Contents;