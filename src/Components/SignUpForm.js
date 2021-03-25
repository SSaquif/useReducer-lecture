// Exercise 5
import { useState, useReducer } from "react";
// import sendDataToServer from "./some-madeup-place";
import FormField from "./FormField";

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const sendDataToServer = (ev) => {
    ev.preventDefault();
    console.log("Submitting");
  };

  return (
    <form onSubmit={sendDataToServer}>
      <FormField
        label="First Name"
        value={firstName}
        onChange={(ev) => setFirstName(ev.target.value)}
      />
      <FormField
        label="Last Name"
        value={lastName}
        onChange={(ev) => setLastName(ev.target.value)}
      />
      <FormField
        label="Email"
        value={email}
        onChange={(ev) => setEmail(ev.target.value)}
      />

      <button>Submit</button>
      <button
        onClick={(ev) => {
          ev.preventDefault();

          setFirstName("");
          setLastName("");
          setEmail("");
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default SignUpForm;
