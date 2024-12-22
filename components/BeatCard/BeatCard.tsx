'use client';
import React from 'react';
import styles from '@/components/BeatCard/BeatCard.module.css';
import {Tag} from '@/components/BeatCard/Tag';
import {ActionButton} from '@/components/BeatCard/ActionButton';
import {BeatCardProps} from '@/components/BeatCard/types';
import {useTelegram} from "@/context/telegram";


const downloadPrefix = "https://dl.dropboxusercontent.com/";

export const BeatCard: React.FC<BeatCardProps> = ({
                                                      title,
                                                      author,
                                                      audioUrl,
                                                      coverImage,
                                                      tags,
                                                      useShimmer
                                                  }) => {
    const {user, webApp} = useTelegram();
    const sendDataToBot = async () => {
        const botToken = process.env.BOT_TOKEN;
        const chatId = user.id;

        const response = fetch("https://api.telegram.org/bot" + botToken + "/sendAudio", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                performer: author,
                title: title,
                audio: audioUrl,
            }),
        }).then(res => res.json()).catch(console.log);
    };

    return (
        <div className={styles.container}>
            <img src={coverImage} className={styles.coverImage} alt={"beat image"}/>
            <div className={styles.content}>
                <div className={styles.info}>
                    <div className={styles.header}>
                        <div className={styles.titleWrapper}>
                            <span style={{
                                fontFamily: "Montserrat, serif",
                                fontOpticalSizing: "auto",
                                fontWeight: 700,
                                fontStyle: "normal",
                                fontSize: "1.1em"
                            }}>{title}</span>
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
                        onClick={() => {
                            sendDataToBot().catch((e) => console.log(e));
                        }}
                    />
                    <a href={"https://t.me/artorias_ocean"}>
                        <ActionButton
                            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7af4398b96be658bddd28db0060263fd87f6e51d42eacaa377df57ba528ad425?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c"
                            variant="secondary"
                        />
                    </a>
                    <ActionButton
                        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c9194ebe0a5592b23b79ba3512758c93d4a4f04db5cfd49eb0480d4e15ef8702?placeholderIfAbsent=true&apiKey=cd0c24fbc07b479a9c731c75ac6f5d6c"
                        variant="secondary"

                    />
                </div>
            </div>
        </div>
    )
        ;
};