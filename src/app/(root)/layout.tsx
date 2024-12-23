'use client'
import {TopMenu} from "@/components/FeedHeader/TopMenu";
import {RibbonControls} from "@/components/FeedControls/RibbonControls";
import React, {useEffect} from "react";
import {SessionProvider} from "@/context/AuthContext"; import {FeedIsPlayingProvider} from "@/context/FeedIsPlayingContext";
import {TelegramProvider, useTelegram} from "@/context/telegram";
import { FiltersView } from "@/components/Filters/FiltersView";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        // @ts-ignore
        window.Telegram.WebApp.ready();
        // @ts-ignore
        window.Telegram.WebApp.expand();
    }, []);
    return (
        <html lang="en" style={{height: "100vh", width: "100vw", overflow: "hidden"}}>
        <head content="width=device-width, maximum-scale=1.0">
            <script src="https://telegram.org/js/telegram-web-app.js"/>

            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,700;1,700&display=swap"
                  rel="stylesheet"/>

            <link rel="preconnect" as={"image"}
                  href="https://dl.dropboxusercontent.com/scl/fi/bnfty0eq8z5ce84zpogzl/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMjA2MDQyNC9pbWFnZS9KbHlJaEtWcEdETXQvYXJ0d29ya3M4azk4enU4am9ieGRzOHNyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0.webp?rlkey=1cfrk42oby6u6ecdyvoetscqp&st=tmm3fj7y&dl=0"/>
            <link rel="preconnect" as={"image"}
                  href="https://dl.dropboxusercontent.com/scl/fi/fldpy4nhivwkya7hzbvcx/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzEyNjIyMjk2L2hvdGZsYXNoLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0.webp?rlkey=oez44un1kx6yveui1wwk6vtws&st=fw6pzsvs&dl=0"/>
            <link rel="preconnect" as={"image"}
                  href="https://dl.dropboxusercontent.com/scl/fi/r94dtuy76ionxq3qfwueh/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzExMzU2MTczL2xhYnlyaW50aC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjoyNDAsImhlaWdodCI6MjQwfSwidG9Gb3JtYXQiOiJ3ZWJwIn19.webp?rlkey=99rdkbpkd53w1us557ca224ye&st=us8lx816&dl=0"/>
            <link rel="preconnect" as={"image"}
                  href="https://dl.dropboxusercontent.com/scl/fi/hobjn008ih0knl4qhomde/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzE2MjIxMjYwL25vbmUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH0sInRvRm9ybWF0Ijoid2VicCJ9fQ.webp?rlkey=er5p0r3kl8076dc6gjpg1fq4n&st=rzbsegjd&dl=0"/>
            <link rel="preconnect" as={"image"}
                  href="https://dl.dropboxusercontent.com/scl/fi/peghma6ypfntrfllgefex/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzIwNDg0ODA5L2FpbHV2LnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0.webp?rlkey=g9n02zegq8gdzhevzs146yq5u&st=ujwxg6iw&dl=0"/>
            <link rel="preconnect" as={"image"}
                  href="https://dl.dropboxusercontent.com/scl/fi/zda81qqntvv5zyzxh4v5q/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzE4NzUwNzgzL3JhcC1ib3ktc3F1YXJlLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0.webp?rlkey=sf4covojbj86iuscmfoif8ed4&st=nix5vvhn&dl=0"/>
            <link rel="preconnect" as={"image"}
                  href="https://dl.dropboxusercontent.com/scl/fi/u2v0kd1vzbq8zn7zt523a/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzIwNDEyOTY2L2Jlei10eXR1LXUucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH0sInRvRm9ybWF0Ijoid2VicCJ9fQ.webp?rlkey=vrrt290cgbdzk00kdzca0n208&st=1gaqb150&dl=0"/>
            <link rel="preconnect" as={"image"}
                  href="https://dl.dropboxusercontent.com/scl/fi/z3zwu14uytm9cuw1n5ncr/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzIwNTE4MzE3L2JsdWUtaGFyZHN0b25lLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0.webp?rlkey=2l6bl8f9b17ht5439xlk4pq69&st=gc7a8f8k&dl=0"/>
            <link rel="preconnect" as={"image"}
                  href="https://dl.dropboxusercontent.com/scl/fi/bhezoplbu1pvrufvxhcvz/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzIwOTQxMzMxL2JlYXRzdGFycy10aHVtYm5haWwuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH0sInRvRm9ybWF0Ijoid2VicCJ9fQ.webp?rlkey=w4fuqwr9i18xg4calxcxq2rxv&st=3sj2x53s&dl=0"/>
            <link rel="preconnect" as={"image"}
                  href="https://dl.dropboxusercontent.com/scl/fi/1wc5nx6vrx1x9uupzg7fs/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzIwOTYxNTI4L3VudGl0bGVkLWRlc2lnbi0xLS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjoyNDAsImhlaWdodCI6MjQwfSwidG9Gb3JtYXQiOiJ3ZWJwIn19.webp?rlkey=4v97uoluo9qocp1a4wjkzy9i5&st=9t44vxju&dl=0"/>

        </head>
        <body style={{
            scrollbarWidth: "none",
            height: "100vh",
            width: "100vw",
            margin: 0,
            overflow: "hidden",
            backgroundColor: '#5c5959',
            backgroundImage: "radial-gradient(farthest-corner at 30% 60%, rgba(63,94,251,1) 0%, rgba(177,12,186,0.7959558823529411) 10%, rgba(207,47,127,1) 20%, rgba(0,0,0,1) 50%",
        }}>
              <FeedIsPlayingProvider>
                  <SessionProvider>
                      {TopMenu({})}
                      <audio hidden={true} id={"feedAudio"} preload={"auto"} loop={true}/>
                      {children}
                      <RibbonControls/>
                  </SessionProvider>
              </FeedIsPlayingProvider>) :
          (<div style={{color: 'white'}}>Make sure web app is opened from telegram client</div>)
        </body>
        </html>
    );
}

const RootWithNoTgProvider = ({children}) => {
    const {user, webApp} = useTelegram();
    console.log("user " + user);
    return (user == undefined ? (
                <FeedIsPlayingProvider>
                    <SessionProvider>
                        {TopMenu({})}
                        <audio hidden={true} id={"feedAudio"} preload={"auto"} loop={true}/>
                        {children}
                        <RibbonControls/>
                    </SessionProvider>
                </FeedIsPlayingProvider>) :
            (<div style={{color: 'white'}}>Make sure web app is opened from telegram client</div>)
    );
};
