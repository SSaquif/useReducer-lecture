import { useState, useReducer } from "react";

const getStatusFromServer = () => {
  return Promise.resolve().then(() => {
    const errorChance = Math.floor(Math.random() * 100);
    console.log(errorChance);
    if (errorChance < 50) {
      return "idle";
    } else {
      return Promise.reject(new Error("error"));
    }
  });
};

const FormWithStatus = () => {
  const [status, setStatus] = useState("idle");

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault();

        setStatus("loading");

        getStatusFromServer()
          .then(() => {
            setStatus("idle");
          })
          .catch(() => {
            setStatus("error");
          });
      }}
    >
      Status is: {status}
      <button>Submit</button>
    </form>
  );
};

export default FormWithStatus;
