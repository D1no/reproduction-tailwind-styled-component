import React from 'react';
import logo from './logo.svg';
import './App.css';
import tw from "tailwind-styled-components";

const HeaderText = tw.h1`
  text-3xl
  font-bold
  underline
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderText>Hello World!</HeaderText>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
