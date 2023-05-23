import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

const LogoutButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログアウト</button>
);

const LoginButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>ログイン</button>
);

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedInState] = useState(false);
  
  const toggleIsLoggedIn = () => {
    setIsLoggedInState(!isLoggedIn);
  }
  
  if (isLoggedIn) {
    return <LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />;
  }
  
  return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn}></LoginButton>;
}

// ##################################################################################

const InputText = () => {
  const [inputTextValue, setInputTextValue] = useState("")
  
  const [text, setText] = useState("JavaScript")
  
  const handleChange = (e) => setInputTextValue(e.target.value);
  
  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue("");
  }
  
  return (
    <div className="App">
      <h1>I love {text}!!</h1>
      <input type="text" value={inputTextValue} onChange={handleChange} />
      
      <input type="button" value="入力" onClick={handleClick} />
    </div>
  )
}

// ##################################################################################
const values = [
  { id: 1, item: "HTML"},
  { id: 2, item: "CSS"},
  { id: 3, item: "JavaScript"},
]

const SelectedItems = values.map((value) => {
  return (
    <option value={value.item} key={value.id}>
      {value.item}
    </option>
  )
});

const InputSelectBox = () => {
  const [selectedValue, setSelectedValue] = useState(values[0]['item'])
  
  const handleChange = (e) => {
    setSelectedValue(e.target.value)
  };
  
  return (
    <div className="App">
      <p>
        現在選択されている値：
        <b>{selectedValue}</b>
      </p>
      
      <select value={selectedValue} onChange={handleChange}>
        { SelectedItems }
      </select>
    </div>
  )
}

export default function App() {
  return <InputSelectBox />;
};
