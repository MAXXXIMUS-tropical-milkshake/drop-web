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
            position: "absolute",
            top: 0,
            width: "100%",
            left: 0,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: 'white',
            color: 'white',
        }}>
            <div
                style={styles.squircleContainer}
                // squircleParams={squircleFormParams}
            >
                <button onClick={() => {/*modalProps.setVisible(true)*/
                }} style={styles.touchable}>
                    {/*<Text style={styles.buttonText}>*/}setting{/*</Text>*/}
                </button>
            </div>

            <div
                style={{...styles.squircleContainer, ...styles.searchContainer}}
                // squircleParams={squircleFormParams}
            >
                <div style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: "100%",
                }}>
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
            </div>

            <div
                style={styles.squircleContainer}
                // squircleParams={squircleFormParams}
            >
                <button onClick={() => router.push("/(root)/upload")} style={styles.touchable}>
                    upload beat
                </button>
            </div>

            {/*<FiltersModal visible={modalProps.visible} setVisible={modalProps.setVisible}/>*/}
        </div>
    );
}

const styles = {
    headerContainer: {
        height: "7vh",
        flexDirection: "row",
        // backgroundColor: 'black',
        justifyContent: "center",
        alignItems: "center",
        // paddingHorizontal: 20,
    },
    squircleContainer: {
        width: "12%",
        margin: "1%",
        height: "60%",
        justifyContent: "center",
        alignItems: "center",
    },
    touchable: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        textAlign: "center",
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
