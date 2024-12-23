import React from "react"
// import styles from "./LoginFormStyles.css"
// import { TextInput, View, Text } from "react-native"

type LoginFormProps = {
  form: {
    email: string
    password: string
  }
  setForm: React.Dispatch<
    React.SetStateAction<{
      email: string
      password: string
    }>
  >
}

function LoginForm(props: LoginFormProps): React.JSX.Element {
  return (
    <div>
      <div style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      }}>
        <label style={{
          color: "#ccc",
          fontSize: 17,
          fontWeight: "600",
          margin: 10,
          padding: 10,
        }}>Email address:
          <input
            autoCapitalize="none"
            // autoCorrect={false}
            type="email"
            // keyboardType="email-address"
            placeholder="qwerty@example.com"

            // placeholderTextColor="#6b7280"
            style={{
              height: 44,
              backgroundColor: "#000",
              color: "#fff",
              // paddingVertical: 10,
              // paddingHorizontal: 20,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: "#30303d",
              fontSize: 15,
              fontWeight: "500",
              flex: 1,
              padding: 10,
              margin: 10,
            }}
            value={props.form.email}
          // onChange={(email: string) =>
          //   props.setForm({ ...props.form, email })
          // }
          />
        </label>
      </div>
      <div style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      }}>
        <label style={{
          color: "#ccc",
          fontSize: 17,
          fontWeight: "600",
          margin: 10,
          padding: 10,
        }}>
          Password:
          <input
            type="password"
            placeholder="*********"
            // placeholderTextColor="#6b7280"
            style={{
              height: 44,
              backgroundColor: "#000",
              color: "#fff",
              // paddingVertical: 10,
              // paddingHorizontal: 20,
              borderRadius: 12,
              borderWidth: 2,
              borderColor: "#30303d",
              fontSize: 15,
              fontWeight: "500",
              flex: 1,
              padding: 10,
              margin: 10,
            }}
            value={props.form.password}
          // onChangeText={(password: string) =>
          //   props.setForm({ ...props.form, password })
          // }
          />
        </label>
      </div>
    </div>
  )
}

export default LoginForm
