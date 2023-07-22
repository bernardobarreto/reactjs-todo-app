import { useState } from 'react';

function TaskItem({
  item,
  index,
  list,
  setList
}) {

  const [taskIsDone, setTaskIsDone] = useState(false);

  const deleteTask = () => {
    setList(list.filter((item, itemIndex) => itemIndex != index))
  }

  return (
    <li>{item} - <button onClick={() => deleteTask()}>Done!</button> - <button onClick={() => deleteTask()}>Delete</button></li>
  )
}

export default TaskItem
