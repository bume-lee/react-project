import React, { useState } from "react";

export default function App() {
  const [inputs, setInputs] = useState({ username: "", age: "" });
  const { username, age } = inputs;

  function handleEvent(e) {
    setInputs("");
  }

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          const { name, value } = e.target;

          setInputs({ username: value });
        }}
      />
      <button onClick={handleEvent}>테스트</button>
      <span>{username}</span>
      <input
        type="text"
        name="test"
        onChange={(e) => {
          const { name, value } = e.target;

          setInputs({ username: value });
        }}
      />
    </div>
  );
}
