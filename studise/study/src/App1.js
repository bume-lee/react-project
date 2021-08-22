import React, { useState, useRef } from 'react';

export default function App() {
  const [text, setText] = useState([]);
  const inputRef = useRef();
  const handleAddText = (e) => {
    e.preventDefault();
    setText([inputRef.current.value, ...text]);
  };

  return (
    <div>
      <form onSubmit={handleAddText}>
        <input ref={inputRef} />
        <button>버튼</button>
      </form>
      <ul>
        {text.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
