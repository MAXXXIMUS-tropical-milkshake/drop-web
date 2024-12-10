import React from "react"
// import { TouchableOpacity, View, Text, Alert } from "react-native"
import "./LoginButton.css"
// import AsyncStorage from "@react-native-async-storage/async-storage"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {SessionProvider, useSession} from "@/context/AuthContext";
// import { router } from "expo-router"
import {useRouter} from "next/navigation";

type LoginProps = {
    email: string
    password: string
}

function LoginButton(props: LoginProps): React.JSX.Element {
    const {signIn} = useSession();
    const router = useRouter();
    const onLogin = async () => {
        const data = await signIn(props);

        if (data) {
            router.push("/")
        } else {
            alert("Not success =(");
        }
    };

    return (
        <div id="container">
            <button onClick={onLogin} id="button">
                Sign in
            </button>
        </div>
    )
}

export default LoginButton

// const styles = {
//   container: {
//     marginVertical: 24,
//   },
//   button: {
//     borderWidth: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: "#8518d3",
//     borderRadius: 30,
//     flexDirection: 'row',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   buttonText: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#fff',
//   },
// }