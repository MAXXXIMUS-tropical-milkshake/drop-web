'use client'
import React, {useState} from "react";
import {router} from "next/client";
// import FiltersModal, {FiltersModalProps} from "@/components/FiltersModal";

export default function HomeScreenHeader(/*modalProps: FiltersModalProps*/): React.JSX.Element {
    const [searchQuery, setSearchQuery] = useState("");
    const [isPressed, setIsPressed] = useState(false);
    return (
        <div style={{
            height: "7vh",
            display: 'flex',
            zIndex: '100',
            position: "fixed",
            top: 0,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
        }}>
            <div
                style={{
                    ...styles.squircleContainer,
                    ...(isPressed ? styles.squircleContainerActive : {}),
                }}
                onMouseDown={() => setIsPressed(true)}
                onMouseUp={() => setIsPressed(false)}
                onMouseLeave={() => setIsPressed(false)}
            >
                <button
                    onClick={() => {}}
                    style={styles.touchable}
                >
                    <span style={styles.buttonText}>Settings</span>
                </button>
            </div>

            <div style={{...styles.squircleContainer, ...styles.searchContainer, resize: "horizontal"}}>
                    {/*<Icon name="search" color="white" style={{*/}
                    {/*    fontSize: 20,*/}
                    {/*    padding: 0,*/}
                    {/*    margin: 10,*/}
                    {/*}}/>*/}
                    <input
                        style={styles.searchInput}
                        placeholder="search"
                        value={searchQuery}
                        onChange={(text) => setSearchQuery(text.target.value)}
                    />
            </div>

            {/* <div style={{...styles.squircleContainer}}>
               <button onClick={() => router.push("/(root)/upload")} style={styles.touchable}>
                   <span style={{...styles.buttonText, textAlign: "center"}}>upload beat</span>
               </button>
            </div> */}
        </div>
    );
}

const styles = {
    squircleContainer: {
        maxWidth: "300",
        backgroundColor: "#1a1a1a",
        border: "1px solid #54545657",
        borderRadius: 25,
        margin: "1%",
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
    },
    touchable: {
        justifyContent: "center",
        border: 0,
        backgroundColor: "transparent",
        alignItems: "center",
        color: 'white',
        width: "100%",
        height: "100%",
    },
    buttonText: {
        fontColor: "white",
        fontSize: 14,
        fontWeight: "700",
        // textAlign: "center",
    },
    searchContainer: {
        width: "25%",
    },
    searchForm: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        // paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        alignSelf: "center",
        color: "white",
        fontWeight: "700",
        padding: 0,
        margin: 10,
        minWidth: 100,
    },
    squircleContainerActive: {
        transform: "scale(0.95)",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    },
};
