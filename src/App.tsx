import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoValue, setTodoValue] = useState<string>('');

  function persistData(newList: string[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo:string): void {
    const newTodoList:string[] = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  function handleDeleteTodos(todoIndex:number): void {
    const newTodoList:string[] = todos.filter((_, index) => {
      return index !== todoIndex;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  };

  function handleEditTodos(todoIndex:number): void {
    const valueToBeEdited = todos[todoIndex];
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(todoIndex);
  };

  useEffect(() => {
    if(!localStorage) {
      return;
    } 

    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }
    
    const parsedTodos = JSON.parse(localTodos).todos;
    if (Array.isArray(parsedTodos)) {
      setTodos(parsedTodos);
    }

    console.error('Error: Parsed todos is not an array');
  }, []);

  return (
    <>
      <>
        <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
        <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos} />
      </>
    </>
  )
}

export default App
