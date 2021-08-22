import React, { useRef, useState } from 'react';

export default function App() {
  const [inputs, setInputs] = useState({ username: '', age: 0 });
  const { username, age } = inputs;

  const inputRef = useRef();

  const handleEvent = (e) => {
    // const {name,value} = {"username",}
    console.log(inputRef.current.value);
    setInputs({
      ...inputs,
      username: inputRef.current.value,
    });
  };

  return (
    <div style={{ width: '240px', border: '1px solid' }}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          const { name, value } = e.target;
          setInputs({
            ...inputs,
            [name]: value,
          });
        }}
      />
      <span>{username}</span>
      <input type="text" name="test" ref={inputRef} />
      <button onClick={handleEvent}>테스트</button>
    </div>
  );
}
