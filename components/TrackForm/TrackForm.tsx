import React from "react";

type TrackFormProps = {
    form: {
        id: string
    }
    setForm: React.Dispatch<
        React.SetStateAction<{
            id: string
        }>
    >
}

function TrackForm(props: TrackFormProps): React.JSX.Element {
    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginBottom: 16,
            }}>
                <label>
                    Id
                    <input
                        type="number"
                        autoCapitalize="none"
                        // autoCorrect={false}
                        style={styles.inputControl}
                        value={props.form.id}
                        onChange={() => props.setForm({...props.form, id: "1"})}
                    />
                </label>
            </div>
        </div>
    )
}

const styles = {
    inputControl: {
        height: 44,
        backgroundColor: "#fff",
        color: "#000",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#30303d",
        fontSize: 15,
        fontWeight: "500",
    },
    inputLabel: {
        color: "#ccc",
        fontSize: 17,
        fontWeight: "600",
        marginBottom: 8,
        marginLeft: 8,
    },
};


export default TrackForm
