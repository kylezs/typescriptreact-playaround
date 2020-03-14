import React, { useState } from 'react';
import './App.css';
import { TextField } from './TextField';
import { Counter } from './Counter';
import { ReducerExample } from './ReducerExample';

function App() {

  const [inputText, setInputText] = useState<string>("");

  const style = {
    padding: "40px",
  }
  return (
    <div style={style}>
      <h1>A Typescript React Demo</h1>
      <TextField
        text={'hello'}
        person={{ firstName: "kyle", lastName: "zsembery" }}
        ok={true}
        fn={() => "this "}
        handleInput={
          (event) => {
            setInputText(event.target.value);
          }
        } />
      <h1>{inputText}</h1>
      <h2>A highly original and creative counter</h2>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
      <div>
        <h1>Todo list</h1>
        <ReducerExample todoText={inputText} />
      </div>
    </div>
  );
}

// ctrl + SPACE while on a component will give you the possible props you can pass


// NB: It will not compile if you don't pass in the correct props

export default App;
