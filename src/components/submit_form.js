import React, { useState } from 'react';

function SubmitForm(props) {
  const [taskName, setTaskName] = useState('');

  const saveTask = (e) => {
    e.preventDefault()
    props.setList(props.list.concat(taskName))
    setTaskName('')
  }

  return (
    <form onSubmit={saveTask}>
      <input placeholder='Task name' value={taskName} onChange={(e) => setTaskName(e.target.value)}></input>
      <button type='submit'>Add</button>
    </form>
  )
}

export default SubmitForm;