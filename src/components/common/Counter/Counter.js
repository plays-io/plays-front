import React, { useEffect, useState } from 'react';
import styles from './Counter.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const counterWrapper = (count) => {
    let minutes = parseInt(count / 60);
    let seconds = parseInt(count % 60);
    if (99 <= minutes) {
        minutes = 99;
        seconds = 59;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }
    return `${minutes}:${seconds}`;
}

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000)

        return () => clearInterval(id);
    }, [count])

    return (
        <div className={cx('counter-container')}>
            {counterWrapper(count)}
        </div>
    )
}

export default Counter;