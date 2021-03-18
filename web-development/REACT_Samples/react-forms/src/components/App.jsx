import React, {useState} from "react";

function App() {

  const [inputName, setInputName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function handleChange(event) {
      setInputName(event.target.value);
  }

  function handleSubmit(event) {
      setHeadingText(inputName);
      event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello, {headingText}</h1>
      <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="What's your name?"
            value={inputName}
          />
          <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
