import { useState, useReducer } from "react";

const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      Light is {isOn ? "on" : "off"}.
      <button onClick={() => setIsOn(!isOn)}>Toggle</button>
    </>
  );
};

export default LightSwitch;
