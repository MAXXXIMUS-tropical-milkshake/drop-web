import React from "react";
import {styles} from "./SignupFormStyles";

type SignupFormProps = {
  form: {
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    pseudonym: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      username: string;
      email: string;
      password: string;
      first_name: string;
      last_name: string;
      pseudonym: string;
    }>
  >;
};

function SignupForm(props: SignupFormProps): React.JSX.Element {
  return (
    <div>
      <div style={styles.input}>
        <p style={styles.inputLabel}>Username</p>
        <input
          autoCapitalize="none"
          // autoCorrect={false}
          placeholder="user123"
          // placeholderTextColor="#6b7280"
          style={styles.inputControl}
          value={props.form.username}
          // onChange={(username: string) =>
          //   props.setForm({ ...props.form, username })
          // }
        />
      </div>
      <div style={styles.input}>
        <p style={styles.inputLabel}>Email address</p>
        <input
          autoCapitalize="none"
          // autoCorrect={false}
          // keyboardType="email-address"
          placeholder="qwerty@example.com"
          // placeholderTextColor="#6b7280"
          style={styles.inputControl}
          value={props.form.email}
          // onChangeText={(email: string) =>
          //   props.setForm({ ...props.form, email })
          // }
        />
      </div>
      <div style={styles.input}>
        <p style={styles.inputLabel}>First name</p>
        <input
          autoCapitalize="none"
          // autoCorrect={false}
          placeholder="Maksim"
          // placeholderTextColor="#6b7280"
          style={styles.inputControl}
          value={props.form.first_name}
          // onChangeText={(first_name: string) =>
          //   props.setForm({ ...props.form, first_name })
          // }
        />
      </div>
      <div style={styles.input}>
        <p style={styles.inputLabel}>Last name</p>
        <input
          autoCapitalize="none"
          // autoCorrect={false}
          placeholder="Ivanov"
          // placeholderTextColor="#6b7280"
          style={styles.inputControl}
          value={props.form.last_name}
          // onChangeText={(last_name: string) =>
          //   props.setForm({ ...props.form, last_name })
          // }
        />
      </div>
      <div style={styles.input}>
        <p style={styles.inputLabel}>Pseudonym</p>
        <input
          autoCapitalize="none"
          // autoCorrect={false}
          placeholder="Super_max228"
          // placeholderTextColor="#6b7280"
          style={styles.inputControl}
          value={props.form.pseudonym}
          // onChangeText={(pseudonym: string) =>
          //   props.setForm({ ...props.form, pseudonym })
          // }
        />
      </div>
      <div style={styles.input}>
        <p style={styles.inputLabel}>Password</p>
        <input
          // secureTextEntry
          placeholder="*********"
          // placeholderTextColor="#6b7280"
          style={styles.inputControl}
          value={props.form.password}
          // onChangeText={(password: string) =>
            //   props.setForm({ ...props.form, password })
            // }
        />
      </div>
    </div>
  );
}

export default SignupForm;
