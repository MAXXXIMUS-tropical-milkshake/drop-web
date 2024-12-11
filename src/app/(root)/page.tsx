"use client";
import React, {useEffect, useState} from "react";
import {AudioRepository} from "@/repositories/AudioRepository";
import {Middleware} from "@/repositories/Middleware";
import {useSession} from "@/context/AuthContext";
import {Swiper, SwiperSlide} from "swiper/react";
import {BeatCard} from "@/components/BeatCard/BeatCard";

type Card = {
    index: number;
    id: string;
    name: string;
    artist: string;
};

export default function Page(): React.JSX.Element {
    const [it, setIt] = useState<Card[]>([]);
    const [player, setPlayer] = useState<HTMLAudioElement>(null);

    useEffect(() => {
        const element = document.getElementById("feedAudio") as HTMLAudioElement;
        if (element) {
            setPlayer(element);
        }
    }, []);
    const {isLoading, accessToken, refreshToken, refresh} = useSession();

    const [trackID, setTrackID] = React.useState<string | null>(null);
    const [curIndex, setCurIndex] = React.useState<number | null>(null);

    useEffect(() => {
        // if (!accessToken || !refreshToken) return;

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

        preload().catch((e) => console.error(e)).finally(() => console.log("preload finally"));
    }, [isLoading]);

    useEffect(() => {
        const play = async () => {
            if (!trackID) return;
            player?.pause();
            const url = `https://51.250.43.113:30020/v1/audio/${trackID}/stream`;
            if (player != null)
                player.src = url;
            player.play();
            console.log("playing");
        };

        play().catch((e) => console.error(e));
    }, [curIndex, isLoading]);

    const [isPaused, setIsPaused] = React.useState(true);
    useEffect(() => {
        if (isPaused) player?.pause();
        else player?.play();
    }, [isPaused])

    const onSnapToItem = async (index: number) => {
        // if (!accessToken || !refreshToken) {
        //     return;
        // }
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
            slidesPerView={1.4}
            spaceBetween={50}
            centeredSlides={true}
            direction={"vertical"}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>
            {it.length == 0 ?
                <SwiperSlide>
                    <BeatCard title={" "} author={" "} coverImage={" "} tags={[]} useShimmer={true}/>
                </SwiperSlide>
                : it.map((item, i) => (<SwiperSlide>
                    <BeatCard title={item.name} author={item.artist} coverImage={"path/to/img"} tags={[
                        {type: "primary", label: "hard", value: "coded"},
                        {type: "secondary", label: "im", value: "cooked"}
                    ]} useShimmer={false}/>
                </SwiperSlide>))}
        </Swiper>
    );
}