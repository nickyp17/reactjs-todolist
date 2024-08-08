import TodoCard from './TodoCard'

export default function TodoList(props: { todos: string[], handleEditTodos: (todoIndex: number) => void,handleDeleteTodos: (todoIndex: number) => void }) {
    const { todos } = props
    return (
        <ul className='main'>
            {todos.map((todo: string, todoIndex: number) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex} >
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
