import TaskItem from './task_item.js'

function List({
  list,
  setList
}) {
  return (
    <ul>
      { list.map((item, index) => (
        <TaskItem item={item} key={index} index={index} list={list} setList={setList} />
      )) }
    </ul>
  )
}

export default List;
