import React from "react";
import {router} from "next/client";

export default function BeatUploadScreenHeader(): React.JSX.Element {
    return <div style={{height: 200}}>
        <button style={{...styles.button, flexDirection: 'column',}} onClick={() => router.back()}>
            <p style={styles.buttonText}>Back</p>
        </button>

    </div>;
}
const styles = {
    button: {
        margin: 10,
        backgroundColor: 'grey',
    },
    buttonText: {
        margin: 10,
        alignSelf: 'center',

    }
};