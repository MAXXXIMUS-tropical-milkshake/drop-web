"use client"
import React, {useContext, useEffect, useState} from "react";
import {BeatCard} from "@/components/BeatCard/BeatCard";
import {FeedIsPlayingContext} from "@/context/FeedIsPlayingContext";
import {Swiper, SwiperSlide} from "swiper/react";
import {TagProps} from "@/components/BeatCard/types";

type Card = {
    index: number;
    id: string;
    name: string;
    artist: string;
    audioUrl: string;
    imgUrl: string;
    tags: TagProps[];
};
type PredefCard = {
    it: number;
    audioUrl: string;
    imgUrl: string;
    tags: TagProps[];
}
const downloadPrefix = "https://dl.dropboxusercontent.com/";
export default function Page(): React.JSX.Element {

    // @ts-ignore
    const predefItems: PredefCard[] = [
        {
            it: 0,
            audioUrl: "scl/fi/cy77j3p99tfzlktjugpp8/1.mp3?rlkey=j5mz0c3vigrr5ap05vvcgxe0m&st=zdvl9iq1&dl=0",
            imgUrl: "https://i.ibb.co/vvnsP3b/ey-Jid-WNr-ZXQi-Oi-Jid-HMt-Y29ud-GVud-CIs-Imtle-SI6-In-Vz-ZXJz-L3-Byb2-Qv-Mj-A2-MDQy-NC9pb-WFn-ZS9-K.webp",
            tags: [
                {type: "primary", label: "темп", value: "128"},
                {type: "secondary", label: "жанр", value: "rap"},
                {type: "secondary", label: "тональность", value: "major"},
                {type: "secondary", label: "настроение", value: "весёлое"}
            ]
        },
        {
            it: 1,
            audioUrl: "scl/fi/zcnbe44wsn1qf3mhude3e/2.mp3?rlkey=w2g1df3xuwekmdufpk5s5r1my&st=dgy1ft59&dl=0",
            imgUrl: "https://i.ibb.co/TBW39K8/ey-Jid-WNr-ZXQi-Oi-Jwcm9k-LWJ0cy10cm-Fjay-Is-Imtle-SI6-In-Byb2-Qvd-HJh-Y2sv-YXJ0d29yay9-USz-Ey-Nj-Iy.webp",
            tags: [
                {type: "primary", label: "темп", value: "129"},
                {type: "secondary", label: "жанр", value: "hip-hop"},
                {type: "secondary", label: "тональность", value: "minor"},
                {type: "secondary", label: "настроение", value: "грустное"}
            ]
        },
        {
            it: 2,
            audioUrl: "scl/fi/hm15xso7otgbu5ejuud99/3.mp3?rlkey=uzehc72rr2fph9cfsrsqx55et&st=e7gb9kha&dl=0",
            imgUrl: "https://i.ibb.co/LPbMcfw/ey-Jid-WNr-ZXQi-Oi-Jwcm9k-LWJ0cy10cm-Fjay-Is-Imtle-SI6-In-Byb2-Qvd-HJh-Y2sv-YXJ0d29yay9-USz-Ex-Mz-U2.webp",
            tags: [
                {type: "primary", label: "темп", value: "130"},
                {type: "secondary", label: "жанр", value: "pop"},
                {type: "secondary", label: "тональность", value: "major"},
                {type: "secondary", label: "настроение", value: "весёлое"}
            ]
        },
        {
            it: 3,
            audioUrl: "scl/fi/dx9stdqleawve8rz4o59q/4.mp3?rlkey=d4sdzgmc07fvfqfrpctgx69fq&st=1s75uz2w&dl=0",
            imgUrl: "https://i.ibb.co/2vMqNQP/ey-Jid-WNr-ZXQi-Oi-Jwcm9k-LWJ0cy10cm-Fjay-Is-Imtle-SI6-In-Byb2-Qvd-HJh-Y2sv-YXJ0d29yay9-USz-E2-Mj-Ix.webp",
            tags: [
                {type: "primary", label: "темп", value: "131"},
                {type: "secondary", label: "жанр", value: "jazz"},
                {type: "secondary", label: "тональность", value: "major"},
                {type: "secondary", label: "настроение", value: "весёлое"}
            ]
        },
        {
            it: 4,
            audioUrl: "scl/fi/s72815jwk7g376v5zh4mj/5.mp3?rlkey=ggjyk4n0e11fpny8bye1c4rob&st=yyj8qiua&dl=0",
            imgUrl: "https://i.ibb.co/ctfRJdd/ey-Jid-WNr-ZXQi-Oi-Jwcm9k-LWJ0cy10cm-Fjay-Is-Imtle-SI6-In-Byb2-Qvd-HJh-Y2sv-YXJ0d29yay9-USz-Iw-NDg0.webp",
            tags: [
                {type: "primary", label: "темп", value: "132"},
                {type: "secondary", label: "жанр", value: "rock"},
                {type: "secondary", label: "тональность", value: "minor"},
                {type: "secondary", label: "настроение", value: "грустное"}
            ]
        },
        {
            it: 5,
            audioUrl: "scl/fi/xfm2ox9xy1vvxr09q1a0c/6.mp3?rlkey=pvyqpepa7n0vrzcda55hr0qss&st=cu1xwegu&dl=0",
            imgUrl: "https://i.ibb.co/gTqPR2x/ey-Jid-WNr-ZXQi-Oi-Jwcm9k-LWJ0cy10cm-Fjay-Is-Imtle-SI6-In-Byb2-Qvd-HJh-Y2sv-YXJ0d29yay9-USz-E4-Nz-Uw.webp",
            tags: [
                {type: "primary", label: "темп", value: "133"},
                {type: "secondary", label: "жанр", value: "trap"},
                {type: "secondary", label: "тональность", value: "major"},
                {type: "secondary", label: "настроение", value: "весёлое"}
            ]
        },
        {
            it: 6,
            audioUrl: "scl/fi/va4be2azearjf5xmg3iqj/7.mp3?rlkey=52gjksdwhr532e9iibdzu3pug&st=73uu7d12&dl=0",
            imgUrl: "https://i.ibb.co/pJWFkQ3/ey-Jid-WNr-ZXQi-Oi-Jwcm9k-LWJ0cy10cm-Fjay-Is-Imtle-SI6-In-Byb2-Qvd-HJh-Y2sv-YXJ0d29yay9-USz-Iw-NDEy.webp",
            tags: [
                {type: "primary", label: "темп", value: "134"},
                {type: "secondary", label: "жанр", value: "electronic"},
                {type: "secondary", label: "тональность", value: "major"},
                {type: "secondary", label: "настроение", value: "весёлое"}
            ]
        },
        {
            it: 7,
            audioUrl: "scl/fi/gqy45ogrremnxwfbbu0fs/8.mp3?rlkey=9movgn1s49ild6cqi667rgavs&st=dykowy9l&dl=0",
            imgUrl: "https://i.ibb.co/M8S6QBW/ey-Jid-WNr-ZXQi-Oi-Jwcm9k-LWJ0cy10cm-Fjay-Is-Imtle-SI6-In-Byb2-Qvd-HJh-Y2sv-YXJ0d29yay9-USz-Iw-NTE4.webp",
            tags: [
                {type: "primary", label: "темп", value: "135"},
                {type: "secondary", label: "жанр", value: "disco"},
                {type: "secondary", label: "тональность", value: "minor"},
                {type: "secondary", label: "настроение", value: "грустное"}
            ]
        },
        {
            it: 8,
            audioUrl: "scl/fi/j5ug6tg97e4oe7dfhceds/9.mp3?rlkey=22143lgupeja1frs0ha9hqbq8&st=5i1nab61&dl=0",
            imgUrl: "https://i.ibb.co/KDH4hNm/ey-Jid-WNr-ZXQi-Oi-Jwcm9k-LWJ0cy10cm-Fjay-Is-Imtle-SI6-In-Byb2-Qvd-HJh-Y2sv-YXJ0d29yay9-USz-Iw-OTQx.webp",
            tags: [
                {type: "primary", label: "темп", value: "136"},
                {type: "secondary", label: "жанр", value: "rap"},
                {type: "secondary", label: "тональность", value: "major"},
                {type: "secondary", label: "настроение", value: "весёлое"}
            ]
        },
        {
            it: 9,
            audioUrl: "scl/fi/3kb8kl44rz3ssc8bijwao/9.mp3?rlkey=qld6p76unlm8di41og43zk304&st=6f49f4ne&dl=0",
            imgUrl: "https://i.ibb.co/HVgdLkr/ey-Jid-WNr-ZXQi-Oi-Jwcm9k-LWJ0cy10cm-Fjay-Is-Imtle-SI6-In-Byb2-Qvd-HJh-Y2sv-YXJ0d29yay9-USz-Iw-OTYx.webp",
            tags: [
                {type: "primary", label: "темп", value: "137"},
                {type: "secondary", label: "жанр", value: "hip-hop"},
                {type: "secondary", label: "тональность", value: "major"},
                {type: "secondary", label: "настроение", value: "весёлое"}
            ]
        }
    ].sort(() => Math.random() - 0.5);

    const [it, setIt] = useState<Card[]>(predefItems.map((p) => {
        return {
            index: (p.it + 1),
            id: (p.it + 1).toString(),
            name: "beat " + (p.it + 1).toString(),
            artist: "beatmaker " + (p.it + 1).toString(),
            audioUrl: downloadPrefix + p.audioUrl,
            imgUrl: p.imgUrl,
            tags: p.tags,
        };

    }));
    const [player, setPlayer] = useState<HTMLAudioElement>(null);
    const {isPlaying, setIsPlaying} = useContext(FeedIsPlayingContext);

    useEffect(() => {
        const element = document.getElementById("feedAudio") as HTMLAudioElement;
        if (element) {
            setPlayer(element);
            element.src = it[0].audioUrl;
            console.log("player set");
        } else {
            console.log("player not set");
        }
    }, []);

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
            loop={true}
            initialSlide={0}
            onRealIndexChange={async (swiper) => {
                if (player != null) {
                    console.log(swiper.realIndex);
                    player.src = it[swiper.realIndex].audioUrl;

                    await player.play().then(() => {
                        setIsPlaying(true);
                    });
                }
            }}>
            {it.map((item, i) => (
                <SwiperSlide key={i} virtualIndex={i}>
                    <BeatCard title={item.name} author={item.artist} audioUrl={item.audioUrl}
                              coverImage={item.imgUrl}
                              tags={item.tags} useShimmer={false} key={i}/>
                </SwiperSlide>
            ))}

        </Swiper>
    );
}