import React, {useState} from "react";

function App() {

    setInterval(updateTime, 1000);

    var currentTime = new Date().toLocaleTimeString();

    const [count, setCount] = useState(0);
    const [time, setTime] = useState(currentTime);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    function updateTime() {
        var newCurrentTime = new Date().toLocaleTimeString();
        setTime(newCurrentTime);
    }


  return (
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <hr />
        <h1>{time}</h1>
        <button onClick={updateTime}>Get time</button>
      </div>
  );
}

export default App;
