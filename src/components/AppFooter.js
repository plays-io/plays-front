import React from "react";
import styles from 'styles/base.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Footer = () => (
    <footer className={cx('footer')}>
        <section className={'banner3'}>
            <img src={'https://tpc.googlesyndication.com/simgad/9608205490583257045?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qm_b66V1bGGY57vXKVqDepUwSJX2w'}/>
        </section>
        <span>
            Last Updated: 2024-05-13
        </span>
    </footer>
)

export default Footer;