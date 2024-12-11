import React from 'react';
import styles from './RibbonControls.module.css';
import {RibbonImage} from '@/components/FeedControls/RibbonImage';

const ribbonImages = [
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f0fbf5d479a2d45e3439e9c24bc6d59533441432cb479422339cc8a597b92fcc?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c",
        alt: "Ribbon control left"
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/880c6053c3167d248b1985cc4baee5867346d2a489a840116a42d824a7119a38?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c",
        alt: "",
        className: styles.separator
    },
    {
        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d7347f779bc1de84f7ad264816065fa1140285063f741e6ae713934ef91c92e?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c",
        alt: "Ribbon control right"
    }
];

export const RibbonControls: React.FC = () => {
    return (
        <div className={styles.ribbonControls}>
            {ribbonImages.map((image, index) => (
                <RibbonImage
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={image.className || styles.controlImage}
                />
            ))}
        </div>

    );
};