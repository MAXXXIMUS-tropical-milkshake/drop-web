import React from 'react';
import styles from './Tag.module.css';
import {TagProps} from './types';

export const Tag: React.FC<TagProps> = ({label, value, type = 'primary'}) => {
    const values = Array.isArray(value) ? value : [value];

    return (
        <div className={styles.tag}>
            <div className={styles.label}>{label}</div>
            <div className={styles.value}>
                {values.map((v, index) => (
                    <div key={index} className={styles.valueChip}>
                        {v}
                    </div>
                ))}
            </div>
        </div>
    );
};