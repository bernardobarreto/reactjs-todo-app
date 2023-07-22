import logo from './logo.svg';
import './App.css';
import SubmitForm from './components/submit_form';
import List from './components/list';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <SubmitForm list={list} setList={setList} />
      <List list={list} setList={setList}></List>
    </div>
  );
}

export default App;
