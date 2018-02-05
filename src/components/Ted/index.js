import React from 'react';
import styles from './styles.module.scss';

const Ted = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.ted}>
                <p className={styles.top}>I'm</p>
                <p className={styles.mid}>Ted</p>
                <p className={styles.bottom}>Chen</p>
            </div>
            <p className={styles.tag}>Coding is my thing<span className={styles.blinkText}>_</span></p>
        </div>
    );
};

export default Ted;