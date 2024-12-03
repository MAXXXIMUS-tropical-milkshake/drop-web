'use client'
import React, {useState} from "react";
import {router} from "next/client";
// import FiltersModal, {FiltersModalProps} from "@/components/FiltersModal";

export default function HomeScreenHeader(/*modalProps: FiltersModalProps*/): React.JSX.Element {
    const [searchQuery, setSearchQuery] = useState("");
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
            backgroundColor: 'transparent',
            color: 'white',
        }}>
            <div style={{...styles.squircleContainer, flex: 1}}>
                <button onClick={() => {/*modalProps.setVisible(true)*/
                }} style={{...styles.touchable, textAlign: "center"}}>
                    <span style={{...styles.buttonText, textAlign: "center"}}>setting</span>
                </button>
            </div>

            <div style={{...styles.squircleContainer, ...styles.searchContainer, resize: "horizontal", flex: 1}}>
                    {/*<Icon name="search" color="white" style={{*/}
                    {/*    fontSize: 20,*/}
                    {/*    padding: 0,*/}
                    {/*    margin: 10,*/}
                    {/*}}/>*/}
                    <input
                        style={styles.searchInput}
                        placeholder="search"
                        // placeholderTextColor="#888"
                        value={searchQuery}
                        onChange={(text) => setSearchQuery(text)}
                    />
            </div>

            {/*<div style={{...styles.squircleContainer}}>*/}
            {/*    <button onClick={() => router.push("/(root)/upload")} style={styles.touchable}>*/}
            {/*        <span style={{...styles.buttonText, textAlign: "center"}}>upload beat</span>*/}
            {/*    </button>*/}
            {/*</div>*/}
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
};
