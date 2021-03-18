import React, {useState} from "react";

function App() {

    const [inputText, setInputText] = useState("");
    const [todoList, setTodoList] = useState([]);

    function handleChange(event) {
        setInputText(event.target.value);
    }

    function addItem() {
        setTodoList( (prevItems) => { return [...prevItems, inputText] } );
        setInputText("");
    }


    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>

            <div className="form">
                <input type="text" onChange={handleChange} placeholder="E.g. Mow the lawn" value={inputText}/>
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>

            <div>
                <ul>
                    {todoList.map( listItem => <li>{listItem}</li> )}
                </ul>
            </div>
        </div>
    );
    }

export default App;
