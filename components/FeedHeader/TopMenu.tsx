import React from 'react';
import {MenuButton} from '@/components/FeedHeader/MenuButton';
import styles from './TopMenu.module.css';

const menuItems = [
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/37b9f716977a20a2ed636b7bfdef6622c716f70b0a65ab58c1b77b8191da1c6d?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c",
        label: "пресеты"
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4591ee6726baff5a85da0b8043b297a3f541c0f0dd11f424562c4544e19ee5b4?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c",
        label: "поиск",
        isActive: false
    },
    {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1541845649a5208663eaca39e44ce28a885fd76bf9a286daef1f98ee6c565a22?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c",
        label: "фильтры"
    }
];

export const TopMenu: React.FC = () => {
    return (
        <nav className={styles.topMenu}>
            <div className={styles.topMenuWrapper}>
                {menuItems.map((item, index) => (
                    <MenuButton
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        isActive={item.isActive}
                    />
                ))}
            </div>
        </nav>
    );
};