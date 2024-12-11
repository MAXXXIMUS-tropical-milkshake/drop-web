import React from 'react';
import styles from '@/components/BeatCard/BeatCard.module.css';
import {Tag} from '@/components/BeatCard/Tag';
import {ActionButton} from '@/components/BeatCard/ActionButton';
import {BeatCardProps} from '@/components/BeatCard/types';

export const BeatCard: React.FC<BeatCardProps> = ({
                                                      title,
                                                      author,
                                                      coverImage,
                                                      tags,
                                                      useShimmer = false
                                                  }) => {
    return (
        <div className={styles.container}>
            {!useShimmer ? <img src={coverImage} className={styles.coverImage}/> : null}
            <div className={styles.content}>
                <div className={styles.info || useShimmer ? styles.shimmer : null}>
                    <div className={styles.header}>
                        <div className={styles.titleWrapper}>
                            <span>{title}</span>
                        </div>
                        <div className={styles.author}>{author}</div>
                    </div>
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <Tag key={index} {...tag} />
                        ))}
                    </div>
                </div>
                <div className={styles.actions}>
                    <ActionButton
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8484a0e6fde298fd200da9715b16f19acefa12c9147b7716d232139d628a62fd?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c"
                        label="скачать"
                        variant="primary"
                    />
                    <ActionButton
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7af4398b96be658bddd28db0060263fd87f6e51d42eacaa377df57ba528ad425?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c"
                        variant="secondary"
                    />
                    <ActionButton
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c9194ebe0a5592b23b79ba3512758c93d4a4f04db5cfd49eb0480d4e15ef8702?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c"
                        variant="secondary"
                    />
                </div>
            </div>
        </div>
    );
};