import React from 'react'

export default function TodoCard(props: { children: React.ReactNode, handleEditTodos: (todoIndex: number) => void,handleDeleteTodos: (todoIndex: number) => void, index: number }) {
    const { children, handleEditTodos, handleDeleteTodos, index } = props
  return (
    <li className='todoItem'>
        {children}
        <div className='actionsContainer'>
            <button onClick={() => {
                handleEditTodos(index);
            }}>
                <i className="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => {
                handleDeleteTodos(index);
            }}>
                <i className="fa-regular fa-trash-can"></i>
            </button>
        </div>
    </li>
  )
}
