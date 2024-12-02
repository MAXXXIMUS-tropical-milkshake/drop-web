'use client'
import React, {useState} from "react";
import LoginForm from "@/components/LoginForm/LoginForm";
import LoginButton from "@/components/LoginButton/LoginButton";
import logo from "@/public/droplogo.png";
import {useRouter} from "next/navigation";
import Image from "next/image";

export default function Page(): React.JSX.Element {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })
    const router = useRouter();
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <Image
                    src={logo}
                    style={styles.headerImage}
                    alt="Logo"
                />

                Sign in to Drop

            </div>

            <div style={styles.form}>
                <LoginForm form={form} setForm={setForm}/>
                <LoginButton
                    email={form.email}
                    password={form.password}
                />
            </div>
            <button
                style={styles.signUpButton}
                onClick={() => router.push("/signup")}
            >
                Don`t have an account? Sign up
            </button>
        </div>
    )
}

const styles = {
    container: {
        height: "100%",
        width: "100%",
        padding: 24,
        flex: 1,
        backgroundColor: "#0a0a0a",
    },
    header: {},
    headerImage: {
        width: 80,
        height: 80,
        alignSelf: "center",
        borderRadius: 20,
        marginBottom: 36,
    },
    title: {
        fontSize: 33,
        fontWeight: "900",
        color: "#e8ecf4",
        marginBottom: 6,
        textAlign: "center",
    },
    titleDrop: {
        fontSize: 33,
        fontWeight: "900",
        color: "#8518d3",
        marginBottom: 6,
        textAlign: "center",
    },
    form: {
        flex: 1,
        marginBottom: 24,
    },
    signUpButton: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        right: 0,
        bottom: 0,
        left: 0,
        flex: 1,
    },
    signUpText: {
        fontWeight: "400",
        fontSize: 15,
        color: "#fff",
    },
};