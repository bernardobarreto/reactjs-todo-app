import logo from './logo.svg';
import './App.css';
import SubmitForm from './components/submit_form';
import List from './components/list';
import { useState, useEffect } from 'react';

function App() {
  const keyOnLS = 'todoList';
  const getListFromLS = () => {
    return JSON.parse(localStorage.getItem(keyOnLS)) || [];
  }
  const setListToLS = () => {
    localStorage.setItem(keyOnLS, JSON.stringify(list));
  }

  const [list, setList] = useState(getListFromLS);

  useEffect(setListToLS);

  return (
    <div className="App">
      <SubmitForm list={list} setList={setList} />
      <List list={list} setList={setList}></List>
    </div>
  );
}

export default App;
