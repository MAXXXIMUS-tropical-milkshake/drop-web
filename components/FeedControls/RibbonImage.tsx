import React from 'react';
import styles from './RibbonControls.module.css';
import {ImageProps} from './types';

export const RibbonImage: React.FC<ImageProps> = ({src, alt, className}) => {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={className}
        />
    );
};