"use client"
import React, {useContext, useEffect, useRef} from 'react';
import styles from './RibbonControls.module.css';
import {FeedIsPlayingContext} from "@/context/FeedIsPlayingContext";
import {FaBackwardFast} from "react-icons/fa6";
import {FaPause, FaPlay} from "react-icons/fa";

export function RibbonControls(): React.JSX.Element {
    const player = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        player.current = document.getElementById("feedAudio") as HTMLAudioElement;
    }, []);
    const {isPlaying, setIsPlaying} = useContext(FeedIsPlayingContext);
    return (
        <div className={styles.ribbonControls}>
            <FaBackwardFast className={styles.controlImage} onClick={() => {
                if (isPlaying) player.current.pause();
                player.current.currentTime = 0;
                player.current.play().catch((e) => console.log(e));
            }
            }/>
            {isPlaying ? (<FaPause className={styles.controlImage}
                                   onClick={() => {
                                       player.current.pause();
                                       console.log("paused");
                                       setIsPlaying(!isPlaying);
                                   }}/>) :
                <FaPlay className={styles.controlImage}
                        onClick={async () => {
                            await player.current.play().catch((e) => console.log(e));
                            console.log("playing");
                            setIsPlaying(!isPlaying);
                        }}/>}
        </div>

    );
};
