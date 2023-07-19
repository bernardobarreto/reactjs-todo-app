import logo from './logo.svg';
import './App.css';
import SubmitForm from './components/submit_form'
import { useState, useEffect } from 'react'

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <SubmitForm list={list} setList={setList} />
      <ul>
      { list.map((item, index) => (
        <li key={index}>{item}</li>
      )) }
    </ul>
    </div>
  );
}

export default App;
