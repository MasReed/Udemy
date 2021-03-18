import React, { useState } from 'react';
import ToDoItem from './ToDoItem.jsx';
import InputArea from './InputArea.jsx';

function App() {

  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
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

      {/* Add item called from child InputArea Component */}
      <InputArea
            onAdd={addItem}
      />

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
