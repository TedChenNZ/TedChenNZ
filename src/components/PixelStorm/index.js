import React from 'react';
import storm from './storm';
import styles from './styles.module.scss';

export default class PixelStorm extends React.PureComponent {
    componentDidMount() {
        storm();
    }

    render() {
        return (
            <canvas id='pixel-storm' className={styles.storm} />
        )
    }
}
