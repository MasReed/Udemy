import React, { useState } from 'react';
import ToDoItem from './ToDoItem.jsx';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText('');
  }

  function deleteItem(id) {
      setItems( prevItems => {
          return prevItems.filter(
              (item, itemIndex) => {
                  return itemIndex !== id;
              }
          );
      });
  }

  return (
    <div className='container'>
      <div className='heading'>
        <h1>To-Do List</h1>
      </div>
      <div className='form'>
        <input onChange={handleChange} type='text' value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map( (item, itemIndex) => (
            <ToDoItem
                id={itemIndex}
                text={item}
                onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
