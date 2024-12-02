"use client";
import React, {useContext, useEffect, useState} from "react";
import TrackForm from "@/components/TrackForm/TrackForm";
import {AudioRepository} from "@/repositories/AudioRepository";
import {Middleware} from "@/repositories/Middleware";
import {useSession} from "@/context/AuthContext";
import {useRouter} from "next/router";
import {Swiper, SwiperSlide} from "swiper/react";

function Item(it: number, {id}: {
    id: string
}, isPaused: boolean, setIsPaused: (isPaused: boolean) => void): React.JSX.Element {

    return (
        <div
            style={{
                display: "flex",
                flex: 1,
                height: "100%",
                width: "100%",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    clipPath: `url(#squircleClip)`,
                    alignSelf: "center",
                    background:
                        "linear-gradient( 135deg, #9b26cf 10%, #32CCBC 100%)",
                    height: "50vh",
                    width: "40vw"
                }}
            >
                <TrackForm form={{id: id}} setForm={() => {
                }}></TrackForm>
                <button
                    style={{
                        backgroundColor: "#007BFF",
                        padding: 10,
                        margin: 5,
                        borderRadius: 5,
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onClick={() => {
                        if (isPaused) setIsPaused(false);
                        else setIsPaused(true);
                    }}
                >
                    {it.toString()}
                </button>
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

type Card = {
    index: number;
    id: string;
    name: string;
    artist: string;
};

export default function Page(): React.JSX.Element {
    const [it, setIt] = useState<Card[]>([]);

    // const ref = React.useRef<ICarouselInstance>(null);
    // const animationStyle = React.useCallback((value: number) => {
    //     "worklet";
    //     const translateY = interpolate(value, [-1, 0, 1], [-sh * 1.1, 0, sh * 1.1]);
    //     const scale = interpolate(value, [-1, 0, 1], [0.93, 1.07, 0.93]);
    //     const opacity = interpolate(value, [-0.75, 0, 1], [0.5, 1, 0.5]);
    //     return {
    //         transform: [{ translateY }, { scale }],
    //         opacity,
    //     };
    // }, []);

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
            else if (data.data.status === 401) {
                setCurIndex(null);
                // router.push("/(auth)/login");
            } else
                alert(data.data.message);
        }
    };

    return (
        <Swiper
            style={{
                display: "flex",
                flex: 1,
                height: "100%",
                flexDirection: "column",
            }}
            pagination={true}
            slidesPerView={1.6}
            spaceBetween={50}
            centeredSlides={true}
            direction={"vertical"}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            <SwiperSlide>{Item(1, {id: "1"}, isPaused, setIsPaused)}</SwiperSlide>
            <SwiperSlide>{Item(1, {id: "2"}, isPaused, setIsPaused)}</SwiperSlide>
            <SwiperSlide>{Item(1, {id: "3"}, isPaused, setIsPaused)}</SwiperSlide>
            <SwiperSlide>{Item(1, {id: "4"}, isPaused, setIsPaused)}</SwiperSlide>
            <SwiperSlide>{Item(1, {id: "5"}, isPaused, setIsPaused)}</SwiperSlide>

        </Swiper>
    );
}