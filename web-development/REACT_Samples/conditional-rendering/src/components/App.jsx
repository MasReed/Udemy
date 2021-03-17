import React from 'react';
import Form from './Form.jsx';
import Input from './Input.jsx';

var userIsRegistered = true;

const currentTime = new Date(2021, 11, 1, 18).getHours();
console.log(currentTime);

function App() {
  return (
    <div className='container'>
        <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
