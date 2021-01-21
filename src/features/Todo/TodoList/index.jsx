import React from 'react'
import PropTypes from 'prop-types'

TodoList.propTypes = {
  todoList: PropTypes.array
}

TodoList.defautProps = {
  todoList: []
}

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
}

export default TodoList

