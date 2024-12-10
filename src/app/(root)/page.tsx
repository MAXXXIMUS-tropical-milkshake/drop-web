"use client";
import React, {useEffect, useState} from "react";
import {AudioRepository} from "@/repositories/AudioRepository";
import {Middleware} from "@/repositories/Middleware";
import {useSession} from "@/context/AuthContext";
import {Swiper, SwiperSlide} from "swiper/react";
import {FaTelegramPlane, FaPlay, FaShareAlt, FaPause} from "react-icons/fa";
import {BeatCard} from "@/components/BeatCard/BeatCard";

type Card = {
    index: number;
    id: string;
    name: string;
    artist: string;
};

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
            slidesPerView={1.4}
            spaceBetween={50}
            centeredSlides={true}
            direction={"vertical"}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}>

            <SwiperSlide>
                <BeatCard title={"lolkek"} author={"cheburek"} coverImage={"path/to/img"} tags={[
                    {type: "primary", label: "lol", value: "kek"},
                    {type: "secondary", label: "lol", value: "kek"}
                ]}/>
            </SwiperSlide>
            <SwiperSlide>
                <BeatCard title={"lolkek"} author={"cheburek"} coverImage={"path/to/img"} tags={[
                    {type: "primary", label: "lol", value: "kek"},
                    {type: "secondary", label: "lol", value: "kek"}
                ]}/>
            </SwiperSlide>
            <SwiperSlide>
                <BeatCard title={"lolkek"} author={"cheburek"} coverImage={"path/to/img"} tags={[
                    {type: "primary", label: "lol", value: "kek"},
                    {type: "secondary", label: "lol", value: "kek"}
                ]}/>
            </SwiperSlide>
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
