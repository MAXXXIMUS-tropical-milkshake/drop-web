"use client";
import React, {useContext, useEffect, useState} from "react";
import TrackForm from "@/components/TrackForm/TrackForm";
import {AudioRepository} from "@/repositories/AudioRepository";
import {Middleware} from "@/repositories/Middleware";
import {useSession} from "@/context/AuthContext";
// import {useRouter} from "next/router";
import {Swiper, SwiperSlide} from "swiper/react";
import {FaTelegramPlane, FaPlay, FaShareAlt, FaPause} from "react-icons/fa";
import {IoMdDownload} from "react-icons/io";
import Image from "next/image";
import {BeatCard} from "@/components/BeatCard/BeatCard";

type Card = {
    index: number;
    id: string;
    name: string;
    artist: string;
};

function Item(it: number, {id, name, artist, image}: {
    id: string, name: string, artist: string, image: string;
}, isPaused: boolean, setIsPaused: (isPaused: boolean) => void): React.JSX.Element {

    return (
        <div
            style={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-end",
                flexDirection: "column",
                clipPath: `url(#squircleClip)`,
                alignSelf: "center",
                background: "#FF1158",
                height: "60vh",
                maxHeight: 1200,
                width: "80vw",
                maxWidth: 600,
                // boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}

        >

            {/* <div style={{ flex: 1, position: "relative" }}>
                <Image
                    src={image || "https://example.com/default-image.jpg"}
                    alt="Beat cover"
                    // layout="fill"
                    objectFit="cover"
                />
            </div> */}

            <div style={{visibility: "hidden", flex: 1}}></div>

            <button
                style={{...styles.pauseButton, margin: "auto", justifyContent: "center"}}
                onClick={() => setIsPaused(!isPaused)}
            >
                {isPaused ? <FaPlay size={27} color="#fff"/> : <FaPause size={27} color="#fff"/>}
            </button>

            <div style={{flex: 1, flexDirection: "column", display: "flex", justifyContent: "flex-end"}}>
                <div style={{margin: 20}}>
                    <div>
                        <span style={styles.trackTitle}>{name || "Untitled"}</span>
                    </div>
                    <div>
                        <span style={styles.artistName}>{artist || "Unknown Artist"}</span>
                    </div>
                </div>
                {/* <audio controls style={{alignSelf: "center"}}/> */}
                <div style={{...styles.footer, flexShrink: 0}}>
                    <button style={{...styles.iconButton, flex: 2, flexShrink: 0}}>
                        <IoMdDownload size={20} color="#fff"/>
                        скачать
                    </button>
                    <button style={{...styles.iconButton, flex: 1, flexShrink: 0}}>
                        <FaTelegramPlane size={20} color="#fff"/>
                    </button>
                    <button style={{...styles.iconButton, flex: 1, flexShrink: 0,}}>
                        <FaShareAlt size={20} color="#fff"/>
                    </button>
                </div>
            </div>

            <svg width="1" height="1" viewBox="0 0 1 1" style={{position: "absolute"}} fill="none"
                 xmlns="http://www.w3.org/2000/svg" display={"hidden"}>
                <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
                    <path d="M 0,0.5
                C 0,0  0,0  0.5,0
                  1,0  1,0  1,0.5
                  1,1  1,1  0.5,1
                  0,1  0,1  0,0.5"></path>
                </clipPath>
            </svg>
        </div>);
}

export default function Page(): React.JSX.Element {
    const [it, setIt] = useState<Card[]>([]);

    // const player = useAudioPlayer("");
    // const router = useRouter();
    const {isLoading, accessToken, refreshToken, refresh} = useSession();

    const [trackID, setTrackID] = React.useState<string | null>(null);
    const [curIndex, setCurIndex] = React.useState<number | null>(null);

    useEffect(() => {
        if (!accessToken || !refreshToken) return;

        const preload = async () => {
            const card1 = await Middleware.withRefreshToken(
                {
                    accessToken: accessToken,
                    refresh: refresh,
                    refreshToken: refreshToken,
                },
                AudioRepository.feed,
            );
            const card2 = await Middleware.withRefreshToken(
                {
                    accessToken: accessToken,
                    refresh: refresh,
                    refreshToken: refreshToken,
                },
                AudioRepository.feed,
            );

            if (card1.success && card2.success) {
                setTrackID(card1.data.id);
                setIsPaused(false);
                setCurIndex(0);
                setIt([{index: 0, id: card1.data.id, name: card1.data.name, artist: card1.data.beatmaker.pseudonym},
                    {index: 1, id: card2.data.id, name: card2.data.name, artist: card2.data.beatmaker.pseudonym}]);
                return;
            }

            setCurIndex(null);
            // router.push("/(auth)/login");
        };

        preload().catch((e) => console.error(e));
    }, [isLoading]);

    useEffect(() => {
        const play = async () => {
            if (!trackID) return;
            // player?.pause();
            const url = `http://localhost:8083/v1/audio/${trackID}/stream`;
            // player?.replace({ uri: url });
            // player?.play();
            console.log("playing");
        };

        play().catch((e) => console.error(e));
    }, [curIndex, isLoading]);

    const [isPaused, setIsPaused] = React.useState(true);
    useEffect(() => {
        // if (isPaused) player?.pause();
        // else player?.play();
    }, [isPaused])

    const onSnapToItem = async (index: number) => {
        if (!accessToken || !refreshToken) {
            return;
        }

        setTrackID(it[index].id);
        setCurIndex(index);
        setIsPaused(false);
        if (index === it.length - 1) {
            const data = await Middleware.withRefreshToken(
                {
                    accessToken: accessToken,
                    refresh: refresh,
                    refreshToken: refreshToken,
                },
                AudioRepository.feed,
            );
            if (data.success)
                setIt((prev) => [...prev, {
                    index: it.length,
                    id: data.data.id,
                    name: data.data.name,
                    artist: data.data.beatmaker.pseudonym
                }]);
            else { // @ts-ignore
                if (data.data.status === 401) {
                    setCurIndex(null);
                    // router.push("/(auth)/login");
                } else { // @ts-ignore
                    alert(data.data.message);
                }
            }
        }
    };

    return (
        <Swiper
            style={{
                display: "flex",
                flex: 1,
                height: "100%",
                flexDirection: "column",
                alignItems: "center"
            }}
            pagination={true}
            slidesPerView={1.6}
            spaceBetween={50}
            centeredSlides={true}
            direction={"vertical"}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>

            <SwiperSlide>
                <BeatCard title={"lolkek"} author={"cheburek"} coverImage={"path/to/img"} tags={[]}/>
            </SwiperSlide>
            {/*<SwiperSlide>{Item(1, {*/}
            {/*    id: "3",*/}
            {/*    name: "lolkek",*/}
            {/*    artist: "cheburek",*/}
            {/*    image: "https://example.com/path-to-image.jpg",*/}
            {/*}, isPaused, setIsPaused)}</SwiperSlide>*/}
            {/*<SwiperSlide>{Item(1, {*/}
            {/*    id: "4",*/}
            {/*    name: "lolkek",*/}
            {/*    artist: "cheburek",*/}
            {/*    image: "https://example.com/path-to-image.jpg",*/}
            {/*}, isPaused, setIsPaused)}</SwiperSlide>*/}
            {/*<SwiperSlide>{Item(1, {*/}
            {/*    id: "5",*/}
            {/*    name: "lolkek",*/}
            {/*    artist: "cheburek",*/}
            {/*    image: "https://example.com/path-to-image.jpg",*/}
            {/*}, isPaused, setIsPaused)}</SwiperSlide>*/}
        </Swiper>
    );
}
const styles = {
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        margin: 5,
        borderRadius: 5,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    trackTitle: {
        fontSize: 30,
        margin: 10,
        fontWeight: "700",
        color: "#000",
    },
    artistName: {
        fontSize: 25,
        margin: 10,
        color: "#555",
        fontWeight: "500",
        marginTop: 5,
    },
    pauseButton: {
        padding: 10,
        width: "5vmax",
        height: "5vmax",
        borderRadius: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        border: "none",
    },
    footer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        width: "80%",
        marginTop: 20,
        marginBottom: 20,
    },
    iconButton: {
        display: "flex",
        color: "white",
        backgroundColor: "#1a1a1a",
        // borderRadius: "100%",
        minWidth: 40,
        minHeight: 40,
        padding: 0,
        margin: '8px',
        // width: 45,
        // height: 50,
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        border: "none",
    },
};
