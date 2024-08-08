interface TodoInputProps {
    todoValue: string;
    setTodoValue: (value: string) => void;
    handleAddTodos: (newTodo: string) => void;
}

export default function TodoInput({ todoValue, setTodoValue, handleAddTodos }: TodoInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoValue(e.target.value);
    };

    const handleAdd = () => {
        handleAddTodos(todoValue);
        setTodoValue('');
    };

    return (
        <header>
            <input 
                value={todoValue} 
                onChange={handleChange} 
                placeholder="Enter todo..." />
            <button onClick={handleAdd} >Add</button>
        </header>
    );
}