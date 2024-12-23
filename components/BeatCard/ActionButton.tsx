import React from 'react';
import styles from '@/components/BeatCard/ActionButton.module.css';
import {ActionButtonProps} from '@/components/BeatCard/types';

export const ActionButton: React.FC<ActionButtonProps> = ({
                                                              icon,
                                                              label,
                                                              variant = 'primary',
                                                              onClick
                                                          }) => {
    return (
        <button
            className={styles[variant]}
            onClick={onClick}
            aria-label={label || 'Action button'}
        >
            <img src={icon} alt="" className={icon}/>
            {label && <span>{label}</span>}
        </button>
    );
};