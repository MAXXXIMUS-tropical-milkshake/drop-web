import React from "react";
import {AuthRepository} from "@/repositories/AuthRepository";
import {useUserContext} from "@/context/UserContext";
import {router} from "next/client";

type SignupProps = {
    username: string;
    email: {
        email: string;
        code: string;
    };
    password: string;
    first_name: string;
    last_name: string;
    pseudonym: string;
};

function SignupButton(props: SignupProps): React.JSX.Element {
    const {setUser} = useUserContext();

    const onSignup = async () => {
        const data = await AuthRepository.sendEmail({
            email: props.email.email,
            is_verified: false,
        });

        if (data.success) {
            console.log(props);
            setUser(props);
            router.push({
                pathname: "/(auth)/verify",
                // params: { email: props.email.email },
            });
        } else {
            alert(data.data);
        }
    };

    return (
        <div style={{margin: 24,}}>
            <button onClick={onSignup}>
                <div style={{...styles.button, flexDirection: "row",}}>
                    <p style={{...styles.buttonText, textAlign: "center",}}>Sign up</p>
                </div>
            </button>
        </div>
    );
}

export default SignupButton;

const styles = {
    button: {
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#8518d3",
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#fff",
    },
};
