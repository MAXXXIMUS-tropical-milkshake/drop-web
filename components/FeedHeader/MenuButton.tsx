import React from 'react';
import styles from './TopMenu.module.css';
import {MenuButtonProps} from "@/components/FeedHeader/types";

export const MenuButton: React.FC<MenuButtonProps> = ({icon, label, isActive = true}) => {
    return (
        <div
            className={isActive ? styles.menuButton : styles.menuButtonInactive}
            role="button"
            tabIndex={0}
        >
            <img
                loading="lazy"
                src={icon}
                className={styles.menuIcon}
                alt=""
            />
            <div className={styles.menuLabel}>{label}</div>
        </div>
    );
};