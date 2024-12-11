'use client'
import {TopMenu} from "@/components/FeedHeader/TopMenu";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" style={{height: "100vh", width: "100vw", overflow: "hidden"}}>
        <head content="width=device-width, maximum-scale=1.0">

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
        <div
            style={{
                position: "relative",
                height: "100%",
                width: "100%",
                overflow: "hidden",
            }}>
            {TopMenu({})}
            {children}
        </div>
        </body>
        </html>
    );
}
