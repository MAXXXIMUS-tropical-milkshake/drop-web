import React from 'react';

export const RibbonImage = ({src, alt, className, onClick}): React.JSX.Element => {
    return (
        <img
            loading="lazy"
            src={src}
            alt={alt}
            className={className}
            onClick={onClick}
        />
    );
};