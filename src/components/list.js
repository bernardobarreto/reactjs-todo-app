import React from 'react';

function List({
  list,
  setList
}) {
  return (
    <ul>
      { list.map((item, index) => (
        <li key={index}>{item}</li>
      )) }
    </ul>
  )
}

export default List;